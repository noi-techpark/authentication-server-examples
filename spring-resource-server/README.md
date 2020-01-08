# Keycloak secured resource server

This server exposes two routes: /admin and /user

The admin route requires an authenticated user or service with admin role and the user route requires an authenticated user or service with user role.

This example makes use of the `keycloak-spring-boot-starter` package.

All you have to do is add the following dependencies in your pom.xml:

```xml
<dependency>
    <groupId>org.keycloak</groupId>
    <artifactId>keycloak-spring-boot-starter</artifactId>
</dependency>
```

```xml
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>org.keycloak.bom</groupId>
            <artifactId>keycloak-adapter-bom</artifactId>
            <version>4.1.0.Final</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>
```

Once this is done open your application properties and configure your keycloak connection:

```properties
# Name of the Realm, that contains the registered client
keycloak.realm=NOI
# Name of the client application in keycloak
keycloak.resource=spring-example
# Keycloak server url
keycloak.auth-server-url=https://auth.aboutbits.local/auth
keycloak.ssl-required=external
keycloak.use-resource-role-mappings=true
# This flag makes sure that the credentials secret is passed along on authentication.
keycloak.public-client=false
keycloak.credentials.secret=4d0e32be-9295-4687-a9ce-42549bb377f1
# This flag makes sure that the user is not redirected to the login page if the user is not authenticated.
# If you would like to build a server side rendered website, than you should remove this flag.
keycloak.bearer-only=true
```

Now you are able to define the security parameters for your routes in the application properties file. For example:

```properties
# Users or services with an access token that contains the admin or user role are allowed to access the resource.
keycloak.securityConstraints[0].authRoles[0] = admin
keycloak.securityConstraints[0].authRoles[1] = user
keycloak.securityConstraints[0].securityCollections[0].name = user stuff
keycloak.securityConstraints[0].securityCollections[0].patterns[0] = /user
```

## Client Credentials Flow

For this to work we have to enable the following setting in the keycloak clients settings:

- Service Accounts Enabled: True

Now it is possible to use the Client Credentials Flow.
In order to assign roles to the service account you have to navigate to the "Service Account Roles" tab.
This is important otherwise routes protected with certain roles will not be accessible.

For debugging purposes try to get an access token with a tool such as Postman.

Check the available endpoints for your realm:
eg. https://auth.aboutbits.local/auth/realms/NOI/.well-known/openid-configuration

1. Create a new request to one of your protected routes
2. Go to Authorization
3. Select Type: OAuth 2.0
4. Click on "Get New Access Token"
    1. Token Name: Put some name that identifies the token for later use
    2. Grant Type: Client credentials
    3. Access Token URL: .../protocol/openid-connect/auth
    4. Client ID: ID of your client application
    5. Client Secret: Secret of your client application
    6. Client Authentication: Send client credentials in body
    7. Click on Request Token
5. Click Send


## Authorization code flow

This example shows how to configure a Spring Boot application with protected routes.

If the user tries to access a route, which requires authentication, the user will be redirected to the login page of keycloak server.

On successful login the user will be redirected back to the resource. 
Now the user is authenticated and has a valid session with the resource server.