import axios from "axios";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import './styles.css';
import NavBar from "./components/navBar";
import Header from "./components/header";
import SearchBar from "./components/searchBar";
import Footer from "./components/footer";
import Home from "./components/home";
import UpdateRestaurant from "./components/updateRestaurant";


function App() {

  const [restdata, setRestdata] = useState([]);
  const [display, setDisplay] = useState([]);

  // read data from db
  useEffect(() => {
    const url = `http://localhost:5000/api/res`;
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setRestdata(res.data);
        setDisplay(res.data);
      })
      .catch((err) => console.log("ERROR in reading data from collection: ", err));
  }, []);
  
  // event listeners
  // DELETE
  const handleDelete = async (id) => {
    const url = `http://localhost:5000/api/res/${id}`;
    await axios.delete(url);

    const newRestdata = restdata.filter((res) => res._id !== id);
    console.log(newRestdata);
    setRestdata(newRestdata);
    setDisplay(newRestdata);
  };
  // UPDATE
  const handleUpdate = async (id, reviews, rating) => {
    const url = `http://localhost:5000/api/res/${id}`;
    await axios.put(url, {
      reviews, rating
    });

    const newRestdata = restdata.map(b => b._id===id? {...b, reviews, rating}:b);
    setRestdata(newRestdata);
    setDisplay(newRestdata);
  };
  // SEARCH
  const handleSearch = (input) => {
    var newdisplay;
    if (input === "" || input === undefined || input === null)
      newdisplay = restdata;
    else {
      const ratingsearch = parseInt(input);
      if (isNaN(ratingsearch))
        newdisplay = restdata.filter(dat => dat.location.toLowerCase().includes(input.toLowerCase()));
      else
        newdisplay = restdata.filter(dat => dat.rating >= ratingsearch);
    }
    setDisplay(newdisplay);
  }

  
  return (
    <div className="App">
      <NavBar />
      <Header />
      <SearchBar onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Home 
          data={display}
          onDelete={handleDelete}
        />} />
        <Route path="/update/:id" element={<UpdateRestaurant 
          onUpdate={handleUpdate} 
          data={restdata} 
        />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
