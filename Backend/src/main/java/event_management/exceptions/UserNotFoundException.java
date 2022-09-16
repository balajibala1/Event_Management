package event_management.exceptions;

public class UserNotFoundException extends Exception{
    private String msg;

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public UserNotFoundException() {
    }

    public UserNotFoundException(String msg) {
        super(msg);
        this.msg = msg;
    }
}