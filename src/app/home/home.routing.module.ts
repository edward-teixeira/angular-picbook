import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/auth/auth.guard';
import { HomeComponent } from './home.component';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
          path: '',
          component: SignInComponent,
          canActivate: [AuthGuard],
          data: {
            title: 'Sign In'
          }
      },
      {
        path: 'signup',
        component: SignUpComponent,
        data: {
          title: 'Sign Up'
        }
       },
    ]
  },
];

@NgModule({
  // todas os modulos que forem utilizar de lazy loading devem usar forChild.
  // forRoot é somente para a rota pai
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
