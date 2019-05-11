import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import ReactTooltip from 'react-tooltip'

export default function Input(props) {

    const { value, name, placeholder, label } = props

    return (
        <React.Fragment>
            <ReactTooltip type="solid" place="top" event="click"  />
            <label className="mr-2">{label}</label>
            <div className="input-group add-on">
                <input type="text" value={value} className="form-control" placeholder={placeholder} name={name} id="" />
                <div className="input-group-btn">
                    <CopyToClipboard text={ value }>
                    <button  data-tip="Copied!!" className="btn btn-default" type="button"><i className="fa fa-clipboard" aria-hidden="true"></i></button>
                    </CopyToClipboard>
                </div>
            </div>
        </React.Fragment>
    )
}
