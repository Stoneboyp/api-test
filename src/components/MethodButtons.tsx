import { Button, TextField, Box } from "@mui/material";
import { callGreenApi } from "../api/greenApi";
import { useState } from "react";

type Props = {
  id: string;
  token: string;
  setOutput: (v: string) => void;
};

export const MethodButtons = ({ id, token, setOutput }: Props) => {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [filePhone, setFilePhone] = useState("");
  const [fileUrl, setFileUrl] = useState("");

  const [phoneError, setPhoneError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [filePhoneError, setFilePhoneError] = useState("");
  const [fileUrlError, setFileUrlError] = useState("");

  const isValidPhone = (phone: string) => /^77\d{9}$/.test(phone);
  const isValidUrl = (url: string) => {
    try {
      const u = new URL(url);
      return u.protocol === "http:" || u.protocol === "https:";
    } catch {
      return false;
    }
  };

  const run = async (method: string, body?: any) => {
    setPhoneError("");
    setMessageError("");
    setFilePhoneError("");
    setFileUrlError("");
    setOutput("");

    if (!id || !token) {
      setOutput("❌ Укажите idInstance и apiTokenInstance.");
      return;
    }

    // Валидация для sendMessage
    if (method === "sendMessage") {
      let valid = true;
      if (!isValidPhone(phone)) {
        setPhoneError("Формат: 77XXXXXXXXX");
        valid = false;
      }
      if (!message.trim()) {
        setMessageError("Сообщение не может быть пустым");
        valid = false;
      }
      if (!valid) {
        setOutput("❌ Ошибка в данных для sendMessage.");
        return;
      }
    }

    // Валидация для sendFileByUrl
    if (method === "sendFileByUrl") {
      let valid = true;
      if (!isValidPhone(filePhone)) {
        setFilePhoneError("Формат: 77XXXXXXXXX");
        valid = false;
      }
      if (!isValidUrl(fileUrl)) {
        setFileUrlError("Некорректный URL (http или https)");
        valid = false;
      }
      if (!valid) {
        setOutput("❌ Ошибка в данных для sendFileByUrl.");
        return;
      }
    }

    try {
      const res = await callGreenApi(id, token, method, body);
      setOutput(JSON.stringify(res, null, 2));
    } catch (e: any) {
      setOutput("❌ Ошибка запроса: " + e.message);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxHeight: "calc(100vh - 32px)",
        overflowY: "auto",
        paddingTop: 1,
        paddingBottom: 1,
        paddingRight: 1,
      }}
    >
      <Button
        variant="contained"
        sx={{ height: 48, mt: 4, mb: 2, textTransform: "none" }}
        onClick={() => run("getSettings")}
      >
        getSettings
      </Button>

      <Button
        variant="outlined"
        sx={{ height: 48, mb: 4, textTransform: "none" }}
        onClick={() => run("getStateInstance")}
      >
        getStateInstance
      </Button>

      <TextField
        label="Телефон (7700...)"
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
          setPhoneError("");
        }}
        fullWidth
        error={!!phoneError}
        helperText={phoneError}
      />

      <TextField
        label="Сообщение"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
          setMessageError("");
        }}
        fullWidth
        multiline
        rows={3}
        error={!!messageError}
        helperText={messageError}
      />

      <Button
        variant="contained"
        sx={{ height: 48, mt: 4, textTransform: "none" }}
        onClick={() =>
          run("sendMessage", {
            chatId: `${phone}@c.us`,
            message,
          })
        }
      >
        sendMessage
      </Button>

      <TextField
        label="Телефон для файла"
        value={filePhone}
        onChange={(e) => {
          setFilePhone(e.target.value);
          setFilePhoneError("");
        }}
        fullWidth
        error={!!filePhoneError}
        helperText={filePhoneError}
      />

      <TextField
        label="URL файла"
        value={fileUrl}
        onChange={(e) => {
          setFileUrl(e.target.value);
          setFileUrlError("");
        }}
        fullWidth
        error={!!fileUrlError}
        helperText={fileUrlError}
      />

      <Button
        variant="contained"
        sx={{ height: 48, textTransform: "none" }}
        onClick={() =>
          run("sendFileByUrl", {
            chatId: `${filePhone}@c.us`,
            urlFile: fileUrl,
            fileName: "test.jpg",
          })
        }
      >
        sendFileByUrl
      </Button>
    </Box>
  );
};
