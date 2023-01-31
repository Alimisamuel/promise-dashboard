import Head from 'next/head';
import NextLink from 'next/link';
import Router from 'next/router';
import { Alert, Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';
import Image from 'next/image';
import logo from '../../public/static/logo.png'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import React, {useEffect, useState} from 'react';

import { useRouter } from 'next/router'





const Login = () => {
  const router = useRouter()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [ error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
 
const handleLogin =  async (e) =>{
  e.preventDefault();
  setIsPending(true)
  try {
    let item = {email,password}
  let result  = await fetch("https://pigeonne.alimisamuel.com/api/v1/admin/login",{
    method:'POST',
    headers:{
       "Content-Type":"application/json ",
       "Accept":"applicaation/json",
    } ,
    body: JSON.stringify(item)
  })

   

  
  const res = await result.json();
  // console.log(res)
localStorage.setItem("user-info",JSON.stringify(res))

const stat = res.status;
// console.log(stat)

if (stat == "success"){
  setIsPending(false)
setTimeout(() =>{

  router.push('/')
}, 1000)

}
else{


  setError("Incorrect Login Details")
  router.push('/login')
  setIsPending(false)
}

 
  
} catch (err) {
 
  setError(err)
  setIsPending(false)
}

}






// async function FetchData(){
  // const userInfo = JSON.parse(window.localStorage.getItem('user-info'));

  // const token = userInfo.token

    // e.preventDefault();

     
//     let result  = await fetch("https://alimisamuel.com/api/v1/student",{
//       method:'GET',
//       headers:{
//          "Content-Type":"application/json ",
//          "Accept":"applicaation/json",
//         "Authorization":  'Bearer ' +  token
//       } ,
     
//     })
//        const  res = await result.json()
//         console.log("result", res.data)
//         localStorage.setItem("student-info",JSON.stringify(res))
  
// }




   
//   async function FetchDataTeacher(){
//     const userInfo = JSON.parse(window.localStorage.getItem('user-info'));
// const token = userInfo.token
//       // e.preventDefault();
  
       
//       let result  = await fetch("https://alimisamuel.com/api/v1/staff",{
//         method:'GET',
//         headers:{
//            "Content-Type":"application/json ",
//            "Accept":"applicaation/json",
//           "Authorization":  'Bearer ' +  token
//         } ,
       
//       })
//          const  res = await result.json()
//           console.log("result", res.data)
//           localStorage.setItem("teacher-info",JSON.stringify(res))
    
//   }






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
                Sign in on the Admin&apos;s Dashboard
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
            {error && <Alert severity="error">Invalid account details</Alert>} 
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
            {!isPending && 
      <LoadingButton fullWidth size="large" type="submit" onClick={handleLogin} variant="contained">
        Login
      </LoadingButton>}
{isPending && 
      <LoadingButton   loading
      loadingPosition="start"      startIcon={<SaveIcon />} fullWidth size="large" type="submit" variant="contained" disabled >
        Loging in
      </LoadingButton>}
            </Box>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              Not an Admin login as a 
             
              {' '}
              <NextLink
                href="/teachers-login"
              >
                <Link
                  to="/teacher-login"
                  variant="subtitle2"
                  underline="hover"
                  sx={{
                    cursor: 'pointer'
                  }}
                >
                teacher
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


