package event_management.service;

import event_management.exceptions.UserNotFoundException;
import event_management.model.Theme;
import event_management.repositary.ThemeRepositary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ThemeService {
    @Autowired
    private ThemeRepositary themeRepositary;

    public Theme saveTheme(Theme theme) {
        return themeRepositary.save(theme);
    }

    public List<Theme> viewTheme() {
        return (List<Theme>) themeRepositary.findAll();
    }

    public Theme viewById(Integer id) throws UserNotFoundException {
        Theme theme = themeRepositary.findById(id).orElseThrow(() ->
                new UserNotFoundException("Theme not exist with id :" + id));
        return theme;
    }

    public Theme deleteById(Integer id) throws UserNotFoundException {
        Theme theme = themeRepositary.findById(id).orElseThrow(() ->
                new UserNotFoundException("Theme not exist with id :" + id));
        themeRepositary.deleteById(id);
        return theme;
    }

    public Theme editById(Integer id, Theme theme) throws UserNotFoundException {
        Theme theme1 = themeRepositary.findById(id).orElseThrow(() ->
                new UserNotFoundException("Theme not exist with id :" + id));
        theme1.setThemeName(theme.getThemeName());
        theme1.setTheme_cost(theme.getTheme_cost());
        theme1.setLocation(theme.getLocation());
        return themeRepositary.save(theme1);
    }
}

