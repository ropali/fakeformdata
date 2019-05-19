import React, { Component } from 'react'
import Input from '../Input'
import PageHeader from '../layouts/PageHeader'


export default class NumbersGenerator extends Component {

    state = {
        pattern: "",
        generatedPattern: ""
    }

    refreshData = () => {
        this.generatePattern();
    }



    onChange = e => {
        console.log(e.target.value);
        
        this.setState({ [e.target.name]: e.target.value });

    }

    generatePattern = () => {
        this.setState({ generatedPattern: randomStringPattern( this.state.pattern ) });
    }




    render() {


        return (

            <React.Fragment>
                <PageHeader
                    title="Generate Random Patterns"
                    subtitle="Generate any custom pattern you want..."
                    onRefreash={this.refreshData}
                />

                <div className="card mt-3 box-shadow">
                    <div className="card-body">
                        <h5 className="card-title">Random Pattern Generator</h5>
                        <div className="row">
                            <div className="col">

                                <Input
                                    name="credit-card"
                                    value={ this.state.generatedPattern }
                                    placeholder="Pattern"
                                    label="Generated Pattern"
                                />

                            </div>

                            <div className="col">

                                <label className="mr-2">Enter Pattern Here</label>
                                <div className="input-group add-on">
                                    <input type="text" value={ this.state.pattern } onChange={ this.onChange } className="form-control" placeholder={'Enter Pattern Here'} name="pattern"  />
                                    <div className="input-group-btn">
                                        <button className="btn btn-default" onClick={ this.generatePattern }><i className="fa fa-refresh" aria-hidden="true"></i></button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mt-3 box-shadow">
                    <div className="card-body">
                        <h2 className="card-title">How To Use It?</h2>
                        <h5>Example</h5>
                        <p><b>Input:</b> AA aaa1111 ### Aaaaaa</p>
                        <p><b>Interpreted as:</b> Two capital letters, one space, three lowercase letters, four numbers, three special characters and a capitalized six-letter word.</p>
                        <p>Example result that matches the pattern: <b>XC tmr4990 %&@ Yvhwfd</b></p>
                    </div>
                </div>



            </React.Fragment>


        )
    }
}



function randomStringPattern(input) {
    var text = "";
    var possible;
    for (var j = 0; j < input.length; j++) {
        if (input[j] === " ") {
            possible = ' ';
        } else if ((input[j] === input[j].toUpperCase()) && (input[j] !== input[j].toLowerCase())) {
            possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        } else if ((input[j] === input[j].toLowerCase()) && (input[j] !== input[j].toUpperCase())) {
            possible = "abcdefghijklmnopqrstuvwxyz";
        } else if ('0123456789'.indexOf(input[j]) !== -1) {
            possible = "0123456789";
        } else {
            possible = "#!@~$%^&*)-_"
        }
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
