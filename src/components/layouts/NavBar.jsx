import React from 'react'

export default function NavBar() {
    return (
        <div>
            <div className="header clearfix">
                <div className="header-right">
                    <div className="brand-logo">
                        <a href="index.php">
                            {/* <img src="vendors/images/logo.png" alt className="mobile-logo" /> */}

                        </a>
                    </div>
                    <div className="menu-icon">
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                    <div>

                        <div className="user-notification float-left mouse-pointer" style={style.menu}>
                            <div className="dropdown">
                                <span>FakeFormData</span>
                            </div>
                        </div>

                        <div className="user-notification ">
                            <div className="dropdown">
                                <a href="">GitHub</a>
                            </div>
                        </div>

                        <div className="user-notification ">
                            <div className="dropdown">
                                <a href="">About</a>
                            </div>
                        </div>


                    </div>

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
