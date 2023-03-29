import Header from "../header";
import { useState, useEffect } from "react";
import axios from "axios";

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

    return ( 
   <div className="Admin_Main_Page_wrapper">
        <Header title="Mechanics - Admin" />

        <div className="Admin_Main_Page_Search">
                <input type="text" placeholder="Search Engine For Account Email" />
                <button className="ad_mp_search_button">Search</button>
        </div>

        <input className="Admin_Main_Page_CheckBox" type="button" value="New Client Account" />
        <input className="Admin_Main_Page_CheckBox" type="button" value="New Store Account" />

        <table className="Admin_Main_Page_ViewList">
            <tbody>
                {allClient.map(c => <tr className="Admin_Main_Page_Row_One" key={c.email}>
                    <td className="admin_Main_Page_td1"><strong>Account Type</strong>: Client</td>
                    <td className="admin_Main_Page_td2"><strong>Name</strong>: {c.name}</td>
                    <td className="admin_Main_Page_td3"><strong>Email</strong>: {c.email}</td>
                    <td className="Admin_Main_Page_RowDetailButton"><button>Detail</button></td>
                    <td className="Admin_Main_Page_RowDeleteButton"><button>Delete</button></td>
                </tr>)}
                {allStore.map(c => <tr className="Admin_Main_Page_Row_One" key={c.email}>
                    <td className="admin_Main_Page_td1"><strong>Account Type</strong>: Store</td>
                    <td className="admin_Main_Page_td2"><strong>Name</strong>: {c.name}</td>
                    <td className="admin_Main_Page_td3"><strong>Email</strong>: {c.email}</td>
                    <td className="Admin_Main_Page_RowDetailButton"><button>Detail</button></td>
                    <td className="Admin_Main_Page_RowDeleteButton"><button>Delete</button></td>
                </tr>)}
            </tbody>
        </table>

   </div> 
     );
}
 
export default AdminHome;