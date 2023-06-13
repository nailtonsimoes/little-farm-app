import { Component, OnInit, ViewChild } from '@angular/core';
import { TypeName } from 'src/app/enums/type-name';
import { Transaction } from 'src/app/models/transaction';



@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrls: ['./read-all.component.scss']
})
export class ReadAllComponent implements OnInit {

  finalDataSource: Transaction[] = []; // Inicialize a fonte de dados com um array vazio ou com os dados desejados

  constructor() { }

  ngOnInit(): void {
    // Preencha a fonte de dados com os dados desejados
    this.finalDataSource = [
      { id: '1', type: TypeName.Entrace, value:20, description: 'Some description', createdAt: new Date() },
      { id: '2', type: TypeName.Exit, value:10, description: 'Other description', createdAt: new Date() },
      // ...
    ];
  }

  editTransaction(){
    console.log('editei o bruto');
  }

  deleteTransaction(){
    console.log('Apaguei o bruto');
  }

}
