import React, { Component } from 'react';
import { Navbar } from "react-bootstrap";

class Header extends Component {
    render(){
        return(
            <Navbar bg="light">
                <Navbar.Brand>Carousel</Navbar.Brand>
            </Navbar>
        )
    }
}

export default Header;
