import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react'


const ViewData = () => {
  const [data, setData] = useState([])
  const [value, setValue] = useState([])
  
  useEffect(() => {
      axios.get('http://localhost:8080/users')
        .then((response) => {
          setData(response.data)
          console.log(response.data)
    })
    .catch(err => console.log(err))
    }
    , [])

    useEffect(() => {
      axios.get('http://localhost:8080/persons')
        .then((response) => {
          setValue(response.data)
        })
    }, [])
  return (
    <div>
        <br />
        <br />
        <br />
        <br />
        <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><h1>Name</h1></TableCell>
              <TableCell><h1>Places</h1></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
                {
                data.map((item, index) => (
                  <TableRow key={index}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.place}</TableCell>
                  </TableRow>
                ))}
            
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ViewData