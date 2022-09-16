package event_management.controller;

import event_management.exceptions.UserNotFoundException;
import event_management.model.Book;
import event_management.model.User;
import event_management.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Method;
import java.util.List;
import java.util.Set;

@RequestMapping("/user")
@RestController
public class BookController {
    @Autowired
    private BookService bookService;

    @PreAuthorize("hasRole('User')")
    @RequestMapping(value = "/book/{id}",method = RequestMethod.POST)
    public Book bookEvent(@RequestBody Book book,@PathVariable Integer id) throws UserNotFoundException {
        return bookService.book(book,id);
    }

    @PreAuthorize("hasRole('User')")
    @RequestMapping(value = "/viewbook/{id}",method = RequestMethod.GET)
    public Set<Book> viewById(@PathVariable Integer id) {
        return bookService.viewById(id);
    }

    @PreAuthorize("hasRole('User')")
    @RequestMapping(value ="/deletebook/{id}",method = RequestMethod.DELETE)
    public String deleteById(@PathVariable Integer id) {
        bookService.deleteById(id);
        return "deleted Successfully";
    }
}
