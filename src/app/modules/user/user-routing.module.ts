import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCreateComponent, UserSearchComponent } from './components';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full',
      },
      {
        path: 'search',
        component: UserSearchComponent,
        data: {
          title: 'Ricerca',
        },
      },
      {
        path: 'create',
        component: UserCreateComponent,
        data: {
          title: 'Nuovo',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
