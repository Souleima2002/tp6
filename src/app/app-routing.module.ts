import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantFormComponentComponent } from './etudiant-form-component/etudiant-form-component.component';
import { EnseignantComponentComponent } from './enseignant-component/enseignant-component.component';
import { AdministrationComponentComponent } from './administration-component/administration-component.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
