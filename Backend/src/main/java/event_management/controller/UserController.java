package event_management.controller;


import event_management.model.User;
import event_management.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @PostConstruct
    public void initRoles(){
        userService.initRoles();
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/registeruser",method = RequestMethod.POST)
    public User registerUser(@RequestBody User user) throws Exception {
       String tempemailid=user.getEmailId();
       if(tempemailid!=null && !"".equals(tempemailid)){
          User userObj=userService.fetchemail(tempemailid);
          if(userObj!=null){
              throw new Exception("Already Found");
          }
       }
       return userService.register(user);

    }

    @RequestMapping(value="/usercode",method = RequestMethod.GET)
    @PreAuthorize("hasRole('User')")
    public String userCode(){
        return "accessed only by user:)";
    }

    @RequestMapping(value="/admincode",method = RequestMethod.GET)
    @PreAuthorize("hasRole('Admin')")
    public String adminCode(){
        return "accessed only by admin:)";
    }

}