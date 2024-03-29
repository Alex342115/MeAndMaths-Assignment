import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect(props) {
  const { studID, setStudID } = props;

  const handleChange = (event) => {
    setStudID(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>Stud ID</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={studID}
          label="Stud ID"
          onChange={handleChange}
        >
          <MenuItem value={1}>A</MenuItem>
          <MenuItem value={2}>B</MenuItem>
          <MenuItem value={3}>C</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
