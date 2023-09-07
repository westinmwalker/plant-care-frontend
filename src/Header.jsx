import axios from "axios";
import { Modal } from "./Modal";
import { useEffect, useState } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Logout } from "./Logout";

export function Header() {
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
        <a href="#">Home</a> | <a href="/schedules">My Schedule</a>
      </nav>
    </header>
  );
}
