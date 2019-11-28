import { Component, OnInit, Input } from '@angular/core';
import {Diary} from '../diary';
@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {

  entries: Diary[] = [
    new Diary("Title One","This is a good day i hope to finish the things i have started",new Date()),
    new Diary('Title Two',"I have finished some of my tasks but something new came up and i hadnt prepared", new Date()),
  ] 

  deleteEntry(index){
    this.entries.splice(index,1)

  }
  addNewEntry(entry){
    
    this.entries.push(entry);

  }

  constructor() { }

  ngOnInit() {
  }

}
