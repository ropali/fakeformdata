import React from 'react'
import Sidebar from './layouts/sidebar'


export default function Container() {
    return (
        <div className="container-fluid" style={{ marginTop: "6rem" }}>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <div className="card mt-30 box-shadow">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <h6 className="card-subtitle mb-2 text-muted">
                                Card subtitle
                            </h6>
                            <p className="card-text">
                                Some quick example text to build on the card title and make
                                up the bulk of the card's content.
                            </p>
                            <a href="#" className="card-link">
                                Card link
                            </a>
                            <a href="#" className="card-link">
                                Another link
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
