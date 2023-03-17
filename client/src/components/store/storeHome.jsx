import React, { useState, useEffect } from 'react';

const StoreHome = () => {
    useEffect(() => {
        document.title = "Store Home Page";  
    }, []);

    return ( <>
        <h1>Store Home</h1>
    </> );
}
 
export default StoreHome;