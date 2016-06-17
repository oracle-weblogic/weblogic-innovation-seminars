package patching;

import java.io.Serializable;

public class SessionCompat implements Serializable {

  private Integer ival;

  public SessionCompat(Integer ival) {
    this.ival = ival;
  }

  public String toString() {
    return ival.toString();
  }

  public int intValue() {
    return ival.intValue();
  }  
}

