# auth-spring-client-to-server

## Secure Client to Server

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


## Secure Client with User to Server

This example shows how to configure a Spring Boot application with protected routes.

If the user tries to access a route, which requires authentication, the user will be redirected to the login page of keycloak server.

On successful login the user will be redirected back to the resource. 
Now the user is authenticated and has a valid session with the resource server.