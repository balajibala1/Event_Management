package event_management.repositary;

import event_management.model.Role;
import org.springframework.data.repository.CrudRepository;

public interface RoleRepositary extends CrudRepository<Role,Integer> {
    Role findByRoleName(String roleName);
}
