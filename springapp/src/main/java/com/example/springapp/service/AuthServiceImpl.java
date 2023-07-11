package com.example.springapp.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.springapp.model.User;
import com.example.springapp.repository.UserRepository;
import com.example.springapp.exception.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import com.example.springapp.dto.*;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import java.util.*;
import com.example.springapp.security.securityconfig.JwtUtils;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
@Service
public class AuthServiceImpl implements AuthService{
    @Autowired
    private UserRepository userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authManager;

    @Autowired
    private JwtUtils jwtUtils;

 

    public String registerUser(UserRegisterDto userRegisterDto) {
        User user= new User();
        user.setFirstName(userRegisterDto.getFirstName());
        user.setLastName(userRegisterDto.getLastName());
        user.setEmail(userRegisterDto.getEmail());
        if (!validatePassword(userRegisterDto.getPassword(), userRegisterDto.getConfirmpassword())){
            throw new PasswordNotMatchException("Password and Confirm Password does not Match");
        }
        user.setPassword(passwordEncoder.encode(userRegisterDto.getPassword()));
        user.setRole(userRegisterDto.getRole());

        Optional<User> existUser= userRepo.findUserByEmail(user.getEmail());
        if(existUser.isEmpty()){
            userRepo.save(user);
            return "User registered successfully with email: "+ user.getEmail();
        }
        throw new UserAlreadyExistException("Email Already Exist");
    }
    
    public boolean validatePassword(String password,String confirmpassword){
        return password.equals(confirmpassword);

    }

    @Override
    public Map<String,Object> login(UserLoginDto userLoginDto){
        Optional<User> checkIsPresent= userRepo.findUserByEmail(userLoginDto.getEmail());
        if(checkIsPresent.isEmpty()){
            throw new UsernameNotFoundException("User doesn't exist with email: "+ userLoginDto.getEmail());
        }
        Authentication authentication=
        authManager.authenticate(new UsernamePasswordAuthenticationToken(userLoginDto.getEmail(),userLoginDto.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwtToken=jwtUtils.generateJwt(authentication);
        User user=checkIsPresent.get();
        Map<String,Object> result=new HashMap<>();
        result.put("token",jwtToken);
        result.put("name", user.getFirstName()+" "+ user.getLastName());
        result.put("id",user.getId());
        result.put("email",user.getEmail());
        result.put("role",user.getRole());
        return result;
    }
}
