import { useEffect } from "react";
import { RoomList } from "../components/roomList";
import LeftbarAnimated from "../components/styled/LeftbarAnimated";
// import image from "../assets/img/image";

const Rooms = ({ logout }) => {
  useEffect(() => {
    document.title = "Dashboard | Rooms";
  }, []);
  return (
    <>
      <LeftbarAnimated logout={logout}>
        <RoomList />
      </LeftbarAnimated>
    </>
  );
};
export default Rooms;
