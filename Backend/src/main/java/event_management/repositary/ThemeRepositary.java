package event_management.repositary;

import event_management.model.Theme;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ThemeRepositary extends CrudRepository<Theme,Integer> {
    Theme findByThemeName(String event_name);
}
