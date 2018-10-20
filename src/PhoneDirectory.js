import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddSubscriber from './AddSubscriber';
import './AddSubscriber.css';
import ShowSubscribers from './ShowSubscribers';

class PhoneDirectory extends Component {

    constructor() {
        super();
        this.state = {
            subscribersList: [{
                id: 1,
                name: 'Vijay',
                phone: '7777777'
            },
            {
                id: 2,
                name: 'Leena',
                phone: '8888888'
            }]
        }
        console.log(this.state);
    }

    addSubscriberHandler = (newSubscriber) => {
        let subscribersList = this.state.subscribersList;
        if (subscribersList.length > 0) {
            newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
        } else {
            newSubscriber.id = 1;
        }
        subscribersList.push(newSubscriber);
        this.setState({ subscribersList: subscribersList });
        console.log(this.state);
    }

    render() {

        return (
            <Router>
                <div className="main-container">
                    <Route exact path="/" render={(props) => <ShowSubscribers {...props} subscribersList={this.state.subscribersList} />} />
                    <Route exact path="/add" render={({history}, props) => <AddSubscriber {...props} history={history} addSubscriberHandler={this.addSubscriberHandler} />} />
                </div>
            </Router>
        )
    }
}

export default PhoneDirectory;