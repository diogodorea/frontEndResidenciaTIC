import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NOTICIASComponent } from './noticias/noticias.component';
import { DESTAQUEComponent } from './destaque/destaque.component';
import { ServicosComponent } from './servicos/servicos.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { MenuComponent } from './menu/menu.component';
import { FOOTERComponent } from './footer/footer.component';
import { HEADERComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NOTICIASComponent,
    DESTAQUEComponent,
    ServicosComponent,
    ResultadosComponent,
    MenuComponent,
    FOOTERComponent,
    HEADERComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
