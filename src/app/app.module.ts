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

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CardEntradaComponent } from './components/cards/card-entrada';
import { CardSaidaComponent } from './components/cards/card-saida';
import { MatIconModule } from '@angular/material/icon';
import { CardTotalComponent } from './components/cards/card-total';

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
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
