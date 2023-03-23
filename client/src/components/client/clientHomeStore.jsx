import {Link} from 'react-router-dom';
import React from 'react';
import { useState, useEffect } from 'react';
import sampleImg from '../../resource/storeSample.jpg';

const ClientHomeStore = ({storeInfo={}}) => {
    const [storePic, setPic] = useState(storeInfo.imgurl);

    return ( 
        <Link className="cl_mp_sel_section" to={"/storeDetail"}>
            <img src={ storePic || sampleImg } alt="Store_Picture" className="cl_mp_img" />
            <div className='cl_mp_section_name'>{storeInfo.name || "Unknown"}</div>
        </Link>
    );
}
 
export default ClientHomeStore;