import React from 'react'
import Quotes from '../Quotes'

export default function Home() {
    return (
        <React.Fragment>
            <div className="card mt-30 box-shadow">
                <div className="card-body">
                    <h5 className="card-title">Welcome To FakeFormData</h5>

                    <p className="card-text">
                        FakeFormData is fast , easy to use fake data generator
                </p>

                </div>
            </div>

            <Quotes/>
        </React.Fragment>

    )
}
