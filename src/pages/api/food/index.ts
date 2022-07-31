import type { NextApiRequest, NextApiResponse } from 'next';
import { FoodControl } from 'src/types/food';
import { FoodController } from '../../../controllers/FoodController';

type Data = {
  contract: FoodControl;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const { method } = req;

  switch (method) {
  case 'GET':
    res.status(200).json({ contract: FoodController.getFoodTable() });
    break;
  default:
    res.status(200).json({ contract: FoodController.getFoodTable() });
  }

}
