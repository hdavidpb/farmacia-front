export interface IProviders {
  results: IProvidersResult[];
  totalResults: number;
  totalPages: number;
}

export interface IProvidersResult {
  id: number;
  providerCode: string;
  providerName: string;
  providerAddress: string;
  providerCity: string;
  providerPhone: string;
  providerEmail: string;
}

export type DataFilterProviders = {
  nit: string;
  name: string;
};

export interface IContrat {
  id: string | number;
  expirationDate: string;
  productGenericName: string;
  productComercialName: string;
  previousPrice: number;
  minorPrice: number;
  regulatedPrice: number;
  listPrice: number;
  discountPercentage: number;
  unitsNumberForApplyDiscount: number;
  giftedUnits: number;
  unitsNumberForApplyGiftedUnits: number;
  unitPrice: number;
  priceAfterNegotiation: number;
  observation: string;
  dataSheetUrl: null | string;
  active: boolean;
  product: IProductContract;
}

export interface IProductContract {
  code: string;
  name: string;
}

export interface IProviderContract {
  id: number | string;
  providerCode: string;
  providerName: string;
  providerAddress: string;
  providerCity: string;
  providerPhone: string;
  providerEmail: null;
}

/******************************** CONTRACTS RESPONSO *******************************/

export interface ContractPostData {
  providerId: number;
  productCode: string;
  expirationDate: string;
  productGenericName: string;
  productComercialName: string;
  previousPrice: number;
  minorPrice: number;
  regulatedPrice: number;
  listPrice: number;
  discountPercentage: number;
  unitsNumberForApplyDiscount: number;
  giftedUnits: number;
  unitsNumberForApplyGiftedUnits: number;
  unitPrice: number;
  priceAfterNegotiation: number;
  observation: string;
}

export interface IContractResponse {
  price: number;
  dataSheetUrl: null;
  active: boolean;
  date: string;
  provider: IProviderContractResponse;
  product: IProducContractResponse;
  deletedAt: null;
  createdAt: string;
  updatedAt: string;
  id: number;
}

export interface IProducContractResponse {
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

export interface IProviderContractResponse {
  id: number;
  providerCode: string;
  providerName: string;
  providerAddress: string;
  providerCity: string;
  providerPhone: string;
  providerEmail: string;
}
