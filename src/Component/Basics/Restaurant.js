import React,{useState} from 'react';
import "./Style.css";
import Menu from "./Menuapi";
import Menucard from './Menucard';
import Navbar from './Navbar';

const uniquelist=[...new Set(Menu.map((ele)=>{
    return ele.category;
})),"All"];

// console.log(uniquelist);
const Restaurant = () => {
    const [menudata,setdata]=useState(Menu);
    const [menulist,setmenulist]=useState(uniquelist);

    const filteritem=(category)=>{
        if(category==="All"){
            setdata(Menu);
            return;
        }
        const updatedmenu=Menu.filter(element=>{
            return element.category===category;
        })
        setdata(updatedmenu);
        setmenulist(setmenulist)
    }

    
    // const getalldata=()=>{
    //     const data=Menu;
    //     setdata(data)
    // }

  
    return (
        <>
            <Navbar filteritem={filteritem} menulist={menulist}/>
        <Menucard menudata={menudata}/>
        </>
    );
};

export default Restaurant;