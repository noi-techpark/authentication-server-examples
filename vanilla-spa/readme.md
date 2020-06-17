# Vanilla JS Application

This is an example of a single page application, that authorizes a user with the authentication server. Once the user authenticates successfully, an alert with "authenticated" will be shown. This example is based on the official Keycloak [Javascript adapter](https://www.keycloak.org/docs/latest/securing_apps/#_javascript_adapter) example.

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
cd authentication-examples/vanilla-spa
```

### Execute without Docker

Install all dependencies and run the project:

```bash
npm install
npm run dev
```

The service will be available at [http://localhost:3000](http://localhost:3000).

### Execute with Docker

```bash
docker-compose up
```

The service will be available at [http://localhost:3000](http://localhost:3000).

## Client registration

In single page applications it is not possible to keep the client secret confidential.

Following configuration needs to be done on the authentication server to successfully register this application:

### Settings

| Property                     | Value                                                               |
| ---------------------------- | ------------------------------------------------------------------- |
| Access Type                  | Public                                                              |
| Standard Flow Enabled        | ON                                                                  |
| Implicit Flow Enabled        | OFF                                                                 |
| Direct Access Grants Enabled | OFF                                                                 |
| Service Accounts Enabled     | OFF                                                                 |
| Valid Redirect URIs          | http://localhost:3000/, http://localhost:3000/silent-check-sso.html |
| Web Origins                  | http://localhost:3000                                               |

