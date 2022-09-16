package event_management.configuration;

import event_management.service.JwtService;
import event_management.util.Jwt;
import io.jsonwebtoken.ExpiredJwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class JwtFilter extends OncePerRequestFilter {
    @Autowired
    private JwtService jwtService;
    @Autowired
    private Jwt jwt;
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {


        final String header=request.getHeader("Authorization");
        String jwttoken=null;
        String username=null;
        if(header!=null && header.startsWith("Bearer ")){
            jwttoken= header.substring(7);
            try{
                username=jwt.getUserNameFromToken(jwttoken);
            }catch (IllegalArgumentException e){
                System.out.println("Unable to get token");
            }catch (ExpiredJwtException e){
                System.out.println("Jwt token is expired");
            }
        }
        else{
            System.out.println("Jwt does not start with bearer");
        }
        if(username!=null && SecurityContextHolder.getContext().getAuthentication()==null){
            UserDetails userDetails=jwtService.loadUserByUsername(username);
            if(jwt.validateToken(jwttoken,userDetails)){
               UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken =new UsernamePasswordAuthenticationToken(userDetails,null,
                        userDetails.getAuthorities());
               usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
               SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
            }
        }
        filterChain.doFilter(request,response);
    }
}
