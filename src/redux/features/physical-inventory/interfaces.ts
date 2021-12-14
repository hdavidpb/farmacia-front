export interface IPhysicalInventorieState {
  modalStates: {
    showModal: boolean;
    productDetail: IProductDetailResum | null;
    loadingModal: boolean;
    productsArray: ProductsArr[];
  };
  shelf: IShelf[];
  filterShelf: IShelf[];
  loading: boolean;
}

export interface ProductsArr {
  code: string;
  name: string;
  id: string;
}

export interface IProductDetailResum {
  id: string;
  name: string;
  code: string;
}

export interface IShelf {
  shelfId: string;
  shelfName: string;
  quantity: number;
  QRUrl: string;
}

export interface IProducDetail {
  id: string;
  code: string;
  name: string;
  minAllowedStockValue: null;
  maxAllowedStockValue: null;
  activePrinciple: string;
  invimaCode: string;
  cumCod: string;
  concentration: string;
  pharmForm: null;
  posNoPos: string;
  atcCode: string;
  regulationPrice: null;
  price: number;
  storageCondition: string;
  dispatchAdditional: string;
  medicationControl: string;
  remission: string;
  warehouse: string;
  highPrice: string;
  applyForNursing: string;
  refusedType: string;
  riskClass: string;
  averageCost: string;
}

export interface IDataPostCreate {
  shelfName: string;
  productIds: string[];
}

export interface IPhysicalInventorieResponse {
  name: string;
  deletedAt: null | string;
  QRCodeLocation: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}
