import React from 'react'
import faker from 'faker'


export default function IdentityGenerator() {
    return (
        <div className="card mt-30 box-shadow">
            <div className="card-body">
                <h5 className="card-title">Genearte Fake Identites</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                    Genearte fake name, address, email etc...
                </h6>
                <p className="card-text">
                    {  faker.name.findName() }   
                </p>
                <a href="#" className="card-link">
                    Card link
                            </a>
                <a href="#" className="card-link">
                    Another link
                            </a>
            </div>
        </div>
    )
}
