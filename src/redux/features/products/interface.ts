export interface ICategory {
  id: number;
  name: string;
}

export interface IProductResult {
  productName: string;
  regulatedPrice: null | number;
  minorPrice: null | number;
  previousPrice: null | number;
}

export interface IProductList {
  category: { id: string; name: string };
  code: string;
  id: string;
  name: string;
  price: number;
}

export interface IProducts {
  results: IProductList[];
  totalResults: number;
  totalPages: number;
  error: string | null | number;
  loading: boolean;
}

export interface ISelects {
  value: string;
  label: string;
}
export interface IOptionsSelect {
  categories: ISelects[];
  codes: ISelects[];
  names: ISelects[];
}

export type DataGetDetailProduct = {
  providerId: string;
  productCode: string;
};
/********************* PRODUCT DETAILS ********************/

export interface IProductDetail {
  productCode: string;
  productName: string;
  productPrice: number;
  productConcentration: string;
  productPharmForm: null | string;
  productCategory: string;
  productSubcategory: string;
  productInvimaCode: string;
  productCumCode: string;
  productAtcCode: string;
  productActivePrinciple: string;
  productPosNoPos: string;
}

export interface IProductByID {
  productId: string;
  productCode: string;
  productName: string;
  productPrice: number;
  productConcentration: string;
  productPharmForm: null;
  productCategory: string;
  productSubcategory: string;
  productInvimaCode: string;
  productCumCode: string;
  productAtcCode: string;
  productActivePrinciple: string;
  productPosNoPos: string;
  productMinAllowedStockValue: null;
  productMaxAllowedStockValue: null;
  minimumStock: number;
  currentStock: null;
  promStock: number;
  providerContracts: ProviderContract[];
  stockAlert: string;
  productMonthlyOutputs: IproductMonthlyOutputs[];
  productMonthlyRotations: IproductMonthlyRotations[];
  productMonthlyPurchases: IproductMonthlyPurchases[];
}

export interface IproductMonthlyPurchases {
  dateMonth: string;
  purchasesCount: number;
  purchases: IPurchase[];
}

export interface IPurchase {
  date: string;
  invoice: string;
  invoiceValue: number;
  orderStatus: string;
  provider: string;
  quantity: number;
}

export interface IproductMonthlyOutputs {
  dateMonth: string;
  outputQuantity: number;
}

export interface IproductMonthlyRotations {
  rotation: number;
  dateMonth: string;
}

export interface ProviderContract {
  id: number;
  providerId: number;
  providerNit: string;
  dataSheetUrl: string;
  providerName: string;
  negotiatedPrice: number;
}

export interface PutContractDataSheetResponse {
  id: number;
  price: number;
  dataSheetUrl: string;
  active: boolean;
  date: string;
  deletedAt: null;
  updatedAt: Date;
}

export interface IPutResponse {
  data: PutContractDataSheetResponse;
  index: number;
}

export interface IProviderIdIProductIdData {
  providerId: number;
  productId: string;
  productCode: string;
}

export interface IPackingType {
  id: number;
  name: string;
}
export interface ISelectPackingTypes {
  label: string;
  value: number;
}

/************* PACKING POST ***********/

export interface IPackingDataPost {
  code: string;
  packingTypeId: number;
  quantity: number;
  providerId: number;

  productId: string;
}

export interface IProduct {
  id: string;
  code: string;
  name: string;
  minAllowedStockValue: null | string | number;
  maxAllowedStockValue: null | string | number;
  activePrinciple: string;
  invimaCode: string;
  cumCod: string;
  concentration: string;
  pharmForm: null | string | number;
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
}

export interface IProvider {
  id: number;
  providerCode: string;
  providerName: string;
  providerAddress: string;
  providerCity: string;
  providerPhone: string;
  providerEmail: string;
}

export interface IpackingProduct {
  code: string;
  quantity: number;
  provider: IProvider;
  product: IProduct;
  packingType: IPackingType;
  deletedAt: null | string | number;
  createdAt: string;
  updatedAt: string;
  id: number;
}

export interface IPackingGet {
  id: number;
  code: string;
  quantity: number;
  packingType: IPackingType;
}

export interface IContractSelected {
  providerId: number;
  productId: string;
  productCode: string;
}
