<!--
SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>

SPDX-License-Identifier: CC0-1.0
-->

Spring Boot Resource Server
===========================

This server exposes two routes: `/admin` and `/me`.
The admin route requires an authenticated user or service with admin role and the user route requires an authenticated user or service with user role.
This example makes use of the `keycloak-spring-boot-starter` package. Please refer to the [Keycloak documentation](https://www.keycloak.org/docs/latest/securing_apps/#_spring_boot_adapter) for further details.

## Table of contents

- [Getting started](#getting-started)
- [Client Registration](#client-registration)

## Getting started

These instructions will get you a copy of the project up and running
on your local machine for development and testing purposes.

### Prerequisites

To build the project, the following prerequisites must be met:

- [Running authentication server](https://github.com/noi-techpark/authentication-server)
- Java JDK 1.8 or higher (e.g. [OpenJDK](https://openjdk.java.net/))
- [Maven](https://maven.apache.org/) 3.x

If you want to run the application using [Docker](https://www.docker.com/), the environment is already set up with all dependencies for you and you just have to adjust some configuration parameters. You only have to install [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) and follow the instruction in the [dedicated section](#execute-with-docker).

### Source code

Get a copy of the repository:

```bash
git clone https://github.com/noi-techpark/authentication-server-examples.git
```

Change directory:

```bash
cd authentication-examples/spring-resource-server
```

### Execute without Docker

Copy the file `src/main/resources/application.properties` to `src/main/resources/application-local.properties` and adjust the variables that get their values from environment variables. You can take a look at the `.env.example` for some help.

Build the project:

```bash
mvn -Dspring.profiles.active=local clean install
```

Run the project:

```bash
mvn -Dspring.profiles.active=local spring-boot:run
```

The service will be available at localhost and your specified server port.

### Execute with Docker

Copy the file `.env.example` to `.env` and adjust the configuration parameters.

Then you can start the application using the following command:

```bash
docker-compose up
```

The service will be available at localhost and your specified server port.

## Client Registration

This application is a pure resource server, that exposes endpoints protected by the authentication server.
It is not possible to request access token from this client application.

### Settings

| Property                     | Value       |
| ---------------------------- | ----------- |
| Access Type                  | Bearer-only |

### Roles

admin, project_manager

### OpenDataHub generic client with username and password

WARNING: Please use this workflow with care. It exposes your username and password if you use it in a non-secured client application. For example, when the application does not use HTTPS. Open this workflow only, if you have a strong reason for it.

In this example application, we will use it only for testing purposes.

Create a client with name `odh-generic-client`. The actual secret is `5c227464-92d0-4535-a1da-36b4bdb5ba0c`.

| Property                     | Value        |
| ---------------------------- | ------------ |
| Access Type                  | Confidential |
| Standard Flow Enabled        | OFF          |
| Implicit Flow Enabled        | OFF          |
| Direct Access Grants Enabled | ON           |
| Service Accounts Enabled     | OFF          |

### Scope

| Property           | Value |
| ------------------ | ----- |
| Full Scope Allowed | OFF   |

Under `Client Roles` add all roles from `auth-example-spring-resource-server`.

### Users

Choose the user `authtestuser1`, go to `Role Mappings` and choose `odh-generic-client`

## TESTING
To test your configuration see [/calls.http](/calls.http).
