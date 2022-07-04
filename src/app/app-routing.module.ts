import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule) },
  { path: 'blogs', loadChildren: () => import('./modules/blogs/blogs.module').then(m => m.BlogsModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
