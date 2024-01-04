import React from 'react';
import { Layout } from '../components/Layout/Layout';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography,Paper } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
const Contact = () => {
  return (
    <Layout>
        <Box sx={{my:10,ml:10,"& h4":{fontWeight:"bold",mb:2}}}>
          <Typography variant='h4'>
            Contact My Resturant
          </Typography>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolorum ullam provident repellendus quibusdam. Sed blanditiis animi quam alias ad unde adipisci laboriosam eveniet, reprehenderit nostrum ex repellendus, non voluptate?</p>
        </Box>
        <Box sx={{m:5, width:'600px',ml:10, "@media (max-width:600px)":{
          width:"300px",
        }}}>
          <TableContainer component={Paper}>
            <Table aria-aria-label='contact table'>
              <TableHead>
                <TableRow>
                  <TableCell sx={{bgcolor:"black",color:"white",}} align='center'>Contact Details</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{color:'red',pt:1 }} /> 1800-00-0000(tollfree)
                  </TableCell>
                </TableRow>
                <TableRow>
                <TableCell><EmailIcon sx={{color:'skyblue',pt:1 }}/>
                  laxmi@gmail.com
                  </TableCell>
                </TableRow>
                <TableRow>
                <TableCell><CallIcon sx={{color:'green',pt:1 }}/>
                  1234567890
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
    </Layout>
  )
}

export default Contact;