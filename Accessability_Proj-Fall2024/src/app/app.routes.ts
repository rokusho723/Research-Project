import { Routes } from '@angular/router';
import { ViewBlogComponent } from "./components/view-blog/view-blog.component";
import { ErrorPageComponent } from './components/error-page/error-page.component';

import { BlogData } from "./models/blog-data.model";

export const routes: Routes = [

  {path:'', redirectTo:'Home', pathMatch:'full'},
  {path: 'Home', loadChildren: ()=> import('./components/home-page/home-page.module').then(m => m.HomePageModule) },
  {path: 'CreatePost', loadChildren: ()=> import('./components/create-post/create-post.module').then(m => m.CreatePostModule) },
  {path: 'view_blog/:creatorsID', component: ViewBlogComponent},
  // Wildcard route for a 404 page
  {path: "**", component: ErrorPageComponent}
];
