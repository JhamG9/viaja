import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsMobileComponent } from './options-mobile/options-mobile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        OptionsMobileComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        OptionsMobileComponent,
        HeaderComponent,
        FooterComponent
    ]
})
export class SharedModule { }
