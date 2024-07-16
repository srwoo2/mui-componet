import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import DateTimePickerValue from "./DateTimePickerValue";
import AlertDialog from "./AlertDialog";
import PopupModal from "./PopupModal";
import Buttons from "./Buttons";
import TextField from "./TextField";
import Select from "./Select";
import Checkbox from "./Checkbox";
import Backdrop from "./Backdrop";
import Tabs from "./Tabs";

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <DateTimePickerValue />
      <AlertDialog />
      <PopupModal />
      <Buttons />
      <TextField />
      <Select />
      <Checkbox />
      <Backdrop />s
      <Tabs />
    </StyledEngineProvider>
  </React.StrictMode>
);
