import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Student } from '../../interfaces/student.interface';
import { StudentService } from '../../services/student.service';
import { RequestStatus } from 'src/app/shared/types/request-status.type';

@Component({
  selector: 'course-student-list',
  templateUrl: './student-list.component.html',
  styles: [],
})
export class StudentListComponent implements AfterViewInit, OnInit, OnChanges {
  @Input({ required: true })
  public courseId: string = '';
  public students: Student[] = [];

  displayedColumns: string[] = ['lu', 'fullname'];
  dataSource!: MatTableDataSource<Student>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  public status: RequestStatus = 'pending';

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.getStudents();
  }

  setDataSource(students: Student[]) {
    this.dataSource = new MatTableDataSource(students);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {
    this.setDataSource(this.students);
  }

  ngOnChanges() {
    this.getStudents();
    this.setDataSource(this.students);
  }

  /**
   * Method to filter students by some criteria
   * @param event event of keyup in the input
   */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /**
   * Method to get the students for the course
   */
  getStudents() {
    this.studentService.getStudents(this.courseId).subscribe({
      next: (students) => {
        this.students = students;
        this.setDataSource(students);
        this.status = 'success';
      },
      error: (error) => {
        this.status = 'error';
      },
    });
  }
}
