import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { Error404Component } from './error-404/error-404.component';
import { AutofocusDirective } from './autofocus.directive';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    SearchBarComponent,
    HeaderComponent,
    Error404Component,
    AutofocusDirective,
  ],
  exports: [
    SearchBarComponent,
    HeaderComponent,
    Error404Component,
    AutofocusDirective,
  ],
})
export class SharedModule {}
