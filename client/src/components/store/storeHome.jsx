import React, { useState, useEffect } from 'react';
import Header from '../header';

import Calendar from '../calendar';

const StoreHome = ({acc_email, url_head, acc_name="Store Name"}) => {
    
    useEffect(() => {
        document.title = "Store Home Page";
    }, []);

    return (<>
    
        <Header title={acc_name}/>
        <Calendar urlhead={url_head} accemail={acc_email} user="store" />
    
    </>);
}

export default StoreHome;