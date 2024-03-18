import React, { useContext } from 'react';
import { redirect as Redirect } from 'react-router-dom'; // Import Redirect
import { useQuery } from "@apollo/react-hooks";
import { AuthContext } from "./Context/auth";
import { FETCH_USERS_QUERY } from "./util/Graphql";
import { MdOutlineExitToApp } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Login from './Login';


const Home = () => {
  const { user, logout } = useContext(AuthContext);


  const handleLogout = () => {
    logout();
  };

  return (
  <>
    { user &&
    <div>
       
      <h1>Venus Project</h1>
      <p>Welcome {user.username}!</p>
      <li className="loginLogo newNavLogo">
        <Link to="" className="link" onClick={handleLogout}>
          <div className="logo2">
            <MdOutlineExitToApp />
            <p className="nameLogo">Logout</p>
          </div>
        </Link>
      </li>
      
        </div>
        
      } 
      {!user && <Login/>}
      </>
  );
};

export default Home;

