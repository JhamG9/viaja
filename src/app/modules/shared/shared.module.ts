import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsMobileComponent } from './options-mobile/options-mobile.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [
        OptionsMobileComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        OptionsMobileComponent,
        HeaderComponent
    ]
})
export class SharedModule { }
