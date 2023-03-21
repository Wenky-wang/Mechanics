import { useState } from 'react';
import SampleImg from "../../resource/storeSample.jpg";

const StoreHome = () => {
    const [img, setImg] = useState("")

    return ( 
    <div className='storeHeader' style={{backgroundImage: `url(${img===""?SampleImg:img})` }}>
        <div>
            <p>Store Name</p>
        </div>
    </div> );
}
 
export default StoreHome;