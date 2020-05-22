Authentication Server Examples
==============================

This repository contains three example applications to demonstrate how you can connect to the [authentication server](https://github.com/noi-techpark/authentication-server).

- [Spring Resource Server](spring-resource-server/readme.md)
- [Spring Client App](spring-client-app/readme.md)
- [Nuxt.js SPA](nuxt-spa/readme.md)



Preconfigured Keycloak Authentication Server
--------------------------------------------

You can use our authentication server with the following credentials, in all our
example projects. We use https://www.keycloak.org/.

### Server Information
- KEYCLOAK_URL: https://auth.opendatahub.testingmachine.eu/auth
- KEYCLOAK_REALM: noi

Additional information can be found inside each project's `.env.example` file.

### Users
| Name           | Password   | Role
| -------------- | ---------- | ---------------
| authtestuser1  | onsDDh5x9  | admin
| authtestuser2  | pNmTg5x37  | project_manager