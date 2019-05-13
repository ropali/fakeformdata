import React from 'react'

export default function PageHeader(props) {

    const { title, subtitle } = props

    return (
        <div className="card box-shadow">
            <div className="card-body">
                <h5 className="card-title" style={styles.header}>{ title }</h5>
                <div className="btn-group" role="group" aria-label="First group" style={styles.btnGrp}>

                    <button type="button" onClick={props.onRefreash.bind(this)} title="Refreash Data" className="btn btn-outline-primary"><i className="fa fa-refresh" aria-hidden="true"></i></button>

                </div>

                <h6 className="card-subtitle mb-2 text-muted">
                    { subtitle }
                </h6>
            </div>
        </div>
    )
}

const styles = {
    header: {
        display: 'inline-block'
    },
    btnGrp: {
        float: 'right'
    }
}