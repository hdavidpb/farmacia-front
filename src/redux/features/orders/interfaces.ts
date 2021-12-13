export interface IOrders {
  id: number;
  totalPrice: string;
  status: string;
  date: Date;
  orderNumber: string;
  provider: string;
  productsCount: string;
}

export interface IOrdersState {
  ordersData: {
    orders: IOrders[];
    loading: boolean;
  };
  orderDetailData: {
    orderDetail: IOrderDetail | null;
    loading: boolean;
  };
  suggestionsData: {
    suggestions: ISuggestions | null;
    quantity: number;
    nextPage: number;
    previusPage: number;
    actualPage: number;
    loading: boolean;
  };
  shoppingData: {
    shoppingList: ISuggestionsResult[];
    totalShopping: number;
  };
}

export interface IOrderDetail {
  id: number;
  orderNumber: string;
  paymentDeadline: string;
  date: string;
  status: string;
  observation: string;
  providerCode: string;
  providerName: string;
  warehouseCode: string;
  warehouseDescription: string;
  products: IOrderProduct[];
}

export interface IOrderProduct {
  discount: number;
  quantity: number;
  unitValue: number;
  totalValue: number;
  productCode: string;
  productName: string;
  deliveryTime: string;
  purchaseOrderProductId: number;
}

export interface UpdateOrderData {
  id: number;
  status: string;
}

export interface IUpdateStatusOrderResponse {
  id: number;
  orderNumber: string;
  transactionNumber: string;
  paymentDeadline: string;
  orderStatus: string;
  orderDate: string;
  shippingDate: string;
  statusChangeObservation: null;
  createdBy: string;
  authorizedBy: string;
  observation: string;
  deletedAt: null;
  updatedAt: string;
}

export interface ISuggestionsResult {
  id: string;
  productStock: number;
  suggestion: number;
  totalPrice: null | number;
  ignored: boolean;
  date: string;
  objective: number;
  product: ISuggestionsProduct;
  contract: null | IContractSuggestions;
}

export interface ISuggestionCategory {
  id: number;
  name: string;
}
export interface ISuggestionsProduct {
  id: string;
  code: string;
  name: string;
  minAllowedStockValue: null;
  maxAllowedStockValue: null;
  activePrinciple: string;
  invimaCode: string;
  cumCod: string;
  concentration: string;
  pharmForm: string;
  posNoPos: string;
  atcCode: string;
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
  category: ISuggestionCategory;
}

export interface IContractSuggestions {
  id: number;
  price: number;
  dataSheetUrl: string;
  active: boolean;
  date: Date;
  provider: IContractProvider;
}

export interface IContractProvider {
  id: number;
  providerCode: string;
  providerName: string;
  providerAddress: string;
  providerCity: string;
  providerPhone: string;
  providerEmail: null;
}

export interface ISuggestions {
  results: ISuggestionsResult[];
  totalResults: number;
  totalPages: number;
}
