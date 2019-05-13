import React from 'react'

import ReactTooltip from 'react-tooltip'
import Clipboard from 'react-clipboard.js';

export default function Input(props) {

    const { value, name, placeholder, label } = props

    return (
        <React.Fragment>
            <ReactTooltip type="solid" place="top" event="click" />
            <label className="mr-2">{label}</label>
            <div className="input-group add-on">
                <input type="text" value={value} onChange={ ()=>{} } className="form-control" placeholder={placeholder} name={name} id="" />
                <div className="input-group-btn">
                    <Clipboard data-tip="Copied!!" data-clipboard-text={value} className="btn btn-default">
                        <i className="fa fa-clipboard" aria-hidden="true"></i>
                    </Clipboard>

                </div>
            </div>
        </React.Fragment>
    )
}
