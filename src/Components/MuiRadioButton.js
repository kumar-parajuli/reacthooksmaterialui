import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { useState } from "react";

const MuiRadioButton = () => {
  const [value, setValue] = useState("");
  console.log({ value });

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };

  return (
    <Box>
      <FormControl>
        <FormLabel id="job-experience-group-label">yrs of experience</FormLabel>
        <RadioGroup
          name="job-experience-group"
          arial-aria-labelledby="job-experience-group-label"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="0-2" control={<Radio />} label="0-2" />
          <FormControlLabel value="4-6" control={<Radio />} label="4-6" />
          <FormControlLabel value="6-8" control={<Radio />} label="6-8" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default MuiRadioButton;
