package com.okushyn.book.security;

import com.okushyn.book.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;


    @Override
    @Transactional  //for also loading roles for the user authorities
    public UserDetails loadUserByUsername(String userEmail) throws UsernameNotFoundException {

        return userRepository.findByEmail(userEmail).orElseThrow(() ->
                new UsernameNotFoundException("User with email: " + userEmail + " not found"));
    }
}
