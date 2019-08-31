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
        this.setState({ [e.target.name]: e.target.value });
    }

    generatePattern = () => {
        this.setState({ generatedPattern: randomStringPattern(this.state.pattern) });
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
                                    value={this.state.generatedPattern}
                                    placeholder="Pattern"
                                    label="Generated Pattern"
                                />

                            </div>

                            <div className="col">

                                <label className="mr-2">Enter Pattern Here</label>
                                <div className="input-group add-on">
                                    <input type="text" value={this.state.pattern} onChange={this.onChange} className="form-control" placeholder={'Enter Pattern Here'} name="pattern" />
                                    <div className="input-group-btn">
                                        <button className="btn btn-default" onClick={this.generatePattern}><i className="fa fa-refresh" aria-hidden="true"></i></button>
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

                        <h2 className="card-title">How To Make Certain Character Fixed?</h2>
                        <p>If you want some character in pattern fixed then always use <b>~</b> sign in front of that character</p>
                        <p>Example : If you want Z at the end of every pattern you generate fixed then do this,
                        </p>
                        <p>
                            <b>Input : AAA~Z</b>
                        </p>
                        <p>
                            <b>Output : WERZ</b>
                        </p>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}



function randomStringPattern(input) {
    let patternStr = "";
  let capitalAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let smallAlphabet = "abcdefghijklmnopqrstuvwxyz"
  let numbers = "0123456789";
  let specialChars = "!@#$%^&*()-_=<>/"

  // Store the index of character which will be fixed in the pattern
  let skipThisIndex = null;

  for (var i = 0; i < input.length; i++) {

    if (input.length !== patternStr.length && skipThisIndex !== i) {
      if (input[i] === "A") {
        patternStr += capitalAlphabet[ Math.floor(Math.random() * capitalAlphabet.length) ];
      }

      if (input[i] === "a") {
        patternStr += smallAlphabet[ Math.floor(Math.random() * smallAlphabet.length) ];
      }

      if (input[i] === "#") {
        patternStr += specialChars[ Math.floor(Math.random() * specialChars.length) ];
      }

      if (input[i] === "1") {
        patternStr += numbers[ Math.floor(Math.random() * numbers.length) ];
      }

      if (input[i] === " ") {
        patternStr += " ";
      }

      if (input[i] === "~") {
        skipThisIndex = i + 1;
        patternStr += input.charAt( i + 1 );
      }
    }
  }

  return patternStr;
}

