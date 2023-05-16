import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

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

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CardEntradaComponent } from './components/cards/card-entrada';
import { CardSaidaComponent } from './components/cards/card-saida';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CardTotalComponent } from './components/cards/card-total';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    LoginComponent,
    ReadAllComponent,
    CreateComponent,
    UpdateComponent,
    CreateUserComponent,
    HeaderComponent,
    FooterComponent,
    CardEntradaComponent,
    CardSaidaComponent,
    CardTotalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    MatTableModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
