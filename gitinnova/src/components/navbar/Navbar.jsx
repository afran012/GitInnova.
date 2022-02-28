import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { /*Link,*/ useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { logout } from "../../action/actionLogin";
import { Button, Container, Form, FormControl, Nav, Navbar, /*NavbarBrand, */NavDropdown } from "react-bootstrap"
import querystring from 'query-string';
import { userFormHook } from "../../hooks/userFormHook";
import { getAuth } from "firebase/auth";
import Cookies from 'universal-cookie'

const style1 = {
    color: "white",
    //backgroundColor: "#db7093"

}



export const NavbarMain = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logout())
        //navigate("/login")
    }

    const { id , name } = useSelector((store) => store.login);

    const cookies = new Cookies();
    console.log('====================================');
    console.log(cookies.get("nombreUsuario"));
    console.log('====================================');


    useEffect(() => {
       
    }, [])
    






    return (
        <header id="header" className="header">
            <section id="logo">
                <h1>GitInnova</h1>
            </section>
            <nav id="navbar">
                <ul>
                    <li id="ubication">
                        <img src="" alt="" />
                        <h2> {cookies.get("nombreUsuario")} </h2>
                    </li>
                    <li>
                        <img src="" alt="" />
                        <h2 onClick={() => handleLogout()}>Cerrar sesion</h2>

                    </li>
                </ul>
            </nav>
        </header>

    )
};