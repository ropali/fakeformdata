import React, { Component } from 'react'
import faker from 'faker'
import Input from '../Input'
import PageHeader from '../layouts/PageHeader'


export default class NumbersGenerator extends Component {


    refreshData = () => {

    }

    render() {
        return (

            <React.Fragment>
                <PageHeader
                    title="Generate Fake & Random Numbers"
                    subtitle="Generate fake whole number, integer number, etc..."
                    onRefreash={this.refreshData}
                />
            </React.Fragment>


        )
    }
}
