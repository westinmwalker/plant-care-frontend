import axios from "axios";
import { Modal } from "./Modal";
import { useEffect, useState } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Logout } from "./Logout";
import { SchedulesIndex } from "./ScheduleIndex";

export function Header() {
  const [schedules, setSchedules] = useState([]);
  const [isSignupVisible, setIsSignupVisible] = useState(false);

  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const handleSignupShow = () => {
    setIsSignupVisible(true);
  };

  const handleSignupClose = () => {
    setIsSignupVisible(false);
  };

  const handleLoginShow = () => {
    setIsLoginVisible(true);
  };

  const handleLoginClose = () => {
    setIsLoginVisible(false);
  };

  const handleIndexSchedules = () => {
    console.log("handleIndexSchedules");
    axios.get("http://localhost:3000/schedules.json").then((response) => {
      console.log(response.data);
      setSchedules(response.data);
    });
  };

  useEffect(handleIndexSchedules, []);

  return (
    <header>
      <Modal show={isSignupVisible} onClose={handleSignupClose}>
        <Signup />
      </Modal>
      <a onClick={handleSignupShow} href="#">
        Signup
      </a>{" "}
      |{" "}
      <Modal show={isLoginVisible} onClose={handleLoginClose}>
        <Login />
      </Modal>
      <a onClick={handleLoginShow} href="#">
        Login
      </a>{" "}
      | <Logout />
      <nav>
        <a href="#">Home</a> | <a href={<SchedulesIndex schedules={schedules} />}>My Schedule</a>
      </nav>
    </header>
  );
}
