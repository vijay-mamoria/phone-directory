import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './AddSubscriber.css';
import Header from './Header';

class AddSubscriber extends Component {

    constructor() {
        super();
        this.state = {
            id: 0,
            name: '',
            phone: '',

        }
        console.log(this.state);
    }

    inputChangedHandler = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onFormSubmitted = (e) => {
        e.preventDefault();//To Stop default page reloading on click of Submit button.
        this.props.addSubscriberHandler(this.state);
        this.setState({ id: 0, name: '', phone: '' });
        this.props.history.push("/");
    }

    render() {
        const { name, phone } = this.state;//extract values from the state by variable name matching 
        return (
            <div>
                <Header heading="Add Subscriber" />
                <div className="component-body-container">
                <Link to="/"><button className="custom-btn">Back</button></Link>
                    <form className="subscriber-form" onSubmit={this.onFormSubmitted.bind(this)}>
                        <label htmlFor="name" className="label-control">Name: </label><br />
                        <input id="name" type="text" className="input-control" name="name" onChange={this.inputChangedHandler} /><br /><br />
                        <label htmlFor="phone" className="label-control">Phone: </label><br />
                        <input id="phone" type="text" className="input-control" name="phone" onChange={this.inputChangedHandler} /><br /><br />
                        <div className="subscriber-info-container">
                            <span className="subscriber-to-add-heading">Subscriber to be added: </span><br />
                            <span className="subscriber-info">Name: {name}</span><br />
                            <span className="subscriber-info">Phone: {phone}</span><br />
                        </div>
                        <button type="submit" className="custom-btn add-btn">Add</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddSubscriber;