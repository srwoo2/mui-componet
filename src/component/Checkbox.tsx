import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function Checkboxes() {
  return (
    <div>
      <div role="group" aria-labelledby="sandwich-group">
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="label-1"
        />
        <FormControlLabel control={<Checkbox />} label="label-2" />
        <FormControlLabel control={<Checkbox disabled />} label="label-3" />
        <FormControlLabel
          control={<Checkbox disabled checked />}
          label="label-4"
        />
      </div>
    </div>
  );
}
