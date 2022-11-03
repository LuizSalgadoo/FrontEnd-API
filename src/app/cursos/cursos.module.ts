import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from "./cursos/CursosComponent";
import { CategoriaPipe } from './cursos/pipes/categoria.pipe';
import { CursosFormComponent } from './cursos-form/cursos-form.component';




@NgModule({
  declarations: [
    CursosComponent,
    CategoriaPipe,
    CursosFormComponent,
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    SharedModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class CursosModule { }
