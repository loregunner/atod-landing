import { FormLabel, Stack } from "@mui/material";
import { AntSwitch } from "./muiTheme";

interface ISwitch {
  label: string;
  name?: string;
  checked: boolean;
  onChange?: (e: any) => void;
}

const Switch = ({ label, checked, onChange }: ISwitch) => {
  return (
    <Stack
      direction="row"
      spacing={1}
      data-testid="stack-test"
      alignItems="center"
      justifyContent="space-between"
    >
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
      >
        <AntSwitch
          checked={checked}
          onChange={onChange}
          inputProps={{ "aria-label": "switch" }}
        />
        <FormLabel>{label}</FormLabel>
      </Stack>
    </Stack>
  );
};

export default Switch;
