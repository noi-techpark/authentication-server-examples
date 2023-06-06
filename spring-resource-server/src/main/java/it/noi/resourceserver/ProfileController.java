// SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

package it.noi.resourceserver;

import org.keycloak.KeycloakPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
public class ProfileController {

    @GetMapping("/me")
    public Me getMeProtectedResource(Principal principal) {
        @SuppressWarnings("rawtypes")
        String email = ((KeycloakPrincipal) principal).getKeycloakSecurityContext().getToken().getEmail();
        return new Me(email);
    }

    private class Me {
        private String email;

        Me(String email) {
            this.email = email;
        }

        @SuppressWarnings("unused")
        public String getEmail() {
            return email;
        }
    }
}
