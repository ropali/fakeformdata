import React, { Component } from 'react'
import faker from 'faker'

import PageHeader from '../layouts/PageHeader'
import TextInput from '../TextInput'
// import jeffsum from 'jeffsum'

export default class TextGenerator extends Component {

    state = getFakeValues()

    refreshData = () => {
        this.setState(getFakeValues())
    }

    onChangeHandler = (e) => {
        const componentName = e.target.name;
        const para = e.target.value;

        if (componentName === "dummy-text") {
            
            this.setState( { dummyText: getLoremIpsumText( para ) } )

        }

        // if (componentName === "real-text") {
            
        //     this.setState( { realText: getRealText( para ) } )

        // }
    }

    render() {

        const { dummyText, realText } = this.state

        return (

            <React.Fragment>
                <PageHeader
                    title="Generate Fake Text"
                    subtitle="Generate fake lorem ipsum text, real like text etc..."
                    onRefreash={this.refreshData}
                    onParaChange={ this.onChangeHandler }
                />
                
                <TextInput
                    title="Lorem Ipsum Generator"
                    name="dummy-text"
                    value={ dummyText }
                    onParaChange={ this.onChangeHandler }
                />
                
                {/* <TextInput
                    title="Real Like Text Generator"
                    name="real-text"
                    value={ realText }
                    onParaChange={ this.onChangeHandler }
                /> */}

                

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