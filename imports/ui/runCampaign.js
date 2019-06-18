import "./runCampaign.html";
import { customer } from "../api/createCustomer";
import { Customers } from "../api/Customers";
import { Template } from "meteor/templating";
import { ReactiveDict } from "meteor/reactive-dict";

Template.runCampaign.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
  this.state.set("newbies", []);
});

Template.runCampaign.helpers({
  newbiesCount() {
    const instance = Template.instance();
    return instance.state.get("newbies").length;
  },
  newbies() {
    const instance = Template.instance();
    return instance.state.get("newbies");
  }
});

Template.runCampaign.events({
  "submit form"(event, instance) {
    event.preventDefault();
    const { target } = event;
    const { value } = target.campaign;
    let newCustomers = [];
    console.log(value);
    for (let i = 1; i < value + 1; i++) {
      const newCustomer = customer();
      newCustomers.push(newCustomer);
      instance.state.set("newbies", newCustomers);
      Customers.insert(newCustomer);
    }
  }
});
