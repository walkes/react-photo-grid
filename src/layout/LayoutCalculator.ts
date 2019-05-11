import {IPhoto, IRow} from "../model/IPhoto";

class LayoutCalculator {

  private static normalizePhotos = (photos: IPhoto[], optimalHeight: number) => {
    return photos.map((photo) => {
      const height = optimalHeight;
      const width = photo.width * (height / photo.height);
      const copy = Object.assign({}, photo);
      return Object.assign(copy, {width, height});
    });
  };

  private readonly photos: IPhoto[];
  private readonly optimalHeight: number;
  private readonly viewportWidth: number;

  private readonly visited: boolean[];
  private readonly costs: number[];
  private readonly shortestPaths: Array<number | undefined>;
  private readonly indicesQueue: number[];
  private readonly costsQueue: number[];

  private readonly unscaledRows: IUnscaledRow[];
  private rows: IRow[];

  constructor(photos: IPhoto[], optimalHeight: number, viewportWidth: number) {
    this.photos = LayoutCalculator.normalizePhotos(photos, optimalHeight);
    this.optimalHeight = optimalHeight;
    this.viewportWidth = viewportWidth;

    this.visited = this.photos.map(() => false);
    this.costs = this.photos.map(() => Infinity);
    this.shortestPaths = this.photos.map(() => undefined);
    this.indicesQueue = [];
    this.costsQueue = [];
    this.unscaledRows = [];
  }

  public calculate = () => {
    this.generateSplitDAG(-1, 0);
    this.buildRows();
    this.scaleRows();

    return this.rows;
  };

  private generateSplitDAG = (parentIdx: number,
                              parentCost: number) => {
    let currentWidth = 0;
    let currentIdx = parentIdx;
    while (++currentIdx < this.photos.length) {
      // get photo
      const photo = this.photos[currentIdx];

      // calculate height, width and cost
      currentWidth += photo.width;
      const currentHeight = (this.viewportWidth / currentWidth) * photo.height;
      const currentCost = parentCost + Math.pow(currentHeight - this.optimalHeight, 2);

      // continue if row height is too big
      if (this.optimalHeight * 1.5 < currentHeight) {
        continue;
      }

      // break if row is too small
      if (this.optimalHeight / 1.5 > currentHeight) {
        break;
      }

      if (this.costs[currentIdx] > currentCost) {
        this.costs[currentIdx] = currentCost;
        this.shortestPaths[currentIdx] = parentIdx;
      }

      if (!this.visited[currentIdx]) {
        this.indicesQueue.push(currentIdx);
        this.costsQueue.push(currentCost);
        this.visited[currentIdx] = true;
      }
    }

    let nextIdx;
    let nextCost;
    // tslint:disable-next-line:no-conditional-assignment
    while ((nextIdx = this.indicesQueue.shift()) !== undefined && (nextCost = this.costsQueue.shift()) !== undefined) {
      this.generateSplitDAG(nextIdx, nextCost);
    }
  };

  private buildRows = () => {
    let row = {photos: [], width: 0} as IUnscaledRow;
    let currentRowIdx = this.shortestPaths[this.shortestPaths.length - 1];

    for (let i = this.shortestPaths.length - 1; i >= 0; i--) {
      if ((currentRowIdx === i || currentRowIdx === undefined) && row.photos.length > 0) {
        this.unscaledRows.unshift(row);
        row = {photos: [], width: 0};
        currentRowIdx = this.shortestPaths[i];
      }
      row.photos.unshift(this.photos[i]);
      row.width += this.photos[i].width;
    }

    if (row.photos.length > 0) {
      this.unscaledRows.unshift(row);
    }
  };

  private scaleRows = () => {
    // don't up-scale to viewport if there is only 1 row, smaller than viewport's width
    if (this.unscaledRows.length === 1 && this.unscaledRows[0].width < this.viewportWidth) {

      this.rows = this.unscaledRows.map((row) => {
        const photos = row.photos.map((photo) => {
          const height = Math.min(photo.height, this.optimalHeight);
          const width = photo.width * (photo.height / height);
          return Object.assign({
              scaledHeight: height,
              scaledWidth: width,
            },
            photo);
        });
        return {photos};
      });

    } else {

      this.rows = this.unscaledRows.map((row) => {
        const scalingRatio = this.viewportWidth / row.width;
        let remainingWidth = this.viewportWidth;

        const photos = row.photos.map((photo, idx) => {
          const calculatedWidth = Math.round(photo.width * scalingRatio);
          let width;
          if (idx === row.photos.length - 1) {
            width = remainingWidth;
          } else {
            width = calculatedWidth;
          }
          const height = Math.round(photo.height * scalingRatio);
          remainingWidth -= width;
          return Object.assign({
            scaledHeight: height,
            scaledWidth: width,
          }, photo);
        });

        return {photos};
      });
    }
  };

}

export default LayoutCalculator;

interface IUnscaledRow {

  photos: IPhoto[];
  width: number;

}
