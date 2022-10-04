import { useEffect } from "react";
import LeftbarAnimated from "../components/styled/LeftbarAnimated";
// import image from "../assets/img/image";



const Bookings = ({logout}) => {
  useEffect(() => {
    document.title = "Dashboard | Bookings";
  }, []);
  return (
    <>
      <LeftbarAnimated logout={logout}>Bookings is empty</LeftbarAnimated>
    </>
  );
};
export default Bookings;
