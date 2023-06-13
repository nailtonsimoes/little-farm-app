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
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { LoginService } from './services/login.service';


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
    MatSortModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage()),
  ],
  providers: [
    ScreenTrackingService,UserTrackingService,LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
