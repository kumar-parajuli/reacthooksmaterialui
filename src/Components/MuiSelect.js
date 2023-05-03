import React from "react";
import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";

const MuiSelect = () => {
  const [country, setCountry] = useState("");

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

//      const handleChange = (event) => {
//   setCountry(event.target.value as String)
//      }

  return (
    <Box width="250px" mt={"20px"}>
      <TextField
        label="select country"
        select
        value={country}
        onChange={handleChange}
        fullWidth
      >
        <MenuItem value="in">India</MenuItem>
        <MenuItem value="Us">USA</MenuItem>
        <MenuItem value="Np">Nepal</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
