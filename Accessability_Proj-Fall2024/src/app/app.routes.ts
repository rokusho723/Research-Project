import { Routes } from '@angular/router';

export const routes: Routes = [

  {path:'', redirectTo:'Home', pathMatch:'full'},
  {path: 'Home', loadChildren: ()=> import('./components/home-page/home-page.module').then(m => m.HomePageModule) },
  // Wildcard route for a 404 page
  {path: "**", loadChildren: ()=> import('./components/home-page/home-page.module').then(m => m.HomePageModule) }
];
