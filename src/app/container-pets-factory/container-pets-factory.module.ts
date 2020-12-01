import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { PetsFactoryModule } from 'pets-factory';
import { ContainerPetsFactoryComponent } from './container-pets-factory.component';

@NgModule({
  declarations: [ContainerPetsFactoryComponent],
  imports: [
    CommonModule,
    FormsModule,
    PetsFactoryModule
  ],
  exports: [ContainerPetsFactoryComponent]
})
export class ContainerPetsFactoryModule { }
