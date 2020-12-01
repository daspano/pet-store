import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit.component';
import { ContainerPetsFactoryModule } from '../container-pets-factory/container-pets-factory.module';

@NgModule({
  declarations: [EditComponent],
  imports: [
    CommonModule,
    EditRoutingModule,
    ContainerPetsFactoryModule
  ]
})
export class EditModule { }
