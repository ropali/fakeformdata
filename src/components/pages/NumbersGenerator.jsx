import React, { Component } from 'react'
import faker from 'faker'
import Input from '../Input'
import PageHeader from '../layouts/PageHeader'
import CreditCardGenerator from 'creditcard-generator'

export default class NumbersGenerator extends Component {

    state = {
        digits: 10,
        numberOfDigits: getNumberOfDigits(),
        values: getFakeValues()
    }

    refreshData = () => {

        this.setState({ numberOfDigits: getNumberOfDigits(this.state.digits), values: getFakeValues() })

    }

    onChangeHandler = (e) => {
        var index = e.nativeEvent.target.selectedIndex;
        const type = e.nativeEvent.target[index].text;

        this.setState({ values: getFakeValues(type) })
    }

    onChange = e => {

        this.setState({ [e.target.name]: e.target.value }, () => {
            this.setState({ numberOfDigits: getNumberOfDigits(this.state.digits) });
        });
    }




    render() {

        const { number, cvv, expiryDate } = this.state.values.card
        const { digits, numberOfDigits } = this.state

        return (

            <React.Fragment>
                <PageHeader
                    title="Generate Fake & Random Numbers"
                    subtitle="Generate fake whole number, integer number, etc..."
                    onRefreash={this.refreshData}
                />

                <div className="card mt-3 box-shadow">
                    <div className="card-body">
                        <h5 className="card-title">Fake Credit Cards Numbers</h5>
                        <div className="row">
                            <div className="col">

                                <Input
                                    name="credit-card"
                                    value={number}
                                    placeholder="Creadit Card"
                                    label="Creadit Card Number"
                                />

                                <Input
                                    name="cvv"
                                    value={cvv}
                                    placeholder="Creadit Card"
                                    label="Fake CVV Number"
                                />


                            </div>

                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Select Card Type</label>
                                    <select onChange={this.onChangeHandler} className="form-control" name="imgtype">
                                        <option value="Amex">Amex</option>
                                        <option value="VISA">VISA</option>
                                        <option value="Mastercard">Mastercard</option>

                                    </select>
                                </div>


                                <Input
                                    name="expiry-date"
                                    value={expiryDate}
                                    placeholder="Expiration Date"
                                    label="Fake Expiration Date"
                                />

                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mt-3 box-shadow">
                    <div className="card-body">
                        <h5 className="card-title">Random Numbers Of Digits</h5>
                        <div className="row">
                            <div className="col">
                                <Input
                                    name="credit-card"
                                    value={numberOfDigits}
                                    placeholder="Number Of Digits"
                                    label="Numbers"
                                />
                            </div>

                            <div className="col">
                                <label className="mr-2">Enter Number Of Digits</label>
                                <div className="input-group add-on">
                                    <input type="number" min="1" value={digits} onChange={this.onChange} className="form-control" placeholder="Enter Number Of Digits" name="digits" id="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>


        )
    }
}

function getFakeValues(cardType = "") {
    return {
        card: {
            number: getFakeCardNumber(cardType),
            cvv: getFakeCVV(),
            expiryDate: getFakeExpiryDate()
        }
    }
}

function getFakeCardNumber(type = "") {
    return CreditCardGenerator.GenCC(type)
}

function getFakeCVV() {
    var cvv = "";
    for (var i = 0; i < 3; i++) {
        cvv += faker.random.number({ max: 9 }).toString();
    }
    return cvv;
}


function getFakeExpiryDate() {
    const fakeDate = faker.date.future(5);
    var d = new Date(fakeDate);
    var month = d.getMonth() + 1;
    var day = d.getDate();

    var output = (day < 10 ? '0' : '') + day + "-"
        + (month < 10 ? '0' : '') + month + '-'
        + d.getFullYear();

    return output;
}

function getNumberOfDigits(length = 10) {
    const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    let constructedArray = [];

    for (let i = 0; i < length; i++) {
        constructedArray.push(numbersArray[Math.floor(Math.random() * numbersArray.length)])
    }

    return constructedArray.join("");
}

