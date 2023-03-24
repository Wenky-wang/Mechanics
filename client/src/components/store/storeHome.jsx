import React, { useEffect } from 'react';
import Header from '../header';

import Calendar from '../calendar';

const StoreHome = ({store_info, url_head}) => {
    
    useEffect(() => {
        document.title = "Mechanics - Store";
    }, []);

    return (<>
    
        <Header title={store_info.name || "Store Name"}/>
        <Calendar urlhead={url_head} storeInfo={store_info} user="store" />
    
    </>);
}

export default StoreHome;