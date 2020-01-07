package it.noi.authexamplespringclienttoserver;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdminController {

    @GetMapping("/admin")
    public String getAdminProtectedResource() {
        return "Hello Admin";
    }

}
