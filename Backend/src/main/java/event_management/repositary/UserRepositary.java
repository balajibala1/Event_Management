package event_management.repositary;

import event_management.model.User;
import org.springframework.data.repository.CrudRepository;


public interface UserRepositary extends CrudRepository<User, Integer> {
    User findByUsername(String userName);
    User findAllByEmailId(String email);

}
