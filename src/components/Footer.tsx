import React from 'react'

const Footer = () => {
  return (
    <div style={{
        width: "100vw", 
        borderTop: "1.5px solid #e6e5e5", 
        display: "flex", 
        justifyContent: "center",
        position:"fixed",
        bottom:"0",
        backgroundColor:"white"
    }}>
        <div style={{
            padding: "0.3rem 0 0.3rem 2rem",
            display: "flex",
            cursor: "pointer",
            maxWidth: "1200px",
            width: "100%",
            gap:"0.5rem"
        }}>
<a href="https://umut-pehlivan.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
  <i
    className="bi bi-globe"
    style={{ fontSize: "1.5rem", color: "#868686", transition: "color 0.3s" }}
    onMouseEnter={(e) => (e.currentTarget.style.color = "#000")}
    onMouseLeave={(e) => (e.currentTarget.style.color = "#868686")}
  ></i>
</a>
<a href="https://github.com/Umutplvn" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
  <i
    className="bi bi-github"
    style={{ fontSize: "1.5rem", color: "black", transition: "color 0.3s" }}
    onMouseEnter={(e) => (e.currentTarget.style.color = "#333")}
    onMouseLeave={(e) => (e.currentTarget.style.color = "black")}
  ></i>
</a>
<a href="https://www.linkedin.com/in/umutpehlivan" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
  <i
    className="bi bi-linkedin"
    style={{ fontSize: "1.5rem", color: "#0077B5", transition: "color 0.3s" }}
    onMouseEnter={(e) => (e.currentTarget.style.color = "#005582")}
    onMouseLeave={(e) => (e.currentTarget.style.color = "#0077B5")}
  ></i>
</a>
 
    </div>
    </div>
  )
}

export default Footer