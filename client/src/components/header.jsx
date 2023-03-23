import { useState } from 'react';
import SampleImg from "../resource/storeSample.jpg";

const Header = ({title}) => {
    const [img, setImg] = useState("")

    return ( 
    <div className='storeHeader' style={{backgroundImage: `url(${img===""?SampleImg:img})` }}>
        <div>
            <p>{title}</p>
        </div>
    </div> );
}
 
export default Header;