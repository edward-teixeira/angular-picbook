import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AuthGuard } from './auth/auth.guard';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './auth/request.interceptor';
import { FooterComponent } from './footer/footer.component';
import { AlertModule } from '../shared/components/alerts/alert.module';
import { LoadingModule } from '../shared/components/loading/loading.module';
import { MenuModule } from '../shared/components/menu/menu.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent],
  imports: [CommonModule, RouterModule, AlertModule, LoadingModule, MenuModule],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: RequestInterceptor,
    multi: true
}],
})
export class CoreModule { }
