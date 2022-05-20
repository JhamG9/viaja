import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule) },
  { path: 'blogs', loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
