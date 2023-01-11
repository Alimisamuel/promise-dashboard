import { format } from 'date-fns';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
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

const orders = [
  {
    id: uuid(),
    ref: 'CDD1049',
    amount: 30.5,
    student: {
      name: 'Ekaterina Tankova'
    },
    createdAt: 1555016400000,
  
  },
  {
    id: uuid(),
    ref: 'CDD1048',
    amount: 25.1,
    student: {
      name: 'Cao Yu'
    },
    createdAt: 1555016400000,
   
  },
  {
    id: uuid(),
    ref: 'CDD1047',
    amount: 10.99,
    student: {
      name: 'Alexa Richardson'
    },
    createdAt: 1554930000000,
  
  },
  {
    id: uuid(),
    ref: 'CDD1046',
    amount: 96.43,
    student: {
      name: 'Anje Keizer'
    },
    createdAt: 1554757200000,
   
  },
  {
    id: uuid(),
    ref: 'CDD1045',
    amount: 32.54,
    student: {
      name: 'Clarke Gillebert'
    },
    createdAt: 1554670800000,
    
  },
  {
    id: uuid(),
    ref: 'CDD1044',
    amount: 16.76,
    student: {
      name: 'Adam Denisov'
    },
    createdAt: 1554670800000,
  
  }
];

export const NewStudent = (props) => (
  <Card {...props}>
    <CardHeader title="Newly Registered Student" />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 500 }}>
        <Table>
          <TableHead>
            <TableRow>
            
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
          
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                hover
                key={order.id}
              >
                <TableCell>
                  {order.student.name}
                </TableCell>
                <TableCell>
                  {format(order.createdAt, 'dd/MM/yyyy')}
                </TableCell>
               
              </TableRow>
            ))}
          </TableBody>
        </Table>
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
