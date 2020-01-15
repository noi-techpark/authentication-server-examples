# VueJS Nuxt Single Page App

This is an example of a single page application, that authorizes a user with the authentication server.
The profile page will use the OpenID connect endpoint /userinfo to display claims about the logged in user.
The resource-server page will show how you can use the access_token to access endpoints on a resource server.

## Table of contents

- [Getting started](#getting-started)
- [Client Registration](#client-registration)

## Getting started

### Prerequisites

To run the project, the following prerequisites must be met:

- Running authentication server
- Running spring-resource-server example app [Getting started](../spring-resource-server/README.md)

### Development

```bash
# install dependencies
$ yarn

# serve with hot reload at localhost:3000
$ yarn dev
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Client registration

In single page applications it is not possible to keep the client secret confidential, thats why we have to register this application with the Implict Flow enabled.

Following configuration needs to be done on the authentication server to successfully register this application:

### Settings

| Property                     | Value                          |
| ---------------------------- | ------------------------------ |
| Access Type                  | Public                         |
| Standard Flow Enabled        | OFF                            |
| Implicit Flow Enabled        | ON                             |
| Direct Access Grants Enabled | OFF                            |
| Service Accounts Enabled     | OFF                            |
| Valid Redirect URIs          | http://localhost:3000/callback |
| Web Origins                  | http://localhost:3000          |

### Scope

| Property                                                         | Value                  |
| ---------------------------------------------------------------- | ---------------------- |
| Full Scope Allowed                                               | OFF                    |
| Client Roles -> spring-example-resource-server -> Assigned Roles | admin, project_manager |


