import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministrationComponentComponent } from './administration-component/administration-component.component';
import { EnseignantComponentComponent } from './enseignant-component/enseignant-component.component';
import { EtudiantFormComponentComponent } from './etudiant-form-component/etudiant-form-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AdministrationComponentComponent,
    EnseignantComponentComponent,
    EtudiantFormComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
