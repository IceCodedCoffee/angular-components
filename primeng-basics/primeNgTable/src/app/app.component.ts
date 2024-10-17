import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  // basic table
  products = [
    { code: 'P001', name: 'Laptop', category: 'Electronics', quantity: 10 },
    { code: 'P002', name: 'Smartphone', category: 'Electronics', quantity: 25 },
    { code: 'P003', name: 'Tablet', category: 'Electronics', quantity: 15 },
    { code: 'P004', name: 'Headphones', category: 'Accessories', quantity: 50 }
  ];

  // dynamic column table
  cols = [
    { field: 'code', header: 'Code' },
    { field: 'name', header: 'Name' },
    { field: 'category', header: 'Category' },
    { field: 'quantity', header: 'Quantity' }
  ];

  // dynamic column table with pagination and loading data from mock json
  products2: any[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get<any[]>('products.json').subscribe(data => {
      this.products2 = data;
    });
  }
}
