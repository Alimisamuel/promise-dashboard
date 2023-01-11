import Head from 'next/head';
import Link from 'next/link';
import { Box, Container, Grid, Typography } from '@mui/material';
import { RegStudent } from '../components/dashboard/RegStudent';
import { CreateUser} from '../components/dashboard/CreateUser';
import { Staffs } from '../components/dashboard/Staffs';
import { SchoolCalender } from '../components/dashboard/SchoolCalender';

import { DashboardLayout } from '../components/dashboard-layout';
import ClassIcon from '@mui/icons-material/Class';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import SchoolIcon from '@mui/icons-material/School';
import { NewlyReg} from '../components/dashboard/NewlyReg';



const date = new Date();
const showDate = date.toDateString()

const Page = () => (
  <>
    <Head>
      <title>
        Staff Dashboard / Promise 
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
      <Box>
              <Typography variant='h2'>Admin Dashboard</Typography>
            </Box>
      <Box>
        <Grid container>
          <Grid item>
          <Typography
              variant='h6'
              sx={{
                fontSize:'15px',
                color:'gray'
              }}>
Date: {showDate}
              </Typography>
          
          </Grid>
        </Grid>
        <Grid container
      
        spacing={8}
        sx={{
          mb:5,
          color:'black',
          display:'flex',
          justifyContent:'right'
          
        }}
        >
          <Grid item>
            
        <Box >
                <SchoolIcon sx={{
                  fontSize:'18px'
                }}/>
              <Typography
              variant='h6'
              sx={{
                fontSize:'15px',
                color:'gray'
              }}>
Academic Session:
              </Typography>
              <Typography 
              variant='caption'>
2022/2023
              </Typography>
            </Box>
            </Grid>
            <Grid item>
            <Box >
                <AccessTimeFilledIcon sx={{
                  fontSize:'18px'
                }}/>
              <Typography
              variant='h6'
              sx={{
                fontSize:'15px',
                color:'gray'
              }}>
Current Term:
              </Typography>
              <Typography 
              variant='caption'>
1st Term
              </Typography>
            </Box>
            </Grid>
          
        </Grid>
        </Box>
        <Grid
          container
          spacing={3}
        >
          <Link href='/students'>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
            sx={{cursor:'pointer'}}
          >
            <RegStudent />
          </Grid></Link>

          <Link href='/teacher-mgt'>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
            sx={{cursor:'pointer'}}
          >
            <Staffs />
          </Grid></Link>
          <Link href='/createAccount'>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
            sx={{cursor:'pointer'}}
          >
            <CreateUser />
          </Grid></Link>
          <Link href="/studentMgt">
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
            sx={{cursor:'pointer'}}
          >
            <SchoolCalender sx={{ height:'100%'}} />
          </Grid></Link>
         <Grid item>
          <NewlyReg/>
         </Grid>
        
        
         
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
