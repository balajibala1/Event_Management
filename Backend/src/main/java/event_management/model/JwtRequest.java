package event_management.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
@AllArgsConstructor
@Getter
@Setter
public class JwtRequest {
    private String userName;
    private  String userPassword;
}
