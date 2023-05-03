import React from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";

const MuiTextField = () => {
  const [value, setValue] = useState([]);
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />

        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack>
        <TextField label="Form Input" helperText="do not share" />
      </Stack>
      <Stack>
        <TextField
          label="Form Input"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          halperText={!value ? "Required" : "do not share your password"}
        />
        <TextField
          label="password"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          halperText={!value ? "Required" : "do not share your password"}
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            startAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
