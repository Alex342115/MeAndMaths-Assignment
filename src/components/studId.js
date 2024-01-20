import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect(props) {
  // const [studID, setstudID] = React.useState(0);
  const { studID, getStudID } = props;

  const handleChange = (event) => {
    console.log(event.target.value);    
    getStudID(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">StudID</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={studID}
          label="StudID"
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
