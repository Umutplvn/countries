import React from 'react'
import world from "../assets/world.png"
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
            <div style={{
                width: "100vw", 
                borderBottom: "1.5px solid #e4e3e3", 
                display: "flex", 
                justifyContent: "center" 
            }}>
                <div style={{
                    padding: "0.3rem 0 0 2rem",
                    display: "flex",
                    cursor: "pointer",
                    maxWidth: "1200px",
                    width: "100%",
                }}>
                    <img src={world} alt="" style={{ width: "30px", height: "30px" }} />
                    <h1 style={{
                        height: "30px",
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "0.5rem",
                        fontFamily: "Montserrat sans-serif",
                        fontWeight: "600",
                        fontSize: "1.2rem"
                    }}>
                        GeoNavigator
                    </h1>
                </div>
            </div>
        </Link>
    )
}

export default Header
