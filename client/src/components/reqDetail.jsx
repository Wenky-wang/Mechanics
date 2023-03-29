import NavBar from './navBar';
import Header from './header';
import Requests from './requests';
import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";

const ReqDetail = ({ acc, url_head, user, cancel_desc }) => {
    const [reqData, setReqData] = useState([]);
    const { state } = useLocation();

    useEffect(() => {
        if (user === "store") {
            const url = `${url_head}/appoint/store/${acc.email}/close`;
            axios
            .get(url)
            .then(res => {
                let filtered = res.data.filter(x => x.apptStatus === "Waiting Approval");
                if (filtered.length !== 0)
                    setReqData(filtered);
            })
        }
        else if (user === "client") {
            const url = `${url_head}/appoint/client/${acc.email}`;
            axios
            .get(url)
            .then(res => {
                let filtered = res.data.filter(x => x.apptStatus === "In-Progress" || x.apptStatus === "Waiting Approval");
                
                if (filtered.length !== 0)
                    setReqData(filtered);
            })
        }
        else {
            const url = `${url_head}/appoint/time/${state.data.date}/${state.data.timeSlot}`;
            axios
            .get(url)
            .then(res => {
                setReqData(res.data);
            })
        }
    }, [])
   
    return ( <>
    <Header title={acc.name || "Mechanics"} />
    <NavBar navtype={user} />

    <div className="Req_Det_Page_Body">
        <div className="Req_Det_Page_Wrapper">
            {reqData.length === 0? null : reqData.map((x,i) => <Requests key={i} data={x} type={user} cancel={cancel_desc} />)}
        </div>
    </div>
</>);
}
 
export default ReqDetail;