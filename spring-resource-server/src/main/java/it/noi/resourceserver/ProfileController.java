package it.noi.resourceserver;

import org.keycloak.KeycloakPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
public class ProfileController {

    @GetMapping("/me")
    public Me getMeProtectedResource(Principal principal) {
        String email = ((KeycloakPrincipal) principal).getKeycloakSecurityContext().getToken().getEmail();
        return new Me(email);
    }

    private class Me {
        private String email;

        Me(String email) {
            this.email = email;
        }

        public String getEmail() {
            return email;
        }
    }
}
