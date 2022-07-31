import { FoodControl } from 'src/types/food';

export abstract class FoodController {

  static foods: FoodControl = {
    qtMarmita: 26,
    dataPedidoFeito: '10/07/2022',
    dataAtualizacao: '10/07/2022',
    valorPago: 416,
    valorUnitario: 16
  };

  static getFoodTable(): FoodControl {
    return FoodController.foods;
  }

  static decrement(): boolean {

    const lastDateUpdate = FoodController.foods.dataAtualizacao;
    const currencyDate = new Date().toLocaleString().split(' ').shift();

    if (lastDateUpdate === currencyDate) {
      return false;
    }

    FoodController.foods.qtMarmita--;
    FoodController.foods.dataAtualizacao = currencyDate || FoodController.foods.dataAtualizacao;

    return true;
  }

}
