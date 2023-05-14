import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  valorEntrada: number = 0;
  valorSaida: number = 0;
  valorTotal: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
