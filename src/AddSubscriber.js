import React, { Component } from "react";
import Header from "./Header";

class AddSubscriber extends Component {
  render() {
    return (
      <div>
        <Header heading="Add Subscriber" />
        <div className="component-body-container">
          <button className="custom-btn">Back</button>
        </div>
        <form className="subscriber-form">
          <label className="label-control" htmlFor="name">
            Name:
          </label>
          <br />
          <input className="input-control" type="text" id="name" name="name" />
          <br />
          <br />
          <label className="label-control" htmlFor="phone">
            Phone:
          </label>
          <br />
          <input
            className="input-control"
            type="text"
            id="phone"
            name="phone"
          />
          <br />
          <br />
          <div className="subscriber-info-container">
            <span className="subscriber-to-add-heading">
              Subscriber to be added:{" "}
            </span>
            <br />
            <span className="subscriber-info">Name: </span>
            <br />
            <span className="subscriber-info">Phone: </span>
          </div>
          <button className="custom-btn add-btn" type="submit">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddSubscriber;
