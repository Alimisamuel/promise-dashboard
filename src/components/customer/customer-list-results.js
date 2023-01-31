import { useEffect, useState } from 'react';
import axios from 'axios';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { format } from 'date-fns';
import {
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
const url= "https://pigeonne.alimisamuel.com/api/v1/student";

export const CustomerListResults = ({ customers, ...rest }) => {

  const [loading, setLoading] = useState(true)
  const [staff, setStaff] = useState([])
    const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
    const [page, setPage] = useState(0);
const [rowsPerPage, setRowsPerPage] = useState(10);
  const [limit, setLimit] = useState(10);

  
  
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

  const studentData = staff.data ?? []

const handleDelete = async (id)=>{
  try{
  const response = await fetch("https://pigeonne.alimisamuel.com/api/v1/student/" + id, {
    method:"DELETE",
    headers:{
      "Content-Type":"application/json",
      "Accept":"application/json",
      "Authorization": 'Bearer ' + token
    }
  })
  console.log(response)
  window.location.reload(true)
} catch(err){
  console.log(err)
}

}//     const userInfo = JSON.parse(window.localStorage.getItem('user-info'));
 

//   const [ studentData, setStudentData] = useState([])
//   const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
//   const [limit, setLimit] = useState(10);
//   const [page, setPage] = useState(0);

//   const token = userInfo.token

// useEffect( ()=>{

   
// async function FetchData(){

//     // e.preventDefault();

     
//     let result  = await fetch("https://alimisamuel.com/api/v1/staff",{
//       method:'GET',
//       headers:{
//          "Content-Type":"application/json ",
//          "Accept":"applicaation/json",
//         "Authorization":  'Bearer ' +  token
//       } ,
     
//     })
//        const  res = await result.json()
//         console.log("result", res.data)
//         localStorage.setItem("teacher-info",JSON.stringify(res))
  
// }
// FetchData()
// }, [token])

// const newTeacherInfo = JSON.parse(window.localStorage.getItem('teacher-info'));

// const newTeacherData = newTeacherInfo.data

// console.log ("Sammy", newTeacherData)


const handleChangePage = (event, newPage) => {
  setPage(newPage);
};

const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(+event.target.value);
  setPage(0);
};

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
    <Box sx={{overflow:'scroll'}}>

        <Box  >
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
                  DOB
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
                {/* <TableCell>
                Edit
                </TableCell> */}
                <TableCell>
               Delete
                </TableCell>
              </TableRow>
            </TableHead>
            {!loading &&
                <TableBody>
                {studentData.map((customer, id) => (
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
                          {customer.firstName}{customer.surName}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      {customer.DOB}
                    </TableCell>
                    <TableCell>
                      {customer.id}
                    </TableCell>
                    <TableCell>
                      {customer.phoneNumber}
                    </TableCell>
                    <TableCell>
                      {customer.createdAt}
                    </TableCell>
                    {/* <TableCell key={customer.id}>  */}
                    {/* <IconButton >
                      <EditIcon />

                      </IconButton> */}
                    {/* </TableCell> */}
                    <TableCell>
                      <IconButton key={customer.id} onClick={()=>handleDelete(customer.id)}>
                      <DeleteForeverIcon  color='error'/>

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

      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={studentData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> 
    </Box>
  );
};

CustomerListResults.propTypes = {
  customers: PropTypes.array.isRequired
};
