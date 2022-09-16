package event_management.service;


import event_management.model.JwtRequest;
import event_management.model.JwtResponse;
import event_management.model.User;
import event_management.repositary.UserRepositary;
import event_management.util.Jwt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class JwtService implements UserDetailsService {
    @Autowired
    private UserRepositary userRepository;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private Jwt jwt;

    public JwtResponse createJwtToken(JwtRequest authRequest)throws Exception{
        String userName= authRequest.getUserName();
        String userPassword= authRequest.getUserPassword();
        authenticate(userName,userPassword);
        final UserDetails userDetails = loadUserByUsername(userName);
        String generatedToken = jwt.generateToken(userDetails);
        User user=userRepository.findByUsername(userName);
        return new JwtResponse(user,generatedToken);
    }
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user=userRepository.findByUsername(username);

        if(user!=null){
            return new org.springframework.security.core.userdetails.User(user.getUsername(),
                    user.getPassword(),
                    getAuthorities(user));
        }
        else {
            throw new UsernameNotFoundException("Username is not valid");
        }
    }

    private Set getAuthorities(User user){
        Set authorities=new HashSet();
        user.getRole().forEach(role->authorities.add(new SimpleGrantedAuthority("ROLE_"+role.getRoleName())));
        return authorities;
    }

    private void authenticate(String userName,String userPassword) throws Exception{
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userName, userPassword));
        }
        catch (DisabledException e){
            throw new Exception("User is disabled");
        }
        catch (BadCredentialsException e){
            throw new Exception("Bad credentials");
        }
    }
}
