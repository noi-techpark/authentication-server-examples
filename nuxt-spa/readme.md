VueJS Nuxt Single Page App
==========================

This is an example of a single page application, that authorizes a user with the authentication server.
The profile page will use the OpenID connect endpoint /userinfo to display claims about the logged in user.
The resource-server page will show how you can use the access_token to access endpoints on a resource server.

## Table of contents

- [Getting started](#getting-started)
- [Client Registration](#client-registration)

## Getting started

### Prerequisites

To run the project, the following prerequisites must be met:

- (optional) [Running authentication server](https://github.com/noi-techpark/authentication-server)
- [Running spring-resource-server](../spring-resource-server/readme.md)
- [Node 12](https://nodejs.org) (and NPM)

If you want to run the application using [Docker](https://www.docker.com/), the environment is already set up with all dependencies for you and you just have to adjust some configuration parameters. You only have to install [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) and follow the instruction in the [dedicated section](#execute-with-docker).

### Source code

Get a copy of the repository:

```bash
git clone https://github.com/noi-techpark/authentication-server-examples.git
```

Change directory:

```bash
cd authentication-examples/nuxt-spa
```

### Execute without Docker

Copy the file `.env.example` to `.env` and adjust the configuration parameters.

Install all dependencies and run the project:

```bash
yarn install
yarn dev
```

The service will be available at [http://localhost:3000](http://localhost:3000).

### Execute with Docker

Copy the file `.env.example` to `.env` and adjust the configuration parameters.

Then you can start the application using the following command:

```bash
docker-compose up
```

The service will be available at localhost and your specified server port.

## Client registration

In single page applications it is not possible to keep the client secret confidential.

Following configuration needs to be done on the authentication server to successfully register this application:

### Settings

| Property                     | Value                          |
| ---------------------------- | ------------------------------ |
| Access Type                  | Public                         |
| Standard Flow Enabled        | ON                            |
| Implicit Flow Enabled        | OFF                             |
| Direct Access Grants Enabled | OFF                            |
| Service Accounts Enabled     | OFF                            |
| Valid Redirect URIs          | http://localhost:3000/callback |
| Web Origins                  | http://localhost:3000          |

### Scope

| Property                                                         | Value                  |
| ---------------------------------------------------------------- | ---------------------- |
| Full Scope Allowed                                               | OFF                    |
| Client Roles -> spring-example-resource-server -> Assigned Roles | admin, project_manager |


