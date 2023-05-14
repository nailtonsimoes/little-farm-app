import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-saida',
  template: `
    <div class="card saida">
      <div class="card-header">
        <span class="icon">-</span>
        Saidas
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
      font-weight: bold;
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
      font-weight: 600;
      color: azure;
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
export class CardSaidaComponent {
  @Input() valor: number = 0;
}
