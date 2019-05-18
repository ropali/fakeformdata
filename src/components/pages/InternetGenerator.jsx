import React, { Component } from 'react'
import faker from 'faker'
import Input from '../Input'
import PageHeader from '../layouts/PageHeader'


export default class InternetGenerator extends Component {

    state = getFakeValues()

    refreshData = () => {
        this.setState(getFakeValues())
    }

    render() {

        const { ip, ipv6, mac, url, domain, uuid } = this.state

        return (

            <React.Fragment>
                <PageHeader
                    title="Generate Fake Internet Data"
                    subtitle="Generate fake IP, MAC, domain name etc..."
                    onRefreash={this.refreshData}
                />

                <div className="card mt-3 box-shadow">
                    <div className="card-body">
                        <h5 className="card-title">Fake Internet Data</h5>
                        <div className="row">
                            <div className="col">

                                <Input
                                    name="fake-ip"
                                    value={ip}
                                    placeholder="Fake IP Address"
                                    label="Fake IP"
                                />

                                <Input
                                    name="fake-mac"
                                    value={mac}
                                    placeholder="Fake MAC Address"
                                    label="Fake MAC Address"
                                />

                                <Input
                                    name="fake-domain"
                                    value={domain}
                                    placeholder="Fake Domain"
                                    label="Fake Domain"
                                />



                            </div>

                            <div className="col">

                                <Input
                                    name="fake-ipv6"
                                    value={ipv6}
                                    placeholder="Fake IPv6"
                                    label="Fake IPv6"
                                />

                                <Input
                                    name="fake-url"
                                    value={url}
                                    placeholder="Fake URL"
                                    label="Fake URL"
                                />

                                <Input
                                    name="fake-uuid"
                                    value={uuid}
                                    placeholder="UUID"
                                    label="UUID"
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
        ip: faker.internet.ip(),
        ipv6: faker.internet.ipv6(),
        mac: faker.internet.mac(),
        url: faker.internet.url(),
        domain: faker.internet.domainName(),
        uuid: faker.random.uuid()
    }
}