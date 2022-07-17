import type { NextApiRequest, NextApiResponse } from 'next';
import { FoodController } from '../../../controllers/FoodController';
import { Contract } from '../../../types/food/contract';

type Data = {
  contract: Contract;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const { method } = req;

  switch (method) {
  case 'GET':
    res.status(200).json({ contract: FoodController.getContractFood() });
    break;
  default:
    res.status(200).json({ contract: FoodController.getContractFood() });
  }

}
