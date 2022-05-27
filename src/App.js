import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Nav } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/product/list.component";



function App() {
  return (
    <Router>
      <Navbar bg="dark" fixed="top" expand="sm" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav.Link href="/">Portfolio</Nav.Link>
            <Nav.Link href="/">Projects</Nav.Link>
            <Nav.Link href="/">Resume</Nav.Link>
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="/">Skills</Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-5">
        <Row>
          <Col md={12}>
            <Routes>
              <Route exact path="/" element={<ProductList />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
