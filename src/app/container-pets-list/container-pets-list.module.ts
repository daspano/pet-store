import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerPetsListComponent } from './container-pets-list.component';
import { PetsListModule } from 'pets-list';

@NgModule({
  declarations: [ContainerPetsListComponent],
  imports: [
    CommonModule,
    FormsModule,
    PetsListModule
  ],
  exports: [ContainerPetsListComponent]
})
export class ContainerPetsListModule { }
