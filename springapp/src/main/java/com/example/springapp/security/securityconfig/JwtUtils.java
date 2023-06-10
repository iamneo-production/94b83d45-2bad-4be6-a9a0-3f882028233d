package com.example.springapp.security.securityconfig;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
import com.example.springapp.security.securityservices.UserDetailsImpl;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.util.Date;
@Component
public class JwtUtils {
    private String secret="IamSecret";
    private long expirationtime=43200000;
    public boolean validateJwt(String token) {
        try {
            Jwts.parser().setSigningKey(secret).parseClaimsJws(token);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
    public String getUsernameFromToken(String token){
        return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody().getSubject();
    }
    public String generateJwt(Authentication authentication){
        UserDetailsImpl user=(UserDetailsImpl) authentication.getPrincipal();
        return Jwts.builder().setSubject(user.getUsername())
        .setIssuedAt(new Date())
        .setExpiration(new Date((new Date()).getTime()+expirationtime))
        .signWith(SignatureAlgorithm.HS512, secret)
		.compact();

    }
}
