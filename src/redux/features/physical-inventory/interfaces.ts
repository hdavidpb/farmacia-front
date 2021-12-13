export interface IPhysicalInventorieState {
  modalStates: {
    showModal: boolean;
  };
  shelf: IShelf[];
  loading: boolean;
}

export interface IShelf {
  shelfId: string;
  shelfName: string;
  quantity: number;
  QRUrl: string;
}
