import NavBar from './navBar';
import Header from './header';
import Requests from './requests';
import axios from "axios";
import React, { useState, useEffect } from 'react';

const ReqDetail = ({ acc, url_head, user }) => {
    const [reqData, setReqData] = useState([]);

    useEffect(() => {
        if (user === "store") {
            const url = `${url_head}/appoint/store/${acc.email}/close`;
            axios
            .get(url)
            .then(res => {
                setReqData(res.data.filter(x => x.apptStatus === "Waiting Approval"));
            })
        }
        else {
            const url = `${url_head}/appoint/client/${acc.email}`;
            axios
            .get(url)
            .then(res => {
                setReqData(res.data.filter(x => x.apptStatus === "In-Progress"));
            })
        }
    }, [acc.email, url_head, user])
   
    return ( <>
    <Header title={acc.name || "Mechanics"} />
    <NavBar navtype={user} />

    <div className="Req_Det_Page_Body">
        <div className="Req_Det_Page_Wrapper">
            {reqData.length === 0? null : reqData.map((x,i) => <Requests key={i} data={x} type={user} />)}
        </div>
    </div>
</>);
}
 
export default ReqDetail;