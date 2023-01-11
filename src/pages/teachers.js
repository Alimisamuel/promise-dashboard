import React from 'react';
import Head from 'next/head';
import { Box, Container, Grid, Typography, } from '@mui/material';
import { TeacherLayout } from '../components/teachers-layout';
import { Biodata } from '../components/teachersDashboard/Biodata';
import { FeePayments } from '../components/teachersDashboard/FeePayment';
import { Results } from '../components/teachersDashboard/Results';
import ClassIcon from '@mui/icons-material/Class';

import SchoolIcon from '@mui/icons-material/School';
import {NewStudent} from '../components/teachersDashboard/NewStudent'
import Link from 'next/link';






const date = new Date()
const showDate = date.toDateString()
const Page = () => {
  const teacherInfo = JSON.parse(window.localStorage.getItem('teacher-info'));

  const teacherData = teacherInfo.teacher
  return(
  <>
    <Head>
      <title>
      Teacher Dashboard / Promise school
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
              <Typography variant='h2'>Teacher&apos;s Dashboard</Typography>
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
         
            </Grid>
            <Grid item >
            <Box sx={{
              width:'80px',
              mr:2
            }} >
            <ClassIcon  sx={{
                  fontSize:'18px'
                }}/>
              
              <Typography
              variant='h6'
              sx={{
                fontSize:'15px',
                color:'gray'
              }}>
Class:
              </Typography>
              <Typography 
              variant='caption'>
{teacherData.className}
              </Typography>
            </Box>
            </Grid>
        </Grid>
        </Box>

      <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            sm={6}
            xl={3}
            xs={12}
          >
            
            <Biodata/>
          </Grid>
          <Grid
            item
            xl={3}
            lg={4}
            sm={6}
            xs={12}
          >
              
           <FeePayments/>
          </Grid>
          <Link href='/settings'>
          <Grid
         
            item
            xl={3}
            lg={4}
            sm={6}
            xs={12}
            sx={{cursor:'pointer'}}
          >

        
          <Results/>
          </Grid></Link>
   
        </Grid>

        <Grid container 
        sx={{mt:3}} 
        >
          <Grid item
          lg={6}
          >
            <NewStudent/>
          </Grid>
        </Grid>
      
      </Container>
    </Box>

  
  </>
);

            }

Page.getLayout = (page) => (
  <TeacherLayout>
    {page}
  </TeacherLayout>
);

export default Page;
