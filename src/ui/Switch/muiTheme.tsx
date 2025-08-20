import { Switch } from "@mui/material";
import { styled } from "@mui/material/styles";

export const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 53,
  height: 29,
  padding: 0,
  display: "flex",
  borderRadius: 29 / 2,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(24px)",
      "& + .MuiSwitch-track": {
        backgroundColor: "#000000",
        opacity: 1,
      },
      "& .MuiSwitch-thumb::before": {
        content: '"✔️"',
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 25,
    height: 25,
    borderRadius: "50%",
    backgroundColor: "rgba(255,255,255,0.8)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 14,
    color: "#000",
    position: "relative",
    "&::before": {
      content: '"✖"',
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
    transition: theme.transitions.create(["transform"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 29 / 2,
    opacity: 1,
    backgroundColor: "#6B6B6B",
    boxSizing: "border-box",
  },
}));
