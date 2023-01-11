import { Avatar, Card, CardContent, Grid, Typography, Box } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';

export const SchoolCalender = (props) => (
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
            Push Notification
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
              backgroundColor: 'primary.main',
              height: 56,
              width: 56
            }}
          >
            <NotificationAddIcon />
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
         send notifications to staffs and parents
        </Typography>
      </Box>
    </CardContent>
  </Card>
);
