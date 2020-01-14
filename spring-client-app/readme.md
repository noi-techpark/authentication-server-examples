Spring boot client App
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

- Java JDK 1.8 or higher (e.g. [OpenJDK](https://openjdk.java.net/))
- [Maven](https://maven.apache.org/) 3.x
- Running authentication server
- Running spring-resource-server example app [Getting started](../spring-resource-server/README.md)

### Source code

Get a copy of the repository:

```bash
git clone https://github.com/noi-techpark/authentication-examples.git
```

Change directory:

```bash
cd authentication-examples/spring-client-app
```

### Configure

Adjust `src/main/resources/application.properties` if needed.
The defaults are already configured, that the you can use the Docker environment right away without any modifications.

### Development

Build the project:

```bash
./mvnw clean install
```

Run the project:

```bash
./mvnw spring-boot:run
```

The service will be available at [http://localhost:8082](http://localhost:8082).

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
| Client roles -> spring-example-resource-server -> Assigned Roles | admin |

This tells the authorization server that if we the client authenticates it self it has admin rights on the spring-example-resource-server.
