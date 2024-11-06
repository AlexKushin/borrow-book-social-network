package com.okushyn.book;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class BorrowBookNetworkApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(BorrowBookNetworkApiApplication.class, args);
	}

}
