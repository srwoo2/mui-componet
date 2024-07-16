import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Typography from "@mui/joy/Typography";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Checkboxes() {
  return (
    <div>
      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} />
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked />

      <Typography id="sandwich-group" level="body-sm" fontWeight="lg" mb={1}>
        Sandwich Dressings
      </Typography>
      <div role="group" aria-labelledby="sandwich-group">
        <List size="sm">
          <ListItem>
            <Checkbox label="Lettuce" defaultChecked />
          </ListItem>
          <ListItem>
            <Checkbox label="Tomato" />
          </ListItem>
          <ListItem>
            <Checkbox label="Mustard" />
          </ListItem>
        </List>
      </div>
    </div>
  );
}
