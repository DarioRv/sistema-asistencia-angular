import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutPageComponent } from "./pages/layout-page/layout-page.component";
import { SignInPageComponent } from "./pages/sign-in-page/sign-in-page.component";
import { SignUpPageComponent } from "./pages/sign-up-page/sign-up-page.component";
import { isAlreadyAuthenticated } from "./guards/sign-in.guard";
import { VerifyEmailPageComponent } from "./pages/verify-email-page/verify-email-page.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'sign-in',
        component: SignInPageComponent,
        canActivate: [isAlreadyAuthenticated]
      },
      {
        path: 'sign-up',
        component: SignUpPageComponent
      },
      {
        path: 'verify-email/:token',
        component: VerifyEmailPageComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
