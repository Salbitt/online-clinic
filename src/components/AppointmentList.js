import React from "react";
import Layout from "./../components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
export default function AppointmentList() {
  return (
    <Layout>
        <div style={{height:"750px"}}>
        <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="appointment-list">
            <TableHead >
              <TableRow>
                <TableCell
                  sx={{width:"600px",bgcolor: "black", color: "white" }}
                 
                  align="center"
                >
                  Appointment List
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                 Appointment number
                </TableCell>
                <TableCell>
                    Patient id
                </TableCell>
                <TableCell>
                    Patient Name
                </TableCell>
                <TableCell>
                    Doctor name
                </TableCell>
                <TableCell>
                    Reason
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                1
                </TableCell>
                <TableCell>
                    63753462
                </TableCell>
                <TableCell>
                    Maya
                </TableCell>
                <TableCell>
                    Dr.Neha
                </TableCell>
                <TableCell>
                    Continuous fainting
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  2
                </TableCell>
                <TableCell>
                    23332243
                </TableCell>
                <TableCell>
                    Himanshu
                </TableCell>
                <TableCell>
                    Dr.Shyam
                </TableCell>
                <TableCell>
                    Dental
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
        </div>
    </Layout>
  )
}
