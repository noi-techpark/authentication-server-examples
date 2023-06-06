<!--
SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>

SPDX-License-Identifier: CC0-1.0
-->

Spring Boot Client App
======================

This is an example application that shows how you can request endpoints from a resource server that is protected by the NOI Authentication Server.
The route */example/client-credentials* exposes an endpoint that makes use of the Client Credentials Flow to retrieve an access_token from the NOI authentication server and than calls a protected route on a sample resource server.

## Table of contents

- [Getting started](#getting-started)
- [Client Registration](#client-registration)

## Getting started

These instructions will get you a copy of the project up and running
on your local machine for development and testing purposes.

### Prerequisites

To build the project, the following prerequisites must be met:

- (optional) [Running authentication server](https://github.com/noi-techpark/authentication-server)
- [Running spring-resource-server](../spring-resource-server/readme.md)
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
cd authentication-examples/spring-client-app
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

This application only needs to support the client credentials flow, because we are authenticating as the client itself.
Following configuration needs to be done on the authentication server to successfully register this application:

### Settings

| Property                     | Value        |
| ---------------------------- | ------------ |
| Access Type                  | Confidential |
| Standard Flow Enabled        | OFF          |
| Implicit Flow Enabled        | OFF          |
| Direct Access Grants Enabled | OFF          |
| Service Accounts Enabled     | ON           |

### Scope

| Property           | Value |
| ------------------ | ----- |
| Full Scope Allowed | On    |

### Service Account Roles

| Property                                                         | Value |
| ---------------------------------------------------------------- | ----- |
| Client roles -> spring-resource-server -> Assigned Roles         | admin |

This tells the authorization server that if we the client authenticates it self it has admin rights on the spring-example-resource-server.

## TESTING
To test your configuration see [/calls.http](/calls.http).

### Testing with curl

```
curl --location --request POST \
    'https://auth.opendatahub.testingmachine.eu/auth/realms/noi/protocol/openid-connect/token' \
    --header 'Content-Type: application/x-www-form-urlencoded' \
    --data-urlencode 'grant_type=client_credentials' \
    --data-urlencode 'client_id=auth-server-examples-spring-client-app' \
    --data-urlencode 'client_secret=bc7d5183-6991-4cd6-b809-f2dafde263e8'
```
