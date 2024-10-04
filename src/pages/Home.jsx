
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/authSlice"; 
import { useCookies } from "react-cookie";
import { ToastContainer } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cookies, removeCookie] = useCookies([]);
  const { user } = useSelector((state) => state.auth); 

  const handleLogout = () => {
    removeCookie("token");
    dispatch(logout());
    navigate("/signup");
  };

  return (
    <>
      <div className="home_page">
        <h4> Welcome <span>{user ? user.username : 'Guest'}</span> </h4>
        <button onClick={handleLogout}>LOGOUT</button>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;
