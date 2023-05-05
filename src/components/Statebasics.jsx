import { Button, Divider, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Statebasics = () => {
  var [name, setName] = useState("Class");
  var [val, setVal] = useState();
  const changeValue = () => {
    setName(val);
    //setVal("")
    document.querySelector("input").value = "";
  };
  const inputHandler = (e) => {
    setVal(e.target.value);
    console.log(val);
  };
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <Typography variant="h5">Welcome {name}</Typography>
      <Divider />
      <br />
      <TextField label="Name" onChange={inputHandler}></TextField>
      <br />
      <br />
      <Button variant="contained" onClick={changeValue}>
        Change
      </Button>
    </div>
  );
};

export default Statebasics;
