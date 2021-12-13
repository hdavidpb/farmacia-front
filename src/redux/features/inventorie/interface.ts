export interface IResults {
  totalQuantity: number;
  productid: string;
  productname: string;
  productcode: string;
  productcategory: string;
}

export interface IInventory {
  results: IResults[];
  totalResults: number;
  totalPages: number;
  loading: boolean;
  error: null | number | string;
}

export interface IWarehouse {
  id: string;
  entCode: string;
  whDescription: string;
  whCode: string;
  headquarters: string;
  costCenter: string;
  prefix: string;
  whTypeCode: string;
  whTypeDesc: string;
  type: string;
  typeDesc: string;
  whDispatchToFloor: string;
  consignmentWh: string;
  purchaseWh: string;
  lockStatus: string;
  returnWh: string;
  tempLocation: string;
  utilityCenter: string;
  subUtilityCenter: string;
  transferWh: string;
  refrigerated: boolean | null;
}

export interface IWareHouseResults {
  id: number;
  quantity: number;
  warehouse: IWarehouse;
}

export interface IInventoryWarhouse {
  results: IWareHouseResults[];
  totalResults: number;
  totalPages: number;
  loadingWarehouse: boolean;
  error: null | number | string;
}
