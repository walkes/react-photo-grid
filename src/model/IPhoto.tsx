export interface IPhoto {

  src: string;
  width: number;
  height: number;

}

export interface IScaledPhoto extends IPhoto {

  scaledWidth: number;
  scaledHeight: number;

}

export interface IRow {

  photos: IScaledPhoto[];

}
