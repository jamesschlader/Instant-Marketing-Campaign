import "./showCustomers.html";
import { Template } from "meteor/templating";
import { Customers } from "../api/Customers";
import { month } from "../api/month";
import { ReactiveDict } from "meteor/reactive-dict";

Template.showCustomers.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
  this.state.set("showing", []);
});

Template.showCustomers.helpers({
  customers() {
    const customers = Customers.find({});

    return customers;
  },
  showing(id) {
    const instance = Template.instance();

    if (instance.state.get("showing").length > 0) {
      const result = instance.state.get("showing").filter(item => {
        return item == id;
      });
      return result.length > 0 ? true : false;
    } else {
      return false;
    }
  },
  formatDate(date) {
    const dateString = `${month(
      date.getMonth()
    )} ${date.getDate()}, ${date.getFullYear()}`;
    return dateString;
  },
  customerCount() {
    return Customers.find({}).count();
  }
});

Template.showCustomers.events({
  "click .delete"(event) {
    event.preventDefault();
    Customers.remove(this._id);
  },
  "click .home"(event, instance) {
    event.preventDefault();
    instance.state.set("showing", [...instance.state.get("showing"), this._id]);
  },
  "click .uk-button-danger"(event, instance) {
    event.preventDefault();
    const showings = instance.state.get("showing");
    const filtered = showings.filter(item => {
      return item !== this._id;
    });
    instance.state.set("showing", filtered);
  }
});
