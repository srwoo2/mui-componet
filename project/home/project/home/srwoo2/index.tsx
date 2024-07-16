import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import DateTimePickerValue from "./DateTimePickerValue";
import AlertDialog from "./AlertDialog";

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <DateTimePickerValue />
      <AlertDialog />
    </StyledEngineProvider>
  </React.StrictMode>
);
