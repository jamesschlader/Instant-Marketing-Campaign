import "./showCustomers.html";
import { Template } from "meteor/templating";
import { Customers } from "../api/Customers";
import { month } from "../api/month";
import { ReactiveDict } from "meteor/reactive-dict";

Template.showCustomers.helpers({
  customers() {
    const customers = Customers.find({});

    return customers;
  },

  formatDate(date) {
    const dateString = `${month(
      date.getMonth()
    )} ${date.getDate()}, ${date.getFullYear()}`;
    return dateString;
  }
});
