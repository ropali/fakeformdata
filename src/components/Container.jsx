import React from 'react'
import Sidebar from './layouts/sidebar'

import { Route } from 'react-router-dom'

import Home from './pages/Home'
import IdentityGenerator from './pages/IdentityGenerator'
import AddressGenerator from './pages/AddressGenerator'
import NumbersGenerator from './pages/NumbersGenerator'
import ImageGenerator from './pages/ImageGenerator'
import TextGenerator from './pages/TextGenerator'
import InternetGenerator from './pages/InternetGenerator'

export default function Container() {
    return (
        
            <div className="container-fluid" style={{ marginTop: "6rem" }}>
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <Route exact path="/" component={Home} />
                        <Route exact path="/identity" component={IdentityGenerator} />
                        <Route exact path="/address" component={AddressGenerator} />
                        <Route exact path="/numbers" component={NumbersGenerator} />
                        <Route exact path="/images" component={ImageGenerator} />
                        <Route exact path="/text" component={TextGenerator} />
                        <Route exact path="/internet" component={InternetGenerator} />

                    </div>
                </div>
            </div>
        

    )
}
