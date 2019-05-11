import React, { Component } from 'react'
import faker from 'faker'
import Input from '../Input'


class IdentityGenerator extends Component {

    state = {
        values: getFakeValues()
    }

    componentDidMount () {
        console.log('did');
        
    }


    refreshData = () => {
        this.setState({ values: getFakeValues() })
        
    }


    render() {
        const {
            firstName,
            lastName,
            email,
            address,
            birthdate,
            username,
            ip,
            userAgent,
            password
        } = this.state.values
        return (
            <React.Fragment>

                <div className="card box-shadow">
                    <div className="card-body">
                        <h5 className="card-title" style={styles.header}>Identites Generator</h5>
                        <div className="btn-group" role="group" aria-label="First group" style={styles.btnGrp}>
                            <button type="button" className="btn btn-outline-primary"><i className="fa fa-clipboard" aria-hidden="true"></i></button>
                            <button type="button" onClick={ this.refreshData } className="btn btn-outline-primary"><i className="fa fa-refresh" aria-hidden="true"></i></button>

                        </div>

                        <h6 className="card-subtitle mb-2 text-muted">
                            Generate fake name, address, email etc...
                        </h6>
                    </div>
                </div>

                <div className="card mt-3 box-shadow">
                    <div className="card-body">
                        <h5 className="card-title" style={styles.header}>Basic Identites</h5>

                        <div className="row">
                            <div className="col">
                                

                                    <Input
                                        name="firstName"
                                        value={firstName}
                                        placeholder="First Name"
                                        label="First Name"
                                    />

                                    <Input
                                        name="email"
                                        value={email}
                                        placeholder="Email"
                                        label="Email"
                                    />
                                


                            </div>

                            <div className="col">
                                <Input
                                    name="lastName"
                                    value={lastName}
                                    placeholder="Last Name"
                                    label="Last Name"
                                />


                                <Input
                                    name="lastName"
                                    value={birthdate}
                                    placeholder="Last Name"
                                    label="Birth Date"
                                />
                            </div>

                        </div>

                        <div className="row">
                                <div className="col">
                                <Input
                                    name="address"
                                    value={address}
                                    placeholder="Address"
                                    label="Address"
                                />
                                </div>
                            </div>
                    </div>
                </div>

                <div className="card mt-3 box-shadow">
                    <div className="card-body">
                        <h5 className="card-title" style={styles.header}>Online Identites</h5>
                        <div className="row">
                            <div className="col">

                                <Input
                                    name="username"
                                    value={username}
                                    placeholder="Username"
                                    label="Username"
                                />

                                <Input
                                    name="password"
                                    value={password}
                                    placeholder="password"
                                    label="Password"
                                />


                            </div>

                            <div className="col">

                                <Input
                                    name="IP"
                                    value={ip}
                                    placeholder="IP"
                                    label="IP Address"
                                />

                                <Input
                                    name="useragent"
                                    value={userAgent}
                                    placeholder="useragent"
                                    label="User Agent"
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
    const fname = faker.name.firstName();
    const lname = faker.name.lastName();
    return {
        firstName: fname,
        lastName: lname,
        email: faker.internet.email(fname, lname, getRandomEmailProvider()),
        birthdate: formatDate(faker.date.past(20)),
        address: getFakeAddress(),
        username: faker.internet.userName(),
        ip: faker.internet.ip(),
        password: faker.internet.password(8),
        userAgent: faker.internet.userAgent()
    }
}

function formatDate(date) {
    var d = new Date(date);
    var month = d.getMonth() + 1;
    var day = d.getDate();

    var output = (day < 10 ? '0' : '') + day + "-"
        + (month < 10 ? '0' : '') + month + '-'
        + d.getFullYear();

    return output;
}

function getRandomEmailProvider() {
    const providers = [
        'gmail.com',
        'zoho.com',
        'outlook.com',
        'yahoo.com',
        'aol.com',
        'yandex.com',
        'apple.com',
        'rediffmail.com'
    ]

    return providers[Math.floor(Math.random() * providers.length)]
}

function getFakeAddress() {
    return faker.address.streetAddress() + ', ' 
    + faker.address.city() + ' - ' 
    + faker.address.zipCode() + ', ' 
    + faker.address.state()  + ', ' 
    + faker.address.country()
}


const styles = {
    header: {
        display: 'inline-block'
    },
    btnGrp: {
        float: 'right'
    }
}


export default IdentityGenerator