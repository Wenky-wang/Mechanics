import Header from "../header";
import { useState, useEffect } from "react";
import axios from "axios";
import {  NavLink } from 'react-router-dom';

const AdminHome = ({ url_head }) => {
    const [allClient, setAllClient] = useState([]);
    const [allStore, setAllStore] = useState([]);

    useEffect(() => {
        async function fetchDataClient() {
            const url_client = `${url_head}/client`;
            await axios.get(url_client).then(res => { setAllClient(res.data) });
        }
        fetchDataClient();
    }, [url_head])

    useEffect(() => {
        async function fetchDataStore() {
            const url_store = `${url_head}/store`;
            await axios.get(url_store).then(res => { setAllStore(res.data) });
        }
        fetchDataStore();
    }, [url_head])

    function handleDelete(email, type) {
        if (type === "client") {
            const newClient = allClient.filter(x => x.email !== email);
            setAllClient(newClient);
            const url_client = `${url_head}/client/${email}`;
            axios.delete(url_client);
        }
        else {
            const newStore = allStore.filter(x => x.email !== email);
            setAllStore(newStore);
            const url_store = `${url_head}/store/${email}`;
            axios.delete(url_store);
        }
    }

    return ( 
   <div className="Admin_Main_Page_wrapper">
        <Header title="Mechanics - Admin" />

        <div className="Admin_Main_Page_Search">
            <input type="text" placeholder="Search Engine For Account Email" />
            <button className="ad_mp_search_button">Search</button>
        </div>

        <NavLink className="Admin_Main_Page_CheckBox" to="./addClient">New Client Account</NavLink>
        <NavLink className="Admin_Main_Page_CheckBox" to="./addStore">New Store Account</NavLink>

        <table className="Admin_Main_Page_ViewList">
            <tbody>
                {allClient.map(c => <tr className="Admin_Main_Page_Row_One" key={c.email}>
                    <td className="admin_Main_Page_td1"><strong>Account Type</strong>: Client</td>
                    <td className="admin_Main_Page_td2"><strong>Name</strong>: {c.name}</td>
                    <td className="admin_Main_Page_td3"><strong>Email</strong>: {c.email}</td>
                    <td className="Admin_Main_Page_RowDetailButton"><button>Detail</button></td>
                    <td className="Admin_Main_Page_RowDeleteButton"><button onClick={() => handleDelete(c.email, "client")}>Delete</button></td>
                </tr>)}
                {allStore.map(c => <tr className="Admin_Main_Page_Row_One" key={c.email}>
                    <td className="admin_Main_Page_td1"><strong>Account Type</strong>: Store</td>
                    <td className="admin_Main_Page_td2"><strong>Name</strong>: {c.name}</td>
                    <td className="admin_Main_Page_td3"><strong>Email</strong>: {c.email}</td>
                    <td className="Admin_Main_Page_RowDetailButton"><button>Detail</button></td>
                    <td className="Admin_Main_Page_RowDeleteButton"><button onClick={() => handleDelete(c.email, "store")}>Delete</button></td>
                </tr>)}
            </tbody>
        </table>

   </div> 
     );
}
 
export default AdminHome;