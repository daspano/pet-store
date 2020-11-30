import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit.component';
import { FormsModule} from '@angular/forms';
import { PetsFactoryModule } from 'pets-factory';



@NgModule({
  declarations: [EditComponent],
  imports: [
    CommonModule,
    EditRoutingModule,
    FormsModule,
    PetsFactoryModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class EditModule { }
