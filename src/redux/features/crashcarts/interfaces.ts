export interface ICrashCarts {
  results: ICrashCartsResult[];
  totalResults: number;
  totalPages: number;
}

export interface ICrashCartsResult {
  id: number;
  pavilion: null | string;
  name: string;
  code: string;
  lastRegisteredPadLock: null | string;
}

export interface ICrashState {
  crashCarsData: {
    crashCarts: ICrashCarts;
    loading: boolean;
    crashCartsFilter: ICrashCartsResult[];
  };
  crashCartsInventory: {
    inventoryById: IInventory[];
    loadingInventory: boolean;
    hidenTable: boolean;
    crashCartNameAndId: null | IcrashCartNameAndId;
    initialPage: number;
    maximunPage: number;
    selected: number;
  };
  alertsData: {
    alerts: IAlert[];
    loadingAlerts: boolean;
    alertDetailData: {
      alertDetail: null | IAlertDetail[];
      loadingAlertDetail: boolean;
      headerDetail: null | IHeaderAlertDetail;
      lockOk: boolean | null;
      lockLoading: boolean;
    };
  };
}

/**  CRASH CARTS INVENTORY BY ID **/

export interface IcrashCartNameAndId {
  code: string;
  id: number;
  indexSelected: number;
}

export interface IInventory {
  category: string;
  results: IResultInventory[];
}

export interface IResultInventory {
  quantity: number;
  productId: string;
  productCode: string;
  productName: string;
}

/** **************ALERTS **************************/

export interface IAlert {
  crashCartId: string | number;
  crashCartName: string;
  alertId: string;
  date: string;
  missingProductsCount: number;
}

export interface IAlertDetail {
  crashCartId: string;
  crashCartName: string;
  date: string;
  missingProductsCount: number;
  category: string;
  ready: boolean;
  results: IAlertDetailResult[];
}

export interface IAlertDetailResult {
  quantity: number;
  productId: string;
  productCode: string;
  productName: string;
  maxQuantity: number;
}

export interface IHeaderAlertDetail {
  crashCartId: string;
  crashCartName: string;
  date: string;
  missingProductsCount: number;
}

export interface padLockCode {
  padLockCode: string;
}

export interface IlockResponse {
  ok: true;
}

export interface ILockData {
  padlockCode: string;
  crashCartId: string;
}
