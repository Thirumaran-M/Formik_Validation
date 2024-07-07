import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { FaBook, FaUser, FaHome, FaBookReader } from "react-icons/fa";

const Header = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        <FaHome /> Home
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar" />
      <Navbar.Collapse id="navbar">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link as={Link} to="/Author">
              <FaUser /> Add Author
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/Books">
              <FaBook /> Add Book
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/AuthorPage">
              <FaUser /> Authors Collection
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/BooksPage">
              <FaBookReader /> Books Collection
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
