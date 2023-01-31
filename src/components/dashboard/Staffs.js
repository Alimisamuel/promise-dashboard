import { Avatar, Box, Card, CardContent, CircularProgress, Grid, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';
import { useEffect, useState } from 'react';


export const Staffs = (props) => {


const url= " https://pigeonne.alimisamuel.com/api/v1/teacher";

const [loading, setLoading] = useState(true)
const [staff, setStaff] = useState([])


const USER =JSON.parse(window.localStorage.getItem('user-info')); 
 
const token = USER.token

const fetchStaff = async () =>{



  setLoading(true);
  try{
    const response = await fetch(url,  {
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
  // const userInfo = JSON.parse(window.localStorage.getItem('user-info'));
  // const token = userInfo.token
  // useEffect( ()=>{

   
    // async function FetchData(){
    
    //     // e.preventDefault();
    
         
    //     let result  = await fetch("https://alimisamuel.com/api/v1/staff",{
    //       method:'GET',
    //       headers:{
    //          "Content-Type":"application/json ",
    //          "Accept":"applicaation/json",
    //         "Authorization":  'Bearer ' +  token
    //       } ,
         
    //     })
    //        const  res = await result.json()
    //         console.log("result", res.data)
    //         localStorage.setItem("teacher-info",JSON.stringify(res))
      
    // }
    // FetchData()
    // }, [token])
    
    // const newTeacherInfo = JSON.parse(window.localStorage.getItem('teacher-info'));
    
    // const newTeacherData = newTeacherInfo.data



    
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
            {loading == true ?
              < CircularProgress color="inherit" /> :
              <h4>{staff.data.length}</h4>
            }
                 
            {/* {newTeacherData.length} */}
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
          Teaching staff
        </Typography>
      </Box>
    </CardContent>
  </Card>
);
      };
