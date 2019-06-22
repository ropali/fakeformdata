import React, { Component } from 'react'
import faker from 'faker'
import Input from '../Input'

import PageHeader from '../layouts/PageHeader'

class IdentityGenerator extends Component {

    state = {
        values: getFakeValues()
    }


    refreshData = () => {
        this.setState({ values: getFakeValues() })
    }

    onChange = (e) => {
        var value = e.nativeEvent.target.value;

        faker.locale = value

        // Forcefully change the state to reflect the locale
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
            password,
            phone
        } = this.state.values

        const { jobTitle, jobDesc, jobArea, company } = this.state.values.jobs

        return (
            <React.Fragment>

                <PageHeader
                    title="Generate Fake Identities"
                    subtitle="Generate fake name, email, address etc..."
                    onRefreash={this.refreshData}
                />

                <div className="card mt-3 box-shadow">
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <h5 className="card-title" style={styles.header}>Basic Identites</h5>
                            </div>
                            <div className="col">
                               
                                <select onChange={ this.onChange } className="form-control" style={ styles.localSelect }>
                                    { getCountriesOption().map(opt => opt) }
                                </select>
                            </div>

                        </div>

                        <div className="row" >
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
                                    name="phone"
                                    value={phone}
                                    placeholder="Phone Number"
                                    label="Phone Number"
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
                        <h5 className="card-title" style={styles.header}>Employement Details</h5>
                        <div className="row">
                            <div className="col">

                                <Input
                                    name="job-title"
                                    value={jobTitle}
                                    placeholder="Job Title"
                                    label="Job Title"
                                />

                                <Input
                                    name="company-name"
                                    value={company}
                                    placeholder="Company Name"
                                    label="Company Name"
                                />

                            </div>

                            <div className="col">

                                <Input
                                    name="job-desc"
                                    value={jobDesc}
                                    placeholder="Job Description"
                                    label="Job Description"
                                />

                                <Input
                                    name="job-area"
                                    value={jobArea}
                                    placeholder="Job Area"
                                    label="Job Area"
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
        userAgent: faker.internet.userAgent(),
        phone: getFakePhoneNumber(4),
        jobs: {
            jobTitle: faker.name.title(),
            jobDesc: faker.name.jobDescriptor(),
            jobArea: faker.name.jobArea(),
            company: faker.company.companyName(0)
        }
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
        + faker.address.state() + ', '
        + faker.address.country()
}


function getFakePhoneNumber(format = 4) {
    //Formats
    // 0 = "587-753-7028
    // 1 = "(116) 239-1938
    // 2 = "1-878-758-7353
    // 3 = "343.578.4788
    // 4 = 1234567890

    if (format === 4) {
        return faker.phone.phoneNumberFormat(0).replace(/-/g, "");
    }
    else {
        return faker.phone.phoneNumberFormat(format);
    }
}


function getCountriesOption() {
    
    let options = [];
    const countries = JSON.parse( JSON.stringify(getLocales()) )
    for (const code in countries ) {
        options.push( <option key={code} value={code} selected={ code === 'en' ? 'en' : '' } >{ countries[code] }</option> )
    }
    
    return options
}


const getLocales = () => {
    return {
    
        "az": "Azerbaijani",
       
        "cz": "Czech (Czech Republic)",
        
        "nl": "Dutch",
        
        "en_AU": "English (Australia)",
       
        "en_IN": "English (India)",
        "en_IE": "English (Ireland)",
        
        "en_NZ": "English (New Zealand)",
      
        "en_CA": "English (Canada)",
    
        "en_GB": "English (United Kingdom)",
        "en_US": "English (United States)",
        "en_ZW": "English (Zimbabwe)",
        "en": "English",
        "en_IND": "English (India)",
       
        "fr_CA": "French (Canada)",
        
        "fr": "French",
       
        "de_AT": "German (Austria)",
       
        "de_CH": "German (Switzerland)",
        "de": "German",
        
        "id_ID": "Indonesian (Indonesia)",
      
        "it": "Italian",
        
        "ja": "Japanese",
        
        "ko": "Korean",
       
        "nep": "Nepali",
        
        "nb_NO": "Norwegian Bokmål (Norway)",
      
        "fa_AF": "Persian (Afghanistan)",
        "fa_IR": "Persian (Iran)",
        "fa": "Persian",
       
        "pl": "Polish",
        
        "pt_BR": "Portuguese (Brazil)",
      
        "ru": "Russian",
        
        "sr": "Serbian",
       
        "sk": "Slovak",
        
        "es_MX": "Spanish (Mexico)",
       
        "es": "Spanish",
        
        "sv": "Swedish",
      
        "tr": "Turkish",
        
        "uk": "Ukrainian",
        "vi": "Vietnamese"
        
    }
}

const styles = {
    header: {
        display: 'inline-block'
    },
    btnGrp: {
        float: 'right'
    },
    localSelect: {
        width: '70%',
        float: 'right'
    }
}




export default IdentityGenerator