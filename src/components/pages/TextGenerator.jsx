import React, { Component } from 'react'
import faker from 'faker'

import PageHeader from '../layouts/PageHeader'
import TextInput from '../TextInput'


export default class TextGenerator extends Component {

    state = getFakeValues()

    refreshData = () => {
        this.setState(getFakeValues())
    }

    onChangeHandler = (e) => {
        console.log(e.target);
    }

    render() {

        const { dummyText } = this.state

        return (

            <React.Fragment>
                <PageHeader
                    title="Generate Fake Text"
                    subtitle="Generate fake plain text, HTML text etc..."
                    onRefreash={this.refreshData}
                />
                
                <TextInput
                    title="Lorem Ipsum Generator"
                    name="dummy-text"
                    value={ dummyText }
                    
                />
                
               

                

            </React.Fragment>


        )
    }
}

function getFakeValues() {
    return {
        dummyText: getLoremIpsumText(),
       
    }
}

function getLoremIpsumText(paragraphs = 5) {
    return faker.lorem.paragraph(paragraphs)
}

// function getRealText(paragraphs = 5) {
//     return jeffsum(paragraphs, 'sentences');
// }