package it.noi.authexamplespringclienttoserver;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @GetMapping("/user")
    public String getUserProtectedResource() {
        return "Hello User";
    }

}
