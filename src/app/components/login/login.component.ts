import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDto } from 'src/app/models/dtos/LoginDto';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login: LoginDto = {
    email: '',
    password: '',
  };

  constructor(private service: LoginService, private router: Router) {}

  ngOnInit(): void {}

  async authLoginByEmail() {
    try {
      const res = await this.service.loginByEmail(this.login.email, this.login.password);
      console.log(`login efetuado:${res}`);
      alert('Login feito com sucesso!');
      this.router.navigate(['']);
    } catch (err) {
      console.log(err);
      alert('Erro na tentativa de Login..');
    }
  }

  async authLoginByGoogleAccount() {
    try {
      const res = await this.service.googleSingnin();
      console.log(`login efetuado:${res}`);
      alert('Login feito com sucesso!');
      this.router.navigate(['']);
    } catch (err) {
      console.log(err);
      alert('Erro na tentativa de Login..');
    }
  }

}
