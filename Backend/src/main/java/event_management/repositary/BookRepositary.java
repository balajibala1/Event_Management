package event_management.repositary;

import event_management.model.Book;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepositary extends CrudRepository<Book,Integer> {
}
