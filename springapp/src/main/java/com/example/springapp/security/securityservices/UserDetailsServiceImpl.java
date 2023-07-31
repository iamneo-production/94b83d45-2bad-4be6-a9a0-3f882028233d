package com.example.springapp.security.securityservices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import com.example.springapp.model.User;
import com.example.springapp.repository.UserRepository;
import com.example.springapp.security.securityservices.UserDetailsImpl;
@Service
public class UserDetailsServiceImpl implements UserDetailsService{
    @Autowired
    private UserRepository userRepo;
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException{
        User user=userRepo.findUserByEmail(email)
        .orElseThrow(()-> new UsernameNotFoundException("Userdoesn't exist with email: " + email));
        return UserDetailsImpl.build(user);
    }

}
