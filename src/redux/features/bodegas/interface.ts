export interface IWareHouse {
  results: IWareHouseResult[];
  totalResults: number;
  totalPages: number;
}

export interface IWareHouseResult {
  id: string;
  code: string;
  description: string;
  costCenterCode: string;
  type: string;
  moneyQuantity: number;
}
