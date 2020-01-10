package it.noi.springclientapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;

import static org.springframework.security.oauth2.client.web.reactive.function.client.ServletOAuth2AuthorizedClientExchangeFilterFunction.clientRegistrationId;

@RestController
public class ExampleController {

    @Value("${resource-server.base-uri}")
    private String resourceServer;

    @Autowired
    private WebClient webClient;

    @GetMapping(value = "/example/client-credentials")
    public String getFromResourceServerWithClientCredentialsFlow() {
        String response = getFromResourceServer("resource-server-client-client-credentials");
        return response;
    }

    private String getFromResourceServer(String clientRegistrationId) {
        return this.webClient
                .get()
                .uri(resourceServer + "/user")
                .attributes(clientRegistrationId(clientRegistrationId))
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }

}