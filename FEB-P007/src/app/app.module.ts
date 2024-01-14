import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileReaderComponent } from './file-reader/file-reader.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { EspecificacaoComponent } from './especificacao/especificacao.component';
import { ExibicaoComponent } from './exibicao/exibicao.component';

@NgModule({
  declarations: [
    AppComponent,
    FileReaderComponent,
    CategoriasComponent,
    VeiculosComponent,
    EspecificacaoComponent,
    ExibicaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
