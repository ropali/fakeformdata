import React, { Component } from 'react'
import faker from 'faker'
import Input from '../Input'
import PageHeader from '../layouts/PageHeader'


export default class InternetGenerator extends Component {


    refreshData = () => {

    }

    render() {
        return (

            <React.Fragment>
                <PageHeader
                    title="Generate Fake Internet Data"
                    subtitle="Generate fake IP, MAC, domain name etc..."
                    onRefreash={this.refreshData}
                />
            </React.Fragment>


        )
    }
}
