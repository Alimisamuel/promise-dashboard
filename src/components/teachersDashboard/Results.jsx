import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

export const Results = (props) => (
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
          >
           Student
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            Report Cards
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'green',
              height: 56,
              width: 56
            }}
          >
            <AssignmentTurnedInIcon/>
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
          Create, edit, view your student report cardss here.


        </Typography>
      </Box>
    </CardContent>
  </Card>
);
