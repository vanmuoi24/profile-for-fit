"use client";

import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation"; // Thay thế useRouter
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  TwitterIcon,
} from "./Icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { motion } from "framer-motion";
import Language from "./Language";
import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
const MotionLink = motion(Link);

interface CustomLinkProps {
  href: string;
  title: string;
  className?: string;
}
interface IconProps {
  className?: string; // Sử dụng '?' để cho phép giá trị này không bắt buộc
}

const CustomLink = ({ href, title, className = "" }: CustomLinkProps) => {
  const pathname = usePathname();

  // Lấy đường dẫn hiện tại
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block w-0 bg-black absolute left-0 bottom-0.5 group-hover:w-full transition-[width] duration-300
          ${pathname === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavbarAll = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#"> Mr.Tèn</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <Nav.Link href="/">Project</Nav.Link>
            <Nav.Link href="/">Articles</Nav.Link>
            <Language />
          </Nav>
          <Form className="d-flex gap-3  justify-center items-center  ">
            <MotionLink href="/login" className="size-6" whileHover={{ y: -2 }}>
              <TwitterIcon className=""></TwitterIcon>
            </MotionLink>
            <MotionLink
              href="/signup"
              className="size-6"
              whileHover={{ y: -2 }}
            >
              <GithubIcon className={""} />
            </MotionLink>
            <MotionLink
              href="/signup"
              className="size-6"
              whileHover={{ y: -2 }}
            >
              <LinkedInIcon className={""} />
            </MotionLink>
            <MotionLink
              href="/signup"
              className="size-6"
              whileHover={{ y: -2 }}
            >
              <PinterestIcon className={""} />
            </MotionLink>
            <MotionLink
              href="/signup"
              className="size-6"
              whileHover={{ y: -2 }}
            >
              <DribbbleIcon className={""} />
            </MotionLink>{" "}
            <button
              onClick={toggleDarkMode}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-105 transition-transform"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <FiSun className="w-6 h-6 text-yellow-500" />
              ) : (
                <FiMoon className="w-6 h-6 text-gray-800 dark:text-gray-300" />
              )}
            </button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarAll;
