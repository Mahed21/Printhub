import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Pages/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Footer/Footer";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import AuthProvider from "./Pages/Context/AuthProvider";

import Spinner from "./Pages/Spinner/Spinner";
import BookingListOnDate from "./Pages/Booking/BookingListOnDate";
import IndoorAdd from "./Pages/IndoorAdd/IndoorAdd";
import Oponant from "./Pages/Oponant/Oponant";
import RequestedIndoor from "./Pages/AdminDashboard/RequestedIndoor";
import ManageOponant from "./Pages/UserDashBoard/ManageOponant";
import AprovedTeamRequest from "./Pages/AdminDashboard/AprovedTeamRequest";

function App() {
  return (
    <div className="app pt-5 ">
      <div className="container">
        <AuthProvider>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/spinner" element={<Spinner />} />
            <Route path="/bookingListOnDate" element={<BookingListOnDate />} />
            <Route path="/indoorAdd" element={<IndoorAdd />} />
            <Route path="/oponant" element={<Oponant />} />
            <Route path="/requestedIndoor" element={<RequestedIndoor />} />
            <Route path="/manageOponant" element={<ManageOponant />} />
            <Route
              path="/aprovedTeamRequest"
              element={<AprovedTeamRequest />}
            />
          </Routes>
          <Footer></Footer>
        </AuthProvider>
      </div>
    </div>
  );
}

export default App;
