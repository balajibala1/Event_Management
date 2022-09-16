package event_management.exceptions;
import java.util.Date;

public class ErrorDetails {
    private String msg;
    private String request;
    private Date timestamp;

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public String getRequest() {
        return request;
    }

    public void setRequest(String request) {
        this.request = request;
    }

    public Date getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Date timestamp) {
        this.timestamp = timestamp;
    }

    public ErrorDetails() {
    }

    public ErrorDetails( Date timestamp,String msg, String request) {
        this.msg = msg;
        this.request = request;
        this.timestamp = timestamp;
    }
}
