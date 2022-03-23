import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmeSharedComponent } from './filme-shared/filme-shared.component';
import { BannerSharedComponent } from './banner-shared/banner-shared.component';
import { FooterSharedComponent } from './footer-shared/footer-shared.component';
import { LoginSharedComponent } from './login-shared/login-shared.component';
import { KnobModule } from 'primeng/knob';
import { FormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [
    FilmeSharedComponent,
    BannerSharedComponent,
    FooterSharedComponent,
    LoginSharedComponent,
  ],
  imports: [CommonModule, FormsModule, KnobModule, PaginatorModule],
  exports: [
    FooterSharedComponent,
    FilmeSharedComponent,
    BannerSharedComponent,
    LoginSharedComponent,
  ],
})
export class SharedModule {}
