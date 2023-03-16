import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
// Components
import LoginAdmin from "./components/admin/loginAdmin";
import ClientReg from "./components/client/clientReg";
import LoginUser from "./components/user/loginUser";
import StoreReg from "./components/store/storeReg";
import StoreHome from "./components/store/storeHome";
// CSS
import './css/admin/loginAdmin.css';
import './css/user/loginUser.css';
import './css/client/clientReg.css';
import './css/store/storeReg.css';


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
  // SIGNUP for users
  const handleSignup = (type='client', new_obj) => {
    if (type === 'client') {
      // save client profile
      const url_client = urlhead + '/client';
      const newclient = {
        email: new_obj.email,
        password: new_obj.pwd,
        name: new_obj.name,
        phoneNumber: new_obj.phoneNum,
        surName: new_obj.surname
      }
      axios.post(url_client, newclient);

      // save cars
      const url_car = urlhead + '/car';
      var newcar;
      new_obj.cars.forEach(c => {
        newcar = {
          ownerEmail: new_obj.email,
          make: c.make,
          model: c.model,
          year: c.year,
          mileage: c.mileage,
          transmission: c.transmission,
          drivetrain: c.drivetrain
        };
        axios.post(url_car, newcar);
      });
    }
    else {
      const url_store = urlhead + '/store';
      const newstore = {
        name: new_obj.name,
        email: new_obj.email,
        password: new_obj.pwd,
        phoneNumber: new_obj.phoneNum,
        supName: new_obj.supName,
        address: new_obj.address,
        city: new_obj.city,
        province: new_obj.province,
        postalCode: new_obj.postal,
        description: new_obj.desc,
        facebook: new_obj.facebook,
        instagram: new_obj.ins,
        service: new_obj.service,
        defaultQuota: new_obj.quota,
        imgurl: new_obj.pic
      }
      axios.post(url_store, newstore);
    }

    // navigate back to login page
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
        {/* admin routes */}
        <Route path="/admin" element={
          <LoginAdmin loginFunction={handleLogin} />
        } />

        {/* user routes */}
        <Route path="/" element={
          <LoginUser loginFunction={handleLogin} />
        } />

        {/* client routes */}
        <Route path="/clientReg" element={
          <ClientReg signupFunction={handleSignup} />
        } />

        {/* store routes */}
        <Route path="/storeReg" element={
          <StoreReg signupFunction={handleSignup} />
        } />
        <Route path="/storeHome" element={
          <StoreHome />
        } />
      </Routes>
    </div>
  );
}

export default App;
