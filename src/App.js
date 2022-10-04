// eslint-disable-next-line
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import PrivateRoute from "./components/privateRoute";
import Dashboard from "./pages/Dashboard";
import Rooms from "./pages/Rooms";
import Bookings from "./pages/Bookings";
import Contact from "./pages/Contact";
import Users from "./pages/Users";
import { ContextProvider } from "./context/GlobalContext";

function App() {
  const [user, setUser] = useState(null);
  // eslint-disable-next-line
  const login = () => {
    //My request in this line =>
    setUser({
      email: "admin@example.com",
      password: "example",
    });
    localStorage.setItem("isLogin", true);
    return <Navigate to="/"/>
  };
  const logout = () => {setUser(null); localStorage.removeItem("isLogin");};

  return (
    <Router basename="/sprint_04">
      {/* <div style={{ position:"relative", display: "inline-block", width: "100%", backgroundColor:"gray", zIndex:"0"}}>
        <Link to="/login">Login </Link>
        <Link to="/"> | Dashboard</Link>
      {user ? <button style={{ float: "right", padding: "5px"}} onClick={logout}>Logout</button> : <button style={{ float: "right", padding: "5px"}} onClick={login}>Login</button>}
      </div>  */}


      <ContextProvider>
        <Routes>
          <Route path="/login" element={user ? <Navigate to="/"/> : <Login setUser={setUser} />} />
          <Route element={<PrivateRoute user={user} logout={logout} />}>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<Dashboard logout={logout} />} />
            <Route path="/rooms" element={<Rooms logout={logout} />} />
            <Route path="/bookings" element={<Bookings logout={logout} />} />
            <Route path="/users" element={<Users logout={logout} />} />
            <Route path="/users/:id" element={<h1>ID: </h1>} />
            <Route path="/contact" element={<Contact logout={logout} />} />
          </Route>
        </Routes>
      </ContextProvider>
    </Router>
  );
}

export default App;
