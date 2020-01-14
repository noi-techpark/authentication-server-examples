# Keycloak secured resource server

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

- Java JDK 1.8 or higher (e.g. [OpenJDK](https://openjdk.java.net/))
- [Maven](https://maven.apache.org/) 3.x
- Running authentication server

### Source code

Get a copy of the repository:

```bash
git clone https://github.com/noi-techpark/authentication-examples.git
```

Change directory:

```bash
cd authentication-examples/spring-resource-server
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

The service will be available at [http://localhost:8085](http://localhost:8085).

## Client Registration

This application is a pure resource server, that exposes endpoints protected by the authentication server.
It is not possible to request access token from this client application.

### Settings

| Property                     | Value       |
| ---------------------------- | ----------- |
| Access Type                  | Bearer-only |

### Roles

admin, project_manager
