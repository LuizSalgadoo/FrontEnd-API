import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { CursosService } from './../services/cursos.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from './../model/curso';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos$: Observable<Curso[]>;
  displayedColumns = ['name', 'categoria'];

  //cursoService: CursosService;

  constructor(
    private cursoService: CursosService,
    public dialog: MatDialog) {
    //this.cursoService = new CursosService();
    this.cursos$ = this.cursoService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar cursos');
        return of([])
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {

  }
}
