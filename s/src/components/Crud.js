import React, { Component, useState } from 'react';
import Box from '@mui/material/Box';
import { TableCell } from '@mui/material';  
import { TableBody } from '@mui/material';
import { TableContainer } from '@mui/material';
import { Table } from '@mui/material';
import { TableHead } from '@mui/material';
import { TableRow } from '@mui/material';
import { Paper } from '@mui/material';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const original = [
    { 'id': '1', 'desc': 'AAA', 'isOK': 'falso' },
    { 'id': '2', 'desc': 'BBB', 'isOK': 'verdadero' },
    { 'id': '3', 'desc': 'CCC', 'isOK': 'falso' },
  ];

 


class CruDu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [
        {
          BomComponentCode: "345543",
          BomComponentName: "COMP1",
          BomComponentRefUOM: "gm",
          rowId: 0,
          consumptionBatchNumbers: [
            {
              componentBatchNumber: "20",
              componentQuantity: 2
            },
            {
              componentBatchNumber: "21",
              componentQuantity: 3
            }
          ]
        },
        //2nd cloumn
        {
          BomComponentCode: "5543",
          BomComponentName: "COMP2",
          BomComponentRefUOM: "KG",
          rowId: 1,
          consumptionBatchNumbers: [
            {
              componentBatchNumber: "22",
              componentQuantity: 4
            },
            {
              componentBatchNumber: "23",
              componentQuantity: 5
            }
          ]
        }
      ],
      renderState: false
    };
  }

  handleUpdate = (index, Code) => {
    // let newArray = this.state.data.filter((element)=>element.rowId === index)
    this.setState({
      renderState: Code
      // data: newArray
    });
  };
  render() {
  const { classes } = this.props;
    const { data, renderState } = this.state;
  return (
    <div>
    <Box sx={{mt:12}}>
    
<Container>
<TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Identificador</TableCell>
            <TableCell align="right" align="center">Id</TableCell>
            <TableCell align="right" align="center">desc</TableCell>
            <TableCell align="right" align="center">isOK</TableCell>
            <TableCell align="right" align="center">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {original.map((item, i) => (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" key={i}>
                {item.id}
              </TableCell>
              <TableCell align="right" align="center">{item.id}</TableCell>
              <TableCell align="right" align="center">{item.desc}</TableCell>
              <TableCell align="right" align="center">{item.isOK}</TableCell>
              {renderState === item.BomComponentCode ? (
                            <TableCell align="left">
                              {item.original.map((row, indi) => (
                                <div key={indi}>
                                  <input value={row.componentQuantity} />
                                </div>
                              ))}
                            </TableCell>
                          ) : (
                            <TableCell align="left">
                              {item.consumptionBatchNumbers.map((row, indi) => (
                                <div key={indi}>
                                  <TableCell align="left">
                                    {row.componentQuantity}
                                  </TableCell>
                                </div>
                              ))}
                            </TableCell>
                          )}
              <TableCell align="right" align="center">
                <Button onClick={() =>
                                this.handleUpdate(i, item.BomComponentCode)
                              } variant="contained" sx={{mx:1}} style={{backgroundColor:"#003784"}}>Editar</Button>
                <Button variant="contained" sx={{mx:1}} style={{backgroundColor:"#003784"}}>Eliminar</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  </Box>  
  </div>
     );
    }
  }

export default (CruDu);
