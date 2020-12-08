import { Component, OnInit } from '@angular/core';
import {ChangeDetectorRef, Directive, Input, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { NoteServiceService } from '../Services/note-service.service';
import {HttpClient} from '@angular/common/http';
import { NoteComponent } from '../note/note.component';
import { DeleteComponent } from '../delete/delete.component';




@Component({
  selector: 'app-liste-note',
  templateUrl: './liste-note.component.html',
  styleUrls: ['./liste-note.component.css']
})
export class ListeNoteComponent implements OnInit {


  constructor(private noteService: NoteServiceService, private http: HttpClient, private dialog: MatDialog) { }
  private sa: any;

  displayedColumns: string[] = [ 'Etape', 'Annee_Academique', 'Semestre', 'Fichier', 'option'];
  dataSource;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit(): void {
    this.getdataNote()
  }

  getdataNote() {
    this.noteService.getdata().subscribe((data) => {
      this.sa = data;
      this.dataSource = new MatTableDataSource(this.sa);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

    });
  }

  onShowCreateDialog(): void {

    this.dialog.open(NoteComponent, {
      width: '50%',
      disableClose: true
    }).afterClosed().subscribe(result => {
        this.getdataNote();
    });
  }

  onShowCreateDialogDelete(row): void {
    this.noteService.getDataDialog(row)
    this.dialog.open(DeleteComponent, {
      width: '50%',
      disableClose: true
    }).afterClosed().subscribe(result => {
        this.getdataNote();
    });
  }


  onDownload(filename){
    console.log(filename)
    this.noteService.DownloadNote(filename).subscribe(result => {
        console.log('success')
     
    }); 
  }

 
}
