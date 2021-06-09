import React from "react"
import {Link,NavLink,withRouter} from 'react-router-dom'

const Navbar = (props) => {
    // console.log(props)
    // setTimeout(() => {
    //     props.history.push('/contact')
    // }, 4000);
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark " >
            <div className="container my-2 px-5">
            <a className="navbar-brand">Route Components</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
            </div>
        </nav>

    )
}
export default withRouter(Navbar);