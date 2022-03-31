# KAT Software Solutions: Inventory Management Systems

## Deployed Link

## About
Inventory management software for pharmacies, utilizing the FDA open drug API. Pharmacies can monitor the current inventory to help make decisions on placing additional orders to minimize over / under stocking and ultimately
lower costs.

## Note : This is the server application of the system. Please refer to the cliet side README to get more details about the project. 

## Installation Instructions

#### Server-side
- Fork and clone this repo.
- Run `npm i` to install the dependencies.
- Create a .env and store the `JWT_SECRET`, and a `PORT` number
- The mongodb URI can also be specified in the .env file.

#### Client-side

- Fork and clone this repository. [Client Side Repo](https://github.com/foosasugaome/kat-inventory-management-client1)
- Run `npm i` to install the dependencies.
- Go to [FDA Open Drug API](https://open.fda.gov/apis/) and sign up to get an API key.
- Create a .env.local and store the `JWT_SECRET`,  `API_KEY` and the server url, `REACT_APP_SERVER_URL`.

