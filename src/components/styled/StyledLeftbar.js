import { Link } from "react-router-dom";
import styled from "styled-components";
import img from "../../assets/icon/img";
import dashboard from "../../assets/icon/1dashboard.png"
import rooms from "../../assets/icon/2rooms.png"
import bookings from "../../assets/icon/3bookings.png"
import users from "../../assets/icon/4users.png"
import contact from "../../assets/icon/5guest.png"

const LeftbarStyle = styled.div`
  .logo {
    box-sizing: border-box;
    max-width: 100%;
    padding: 9% 20% 18% 16%;
  }
  a {
    display: block;
    padding: 8px 16px 8px 0;
    text-decoration: none;
    text-align: left;
    cursor: pointer;
    padding: 21px 0 21px 56px;
    width: 80%;
    color: #799283;
    &:hover {
      color: #e23428;
      border-left: 5px solid #e23428;
      & img {
        filter: brightness(.55) hue-rotate(241deg) saturate(20);
      }
    }
    & img {
      width: 24px;
      vertical-align: middle;
      margin-right: 20px
    }
  }
  #leftbar {
    display: block;
    height: 100%;
    background-color: #ffffff;
    color: #799283;
    font-family: "Poppins", sans-serif;
    width: 20%;
    box-shadow: 13pt 3pt 40pt #00000005;
  }
`;

export const LeftBar = () => {
  return (
    <LeftbarStyle>
      <div className="left-panel"></div>
      <div id="leftbar">
        <div id="leftbar">
          <img className="logo" src={img.logo} alt="Hotel Admin Dashboard logo" />
          <Link to="/dashboard"><img src={dashboard} alt="" /> Dashboard</Link>
          <Link to="/rooms"><img src={rooms} alt="" /> Rooms</Link>
          <Link to="/bookings"><img src={bookings} alt="" /> Bookings</Link>
          <Link to="/users"><img src={users} alt="" /> Users</Link>
          <Link to="/contact"><img src={contact} alt="" /> Contact</Link>
        </div>
      </div>
    </LeftbarStyle>
  );
};
