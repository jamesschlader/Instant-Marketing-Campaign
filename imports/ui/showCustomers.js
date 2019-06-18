import "./showCustomers.html";

import { Template } from "meteor/templating";
import { Customers } from "../api/Customers";
import { ReactiveDict } from "meteor/reactive-dict";

Template.showCustomers.onCreated(function showCustomersOnCreated() {
  this.state = new ReactiveDict();
});

Template.showCustomers.helpers({
  customers() {
    return Customers.find({});
  }
});
