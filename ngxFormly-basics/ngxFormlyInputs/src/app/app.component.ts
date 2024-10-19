import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

// Multi field sortable table, call to mock api, see above
  products3: any[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get<any[]>('products3.json').subscribe(data => {
      this.products3 = data;
    });
  }

  handleInput(value: string) {
    console.log('Input value received:', value);
    // Add your logic here to handle the input value
  }
}
