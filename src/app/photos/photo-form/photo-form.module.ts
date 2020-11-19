import { NgModule } from '@angular/core';
import { PhotoFormComponent } from './photo-form.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VMessageModule } from '../../shared/components/vmessage/vmessage.module';
import { PhotoComponent } from '../photo/photo.component';
import { PhotoModule } from '../photo/photo.module';
import { ImmediateClickModule } from '../../shared/directives/ImmediateClick/immediate-click.module';

@NgModule({
    declarations: [PhotoFormComponent],
    imports: [
       CommonModule,
       ReactiveFormsModule,
       FormsModule,
       VMessageModule,
       PhotoModule,
       ImmediateClickModule
    ]
})
export class PhotoFormModule { }
