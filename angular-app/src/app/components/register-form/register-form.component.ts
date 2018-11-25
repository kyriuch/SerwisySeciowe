import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  isInfo: boolean;
  info: string;
  username: string;
  password: string;

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
    this.isInfo = false;
    this.info = '';
  }

  register() {
    this.registerService.register(
      {
        password: this.password,
        username: this.username
      }
    ).subscribe(data => {
      this.isInfo = true;
      this.info = JSON.stringify(
        {
          message: 'Pomyślnie zarejestrowano.',
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
