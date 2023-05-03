import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useState } from "react";

export default function MuiSwitch() {
  const [checked, setChecked] = useState({
    dark: true,
    labal: false,
    mood: true,
  });
  // for multiple button//

  const handleChange = (event) => {
    setChecked({ ...checked, [event.target.name]: event.target.checked });

    //only for single button//
    console.log({ checked });
    // const handleChange = (event) => {
    //   setChecked(event.target.checked);
    // };
  }
    return (
      <FormGroup>
        <FormControlLabel
          name="dark"
          control={<Switch checked={checked.dark} onChange={handleChange} />}
          label="Dark"
        />

        <FormControlLabel
          name="labal"
          control={<Switch checked={checked.labal} onChange={handleChange} />}
          label="Labal"
        />
        <FormControlLabel
          name="mood"
          control={<Switch checked={checked.mood} onChange={handleChange} />}
          label="Mood"
        />
      </FormGroup>
    );
  };

