import { NgModule } from '@angular/core';
import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { CardModule } from '../shared/components/card/card.module';
import { DarkenOnHoverModule } from '../shared/directives/darken-on-hover/darken-on-hover.module';
import { RouterModule } from '@angular/router';
import { ImmediateClickModule } from '../shared/directives/ImmediateClick/immediate-click.module';

@NgModule({
    imports: [
        PhotoModule,
        PhotoFormModule,
        PhotoListModule,
        RouterModule,
        DarkenOnHoverModule,
        ImmediateClickModule
    ]
})
export class PhotosModule {}
