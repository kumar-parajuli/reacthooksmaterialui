// import React from "react";
import { Box } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

const MuiCheckBox = () => {
  const [acceptTnc, setAcceptTnc] = useState(false);
  console.log({ acceptTnc });

  const handleChange = (event) => {
    setAcceptTnc(event.target.checked);
  };

  // const handleChange = (event) => {

  //         setAcceptTnc(event.target.checked)
  //     }

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="i acccept the way"
          control={<Checkbox checked={acceptTnc} />}
          onChange={handleChange}
        />
      </Box>
    </Box>
  );
};

export default MuiCheckBox;
