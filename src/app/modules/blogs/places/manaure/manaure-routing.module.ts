import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManaureComponent } from './manaure.component';

const routes: Routes = [
    {
        path: '', component: ManaureComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManaureRoutingModule { }
