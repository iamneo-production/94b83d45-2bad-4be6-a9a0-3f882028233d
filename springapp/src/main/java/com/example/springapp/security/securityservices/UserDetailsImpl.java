package com.example.springapp.security.securityservices;
import java.util.Collection;
import java.util.Collections;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import com.example.springapp.model.*;
public class UserDetailsImpl implements UserDetails {
    private String email;
    private String password;
    private Collection<? extends GrantedAuthority> authorities;
    public UserDetailsImpl(String email, String password,
            Collection<? extends GrantedAuthority> authorities) {
        super();
        this.email = email;
        this.password = password;
        this.authorities = authorities;
    }
    public static UserDetailsImpl build(User user){
        GrantedAuthority authority=new SimpleGrantedAuthority("ROLE_"+user.getRole());
        return new UserDetailsImpl(
            user.getEmail(),
            user.getPassword(),
            Collections.singleton(authority)
        );
    }
    @Override
    public String getUsername() {
        return email;
    }
    @Override
    public String getPassword() {
        return password;
    }
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }
    @Override
    public boolean isEnabled(){
        return true;
    }
    @Override
    public boolean isAccountNonExpired(){
        return true;
    }
    @Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}
}

