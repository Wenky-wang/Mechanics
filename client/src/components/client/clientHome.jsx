import React, { useState, useEffect } from 'react';

const ClientHome = () => {
    useEffect(() => {
        document.title = "Client Home Page";  
    }, []);

    return ( <>
     <h1>Client Home</h1>
    </> );
}
 
export default ClientHome;