import { useEffect, useState } from 'react';
import axios from "axios";

const Analysis = ({urlhead, email, connection="close"}) => {

    const [appoint, setAppoint] = useState([]);

    // read appointments data
    useEffect(() => {
        const url = `${urlhead}/appoint/store/${email}/${connection}`;
        axios
        .get(url)
        .then(res => {
            setAppoint(res.data);
        })
    }, []);

    return ( <div className="store_detail_analysis">

    <div className="store_detail_analysis_left">
        <table>
            <tbody>
                <tr>
                    <td>Appointment Rejection Rate:</td>
                    <td>5%</td>
                </tr>
                <tr>
                    <td>Other Data:</td>
                    <td>Bla Bla</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div className="store_detail_analysis_mid">
        <img src="pie_chart.png" alt="" />
    </div>
    <div className="store_detail_analysis_right">
        <img src="bar_chart.jpg" alt="" />
    </div>

</div> );
}
 
export default Analysis;