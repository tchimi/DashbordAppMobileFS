import { DeleteprogramexamComponent } from './../../deleteprogramexam/deleteprogramexam/deleteprogramexam.component';
import { Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {HttpClient} from '@angular/common/http';
import { ProgramexamServiceService } from '../../../../Services/programexam-service.service';
import { AddprogramexamComponent } from '../../addprogramexam/addprogramexam.component';



@Component({
  selector: 'app-listeprogramexam',
  templateUrl: './listeprogramexam.component.html',
  styleUrls: ['./listeprogramexam.component.css']
})
export class ListeprogramexamComponent implements OnInit {

  constructor(private http: HttpClient, private dialog: MatDialog, private programexamService: ProgramexamServiceService) { }

  private sa: any;

  displayedColumns: string[] = [ 'Annee_Academique','Niveau', 'Semestre', 'Fichier', 'option'];
  dataSource;

  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit(): void {
    this.getdataProgramexam()
  }

  getdataProgramexam() {
    this.programexamService.getdata().subscribe((data) => {
      this.sa = data;
      this.dataSource = new MatTableDataSource(this.sa);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

    });
  }
  onShowCreateDialog(): void {

    this.dialog.open(AddprogramexamComponent, {
      width: '50%',
      disableClose: true
    }).afterClosed().subscribe(result => {
        //this.getdataNote();
    });
  }

  onShowCreateDialogDelete(row): void {
    this.programexamService.getDataDialog(row)
    this.dialog.open(DeleteprogramexamComponent, {
      width: '50%',
      disableClose: true
    }).afterClosed().subscribe(result => {
        this.getdataProgramexam();
    });
  }

  onDownload(filename){
    console.log(filename)
    this.programexamService.DownloadProgramexam(filename).subscribe(result => {
        console.log('success')
    }); 
  }

}
