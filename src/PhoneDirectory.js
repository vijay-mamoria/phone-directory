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
    }

    deleteSubscriberHandler = (subscriberId) => {
        let subscribersList = this.state.subscribersList;
        let subscriberIndex = 0;
        subscribersList.forEach(function (subscriber, index) {
            if (subscriber.id == subscriberId) {
                subscriberIndex = index;
            }
        }, this);
        subscribersList.splice(subscriberIndex, 1);//index to be removed and number of elements.
        this.setState({ subscribersList: subscribersList });
    }

    render() {

        return (
            <Router>
                <div className="main-container">
                    <Route exact path="/" render={(props) => <ShowSubscribers {...props} subscribersList={this.state.subscribersList} deleteSubscriberHandler={this.deleteSubscriberHandler} />} />
                    <Route exact path="/add" render={({ history }, props) => <AddSubscriber {...props} history={history} addSubscriberHandler={this.addSubscriberHandler} />} />
                </div>
            </Router>
        )
    }
}

export default PhoneDirectory;