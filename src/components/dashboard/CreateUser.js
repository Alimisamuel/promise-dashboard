import { Avatar, Box, Card, CardContent, Grid, LinearProgress, Typography } from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

export const CreateUser = (props) => (
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
            sx={{fontSize:'10px'}}
          >
           Create User
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'warning.main',
              height: 56,
              width: 56
            }}
          >
            <PersonAddAltIcon/>
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
          
       
        <Typography
          color="textSecondary"
          variant="caption"
        >
         Create a staff or student
        </Typography>
      </Box>
    </CardContent>
  </Card>
);
