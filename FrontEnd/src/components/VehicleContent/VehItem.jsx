import React from 'react'

export default class VehList extends React.Component {
    render() {
        return <div style={{border: '1px solid black',width: '300px',margin:'10px auto', textAlign: 'center'}}>
            <h5>Vehicle 1: {this.props.manufacturer + ' ' + this.props.model}</h5>
            <h5>Registration: {this.props.rego}</h5>
            <h5>Weight: {this.props.weight}</h5>
        </div>
    }
}