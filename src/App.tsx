import { useState } from "react";
import { Box, Grid, Paper } from "@mui/material";
import { InstanceForm } from "./components/InstanceForm";
import { MethodButtons } from "./components/MethodButtons";
import { Output } from "./components/Output";

function App() {
  const [id, setId] = useState("");
  const [token, setToken] = useState("");
  const [output, setOutput] = useState("");

  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Paper
            sx={{
              padding: 2,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <InstanceForm
              id={id}
              token={token}
              setId={setId}
              setToken={setToken}
            />
            <MethodButtons id={id} token={token} setOutput={setOutput} />
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <Output value={output} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
