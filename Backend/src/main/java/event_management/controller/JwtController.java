package event_management.controller;

import event_management.model.JwtRequest;
import event_management.model.JwtResponse;
import event_management.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
public class JwtController {
    @Autowired
    private JwtService jwtService;
    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/login",method = RequestMethod.POST)
    public JwtResponse createJwtToken(@RequestBody JwtRequest authRequest)throws Exception{
        return jwtService.createJwtToken(authRequest);
    }
}

