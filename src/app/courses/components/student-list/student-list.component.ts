import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Student } from '../../interfaces/student.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'course-student-list',
  templateUrl: './student-list.component.html',
  styles: [
  ]
})
export class StudentListComponent implements AfterViewInit, OnInit {
  @Input()
  public students: Student[] | undefined;

  displayedColumns: string[] = ['lu', 'apellidos', 'nombres'];
  dataSource!: MatTableDataSource<Student>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.students);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
