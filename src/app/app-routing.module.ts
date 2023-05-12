import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './components/login/create-user/create-user.component';
import { LoginComponent } from './components/login/login.component';
import { AuthComponent } from './components/auth/auth.component';
import { AuthGuard } from './components/auth.guard';
import { CreateComponent } from './components/transaction/create/create.component';
import { ReadAllComponent } from './components/transaction/read-all/read-all.component';
import { UpdateComponent } from './components/transaction/update/update.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: '',
        component: ReadAllComponent,
      },
      {
        path: 'create',
        component: CreateComponent,
      },
      {
        path: 'update/:id',
        component: UpdateComponent,
      }
    ],
    canActivate:[]
  },
  {
    path: '',
    component: AuthComponent,
    children:[
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'create-user',
        component: CreateUserComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
