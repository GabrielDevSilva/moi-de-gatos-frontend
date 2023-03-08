export interface ICat {
  id: string;
  name: string;
  breed: string;
  age: number;
  updateAt: Date;
  createAt: Date;
}

export type ICats = ICat[];
export interface ITableAPIProps {
  cats: ICats;
  searchedCat?: string;
  OnClick?: () => void;
  LoadAnimals: () => Promise<void>;
}

export interface IButtonProp {
  text: string;
  NavigateButton?: () => void;
}

export interface IPopUp {
  cat: ICat;
  show: boolean;
  HideModal: () => void;
  LoadAnimals: () => Promise<void>;
}

export interface ITable {
  cat: ICat;
  HandleEditCat: (id: string) => void;
  HandleDeleteCat: (id: string) => void;
  // HandleForceUpdateState: () => void;
}
export interface IResponsePopUp {
  text: string;
  show: boolean;
  OnHide: () => void;
}

export interface IPagination {
  total: number;
  current: number;
  onChangePage: (value: number) => void;
}
