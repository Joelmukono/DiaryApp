import { Component, OnInit } from '@angular/core';
import {Diary} from '../diary';
@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {

  entries :Diary[] =[
    new Diary("This is a good day i hope to finish the things i have started"),
    new Diary("I have finished some of my tasks but something new came up and i hadnt prepared"),
  ] 

  deleteEntry(index){
    this.entries.splice(index,1)

  }

  constructor() { }

  ngOnInit() {
  }

}
