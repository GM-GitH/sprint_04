import { useEffect } from "react";
// import image from "../assets/img/image";
// import GuestList from "../components/GuestList";
import LeftbarAnimated from "../components/styled/LeftbarAnimated";

const Users = ({ logout }) => {
  useEffect(() => {
    document.title = "Dashboard | Users";
  }, []);
  return (
    <>
      <LeftbarAnimated logout={logout}>Users is empty</LeftbarAnimated>
    </>
  );
};
export default Users;
