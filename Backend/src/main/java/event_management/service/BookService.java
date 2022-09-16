package event_management.service;

import event_management.exceptions.UserNotFoundException;
import event_management.model.Book;
import event_management.model.Theme;
import event_management.model.User;
import event_management.repositary.BookRepositary;
import event_management.repositary.ThemeRepositary;
import event_management.repositary.UserRepositary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class BookService {
    @Autowired
    private BookRepositary bookRepositary;
    @Autowired
    private UserRepositary userRepositary;
    @Autowired
    private ThemeRepositary themeRepositary;

    public Book book(Book book,Integer user_id) throws UserNotFoundException {
        Book books=new Book();

        books= bookRepositary.save(book);
        String event = books.getEvent_name();
        Theme theme=new Theme();
        theme= themeRepositary.findByThemeName(event);
        books.setTotal(theme.getTheme_cost());
        bookRepositary.save(books);
        addBookUser(books,user_id);
        return books;
    }

    private void addBookUser(Book book_id, Integer user_id) throws UserNotFoundException {
        User user=new User();
        user= userRepositary.findById(user_id).orElseThrow(() ->
                new UserNotFoundException("User not exist with id :" +user_id));
        Set<Book> books =user.getBooks();
        books.add(book_id);
        user.setBooks(books);
        userRepositary.save(user);
    }


    public Set<Book> viewById(Integer user_id){
        User user=new User();
        user=userRepositary.findById(user_id).get();

        return user.getBooks();

    }
    public Book deleteById(Integer id) {
        Book book = bookRepositary.findById(id).get();
        bookRepositary.deleteById(id);
        return book;
    }

}
