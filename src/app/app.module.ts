import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ReadAllComponent } from './components/transaction/read-all/read-all.component';
import { CreateComponent } from './components/transaction/create/create.component';
import { UpdateComponent } from './components/transaction/update/update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateUserComponent } from './components/login/create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    LoginComponent,
    ReadAllComponent,
    CreateComponent,
    UpdateComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
