const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors());
app.use(express.static("public"));


//* mongoDB connection url and model
const url = "mongodb://127.0.0.1:27017/mechanics";
const Admins = require("./models/admins");
const Appointments = require("./models/appointments");
const Cars = require("./models/cars");
const Clients = require("./models/clients");
const Stores = require("./models/stores");
const Availability = require("./models/availability");

mongoose.connect(url);
console.log("database connected");



/////// ADMIN ///////
// GET
app.get("/admin/:email", async (req,res) => {
  try {
    const email = req.params.email;

    await mongoose.connect(url);
    console.log("database connected");

    Admins.find(
      { email },
      (err, admindata) => {
      if (err) res.send("ERROR: ", err);
      else {
        console.log("# Admin: data loaded");
        res.send(admindata);
        // mongoose.connection.close();
      }
    });
  } catch (err) { console.log("ERROR: ", err); }
});
// UPDATE or DELETE Admin account is not allowed


/////// APPOINTMENT ///////
// GET
app.get("/appoint/client/:email", async (req,res) => {
  try {
    const email = req.params.email;

    await mongoose.connect(url);
    console.log("database connected");

    Appointments.find(
      { clientEmail: email },
      (err, appointdata) => {
        if (err) {
          res.send("ERROR: ", err);
          console.log("ERROR: ", err);
        }
        else {
          console.log("# Appoint: data loaded");
          res.send(appointdata);
          // mongoose.connection.close();
        }
    });
  } catch (err) { console.log("ERROR: ", err); }
});
app.get("/appoint/store/:email/:close", async (req,res) => {
  try {
    const email = req.params.email;
    const close = req.params.close;

    await mongoose.connect(url);
    console.log("database connected");

    Appointments.find(
      { storeEmail: email },
      (err, appointdata) => {
        if (err) {
          res.send("ERROR: ", err);
          console.log("ERROR: ", err);
        }
        else {
          console.log("# Appoint: data loaded");
          res.send(appointdata);
          if (close === "close") mongoose.connection.close();
        }
    });
  } catch (err) { console.log("ERROR: ", err); }
});
app.get("/appoint/time/:day/:time", async (req,res) => {
  try {
    const day = req.params.day;
    const time = req.params.time;

    await mongoose.connect(url);
    console.log("database connected");

    Appointments.find(
      { day:day, timeSlot:time },
      (err, appointdata) => {
        if (err) {
          res.send("ERROR: ", err);
          console.log("ERROR: ", err);
        }
        else {
          console.log("# Appoint: data loaded");
          res.send(appointdata);
          // mongoose.connection.close();
        }
    });
  } catch (err) { console.log("ERROR: ", err); }
});
// ADD
app.post("/appoint", async (req,res) => {
  try {
      const { clientEmail, storeEmail, storeName, clientName, clientPhoneNum, 
        day, timeSlot, carMake, carModel, carYear, carMileage, carTransmission, carDrivetrain, 
        problemCate, problemDesc, apptStatus, cancelledByStore, cancelledByClient } = req.body;
      const newAppoint = new Appointments({
        clientEmail, storeEmail, storeName, clientName, clientPhoneNum, 
        day, timeSlot, carMake, carModel, carYear, carMileage, carTransmission, carDrivetrain, 
        problemCate, problemDesc, apptStatus, cancelledByStore, cancelledByClient
      })
      
      await mongoose.connect(url); 
      console.log("database connected");

      newAppoint.save((err) => {
          if (err) {
            res.send("ERROR: ", err);
            console.log("ERROR: ", err);
          }
          else {
              console.log("# Appoint: new document added");
              res.send("# Appoint: new document added");
              // mongoose.connection.close();
          }
      })
    }  catch(err) { console.log("ERROR: ", err); }
})
// UPDATE
app.put("/appoint/:id", async (req,res) => {
  try {
    const { apptStatus, cancelledByStore, cancelledByClient } = req.body;
    let _id = req.params.id;
    _id = mongoose.Types.ObjectId(_id);

    await mongoose.connect(url);
    console.log("database connected");

    Appointments.findByIdAndUpdate(
      _id,
      { apptStatus, cancelledByStore, cancelledByClient },
      (err, doc) => {
        if (err) {
          res.send("ERROR: ", err);
          console.log("ERROR: ", err);
        }
        else if (doc == null) {
          console.log("# Appoint: No matching document was found.");
          res.send("# Appoint: No matching document was found.");
        }
        else {
          console.log("# Appoint: Document updated.");
          res.send("# Appoint: Document updated.");
        }
        // mongoose.connection.close();
      }
    );
  } catch (err) { console.log("ERROR: ", err); }
});
// Appointments could be cancelled, but the record is still there with status changed, the record will not be delted from db


/////// CAR ///////
// GET
app.get("/car/:owneremail", async (req,res) => {
  try {
    const ownerEmail = req.params.owneremail;

    await mongoose.connect(url);
    console.log("database connected");

    Cars.find(
      { ownerEmail },
      (err, cardata) => {
        if (err) {
          res.send("ERROR: ", err);
          console.log("ERROR: ", err);
        }
        else {
          console.log("# Car: data loaded");
          res.send(cardata);
          // mongoose.connection.close();
        }
    });
  } catch (err) { console.log("ERROR: ", err); }
});
// ADD
app.post("/car", async (req,res) => {
  try {
      const { ownerEmail, make, model, year, mileage, transmission, drivertrain } = req.body;
      const newCar = new Cars({
        ownerEmail, make, model, year, mileage, transmission, drivertrain
      })
      
      await mongoose.connect(url); 
      console.log("database connected");

      newCar.save((err) => {
          if (err) {
            res.send("ERROR: ", err);
            console.log("ERROR: ", err);
          }
          else {
              console.log("# Car: new document added");
              res.send("# Car: new document added");
              // mongoose.connection.close();
          }
      })
    }  catch(err) { console.log("ERROR: ", err); }
})
// DELETE
app.delete("/car/:email", async (req,res) => {
  try {
    let email = req.params.email;

    await mongoose.connect(url);
    console.log("database connected");

    Cars.deleteMany(
      { ownerEmail: email }, 
      (err, doc) => {
        if (err) {
          res.send("ERROR: ", err);
          console.log("ERROR: ", err);
        }
        else if (doc == null) {
          console.log("# Car: No matching document was found.");
          res.send("# Car: No matching document was found.");
        } 
        else {
          console.log("# Car: Document(s) deleted.");
          res.send("# Car: Document(s) deleted.");
        }
        // mongoose.connection.close();
      }
    );
  } catch (err) {
    console.log("ERROR: ", err);
  }
});


/////// CLIENT ///////
// GET
app.get("/client", async (req,res) => {
  try {
    await mongoose.connect(url);
    console.log("database connected");

    Clients.find((err, clientdata) => {
        if (err) {
          res.send("ERROR: ", err);
          console.log("ERROR: ", err);
        }
        else {
          console.log("# Client: data loaded");
          res.status(200).send(clientdata);
        }
    });
  } catch (err) { console.log("ERROR: ", err); }
});
app.get("/client/:email", async (req,res) => {
  try {
    const email = req.params.email;

    await mongoose.connect(url);
    console.log("database connected");

    Clients.find(
      {email},
      (err, clientdata) => {
        if (err) {
          res.send("ERROR: ", err);
          console.log("ERROR: ", err);
        }
        else {
          console.log("# Client: data loaded");
          res.send(clientdata);
          // mongoose.connection.close();
        }
    });
  } catch (err) { console.log("ERROR: ", err); }
});
// ADD
app.post("/client", async (req,res) => {
  try {
      const { email, password, name, phoneNumber, surName } = req.body;
      const newClient = new Clients({
        email, password, name, phoneNumber, surName
      })
      
      await mongoose.connect(url); 
      console.log("database connected");

      newClient.save((err) => {
          if (err) {
            res.send("ERROR: ", err);
            console.log("ERROR: ", err);
          }
          else {
              console.log("# Client: new document added");
              res.send("# Client: new document added");
              // mongoose.connection.close();
          }
      })
    }  catch(err) { console.log("ERROR: ", err); }
})
// DELETE
app.delete("/client/:email", async (req,res) => {
  try {
    let deleteEmail = req.params.email;

    await mongoose.connect(url);
    console.log("database connected");

    Clients.deleteMany(
      { email: deleteEmail }, 
      (err, doc) => {
        if (err) {
          res.send("ERROR: ", err);
          console.log("ERROR: ", err);
        }
        else if (doc == null) {
          console.log("# Client: No matching document was found."); 
          res.send("# Client: No matching document was found.");
        }
        else {
          console.log("# Client: Document deleted.");
          res.send("# Client: Document deleted.");
        }
        // mongoose.connection.close();
      }
    );
  } catch (err) {
    console.log("ERROR: ", err);
  }
});


/////// STORE ///////
// GET
app.get("/store", async (req,res) => {
  try {
    await mongoose.connect(url);
    console.log("database connected");

    Stores.find((err, storedata) => {
      if (err) {
        res.send("ERROR: ", err);
        console.log("ERROR: ", err);
      }
      else {
        console.log("# Store: data loaded");
        res.send(storedata);
      }
    });
  } catch (err) { console.log("ERROR: ", err); }
});
app.get("/store/:email", async (req,res) => {
  try {
    const email = req.params.email;
    
    await mongoose.connect(url);
    console.log("database connected");

    Stores.find(
      {email},
      (err, storedata) => {
      if (err) {
        res.send("ERROR: ", err);
        console.log("ERROR: ", err);
      }
      else {
        console.log("# Store: data loaded");
        res.send(storedata);
        // mongoose.connection.close();
      }
    });
  } catch (err) { console.log("ERROR: ", err); }
});
// ADD
app.post("/store", async (req,res) => {
  try {
      const { name, email, password, phoneNumber, supName, address, city, 
        province, postalCode, description, facebook, instagram, 
        service, defaultQuota, imgurl } = req.body;  // Attributes
      const newStore = new Stores({
        name, email, password, phoneNumber, supName, address, city, 
        province, postalCode, description, facebook, instagram, 
        service, defaultQuota, imgurl
      })
      
      await mongoose.connect(url); 
      console.log("database connected");

      newStore.save((err) => {
          if (err) {
            res.send("ERROR: ", err);
            console.log("ERROR: ", err);
          }
          else {
              console.log("# Store: new document added");
              res.send("# Store: new document added");
              // mongoose.connection.close();
          }
      })
    }  catch(err) { console.log("ERROR: ", err); }
})
// DELETE
app.delete("/store/:email", async (req,res) => {
  try {
    let deleteEmail = req.params.email;

    await mongoose.connect(url);
    console.log("database connected");

    Stores.deleteMany(
      { email: deleteEmail }, 
      (err, doc) => {
        if (err) {
          res.send("ERROR: ", err);
          console.log("ERROR: ", err);
        }
        else if (doc == null) {
          console.log("# Store: No matching document was found."); 
          res.send("# Store: No matching document was found.");
        }
        else {
          console.log("# Store: Document deleted.");
          res.send("# Store: Document deleted.");
        }
        // mongoose.connection.close();
      }
    );
  } catch (err) {
    console.log("ERROR: ", err);
  }
});


/////// AVAILABILITY ///////
// GET
app.get("/ava/:email", async (req,res) => {
  try {
    const email = req.params.email;

    await mongoose.connect(url);
    console.log("database connected");

    Availability.find(
      { ownerEmail: email },
      (err, avadata) => {
        if (err) {
          res.send(err);
          console.log("ERROR: ", err);
        }
        else {
          console.log("# Ava: data loaded");
          res.send(avadata);
          // mongoose.connection.close();
        }
    });
  } catch (err) { console.log("ERROR: ", err); }
});
// app.get("/ava/time/:time", async (req,res) => {
//   try {
//     const time = req.params.time;

//     await mongoose.connect(url);
//     console.log("database connected");

//     Availability.findOne(
//       { timeSlot: time },
//       (err, avadata) => {
//         if (err) {
//           res.send("ERROR: ", err);
//           console.log("ERROR: ", err);
//         }
//         else {
//           console.log("# Ava: data loaded");
//           res.send(avadata);
//           // mongoose.connection.close();
//         }
//     });
//   } catch (err) { console.log("ERROR: ", err); }
// });

// ADD
app.post("/ava", async (req,res) => {
  try {
      const { ownerEmail, totalQuota } = req.body;
      const bookedQuota = 0;
      // create all days
      let alldates=[];
      for (let i=0; i<=364; i++) {
        var eachday = new Date("2023-01-01");
        eachday.setDate(eachday.getDate() + i);
        alldates.push(`${eachday.getFullYear()}-${eachday.getMonth()+1}-${eachday.getDate()}`);
      }

      await mongoose.connect(url); 
      console.log("database connected");

      // save all availability
      let all_ava = [];
      alldates.forEach(da => {
        for (let j=8; j<=18; j++) {
          let newAva = new Availability({
            ownerEmail,
            date: da,
            timeSlot: j,
            totalQuota,
            bookedQuota: 0
          })
          all_ava.push(newAva);
        }
      });

      Availability.insertMany( all_ava, (err) => {
        if (err) {
          res.send("ERROR: ", err);
          console.log("ERROR: ", err);
        }
        else {
            console.log("# Ava: new document added");
            res.send("# Ava: new document added");
            // mongoose.connection.close();
        }
      })
    }  catch(err) { console.log("ERROR: ", err); }
})
// UPDATE
app.put("/ava/:email/:date/:time", async (req,res) => {
  try {
    const { totalQuota, bookedQuota } = req.body;
    let email = req.params.email;
    let date = req.params.date;
    let time = req.params.time;

    await mongoose.connect(url);
    console.log("database connected");

    Availability.findOneAndUpdate(
      { ownerEmail: email, date: date, timeSlot: time },
      { totalQuota, bookedQuota },
      (err, doc) => {
        if (err) {
          res.send("ERROR: ", err);
          console.log("ERROR: ", err);
        }
        else if (doc == null) {
          console.log("# Ava: No matching document was found.");
          res.send("# Ava: No matching document was found.");
        }
        else {
          console.log("# Ava: Document updated.");
          res.send("# Ava: Document updated.");
        }
        // mongoose.connection.close();
      }
    );
  } catch (err) { console.log("ERROR: ", err); }
});
// DELETE
app.delete("/ava/:email", async (req,res) => {
  try {
    let email = req.params.email;

    await mongoose.connect(url);
    console.log("database connected");

    Availability.deleteMany(
      { ownerEmail: email }, 
      (err, doc) => {
        if (err) {
          res.send("ERROR: ", err);
          console.log("ERROR: ", err);
        }
        else if (doc == null) {
          console.log("# AVA: No matching document was found.");
          res.send("# AVA: No matching document was found.");
        } 
        else {
          console.log("# AVA: Document(s) deleted.");
          res.send("# AVA: Document(s) deleted.");
        }
        // mongoose.connection.close();
      }
    );
  } catch (err) {
    console.log("ERROR: ", err);
  }
});



// serer listening on port 5000
const port = process.env.port || 5000;
app.listen(port, () => {
  console.log(`The server is up and listening on port ${port}`);
});
