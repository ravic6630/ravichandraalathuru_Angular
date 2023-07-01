import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SubmissionComponent } from './submission/submission.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  {path:"submission",component:SubmissionComponent,outlet:'aux'},
  {
    path: "sidebar-menu", component: SidebarComponent, children: [
      {
        path: "submission",
        component: SubmissionComponent,
        outlet: "aux"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
