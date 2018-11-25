package com.backend.login_register.controllers;

import com.backend.login_register.dtos.AccountDto;
import com.backend.login_register.dtos.AccountOutDto;
import com.backend.login_register.models.Account;
import com.backend.login_register.repositories.AccountRepository;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class AccountController  {

    private final AccountRepository accountRepository;
    private static final ModelMapper modelMapper = new ModelMapper();

    AccountController(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    @PostMapping("/registerAccount")
    public ResponseEntity<AccountOutDto> RegisterAccount(@RequestBody AccountDto accountDto) {
        return ResponseEntity.ok(modelMapper.map(accountRepository.saveAndFlush(modelMapper.map(accountDto, Account.class)), AccountOutDto.class));
    }

    @PostMapping("/login")
    public ResponseEntity<AccountOutDto> Login(@RequestBody AccountDto accountDto) {
        Account foundAccount = accountRepository.findAccountByUsernameAndAndPassword(accountDto.getUsername(), accountDto.getPassword());

        if(foundAccount == null) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(modelMapper.map(foundAccount, AccountOutDto.class));
        }
    }
}
