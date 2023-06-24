package com.example.springapp.dto;
import javax.validation.constraints.*;

public class UserRegisterDto {
    @NotBlank(message = "First name should not be blank")
    @Size(min = 3, max=20)
    private String firstName;
    @NotBlank(message = "Last name should not be blank")
    @Size(min = 3, max=20)
    private String lastName;
    @NotBlank(message = "Email should not be blank")
    @Email(message = "Enter proper email address")
    private String email;
    @NotBlank(message = "Password should not be blank")
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",
    message = "Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one special character, and one number.")
    private String password;
    @NotBlank(message="Please Enter confirm Password")
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",
        message = "Confirm password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one special character, and one number.")
    private String confirmpassword;
   
    public UserRegisterDto(String firstName, String lastName, String email, String password,
            String confirmpassword) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.confirmpassword = confirmpassword;
    }
    public UserRegisterDto() {
    }
    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getConfirmpassword() {
        return confirmpassword;
    }
    public void setConfirmpassword(String confirmpassword) {
        this.confirmpassword = confirmpassword;
    }
    
}
