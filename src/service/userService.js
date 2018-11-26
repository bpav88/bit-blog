import { USER_API } from "./../constants/constants";
import { User } from "../entities/User";
import { Address } from "../entities/Address";
import { Company } from "../entities/Company";

const fetchUsers = () => {

    return fetch(USER_API)
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            const users = response.map((user) => {
                const address = new Address(user.address.street, user.address.city, user.address.zipcode);
                const company = new Company(user.company.name, user.company.catchPhrase);
                return new User(user.name, user.username, user.email, user.phone, address, company);

            })
            return users;
        })
}

export {
    fetchUsers
}