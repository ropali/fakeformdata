import React from 'react'
import Clipboard from 'react-clipboard.js';
import ReactTooltip from 'react-tooltip'

export default function TextInput(props) {

    const { title, name, value } = props

    return (
        <div className="card mt-3 box-shadow">
            <ReactTooltip type="solid" place="top" event="click" />

            <div className="card-body">
                <h5 style={{ display: 'inline-block' }} className="card-title">{title}</h5>

                <div className="float-right" style={{ display: 'flex' }}>
                    <Clipboard data-tip="Copied!!" data-clipboard-text={value} className="btn btn-default">
                        <i className="fa fa-clipboard" aria-hidden="true"></i>
                    </Clipboard> &nbsp;

                    <select onChange={ props.onParaChange } className="form-control" name={name} id={name}>
                        <option value="5">5 sentences</option>
                        <option value="10">10 sentences</option>
                        <option value="20">20 sentences</option>
                        <option value="30">30 sentences</option>
                        <option value="50">50 sentences</option>
                    </select>


                </div>


                <div className="row mt-2">
                    <div className="col">
                        <textarea onChange={ () => {} } name="" id="" cols="101" rows="8" value={value}></textarea>
                    </div>

                </div>

            </div>
        </div>
    )
}
