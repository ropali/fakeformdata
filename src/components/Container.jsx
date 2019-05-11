import React from 'react'
import Sidebar from './layouts/sidebar'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import IdentityGenerator from './IdentityGenerator'
import Home from './Home'


export default function Container() {
    return (
        
            <div className="container-fluid" style={{ marginTop: "6rem" }}>
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <Route exact path="/" component={Home} />
                        <Route exact path="/indetity" component={IdentityGenerator} />

                    </div>
                </div>
            </div>
        

    )
}
