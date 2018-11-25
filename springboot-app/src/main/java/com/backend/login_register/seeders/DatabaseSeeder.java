package com.backend.login_register.seeders;

import com.backend.login_register.models.Account;
import com.backend.login_register.repositories.AccountRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@Slf4j
class DatabaseSeeder {


    @Bean
    CommandLineRunner initDatabase(AccountRepository accountRepository) {
        Account adminAccount = new Account();
        adminAccount.setUsername("admin");
        adminAccount.setPassword("adminpwd");

        return args -> System.out.println("Preloading " + accountRepository.saveAndFlush(adminAccount));
    }
}
