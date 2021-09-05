import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {FilterService} from 'primeng/api';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [
    ButtonModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    FilterService
  ]
})
export class SharedModule {
}
