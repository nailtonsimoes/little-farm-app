import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-total',
  template: `
    <div class="card total">
      <div class="card-header">
        <span class="icon">$</span>
        Total
      </div>
      <div class="card-value">R$ {{ valor }}</div>
    </div>
  `,
  styles: [`
    .card {
      background-color: #FFFFFF;
      border-radius: 10px;
      box-shadow: 0px 0px 5px #999999;
      height: 150px;
      padding: 20px;
      width: 300px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      position: relative;
    }
    .card-header {
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
    }
    .card-header .icon {
      font-size: 28px;
      font-weight: bold;
      margin-right: 10px;
    }
    .card-value {
      font-size: 36px;
      font-weight: bold;
      color: darkgreen;
    }
    .entrada {
      background-color: rgb(98, 196, 98);
    }
    .saida {
      background-color: rgb(225, 100, 90);
    }
    .total {
      background-color: rgb(246, 218, 66);
    }
  `]
})
export class CardTotalComponent {
  @Input() valor: number = 0;
}
