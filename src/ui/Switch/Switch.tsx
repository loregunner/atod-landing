import React, { useState } from "react";
import {
  FormLabel,
  Stack,
  Typography,
  Switch as MuiSwitch,
} from "@mui/material";
import { AntSwitch } from "./muiTheme";

interface ISwitch {
  label: string;
}

const Switch = ({ label }: ISwitch) => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Stack
      direction="row"
      spacing={1}
      data-testid="stack-test"
      alignItems="center"
      justifyContent="space-between">
      <Stack direction="row" spacing={1} alignItems="center">
        <AntSwitch
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "switch" }}
        />
        <FormLabel>{label}</FormLabel>
      </Stack>
    </Stack>
  );
};

export default Switch;
