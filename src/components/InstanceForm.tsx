import { TextField } from "@mui/material";

type Props = {
  id: string;
  token: string;
  setId: (v: string) => void;
  setToken: (v: string) => void;
};

export const InstanceForm = ({ id, token, setId, setToken }: Props) => (
  <>
    <TextField
      label="idInstance"
      value={id}
      onChange={(e) => setId(e.target.value)}
      fullWidth
    />
    <TextField
      label="ApiTokenInstance"
      value={token}
      onChange={(e) => setToken(e.target.value)}
      fullWidth
    />
  </>
);
