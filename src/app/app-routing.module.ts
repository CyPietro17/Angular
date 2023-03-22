import { GenericLayoutComponent } from './pages/generic-layout/generic-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  {
    path: '',
    component: GenericLayoutComponent,
    children: [
      {
        path: 'user',
        loadChildren: () =>
          import('./modules/user/user.module').then((m) => m.UserModule),
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
