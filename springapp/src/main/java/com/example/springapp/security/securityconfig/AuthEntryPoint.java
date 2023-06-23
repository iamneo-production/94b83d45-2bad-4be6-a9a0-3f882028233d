package com.example.springapp.security.securityconfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;
import org.springframework.security.core.AuthenticationException;
@Component
public class AuthEntryPoint implements AuthenticationEntryPoint{
    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response,  AuthenticationException authException) throws IOException,ServletException{
        response.sendError(response.SC_UNAUTHORIZED,"Unauthorized");
    }
}