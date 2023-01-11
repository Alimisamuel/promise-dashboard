import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  stepButtonClasses,
  TextField
} from '@mui/material';
import { Container } from '@mui/system';
import { WindowSharp } from '@mui/icons-material';
const users =[

  {
    value: 'Staff',
    label: 'Staff'
  },
  {
    value: 'Student',
    label: 'Student'
  },

]
const studentClass =[
  {
    value: 'KG 1',
    label: 'KG 1'
  },
  {
    value: 'KG 2',
    label: 'KG 2'
  },
  {
    value: 'NURSERY 1',
    label: 'NURSERY 1'
  },
  {
    value: 'NURSERY 2',
    label: 'NURSERY 2'
  },
  {
    value: 'PRIMARY 1',
    label: 'PRIMARY 1'
  },
  {
    value: 'PRIMARY 2',
    label: 'PRIMARY 2'
  },
  {
    value: 'PRIMARY 3',
    label: 'PRIMARY 3'
  },
  {
    value: 'PRIMARY 4',
    label: 'PRIMARY 4'
  },
  {
    value: 'PRIMARY 5',
    label: 'PRIMARY 5'
  },
  {
    value: 'PRIMARY 6',
    label: 'PRIMARY 6'
  },
  {
    value: 'JSS 1',
    label: 'JSS 1'
  },
  {
    value: 'JSS 2',
    label: 'JSS 2'
  },
  {
    value: 'JSS 3',
    label: 'JSS 3'
  },
  {
    value: 'SSS 1',
    label: 'SSS 1'
  },
  {
    value: 'SSS 2',
    label: 'SSS 2'
  },
  {
    value: 'SSS 3',
    label: 'SSS 3'
  },


]
const states = [
  {
    value: 'Abia ',
    label: 'Abia '
  },
  {
    value: 'Adamawa',
    label: 'Adamawa'
  },
  {
    value: 'Akwa Ibom',
    label: 'Akwa Ibom'
  },
  {
    value: 'Anambra',
    label: 'Anambra'
  },
  {
    value: 'Bauchi',
    label: 'Bauchi'
  },
  {
    value: 'Bayelsa',
    label: 'Bayelsa'
  },
  {
    value: 'Benue',
    label: 'Benue'
  },
  {
    value: 'Borno',
    label: 'Borno'
  },
  {
    value: 'Cross River ',
    label: 'Cross River '
  },
  {
    value: 'Delta',
    label: 'Delta'
  },
  {
    value: 'Ebonyi',
    label: 'Ebonyi'
  },
  {
    value: 'Edo',
    label: 'Edo'
  },
  {
    value: 'Ekiti',
    label: 'Ekiti'
  },
  {
    value: 'Enugu',
    label: 'Enugu'
  },
  {
    value: 'Gombe',
    label: 'Gombe'
  },
  {
    value: 'Imo',
    label: 'Imo'
  },
  {
    value: 'Jigawa',
    label: 'Jigawa'
  },
  {
    value: 'Kaduna',
    label: 'Kaduna'
  },
  {
    value: 'Kano ',
    label: 'Kano '
  },
  {
    value: 'Katsina ',
    label: 'Katsina '
  },
  {
    value: 'Kebbi',
    label: 'Kebbi'
  },
  {
    value: 'Kogi ',
    label: 'Kogi '
  },
  {
    value: 'Kwara ',
    label: 'Kwara '
  },
  {
    value: 'Lagos',
    label: 'Lagos'
  },
  {
    value: 'Nasarawa',
    label: 'Nasarawa'
  },
  {
    value: 'Niger ',
    label: 'Niger '
  },
  {
    value: 'Ogun ',
    label: 'Ogun '
  },
  {
    value: 'Ondo ',
    label: 'Ondo '
  },
  {
    value: 'Osun',
    label: 'Osun'
  },
  {
    value: 'Oyo',
    label: 'Oyo'
  },
  {
    value: 'Plateau',
    label: 'Plateau'
  },
  {
    value: 'Rivers',
    label: 'Rivers'
  },
  {
    value: 'Sokoto',
    label: 'Sokoto'
  },
  {
    value: 'Taraba',
    label: 'Taraba'
  },
  {
    value: 'Yobe ',
    label: 'Yobe '
  },
  {
    value: 'Zamfara',
    label: 'Zamfara'
  },
];

export const AccountProfileCreate = (props) => {
  const [user, setUser] = useState('')
  const [firstName, setFirstName] = useState('')
  const [surname, setSurName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [number, setNumber] = useState('')
  const [state, setState] = useState('')
  const [stuClass, setStuClass] = useState('')
  const [parentName, setParentName] = useState('')
  const [parentNumber, setParentNumber] = useState('')
  const [address, setAddress] = useState('')
  const [DOB, setDob] = useState('')
  const [lGA, setLGA] = useState('')
  const [yoa, setYoa] = useState('')
  const [teacher_id, setTeacher_id] = useState()
  const [password,setPassword] = useState('')

  const userInfo = JSON.parse(window.localStorage.getItem('user-info'));
 

const route = useRouter()


  const handleStudent =  async () =>{
    // e.preventDefault();

      let item = {firstName, surname, phoneNumber, state, teacher_id, DOB}
    let result  = await fetch("https://alimisamuel.com/api/v1/student",{
      method:'POST',
      headers:{
        "Content-Type":"application/json ",
        "Accept":"applicaation/json",
        "Authorization":  'Bearer ' +  userInfo.token
      },
      body: JSON.stringify(item),
    })
       const res  = await result.json()

        console.log(res)
    
  }
  const handleStaff =  async () =>{
    // e.preventDefault();
    const className = stuClass;
    console.log(className)

      let item = {firstName, lastName, email, password, className, number, state,DOB}
    let result  = await fetch("https://alimisamuel.com/api/v1/teacher/register",{
      method:'POST',
      body: JSON.stringify(item),
      headers:{
         "Content-Type":"application/json ",
         "Accept":"applicaation/json",
        "Authorization":  'Bearer ' +  userInfo.token
      } ,
     
    })
        result = await result.json()
        console.log("result", result)

        if (result.status == "success"){
          window.alert("Staff Created Successfully with the following details" + "\n" + "Name:" +" " + firstName + " " + lastName + "\n" + "Email:" + " " + number)
          window.location.reload(true)


        }
        else{
          alert("Failed: check details ---- Email must be unique")
        }
      
  
  }
  
  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card >
        < Box sx={{bgcolor:'#e8e9eb', pb:3}}>
        <CardHeader 
          subheader="The information can be edited"
          title="Profile"
        />
        <Container>
          <TextField
              fullWidth
                label="Select User Type"
                name="UserType"
                onChange={(e)=>setUser(e.target.value)}
                helperText="Please make sure you select the correct user type"
                required
                select
                SelectProps={{ native: true }}
                value={user}
                variant="outlined"
              >
                {users.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
              </Container>
              </Box>
        <Divider sx={{mt:0}} />
     { 
     user == "Student" ?
     <>
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                size='small'
                helperText="Please specify the first name"
                label="First name"
                name="firstName"
                onChange={(e)=>setFirstName(e.target.value)}
                required
                value={firstName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
               size='small'
                fullWidth
                label="Last name"
                name="lastName"
                onChange={(e)=>setSurName(e.target.value)}
                required
                value={surname}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
               size='small'
                fullWidth
                label="Email Address"
                name="email"
                onChange={(e)=>setEmail(e.target.value)}
                required
                value={email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
               size='small'
                fullWidth
                label="Phone Number"
                name="phone"
                onChange={(e)=>setPhoneNumber(e.target.value)}
                type="number"
                value={phoneNumber}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
               <TextField
                fullWidth
                size='small'
                label="Select State"
                name="state"
                onChange={(e)=>setState(e.target.value)}
                required
                select
                SelectProps={{ native: true }}
                value={state}
                variant="outlined"
              >
                {states.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                size='small'
                label="LGA"
                name="LGA"
                onChange={(e)=>setLGA(e.target.value)}
                required
                value={lGA}
                variant="outlined"
              />
             
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
            <TextField
                fullWidth
                size='small'
                label="Select Class"
                name="Class"
                onChange={(e)=>setStuClass(e.target.value)}
                required
                select
                SelectProps={{ native: true }}
                value={stuClass}
                variant="outlined"
              >
                {studentClass.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
               size='small'
                fullWidth
                label=""
                type="date"
                name="Date"
                onChange={(e)=>setDob(e.target.value)}
                required
                value={DOB}
                variant="outlined"
                helperText="Date of Birth"
              />
                
            
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                size='small'
                type="number"
                label="Year Admitted"
                name="YOA"
                onChange={(e)=>setYoa(e.target.value)}
                required
            
                variant="outlined"
              />
             
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                size='small'
                type="number"
                label="teacherid"
                
                onChange={(e)=>setTeacher_id(e.target.value)}
                required
                value={teacher_id}
                variant="outlined"
              />
             
            </Grid>
          
          </Grid>
        </CardContent>



{/* .......,,,,,,,,,,,,,,..................,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,.............................,,,,,,,,,,,,,,,,,,,.......... */}




          <Divider>PARENT/GUARDIANS INFORMATIONS</Divider>
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                size='small'
                helperText="Please specify parent name in full"
                label="Parent/Guardians Name"
                name="firstName"
                onChange={(e)=>setParentName(e.target.value)}
                required
                value={parentName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
               size='small'
                fullWidth
                label="Home Address"
                name="lastName"
                onChange={(e)=>setAddress(e.target.value)}
                required
                value={address}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
               size='small'
                fullWidth
                label="Email Address"
                name="email"
                onChange={(e)=>setEmail(e.target.value)}
                required
                value={email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
               size='small'
                fullWidth
                label="Phone Number"
                name="phone"
                onChange={(e)=>setPhoneNumber(e.target.value)}
                type="number"
                value={phoneNumber}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
                <TextField
               size='small'
                fullWidth
                label="Occupation"
                name="occupation"
                onChange={(e)=>setParentNumber(e.target.value)}
                type="text"
                value={parentNumber}
                variant="outlined"
              />
            </Grid>
         
          </Grid>
        </CardContent>

{/* ................////////////////////////////.......................................///////////////////////........... */}


          <Divider>MORE INFORMATIONS</Divider>
        <CardContent>
          <Grid
            container
            spacing={3}
          >
           
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
               size='small'
                fullWidth
                label=""
                type="date"
                name="Date"
                
                required
                variant="outlined"
                helperText="Date of Admission"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
               size='small'
                fullWidth
                label="Admission Number"
                name="AN"
                
                type="text"
             
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
                <TextField
               size='small'
                fullWidth
                label="Class Admitted Into"
                name="occupation"
                
                type="text"
                
                variant="outlined"
              />
            </Grid>
         
          </Grid>
        </CardContent>
        <Divider />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
          onClick={handleStudent}
            color="primary"
            variant="contained"
          >
            Create Student
          </Button>
        </Box>
        </>




        :
        <>        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="First name"
                name="firstName"
                onChange={(e)=>setFirstName(e.target.value)}
                required
                value={firstName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Last name"
                name="lastName"
                onChange={(e)=>setLastName(e.target.value)}
                required
                value={lastName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={(e)=>setEmail(e.target.value)}
                required
                value={email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                onChange={(e)=>setNumber(e.target.value)}
                type="number"
                value={number}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Country"
                name="country"
             
                required
               
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Password"
                name="password"
               type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Select class"
                name="class"
                onChange={(e)=>setStuClass(e.target.value)}
                required
                select
                value={stuClass}
                SelectProps={{ native: true }}
                variant="outlined"
              >
                {studentClass.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
          
            
         
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
          onClick={handleStaff}
            color="primary"
            variant="contained"
          >
            Create Teacher
          </Button>
        </Box>
        </>

        }
      </Card>
    </form>
  );
};
