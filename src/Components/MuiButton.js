import React from "react";
import {
  Stack,
  ToggleButtonGroup,
  ToogleButton,
  IconButton,
} from "@material-ui/core";

const MuiButton = () => {
  return (
    <Stack>
      <ToggleButtonGroup>
        <ToogleButton>
          <FormatBoldIcon />
        </ToogleButton>
      </ToggleButtonGroup>
    </Stack>
  );
};

export default MuiButton;
