import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Array = () => {
  const [names, setNames] = useState(["Adhith", "Sam", "Mahi"]);
  const [list, setList] = useState("");
  
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <Typography variant="h3">Array</Typography>
      <TextField label="Name" onChange={e => setList(e.target.value)}/>
      <br />
      <br />
      <Button variant="contained" color="success" onClick={
        () => setNames(prevList => [...prevList, list])
        }>
        Submit
      </Button>
      &nbsp;
      <Button variant="contained" color="error" onClick={() => setNames([])}>
        Clear
      </Button>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <h2>Names</h2>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {names.map((value, index) => {
              return (
                <TableRow>
                  <TableCell key={index}>{value}</TableCell>
                </TableRow>
              );
            })}
            <TableRow></TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Array;
