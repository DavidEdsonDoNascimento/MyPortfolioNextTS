import { Contract } from '../types/food/contract';

export class FoodController {
  static getContractFood(): Contract {
    return {
      qtMarmita: 26,
      dataPedidoFeito: '10/07/2022',
      valorPago: 416,
      valorUnitario: 16
    };
  }

}
