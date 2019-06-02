import React from 'react'
import Sidebar from './layouts/sidebar'

import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import IdentityGenerator from './pages/IdentityGenerator'
import AddressGenerator from './pages/AddressGenerator'
import NumbersGenerator from './pages/NumbersGenerator'
import ImageGenerator from './pages/ImageGenerator'
import TextGenerator from './pages/TextGenerator'
import InternetGenerator from './pages/InternetGenerator'
import PatternGenerator from './pages/PatternGenerator'

import About from './pages/About'
import Disclaimer from './pages/Disclaimer'
import Footer from './layouts/Footer'


export default function Container() {
    return (

        <div className="container-fluid" style={{ marginTop: "6rem" }}>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <Switch>

                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/disclaimer" component={Disclaimer} />
                        <Route exact path="/identity" component={IdentityGenerator} />
                        <Route exact path="/address" component={AddressGenerator} />
                        <Route exact path="/numbers" component={NumbersGenerator} />
                        <Route exact path="/images" component={ImageGenerator} />
                        <Route exact path="/text" component={TextGenerator} />
                        <Route exact path="/internet" component={InternetGenerator} />
                        <Route exact path="/pattern" component={PatternGenerator} />
                        
                    </Switch>

                    <Footer />
                </div>
            </div>
            
        </div>


    )
}
