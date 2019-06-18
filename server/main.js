import { Meteor } from "meteor/meteor";
import { Customers } from "../imports/api/Customers";
import faker from "faker";

Meteor.startup(() => {
  // code to run on server at startup
  if (Customers.find({}).count() < 1) {
    const newCustomer = {
      createdAt: new Date(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      telephone: faker.phone.phoneNumber(),
      active: true,
      address: {
        streetAddress: faker.address.streetAddress(),
        secondaryAddress: faker.address.secondaryAddress(),
        city: faker.address.city(),
        county: faker.address.county(),
        zip: faker.address.zipCode(),
        long: faker.address.longitude(),
        lat: faker.address.latitude()
      }
    };
    Customers.insert(newCustomer);
    console.table(newCustomer);
  }
});
