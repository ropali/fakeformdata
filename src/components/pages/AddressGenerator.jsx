import React, { Component } from 'react'
import faker from 'faker'
import Input from '../Input'
import PageHeader from '../layouts/PageHeader'


export default class AddressGenerator extends Component {


    state = getFakeValues()



    refreshData = () => {
        this.setState(getFakeValues())

    }

    render() {

        const {
            streetName,
            streeAddress,
            country,
            city,
            state,
            countryCode,
            zipCode,
            latitude,
            longitude

        } = this.state

        const fullAddress = streetName + ', '
            + streeAddress + ', '
            + city + '- '
            + zipCode + ', '
            + state + ', '
            + country + ' '
            + countryCode

        return (

            <React.Fragment>
                <PageHeader
                    title="Generate Fake Address"
                    subtitle="Generate fake street name, postal code, country etc..."
                    onRefreash={this.refreshData}
                />

                <div className="card mt-3 box-shadow">
                    <div className="card-body">
                        <h5 className="card-title" >Address Details</h5>

                        <div className="row">
                            <div className="col">

                                <Input
                                    name="street-name"
                                    value={streetName}
                                    placeholder="Street Name"
                                    label="Street Name"
                                />

                                <Input
                                    name="city"
                                    value={city}
                                    placeholder="City Name"
                                    label="City Name"
                                />

                                <Input
                                    name="zipcode"
                                    value={zipCode}
                                    placeholder="Zip Code"
                                    label="Zip Code"
                                />

                                <Input
                                    name="Counrty-code"
                                    value={countryCode}
                                    placeholder="Country Code"
                                    label="Country Code"
                                />

                                <Input
                                    name="longitude"
                                    value={longitude}
                                    placeholder="Longitude"
                                    label="Longitude"
                                />

                            </div>

                            <div className="col">
                                <Input
                                    name="stree-addr"
                                    value={streeAddress}
                                    placeholder="Street Address"
                                    label="Street Address"
                                />


                                <Input
                                    name="state"
                                    value={state}
                                    placeholder="State Name"
                                    label="State Name"
                                />

                                <Input
                                    name="country"
                                    value={country}
                                    placeholder="Country Name"
                                    label="Country Name"
                                />

                                <Input
                                    name="latitude"
                                    value={latitude}
                                    placeholder="Latitude"
                                    label="Latitude"
                                />
                            </div>

                        </div>

                        <div className="row">
                            <div className="col">
                                <Input
                                    name="address"
                                    value={fullAddress}
                                    placeholder="Complete Address"
                                    label="Complete Address"
                                />
                            </div>
                        </div>


                    </div>
                </div>


            </React.Fragment>


        )
    }
}


function getFakeValues() {

    return {
        streeAddress: faker.address.streetName(),
        streetName: faker.address.streetAddress("###"),
        city: faker.address.city(),
        state: faker.address.state(),
        country: faker.address.county(),
        countryCode: faker.address.countryCode(),
        zipCode: faker.address.zipCode(),
        latitude: faker.address.latitude(),
        longitude: faker.address.longitude()
    }
}
