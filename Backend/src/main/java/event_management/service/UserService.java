package event_management.service;

import event_management.model.Book;
import event_management.model.Role;
import event_management.model.User;
import event_management.repositary.BookRepositary;
import event_management.repositary.RoleRepositary;
import event_management.repositary.UserRepositary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
public class UserService {
    @Autowired
    private BookRepositary bookRepositary;
    @Autowired
    private UserRepositary userRepository;
    @Autowired
    private RoleRepositary roleRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    public User register(User user) {
        Book book=new Book();
        Role role=roleRepository.findByRoleName("User");
        Set<Role> roles=new HashSet<>();
        roles.add(role);
        user.setRole(roles);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public User fetchemail(String email){
        return userRepository.findAllByEmailId(email);
    }
    public void initRoles(){
        Role adminRole=new Role();
        adminRole.setRole_id(1);
        adminRole.setRoleName("Admin");
        roleRepository.save(adminRole);

        Role userRole=new Role();
        userRole.setRole_id(2);
        userRole.setRoleName("User");
        roleRepository.save(userRole);

        User adminUser=new User();
        adminUser.setUsername("admin");
        adminUser.setEmailId("admin123@gmail.com");
        adminUser.setPassword(getEncode("adminA@123"));
        Set<Role> roles=new HashSet<>();
        roles.add(adminRole);
        adminUser.setRole(roles);
        adminUser.setMobileNo("7598703771");
        userRepository.save(adminUser);
    }
    public String getEncode(String password){
        return passwordEncoder.encode(password);
    }

}
