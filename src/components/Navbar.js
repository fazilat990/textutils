import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-md navbar-${props.mode} bg-${props.navBg}`} style={{backgroundColor: props.themeColor }}>
    <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.siteTitle}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">{props.homeText}</a>
            </li>
            {/* <li className="nav-item">
            <a className="nav-link" href="#">{props.aboutText}</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">{props.contactText}</a>
            </li> */}
        </ul>
        <div className="header-right">
            <div className={`form-check form-switch text-${props.mode === 'light'? 'dark' : 'light'}`}>
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="changemode" />
                <label className="form-check-label" htmlFor="changemode">{props.toggleModeText }</label>
            </div>
            <div className="color-pallate">
                <div className="theme-toggeler d-flex justify-content-center">
                    {
                        props.themeColors.map((value,index)=>{
                            return(
                            <div key={index} className="color mx-1" style={{backgroundColor: props.themeColors[index].colorVal}} onClick={()=>{
                                props.changeTheme(props.themeColors[index].colorVal)
                            }}></div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
        </div>
    </div>
    </nav> 
  )
}
//define properties types
Navbar.propTypes = {
    siteTitle: PropTypes.string.isRequired,
    homeText: PropTypes.string
}
//set defult props if no value is assigned then this value will be used
Navbar.defaultProps = {
    siteTitle: 'Company Name' 
};
 
