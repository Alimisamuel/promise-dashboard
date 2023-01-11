import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Box, Container, Typography, Modal, Button, Grid, Divider } from "@mui/material";
import { DashboardLayout } from "../components/dashboard-layout";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
// import { SettingsNotifications } from '../components/settings/settings-notifications';
// import { SettingsPassword } from '../components/settings/settings-password';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const Page = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Head>
        <title>Results | Promise International School</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography sx={{ mb: 3 }} 
          variant="h4">
            Report Cards
          </Typography>

          <Grid container 
          spacing={3}>
            <Grid item 
            lg={4}>
              <Button 
              variant="outlined" 
              onClick={handleOpen} 
              fullWidth>
                Create
              </Button>
            </Grid>
            <Grid item 
            lg={4}>
              <Button variant="outlined" 
              fullWidth>
                Edit
              </Button>
            </Grid>
            <Grid item 
            lg={4}>
              <Button variant="outlined" 
              fullWidth>
                Print
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ....................Creaaate Report Card Modal...................... */}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h4">Report Cards</Typography>
          <Divider>
            <Typography variant="caption">Please select student data correctly</Typography>{" "}
          </Divider>
          <Grid
            container
            sx={{ display: "flex",flexDirection:'column', justifyContent: "center" }}
            spacing={4}

            mt={3}
          >
            <Grid item 
            lg={12} 
            sx={{display:'flex'}}>
            <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={subject}
      size="small"
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} 
      label="Subject" />}
    />
    <TextField 
    type='number'
    size="small"
    sx={{ml:5}}
label="Score"
    />
              <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={grades}
      
      size="small"
      sx={{ width: 120, ml:2 }}
      renderInput={(params) => <TextField {...params} 
      label="Grades" />}
    />
 
            </Grid>
            <Grid item 
            lg={12} 
            sx={{display:'flex'}}>
            <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={subject}
      size="small"
      sx={{ width: 380 }}
      renderInput={(params) => <TextField {...params} 
      label="Subject" />}
    />
    <TextField 
    type='number'
    size="small"
    sx={{ml:5}}
label="Score"
    />
              <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={grades}
      
      size="small"
      sx={{ width: 150, ml:2 }}
      renderInput={(params) => <TextField {...params} 
      label="Grades" />}
    />
    <Button ><CancelPresentationIcon/></Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;





const subject = [
  { label: 'Mathematics', year: 1994 },
  { label: 'English Language', year: 1972 },
  { label: 'Essay', year: 1974 },
  { label: 'Diction', year: 2008 },
  { label: 'Civic Education', year: 1957 },
  { label: "Physics", year: 1993 },
  { label: 'Chemistry', year: 1994 },
  {
    label: 'Physics'
  },
  { label: 'Chemistry', year: 1966 },
  { label: 'Fight Club', year: 1999 },
  {
    label: 'Biology',
    year: 2001,
  },
  {
    label: 'Agricultural Science',
    year: 1980,
  },
  { label: 'Computer Science', year: 1994 },
  { label: 'Further Mathematics', year: 2010 },
  {
    label: 'Literature in-English',
    year: 2002,
  },
  { label: "Christain Religious Knowledge", year: 1975 },
  { label: 'Government', year: 1990 },
  { label: 'Geography', year: 1999 },
  { label: 'Igbo Language', year: 1954 },
  {
    label: 'Economics',
    year: 1977,
  },
  { label: 'Commerce', year: 2002 },
  { label: 'Financial Accounting', year: 1995 },
  { label: 'Marketing', year: 1991 },
  { label: "Animal Boundary", year: 1946 },
  { label: "Catering and Craft", year: 1946 },
  { label: "Foods and Nutrition", year: 1946 },
  { label: "English Literature", year: 1946 },
  { label: "French", year: 1946 },
  { label: "Information Technology ICT", year: 1946 },

];

const grades = [
  {label:'A1'},
  {label:'B2'},
  {label:'B3'},
  {label:'C4'},
  {label:'C5'},
  {label:'C6'},
  {label:'D7'},
  {label:'E8'},
  {label:'F9'},
]