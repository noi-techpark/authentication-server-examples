# Spring boot client App

This is an example application that shows how you can request endpoints from a resource server that is protected by the NOI Authentication Server.

The route */user/client-credentials* exposes an endpoint that makes use of the Client Credentials Flow to retrieve an access_token from the NOI authentication server and than calls a protected route on a sample resource server.
