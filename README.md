# auth-spring-client-to-server

This example shows how to configure a Spring Boot application with protected routes.

If the user tries to access a route, which requires authentication, the user will be redirected to the login page of keycloak server.

On successful login the user will be redirected back to the resource. Now the user is authenticated and has a valid session with the resource server.

