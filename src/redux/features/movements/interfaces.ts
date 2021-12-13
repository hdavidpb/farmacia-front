export interface IMovements {
  results: IMovementsResults[];
  totalResults: number;
  totalPages: number;
}

export interface IMovementsResults {
  movementReason: string;
  total: number;
}

export interface IResultMovementsForReason {
  date: string;
  price: number;
  reason: string;
  isEntry: boolean;
  quantity: number;
  productName: string;
}

export interface IMovementsForReason {
  results: IResultMovementsForReason[];
  totalResults: number;
  totalPages: number;
}

export interface IDataDates {
  initialDate: string;
  finalDate: string;
}
