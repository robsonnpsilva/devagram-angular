import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotaoComponent } from './compartilhado/botao/botao.component';
import { CompartilhadoModule } from './compartilhado/compartilhado.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompartilhadoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
