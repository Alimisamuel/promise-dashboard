import { useEffect, useState } from 'react';
import axios from 'axios';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Modal from '@mui/material/Modal';

import { format } from 'date-fns';
import {
  Alert,
  Avatar,
  Box,
  Card,
  Checkbox,
  IconButton,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';
import { getInitials } from '../../utils/get-initials';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const TeacherListResults = ({ customers, ...rest }) => {

  const url= " https://pigeonne.alimisamuel.com/api/v1/teacher";

  const [loading, setLoading] = useState(true)
  const [staff, setStaff] = useState([])
    const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [success, setSuccess]= useState(false);
  const [page, setPage] = useState(0);
  const [open, setOpen] =useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  
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

  const teacherData = staff.data ?? []

  const handleDelete = async (id)=>{
    try{
    const response = await fetch("https://pigeonne.alimisamuel.com/api/v1/teacher/" + id, {
      method:"DELETE",
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json",
        "Authorization": 'Bearer ' + token
      
      }
    })
    console.log(response)
    setSuccess(true)
    window.location.reload(true)
  } catch(err){
    console.log(err)
  }
}



  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = customers.map((customer) => customer.id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, id);
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card sx={{overflow:'scroll'}} {...rest}>
      {success && <Alert severity="success">Teacher record deleted successfully</Alert>}
      <PerfectScrollbar>
        <Box sx={{ minWidth: 950 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedCustomerIds.length === customers.length}
                    color="primary"
                    indeterminate={
                      selectedCustomerIds.length > 0
                      && selectedCustomerIds.length < customers.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Email
                </TableCell>
                <TableCell>
                  Teacher&apos;s ID
                </TableCell>
                <TableCell>
                  Phone
                </TableCell>
                <TableCell>
                  Registration date
                </TableCell>
                <TableCell>
                 Edit
                </TableCell>
                <TableCell>
               Delete
                </TableCell>
              </TableRow>
            </TableHead>
            {!loading &&
                <TableBody>
                {teacherData.map((customer, id) => (
                  <TableRow
                    hover
                    key={customer.id}
                    selected={selectedCustomerIds.indexOf(customer.id) !== -1}
                  >
                    <TableCell padding="checkbox">
                    {id + 1}
                    </TableCell>
                    <TableCell>
                      <Box
                        sx={{
                          alignItems: 'center',
                          display: 'flex'
                        }}
                      >
                        <Avatar
                         
                          sx={{ mr: 2 }}
                        >
                          {customer.firstName.charAt(0)}
                        </Avatar>
                        <Typography
                          color="textPrimary"
                          variant="body1"
                        >
                          {customer.firstName}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      {customer.email}
                    </TableCell>
                    <TableCell>
                      {customer.id}
                    </TableCell>
                    <TableCell>
                      {customer.number}
                    </TableCell>
                    <TableCell>
                      {customer.createdAt}
                    </TableCell>
                    <TableCell>
                      <IconButton onClick={handleOpen}>

                 <EditIcon/>
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      <IconButton key={customer.id} onClick={()=>handleDelete(customer.id)}>

                     <DeleteForeverIcon color='error'/>
                      </IconButton>
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
      <TablePagination
        component="div"
        count={customers.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />

<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </Card>




  );
};

TeacherListResults.propTypes = {
  customers: PropTypes.array.isRequired
};
