import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxUiLoaderConfig, NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule, PB_DIRECTION, POSITION, SPINNER } from 'ngx-ui-loader';
import { ToastModule } from 'primeng/toast';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './pages/template/core/core.module';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: '#FF6600',
  bgsOpacity: 0.5,
  bgsPosition: POSITION.bottomLeft,
  bgsSize: 60,
  bgsType: SPINNER.chasingDots,
  fastFadeOut: true,
  fgsColor: '#3db13d',
  fgsPosition: POSITION.centerCenter,
  fgsSize: 300,
  fgsType: SPINNER.ballScaleMultiple,
  gap: 20,
  logoPosition: POSITION.centerCenter,
  overlayColor: 'rgba(40, 40, 40, 0.4)',
  pbColor: '#3db13d',
  pbDirection: PB_DIRECTION.leftToRight,
  pbThickness: 10,
  hasProgressBar: true,
  text: 'Carregando...',
  textColor: '#FFFFFF',
  textPosition: POSITION.centerCenter,
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    HttpClientModule,
    ToastModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
    NgxUiLoaderRouterModule.forRoot({ showForeground: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
