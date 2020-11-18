import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PdfComponent } from './components/pdf/pdf.component';

import { PdfViewerModule } from 'ng2-pdf-viewer';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, PdfComponent],
  imports: [BrowserModule, PdfViewerModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
