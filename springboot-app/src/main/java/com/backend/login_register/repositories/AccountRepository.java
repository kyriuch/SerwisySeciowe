package com.backend.login_register.repositories;

import com.backend.login_register.models.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account, Long> {
    Account findAccountByUsernameAndAndPassword(String username, String password);
}
