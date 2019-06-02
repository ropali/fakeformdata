import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (

        <div className="header clearfix my-navbar topnav">
            <div className="header-right">

                <div className="user-notification float-left mouse-pointer" style={style.menu}>
                    <div className="dropdown">
                        <span>FakeFormData</span>
                    </div>
                </div>



                <div className="user-notification ">
                    <div className="dropdown">
                        <a href="https://github.com/ropali/fakeformdata" rel="noopener noreferrer" target="_blank">GitHub</a>
                    </div>
                </div>

                <div className="user-notification ">
                    <div className="dropdown">
                        <Link to="/disclaimer">Disclaimer</Link>
                    </div>
                </div>

                <div className="user-notification ">
                    <div className="dropdown">
                        <Link to="/about">About</Link>
                    </div>
                </div>

                <div className="user-notification ">
                    <div className="dropdown">
                        <Link to="/">Home</Link>
                    </div>
                </div>

                <div className="user-notification icon">
                    <i class="fa fa-bars"></i>
                </div>


            </div>
        </div>


    )
}

const style = {
    menu: {
        marginLeft: "16px",

    }
}
