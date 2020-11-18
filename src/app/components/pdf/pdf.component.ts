import { Component, OnInit } from '@angular/core';
import { Row } from 'src/app/row.model';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css'],
})
export class PdfComponent implements OnInit {
  pdfSrc = 'assets/PETIC-2015.pdf';
  totalPages: number;
  isLoaded: boolean = false;
  counter = Array;
  rows: Row[] = [];
  pages: Number[] = [];

  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    console.log(this.totalPages);
    this.isLoaded = true;
  }

  isSelect(event: any) {
    if (event.target.checked) {
      this.rows.push({ page: event.target.value, checked: true });
    } else {
      const index = this.rows.findIndex((x) => x.page === event.target.value);
      this.rows.splice(index);
    }
    console.log(this.rows);
  }

  submit() {
    this.rows.map((x) => {
      this.pages.push(parseInt(x.page));
    });
    alert(this.pages);
    location.reload();
  }

  ngOnInit(): void {}
}
