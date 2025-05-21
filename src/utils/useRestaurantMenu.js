import React from 'react'
import { MENU_URL } from "./constants";
import { useEffect } from 'react';
import { useState } from 'react';
const useRestaurantMenu = (resId) => {
    const [menuCard,setMenuCard]=useState(null)
    useEffect(()=>{
            fetchMenu();
        },[]);

    const fetchMenu= async()=>{
        const menu=await fetch( MENU_URL+resId );
        const json=await menu.json();
        setMenuCard(json.data);
    }
    return menuCard;
}


export default useRestaurantMenu


