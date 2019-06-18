import "./body.html";
import "./showCustomers.js";
import "./runCampaign.js";
import { Template } from "meteor/templating";
import { ReactiveDict } from "meteor/reactive-dict";

Template.body.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
});
