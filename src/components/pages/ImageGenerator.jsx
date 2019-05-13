import React, { Component } from 'react'
import faker from 'faker'
import Input from '../Input'
import PageHeader from '../layouts/PageHeader'
import Preloader from '../layouts/Preloader'

import Img from 'react-image'


export default class ImageGenerator extends Component {

    state = {
        url: getImgUrl(),
        selectedType: 'abstract'
    }

    onChangeHandler = (e) => {
        var index = e.nativeEvent.target.selectedIndex;
        const type = e.nativeEvent.target[index].text;

        console.log(type);
        this.setState({ url: getImgUrl(type), selectedType: type })
        
    }

    refreshData = () => {
        
        this.setState({ url: getImgUrl( this.state.selectedType ) })
    }

    render() {

        const { url } = this.state

        return (

            <React.Fragment>
                <PageHeader
                    title="Generate Fake Images"
                    subtitle="Generate various types of fake images..."
                    onRefreash={this.refreshData}
                />

                <div className="card mt-3 box-shadow">
                    <div className="card-body">
                        <h5 className="card-title">Online Identites</h5>
                        <div className="row">
                            <div className="col">

                                <Input
                                    name="imgurl"
                                    value={url}
                                    placeholder="Image URL"
                                    label="Image URL"
                                />



                            </div>

                            <div className="col">

                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Select Image Type</label>
                                    <select onChange={this.onChangeHandler} className="form-control" name="imgtype">
                                        <option>abstract</option>
                                        <option>animals</option>
                                        <option>business</option>
                                        <option>cats</option>
                                        <option>city</option>
                                        <option>food</option>
                                        <option>nightlife</option>
                                        <option>fashion</option>
                                        <option>people</option>
                                        <option>nature</option>
                                        <option>sports</option>
                                        <option>technics</option>
                                        <option>transport</option>

                                    </select>
                                </div>

                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <Img 
                                src={url} 
                                alt="" 
                                width="50%"
                                loader={ <Preloader/> }
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </React.Fragment>


        )
    }
}

function getImgUrl(type = 'abstract') {

    switch (type) {
        case 'abstract':
            return faker.image.abstract();
           
        case 'animals':
            return faker.image.animals();
           
        case 'business':
            return faker.image.business();
           
        case 'cats':
            return faker.image.cats();
           
        case 'city':
            return faker.image.city();
           

        case 'food':
            return faker.image.food();
           

        case 'nightlife':
            return faker.image.nightlife();
           

        case 'fashion':
            return faker.image.fashion();
           

        case 'people':
            return faker.image.people();
           

        case 'nature':
            return faker.image.nature();
           

        case 'sports':
            return faker.image.sports();
           

        case 'technics':
            return faker.image.technics();
           

        case 'transport':
            return faker.image.transport();
           
        default:
            break;
    }
}