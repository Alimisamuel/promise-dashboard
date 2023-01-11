import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@mui/material';
const users =[
  {
    value: 'Student',
    label: 'Student'
  },
  {
    value: 'Staff',
    label: 'Staff'
  },

]
const states = [
  {
    value: 'Abia gg',
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

export const AccountParentCreate = (props) => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    state: '',
    country: 'Nigeria'
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Parent/Guardian"
        />
        <Divider />
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
                helperText="Please specify the first name"
                label="First name"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
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
                onChange={handleChange}
                required
                value={values.lastName}
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
                label="Home Address"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
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
                onChange={handleChange}
                type="number"
                value={values.phone}
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
                onChange={handleChange}
                required
                value={values.country}
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
                label="Occupation"
                name="state"
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
                label="Select User Type"
                name="UserType"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.users}
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
                label=""
                type="date"
                name="Date"
                onChange={handleChange}
                required
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
            color="primary"
            variant="contained"
          >
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};
