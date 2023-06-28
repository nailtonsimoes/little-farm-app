import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(public loginService: LoginService, private router: Router, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  async authLoginByEmail() {
    try {
      const res = await this.loginService.loginByEmail(this.login.email, this.login.password);
      console.log(`login efetuado:${res}`);
      this.router.navigate(['']);
    } catch (err) {
      console.log(err);
      this.openSnackBar(`Erro na tentativa de login: ${err}`);
    }
  }

  async authLoginByGoogleAccount() {
    try {
      const res = await this.loginService.googleSingnin();
      console.log(`login efetuado:${res}`);
      this.openSnackBar('Login feito com sucesso!');
      this.router.navigate(['']);
    } catch (err) {
      console.log(err);
      this.openSnackBar('Erro na tentativa de Login..');
    }
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', { duration: 3000 });
  }

}
