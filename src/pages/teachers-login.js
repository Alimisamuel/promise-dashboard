import Head from 'next/head';
import NextLink from 'next/link';
import Router from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import logo from '../../public/static/logo.png'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import { convertRoutesToDataRoutes } from '@remix-run/router/dist/utils';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'
import { WindowSharp } from '@mui/icons-material';
// import { useNavigate } from 'react-router-dom';
// import { Login } from '@mui/icons-material';




const Login = () => {
  const router = useRouter()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
 
const handleLogin =  async (e) =>{
  e.preventDefault();
  try {
    let item = {email,password}
  let result  = await fetch("https://alimisamuel.com/api/v1/teacher/login",{
    method:'POST',
    headers:{
       "Content-Type":"application/json ",
       "Accept":"applicaation/json",
    } ,
    body: JSON.stringify(item)
  })

  
  const res = await result.json();
  console.log(res)
localStorage.setItem("teacher-info",JSON.stringify(res))

const stat = res.status;
// console.log(stat)

if (stat == "success"){
  FetchDataTeacher()
  setTimeout(()=>{

    router.push('/teachers')
  }, 1000)
}
else{
  alert("Incorrect Login Details")
  router.push('/teachers-login')

}

 
  
} catch (error) {
  console.log(error)
}


}


async function FetchDataTeacher(){
  const userInfo = JSON.parse(window.localStorage.getItem('user-info'));
const token = userInfo.token
    // e.preventDefault();

     
    let result  = await fetch("https://alimisamuel.com/api/v1/staff",{
      method:'GET',
      headers:{
         "Content-Type":"application/json ",
         "Accept":"applicaation/json",
        "Authorization":  'Bearer ' +  token
      } ,
     
    })
       const  res = await result.json()
        console.log("result", res.data)
        localStorage.setItem("teacher-info",JSON.stringify(res))
  
}



  return (
    <>
      <Head>
        <title>Login | Promise International </title>
      </Head>
      <Box
      className='login_background'
     
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth="sm"
        sx={{
          bgcolor:'#fff',
          p:4,
          borderRadius:1
        }}>
          <NextLink
            href="https://www.pisonitsha.com/"
            passHref
          >
            <Button
              component="a"
              startIcon={<ArrowBackIcon fontSize="small" />}
            >
              Home
            </Button>
          </NextLink>
          <form   >
            <Box sx={{ my:3 }}>
              <Grid Container  
              sx={{display:'flex', 
              justifyContent:'space-between'}}>
                <Grid item 
                lg={6}>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                Sign in
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
                Sign in on the Teacher&apos;s Dashboard
              </Typography>
              </Grid>
              <Grid item 
              lg={6}>
      
              <a>
                <Image
               
                src={logo} 
                width={80} 
                height={80}/>
              </a>
          
            </Grid>
            </Grid>
            </Box>
    
            <TextField
          onChange={(e)=>setEmail(e.target.value)}
              fullWidth
        
              label="Email Address"
              margin="normal"
              name="email"
             
              type="email"
           
              variant="outlined"
            />
            <TextField
onChange={(e)=>setPassword(e.target.value)}
              fullWidth
             
              label="Password"
              margin="normal"
              name="password"
            
              type="password"
              
              variant="outlined"
            />
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                onClick={handleLogin}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign In Now
              </Button>
            </Box>
            <Typography
              color="textSecondary"
              variant="body2"
            >
          Don&apos;t have an account?
             
              {' '}
              <NextLink
                href="/register"
              >
                <Link
                  to="/register"
                  variant="subtitle2"
                  underline="hover"
                  sx={{
                    cursor: 'pointer'
                  }}
                >
                Register
                </Link>
              </NextLink>
            </Typography>
          </form>
        </Container>
      </Box>
    </>
  );
};


export default Login;


