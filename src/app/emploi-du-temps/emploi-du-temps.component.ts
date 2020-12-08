import { Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {HttpClient} from '@angular/common/http';
import { AddEmploiDuTempsComponent } from '../add-emploi-du-temps/add-emploi-du-temps.component';
import { EmploiDuTempsServicesService } from '../Services/emploi-du-temps-services.service';
import { EmploiDuTempsDeleteComponent } from '../emploi-du-temps-delete/emploi-du-temps-delete.component';



@Component({
  selector: 'app-emploi-du-temps',
  templateUrl: './emploi-du-temps.component.html',
  styleUrls: ['./emploi-du-temps.component.css']
})
export class EmploiDuTempsComponent implements OnInit {

  constructor(private http: HttpClient, private dialog: MatDialog, private emploidutempsService: EmploiDuTempsServicesService) { }
  private sa: any;

  displayedColumns: string[] = [ 'Annee_Academique', 'Semestre', 'Fichier', 'option'];
  dataSource;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit(): void {
    this.getdataEmploiTemps()
  }
  

  onShowCreateDialog(): void {

    this.dialog.open(AddEmploiDuTempsComponent, {
      width: '50%',
      disableClose: true
    }).afterClosed().subscribe(result => {
        //this.getdataNote();
    });
  }

  onShowCreateDialogDelete(row): void {
    this.emploidutempsService.getDataDialog(row)
    this.dialog.open(EmploiDuTempsDeleteComponent, {
      width: '50%',
      disableClose: true
    }).afterClosed().subscribe(result => {
        this.getdataEmploiTemps();
    });
  }
  
  getdataEmploiTemps() {
    this.emploidutempsService.getdata().subscribe((data) => {
      this.sa = data;
      this.dataSource = new MatTableDataSource(this.sa);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

    });
  }

  onDownload(filename){
    console.log(filename)
    this.emploidutempsService.DownloadEmploiTemps(filename).subscribe(result => {
        console.log('success')
     
    }); 
  }

}
