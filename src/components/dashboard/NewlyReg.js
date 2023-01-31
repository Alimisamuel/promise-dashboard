import { format } from 'date-fns';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { SeverityPill } from '../severity-pill';
import { useEffect, useState } from 'react';








export const NewlyReg = (props) => {

  const url= "https://alimisamuel.com/api/v1/student";

  const [loading, setLoading] = useState(true)
  const [staff, setStaff] = useState([])
  
  
  const USER =JSON.parse(window.localStorage.getItem('user-info')); 
   
  const token = USER.token
  
  const fetchStaff = async () =>{
  
  
  
    setLoading(true);
    try{
      const response = await fetch(url,  {
        method:'GET',
        headers:{
          "Content-Type":"application/json",
          "Accept": "application/json",
          "Authorization": 'Bearer ' + token
        },
        }  )
         const data = await response.json()
        console.log(data)
        setLoading(false)
        setStaff(data)
    } catch (err){
  
    }
  
   
  };
  
  useEffect(()=>{
    fetchStaff();
  },[])

  const studentList = staff.data ?? []
  console.log(studentList)
  
  return(
  <Card {...props}>
    <CardHeader title="Newly Registered Student" />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                ID
              </TableCell>
              <TableCell>
                student
              </TableCell>
              <TableCell sortDirection="desc">
                <Tooltip
                  enterDelay={300}
                  title="Sort"
                >
                  <TableSortLabel
                    active
                    direction="desc"
                  >
                    Date
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
      {
        !loading &&
        <TableBody>

        
        {studentList.map((order) => (
          <TableRow
            hover
            key={order.id}
          >
            <TableCell>
              {order.id}
            </TableCell>
            <TableCell>
              {order.firstName} {order.surname}
            </TableCell>
            <TableCell>
              {order.createdAt}
            </TableCell>
            <TableCell>
              <SeverityPill
                color={(order.status === 'Admitted' && 'success')
                || (order.status === 'refunded' && 'error')
                || 'warning'}
              >
               Admitted
              </SeverityPill>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      }
        
        </Table>
        {
          loading &&
          <>
            <Skeleton variant='rectangular' height={50}  sx={{mb:1}}/>
          <Skeleton variant='rectangular' height={50}  sx={{mb:2}}/>
          <Skeleton variant='rectangular' height={80}  sx={{mb:2}}/>
          </>
        
        }
    
    
      </Box>
    </PerfectScrollbar>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon fontSize="small" />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
);
    }
