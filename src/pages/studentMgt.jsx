import Head from 'next/head';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import { useRouter } from 'next/router';




const Page = () => {

  const userInfo = JSON.parse(window.localStorage.getItem('user-info'));
console.log(userInfo.token)
  const route = useRouter()
  const [title, setTitle] = useState(" ")
  const [body, setBody] = useState(" ")

  const handleNotification =  async () =>{
    // e.preventDefault();

      let item = {title, body}
    let result  = await fetch("https://alimisamuel.com/api/v1/notification",{
      method:'POST',
      body: JSON.stringify(item),
      headers:{
         "Content-Type":"application/json ",
         "Accept":"applicaation/json",
        "Authorization":  'Bearer ' +  userInfo.token
      } ,
     
    })
        result = await result.json()
        console.log("result", result.status)

        if (result.status == "success"){
          alert("Notication Sent Successfully")
          route.push('/studentMgt')
        
        }
      
  
  }
  
  

  return(
  <>
    <Head>
      <title>
        Student Management | Promise International School
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{ mb: 3 }}
          variant="h4"
        >
          Send Notification
        </Typography>
    <Box>
      <TextField
      fullWidth
      name="title"
      label="Notification Title"
      helperText="Specify Notication Title"
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
      />
      <TextField
      sx={{mt:4}}
      multiline
      rows={4}
      fullWidth
      name="body"
      label="Notification Body"
      helperText=" "
      value={body}
      onChange={(e)=>setBody(e.target.value)}
      />
      <Box>
        <Button variant='contained' onClick={handleNotification} fullWidth > <SendIcon sx={{mr:3}}/> SEND</Button>
      </Box>
    </Box>
    
       
      </Container>
    </Box>
  </>
);
    };

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
