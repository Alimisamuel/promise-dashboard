import Head from 'next/head';
import { Box, CardActions, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { CreateAccount } from '../components/account/Create-account';
import { AccountProfileCreate } from '../components/account/account-profile-create';
import { DashboardLayout } from '../components/dashboard-layout';


const Page = () => (
  <>
    <Head>
      <title>
        Account | Promise Intertional School
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
         Create Account
        </Typography>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <CreateAccount />
            <Card sx={{mt:2}}>
                <CardActions>


                </CardActions>
            </Card>
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
            // sx={{border:'2px solid red'}}
          >
            <AccountProfileCreate />
            {/* <AccountProfileCreate /> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
