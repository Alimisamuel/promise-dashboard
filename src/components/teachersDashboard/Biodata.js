import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import RecentActorsIcon from '@mui/icons-material/RecentActors';

export const Biodata = (props) => (
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
          Student List &
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
          BIODATA
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'error.main',
              height: 56,
              width: 56
            }}
          >
            <RecentActorsIcon />
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
          Here you can print your Biodata details
        </Typography>
      </Box>
    </CardContent>
  </Card>
);
