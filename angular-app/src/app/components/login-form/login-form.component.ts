import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  isInfo: boolean;
  info: string;
  username: string;
  password: string;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.isInfo = false;
    this.info = '';
  }

  login() {
    this.loginService.login(
      {
        password: this.password,
        username: this.username
      }
    ).subscribe(data => {
      this.isInfo = true;
      this.info = JSON.stringify(
        {
          message: 'Pomyślnie zalogowano.',
          data: data
        }
      );
    }, err => {
      this.isInfo = true;
      this.info = JSON.stringify({
        message: 'Nie udało się zalogować.',
        data: err
      });
    });
  }
}
