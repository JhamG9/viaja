import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './blogs.component';

const routes: Routes = [
    {
        path: '', component: BlogsComponent
    },
    {
        path: 'manaure', loadChildren: () => import('./places/manaure/manaure.module').then(m => m.ManaureModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlogsRoutingModule { }
