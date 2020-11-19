import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoDetailComponent } from './photo-detail.component';
import { PhotoModule } from '../photo/photo.module';
import { PhotoCommentsComponent } from './photo-comments/photo-comments';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from '../../shared/components/vmessage/vmessage.module';
import { PhotoOwnwerOnlyDirective } from './photo-owner-only/photo-owner-only.directive';
import { ShowIfLoggedModule } from '../../shared/directives/show-if-logged/show-if-logged.module';

@NgModule({
  declarations: [
    PhotoDetailComponent,
    PhotoCommentsComponent,
    PhotoOwnwerOnlyDirective],
  imports: [
            CommonModule,
            PhotoModule,
            RouterModule,
            ReactiveFormsModule,
            VMessageModule,
            ShowIfLoggedModule
          ],
  exports: [PhotoDetailComponent, PhotoCommentsComponent ],
  providers: [],
})
export class PhotoDetailModule {}
