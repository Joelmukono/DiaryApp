import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Diary } from '../diary';

@Component({
  selector: 'app-entries-form',
  templateUrl: './entries-form.component.html',
  styleUrls: ['./entries-form.component.css']
})
export class EntriesFormComponent implements OnInit {
  diaryEntry:string;
  diaryTitle:string;
  setDate:Date;
 newEntry:any;
  @Output() addEntry = new EventEmitter<Diary>();
  
  
  submitEntry(){
    this.newEntry = new Diary(this.diaryTitle,this.diaryEntry,this.setDate);
  
    this.addEntry.emit(this.newEntry);
  }
  constructor() { }

  ngOnInit() {
  }

}
