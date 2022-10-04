import { useEffect } from "react";
import LeftbarAnimated from "../components/styled/LeftbarAnimated";
// import image from "../assets/img/image";



const Contact = ({logout, props}) => {
  useEffect(() => {
    document.title = "Dashboard | Contact";
  }, []);
  return (
    <>
        <LeftbarAnimated logout={logout}>
          Contact is empty
        </LeftbarAnimated>
    </>
  );
};
export default Contact;
