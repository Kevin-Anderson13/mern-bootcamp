const express = require('express');
const app = express();
const faker = require('faker');


const createUser = () => {
    return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phone: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password()
    }
}

const createCompany = () => {
    return {
        company: faker.company.companyName(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zip: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

app.get("/api/users/new", (req, res) => {
    const user = createUser();
    res.json(user);
});

app.get("/api/companies/new", (req, res) => {
    const company = createCompany();

    res.json(company);
})

app.get("/api/user/company", (req,res) => {
    const user = createUser();
    const company  = createCompany();
    res.json({user: user, company: company});
})


app.listen(8000, () => console.log("The server is listening on port 8000"));