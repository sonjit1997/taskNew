import React from 'react';
import { useRouter } from 'next/router';
import { FaFacebookF,FaTwitter,FaGooglePlusG} from 'react-icons/fa';
const Navbar = () => {
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    router.push('/login');
  };

  return (
    <nav className="navbar ">
      <div className="nav-container w-100">
        <a  href="#"><img src='../../108816459_2721138061.png' className="nav-logo"/></a>
     
        <form className="nav-search d-flex">
        <section className="navbar-mobile ">
        <span className="navbar-divider d-mobile-none"></span>
        <ul className="nav nav-navbar ">
          <li className="nav-item">
            <a className="nav-link" href="index">Boostings</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="about">Accounts</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="features">games</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="pricing">demo </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="contact">faqs</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="features"><FaFacebookF className='text-light' /></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="pricing"><FaTwitter className='text-light'/></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="contact"><FaGooglePlusG className='text-light'/></a>
          </li>
        </ul>
      </section>
        <button className=" account-btn " onClick={handleLogin}>Member Area </button>
        </form>
      </div>
      <style jsx>
        {`
        .navbar {
            background-color: transparent;
            padding:8px 40px;
            border-bottom: 1px solid;
         
          }
       
          .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          
          .nav-logo {
            height: 64px;
           
          }
        
          .nav-item {
            vertical-align: middle;
           
          }
        


          .nav-link {
            padding-top:1; 
            padding-bottom: 0;
            text-decoration: none;
            color: #C4B8DE;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-size: 0.67rem;
            word-spacing: 2px;
            
          }
          @media screen and (max-width: 1225px) {
            .nav-link {
              padding-top:8px ; 
            }
          }
          .nav-link:hover {
            box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
            color: #FFFFFF;
            
          }
          
          .search-input {
            padding: 5px;
            border: 1px solid #ccc;
          }
          
          
         
        
          
        `}
      </style>
    </nav>
  );
};

export default Navbar;
