import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useIsRTL } from "react-bootstrap/esm/ThemeProvider";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function SearchSelecter({ set_call_url }) {
  const [url, set_url] = useState("https://restcountries.com/v3.1/name/");
  const [search_query, set_search_query] = useState("");
  const [complete_url, set_complete_url] = useState("");

  useEffect(() => {
    set_complete_url(url + search_query);
  }, [url]);
  useEffect(() => {
    set_complete_url(url + search_query);
  }, [search_query]);
  return (
    <Navbar bg="light">
      <Container fluid>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              style={{ width: "max-content", color: "black" }}
              href="#action1"
            >
              Select an Option
            </Nav.Link>
          </Nav>
          <>
            <Form.Group style={{ margin: "10px 10px" }}>
              <Form.Select
                onChange={(e) => {
                  set_url(e.target.value);
                }}
                style={{ maxHeight: "100px", width: "max-content" }}
              >
                <option value="https://restcountries.com/v3.1/name/">
                  NAME
                </option>
                <option value="https://restcountries.com/v3.1/currency/">
                  CURRENCY
                </option>
                <option value="https://restcountries.com/v3.1/lang/">
                  LANGUAGE
                </option>
                <option value="https://restcountries.com/v3.1/capital/">
                  CAPITAL CITY
                </option>
                <option value="https://restcountries.com/v3.1/region/">
                  REGION
                </option>
                <option value="https://restcountries.com/v3.1/subregion/">
                  SUBREGION
                </option>
              </Form.Select>
            </Form.Group>
          </>
          <Form className="d-flex" style={{ width: "100%" }}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => {
                set_search_query(e.target.value);
              }}
            />
            <Button
              variant="outline-dark"
              style={{ borderColor: "#ced4da" }}
              onClick={() => {
                set_call_url(complete_url);
              }}
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SearchSelecter;
