import React, { useEffect } from "react";
import { useDispatch } from "react-redux";


import { logout } from "../../action/actionLogin";

import Cookies from 'universal-cookie'





export const NavbarMain = () => {

    const dispatch = useDispatch()


    const handleLogout = () => {
        dispatch(logout())

    }



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