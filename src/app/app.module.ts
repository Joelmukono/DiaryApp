import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EntriesComponent } from './entries/entries.component';
import { EntriesFormComponent } from './entries-form/entries-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent,
    EntriesFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
