import "../Scss/Header.scss";
import cortilogo from "../../public/headerimg/CRYPTOFOLIO.svg";
import Sidebar from "./seadbar/Sidebar";
import { Link } from "react-router-dom";


const Header = ({ currency, setCurrency }) => {
  return (
    <Header currency={currency} setCurrency={setCurrency} />,
    <header>
      <div className="container">
        <div className="heder">
         <Link to={'/'}><img src={cortilogo} alt="-not-found-img" /></Link>
          <div className="header_right">
            <select
              onChange={(e) => setCurrency(e.target.value)}
            
            >
              <option value="USD">USD</option>
              <option value="TRY">TRY</option>
              <option value="ETH">ETH</option>
            </select>
            <Sidebar/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
