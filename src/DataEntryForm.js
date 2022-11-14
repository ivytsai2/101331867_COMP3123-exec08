import React, { Component } from "react";

const form_style = {
    padding: '1%',
    border: 'solid green', 
    margin: 'auto',
    width: '900px'
}

const center = {
    paddingBottom: '20px', 
    textAlign: 'center'
}

const right = {
    display:"inline", 
    color:"green", 
    textAlign: 'right',
    fontFamily: "Georgia, serif"
}

const left = {
    display:"inline", 
    textAlign: 'left',
    fontFamily: "serif"
}

export default class DataEntryForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            name: '',
            address:'',
            address2:'',
            city:'',
            province: '',
            postalCode:'',
            agree: false,
            willDisplay: false
        }
        this.provinces = ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 
                            'Newfoundland and Labrador', 'Nova Scotia', 'Ontario',
                            'Prince Edward Island', 'Quebec', 'Saskatchewan']
    }

    onValueChange = (event) => {
        this.setState({[event.target.name] : event.target.value})
    }

    isChecked = (event) => {
        this.setState({agree: !this.state.agree})
    }

    onSubmitForm = (event) => {
        event.preventDefault()
        this.setState({willDisplay: this.state.agree})
    }

    render(){
        return (
            <>
                <form style={form_style}>
                    <h1 style={center}>Data Entry Form</h1>
                    <div className="row" style={{paddingBottom: '20px'}}>
                        <div className="form-group col-md-6" style={{textAlign: 'center'}}>
                            <label>Email</label>
                            <input 
                                className="form-control" 
                                name="email"
                                type="email" 
                                placeholder="Enter email"
                                onChange={(e) => this.onValueChange(e)}/>
                        </div>
                        <div className="form-group col-md-6" style={{textAlign: 'center'}}>
                            <label>Name</label>
                            <input
                                className="form-control"
                                name="name"
                                type="text"
                                placeholder="Full Name"
                                onChange={(e) => this.onValueChange(e)}/>
                        </div>
                    </div>
                    <div className="form-group" style={center}>
                        <label>Address</label>
                        <input
                            className="form-control"
                            name="address"
                            type="text"
                            placeholder="1234 Main St"
                            onChange={(e) => this.onValueChange(e)}/>
                    </div>
                    <div className="form-group" style={center}>
                        <label>Address 2</label>
                        <input
                            className="form-control"
                            name="address2"
                            type="text"
                            placeholder="Apartment, studio, or floor"
                            onChange={(e) => this.onValueChange(e)}/>
                    </div>
                    <div className="row" style={{paddingBottom: '20px'}}>
                        <div className="form-group col-md-4" style={{textAlign: 'center'}}>
                            <label>City</label>
                            <input
                                className="form-control"
                                name="city"
                                type="text"
                                onChange={(e) => this.onValueChange(e)}/>
                        </div>
                        <div className="form-group col-md-4" style={{textAlign: 'center'}}>
                            <label>Province</label>
                            <select 
                                className="form-control" 
                                name="province" 
                                defaultValue={'Default'}
                                onChange={(e) => this.onValueChange(e)}>
                                <option value="Default" disabled>Choose...</option>
                                {
                                    this.provinces.map((province) => 
                                    (<option key={province} value={province}>{province}</option>))
                                }
                            </select>
                        </div>
                        <div className="form-group col-md-4" style={{textAlign: 'center'}}>
                            <label>Postal Code</label>
                            <input
                                className="form-control"
                                name="postalCode"
                                type="text"
                                onChange={(e) => this.onValueChange(e)}/>
                        </div>
                    </div>
                    <div className="form-group" style={center}>
                        <input 
                            name="agree"
                            type="checkbox"
                            onChange={(e) => this.isChecked(e)}/>
                        <label>Agree Trems & Conditions?</label>
                    </div>
                    <div className="form-group" style={center}>
                        <input
                            className="btn btn-success"
                            type="submit"
                            name="btnSubmit"
                            value="submit"
                            onClick={(e) => this.onSubmitForm(e)}/>
                    </div>
                </form>
                {this.state.willDisplay &&
                    <>
                        <br></br>
                        <div className="container" style={form_style}>
                            <div className="row" style={center}>
                                <h3 className="col" style={right}><b>Email: </b></h3>
                                <h3 className="col" style={left}>{this.state.email}</h3>
                            </div>
                            <div className="row" style={center}>
                                <h3 className="col" style={right}><b>Name: </b></h3>
                                <h3 className="col" style={left}>{this.state.name}</h3>
                            </div>
                            <div className="row" style={center}>
                                <h3 className="col" style={right}><b>Address: </b></h3>
                                <h3 className="col" style={left}>{
                                    (this.state.address2) ? 
                                    (this.state.address + ", " + this.state.address2) : 
                                    this.state.address
                                }</h3>
                            </div>
                            <div className="row" style={center}>
                                <h3 className="col" style={right}><b>City: </b></h3>
                                <h3 className="col" style={left}>{this.state.city}</h3>
                            </div>
                            <div className="row" style={center}>
                                <h3 className="col" style={right}><b>Province: </b></h3>
                                <h3 className="col" style={left}>{this.state.province}</h3>
                            </div>
                            <div className="row" style={center}>
                                <h3 className="col" style={right}><b>Postal Code: </b></h3>
                                <h3 className="col" style={left}>{this.state.postalCode}</h3>
                            </div>
                        </div>
                    </>
                }
            </>
        )
    }
}