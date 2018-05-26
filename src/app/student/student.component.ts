import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { Student } from './Student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  characters: Student[];
  constructor(private tservice: StudentService) { }

  ngOnInit() {
    this
      .tservice
      .getCharacters()
      .subscribe((data: Student[]) => {
        this.characters = data;
      });
  }

}





