// import { TabPanel } from "@mui/lab";
import { AppBar, Tab, Tabs } from "@mui/material";
import React from 'react'
import { AccountProfileCreate } from './account-profile-create';
import { AccountParentCreate } from './account-parent-create';

export default function Navbar(){
    const [value, setValue]=React.useState(0)
    const handleTabs = (e, val)=>{
        setValue(val)
    }
    return(
      <>
    <AppBar position="static" 
    sx={{bgcolor:'#fff'}}>
        <Tabs values={value} 
       className="Tabs"
        onChange={handleTabs}>
            <Tab className="tab" 
            label="User Info"
           />
            <Tab  className="tab" 
            label="More Info"/>
            <Tab label="User Parent/Guardians Info"/>
        </Tabs>
    </AppBar>
    <TabPanel value={value} 
    index={0}>

  
    </TabPanel>
    <TabPanel value={value} 
    index={1}>  x</TabPanel>
    <TabPanel value={value} 
    index={2}>   <AccountParentCreate /></TabPanel>
   
      </>
    )
}

function TabPanel(props)
 
{
    const {children, value, index} = props;
    return(
        <div>

            {
             value === index && (
                 <div>{children}</div>
             )
            }
        </div>
    )
}