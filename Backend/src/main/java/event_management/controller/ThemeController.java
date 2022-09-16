package event_management.controller;

import event_management.exceptions.UserNotFoundException;
import event_management.model.Theme;
import event_management.service.ThemeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RequestMapping("/admin")
@RestController
public class ThemeController {
    @Autowired
    private ThemeService themeService;


    @RequestMapping(value = "/savetheme",method = RequestMethod.POST)
    @PreAuthorize("hasRole('Admin')")
    public Theme saveTheme(@RequestBody Theme theme){
        return themeService.saveTheme(theme);

    }
    @RequestMapping(value = "/viewtheme",method = RequestMethod.GET)
    public List<Theme> viewTheme(){
        return themeService.viewTheme();
    }

    @PreAuthorize("hasRole('Admin')")
    @RequestMapping(value ="/viewtheme/{id}",method = RequestMethod.GET)
    public Theme viewbyId(@PathVariable Integer id) throws UserNotFoundException {
        return themeService.viewById(id);
    }

    @PreAuthorize("hasRole('Admin')")
    @RequestMapping(value ="/deletetheme/{id}",method = RequestMethod.DELETE)
    public String deleteById(@PathVariable Integer id) throws UserNotFoundException {
        themeService.deleteById(id);
        return "deleted Successfully";
    }

    @PreAuthorize("hasRole('Admin')")
    @RequestMapping(value ="/edittheme/{id}",method = RequestMethod.PUT)
    public Theme editById(@PathVariable Integer id,@RequestBody Theme theme) throws UserNotFoundException {
        return themeService.editById(id,theme);
    }
}
