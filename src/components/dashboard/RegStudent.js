import { Avatar, Box, Card, CardContent, CircularProgress, Grid, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MoneyIcon from '@mui/icons-material/Money';
import PeopleIcon from '@mui/icons-material/People';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useEffect, useState } from 'react';








// const newStudentInfo = JSON.parse(window.localStorage.getItem('student-info'));
// const url= "http://l.com/apicleear/v1/student";
// console.log(url)
export const RegStudent = (props) => {


  const [loading, setLoading] = useState(true)
  const [staff, setStaff] = useState([])
  
  
  const USER =JSON.parse(window.localStorage.getItem('user-info')); 
   
  const token = USER.token
  
  const fetchStaff = async () =>{
  
  
  
    setLoading(true);
    try{
      const response = await fetch("https://pigeonne.alimisamuel.com/api/v1/student",  {
        method:'GET',
        headers:{
          "Content-Type":"application/json",
          "Accept": "application/json",
          "Authorization": 'Bearer ' + token
        },
        }  )
         const data = await response.json()
        console.log(data)
        setLoading(false)
        setStaff(data)
    } catch (err){
  
    }
  
   
  };
  
  useEffect(()=>{
    fetchStaff();
  },[])



  return(

  <Card
    sx={{ height: '100%' }}
    {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
            sx={{fontSize:'9px'}}
          >
            Registered Students
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
           {loading == true ?
              < CircularProgress color="inherit" /> :
              <h4>{staff.data.length}</h4>
            }
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'error.main',
              height: 56,
              width: 56
            }}
          >
            <PeopleIcon  />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          pt: 2,
          display: 'flex',
          alignItems: 'center'
        }}
      >
          <ArrowUpwardIcon color="success" />
        <Typography
          variant="body2"
          sx={{
            mr: 1
          }}
        >
          16%
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Since last month
        </Typography>
      </Box>
    </CardContent>
  </Card>
);
        }
