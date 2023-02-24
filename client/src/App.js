import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import LoginAdmin from "./components/admin/loginAdmin";
import MainStore from "./components/store/mainStore";
// CSS
import './css/admin/loginAdmin.css';


function App() {

  // const variables declaration
  const urlhead = "http://localhost:5000";
  const navigate = useNavigate();
  const [clientOnline, setClientOnline] = useState({});
  const [storeOnline, setStoreOnline] = useState({});
  const [adminOnline, setAdminOnline] = useState({});



  // LOGIN (for admin, client, and stores)
  const handleLogin = async (email="", pwd="", typeLogin="client") => {
    // verify if user input the email
    if (email === "") alert("Please input an account email for login.")
    else {
      const url = `${urlhead}/${typeLogin}/${email}`;
      axios.get(url).then((res) => {
        // verify if account exists
        if (res.data.length === 0) alert("Sorry no such account.");
        else {
          // verify if password match with database
          if (res.data[0].password !== pwd) alert("Password incorrect. Please re-enter.");
          else {
            // password correct, figure out which page to go based on login type
            if (typeLogin === 'admin') {
              setAdminOnline(res.data[0]);
              navigate('/adminHome');
            }
            else if (typeLogin === 'store') {
              setStoreOnline(res.data[0]);
              navigate('/storeHome');
            }
            else {
              setClientOnline(res.data[0]);
              navigate('/clientHome');
            }
          }
        }
      })
    }
  }
  // LOGOUT (for admin, client, and stores)
  const handleLogout = (typeLogout="client") => {
    if (typeLogout === "admin") setAdminOnline({});
    else if (typeLogout === "store") setStoreOnline({});
    else setClientOnline({});

    navigate('/');
  }


  // ADMIN operation
  // 1) add store
  const adminAddStore = (email="", password="", name="", phoneNumber="", supName="", fax="", 
                        desc="", address="", city="", province="", postalCode="", service=[], availability={}) => {
    // validation
    if (email === "") {
      alert("Please input email.");
      return false;
    }
    if (password === "") {
      alert("Please input password.");
      return false;
    }
    if (name === "") {
      alert("Please input a name.");
      return false;
    }
    
    // after passing all validation, input data into database
    const newStore = {email, password, name, phoneNumber, supName, fax, desc, address, city, province, postalCode, service, availability};
    const url = `${urlhead}/store`;
    axios.post(url, newStore);
    return true;  // true means data inserted successfully
  }

  // 2) delete account (for clients and stores)
  const adminDeleteAccount = (email, accType) => {
    const url = `${urlhead}/${accType}/${email}`;
    axios.delete(url);
  }

  
  return (
    <div className="App">
      <Routes>
        <Route path="/admin" element={
          <LoginAdmin loginFunction={handleLogin} />
        } />
        <Route path="/mainstore" element={
          <MainStore />
        } />
      </Routes>
    </div>
  );
}

export default App;
