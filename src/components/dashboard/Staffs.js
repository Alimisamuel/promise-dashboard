import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';
import { useEffect, useState } from 'react';

export const Staffs = (props) => {

  const userInfo = JSON.parse(window.localStorage.getItem('user-info'));
  const token = userInfo.token

const [staff,setStaff] = useState([])

  useEffect( ()=>{
    async function FetchData(){
        let result  = await fetch("https://alimisamuel.com/api/v1/teacher",{
          method:'GET',
          headers:{
             "Content-Type":"application/json ",
             "Accept":"applicaation/json",
            "Authorization":  'Bearer ' +  token
          } ,
         
        })
           const  res = await result.json()
           setStaff(res.data)
    }
    FetchData()
    }, [token])
    
    
return(
  <Card {...props}>
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
          >
           Staffs
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            {staff.length}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'success.main',
              height: 56,
              width: 56
            }}
          >
            <PeopleIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          pt: 2
        }}
      >
        {/* <ArrowUpwardIcon color="success" /> */}
        {/* <Typography
          variant="body2"
          sx={{
            mr: 1
          }}
        >
          16%
        </Typography> */}
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Teaching/Non Teaching staff
        </Typography>
      </Box>
    </CardContent>
  </Card>
);
      };
