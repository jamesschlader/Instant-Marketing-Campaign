import faker from "faker";

export const customer = () => {
  return {
    createdAt: new Date(),
    updatedAt: this.createdAt,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    active: true,
    telephone: faker.phone.phoneNumber(),
    address: {
      streetAddress: faker.address.streetAddress(),
      secondaryAddress: faker.address.secondaryAddress(),
      city: faker.address.city(),
      county: faker.address.county(),
      state: faker.address.state(),
      long: faker.address.longitude(),
      lat: faker.address.latitude()
    }
  };
};
