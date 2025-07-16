import { Paper, Typography, Box } from "@mui/material";

export const Output = ({ value }: { value: string }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      height: "calc(100vh - 95px)",
      paddingTop: 1,
      paddingBottom: 1,
      paddingLeft: 1,
    }}
  >
    <Typography variant="h6" gutterBottom color="black" sx={{ mb: 2, ml: 1 }}>
      Ответ:
    </Typography>

    <Paper
      elevation={3}
      sx={{
        padding: 2,
        flexGrow: 1,
        overflow: "auto",
        borderRadius: 2,
        backgroundColor: "#f9f9f9",
      }}
    >
      <pre
        style={{ whiteSpace: "pre-wrap", wordBreak: "break-word", margin: 0 }}
      >
        {value}
      </pre>
    </Paper>
  </Box>
);
