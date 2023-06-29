package com.example.springapp.security.securityconfig;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.util.StringUtils;
import java.io.IOException;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.example.springapp.security.securityservices.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
public class JwtTokenFilter extends OncePerRequestFilter{
    private Logger logger=LoggerFactory.getLogger(JwtTokenFilter.class);
    @Autowired
    private JwtUtils jwtUtils;
    @Autowired
    private UserDetailsServiceImpl userDetailsServiceImpl;
    @Override
    protected void doFilterInternal(HttpServletRequest request, 
    HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException{
        try {
            String token=parseJwt(request);
            if(token!=null && jwtUtils.validateJwt(token)){
                String usernname=jwtUtils.getUsernameFromToken(token);
                UserDetails user=userDetailsServiceImpl.loadUserByUsername(usernname);
                UsernamePasswordAuthenticationToken authentication=new 
                                    UsernamePasswordAuthenticationToken(user,null,user.getAuthorities());
                SecurityContextHolder.getContext().setAuthentication(authentication);
            }

        } 
        catch (Exception e) {
            logger.error("error");
        }
        filterChain.doFilter(request, response);
        
    }
    private String parseJwt(HttpServletRequest request){
        String header=request.getHeader("Authorization");
        if( StringUtils.hasText(header) && header.startsWith("Bearer ")){
            return header.substring(7,header.length());
        }
        return null;
    }
}
