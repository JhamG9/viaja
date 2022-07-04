import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { ManaureComponent } from './manaure.component';
import { ManaureRoutingModule } from './manaure-routing.module';

@NgModule({
  declarations: [
    ManaureComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ManaureRoutingModule
  ]
})
export class ManaureModule { }
