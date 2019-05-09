import * as React from "react";
import {ElementType} from "react";
import {SizeMeProps} from "react-sizeme";
import "../../style/Photogrid.css";
import LayoutCalculator from "../layout/LayoutCalculator";
import {IPhoto} from "../model/IPhoto";

export class PhotosGrid extends React.Component<IPhotoGridProps> {

  public render() {
    const {photos, optimalHeight, size, ImageComponent} = this.props;
    const viewportWidth = size.width;

    if (viewportWidth) {
      const rows = new LayoutCalculator(photos, optimalHeight, viewportWidth).calculate();
      return (
        <div className="PhotoGrid">
          {rows.map((row, rowIdx) => {
            const scalingRatio = viewportWidth / row.unscaledWidth;
            let remainingWidth = viewportWidth;
            return (
              <div key={rowIdx} className="PhotoGridRow">
                {row.photos.map((photo, idx) => {
                  const calculatedWidth = Math.round(photo.width * scalingRatio);
                  let width;
                  if (idx === row.photos.length - 1) {
                    width = remainingWidth;
                  } else {
                    width = calculatedWidth;
                  }
                  const height = Math.round(photo.height * scalingRatio);
                  remainingWidth -= width;
                  return (
                    <ImageComponent
                      key={photo.src}
                      {...photo}
                      src={photo.src}
                      width={width}
                      height={height}/>
                  );
                })}
              </div>
            );
          })}
        </div>);
    } else {
      return (<span>Can't get viewport width</span>);
    }
  }

}

interface IPhotoGridProps extends SizeMeProps {

  photos: IPhoto[];
  optimalHeight: number;
  ImageComponent: ElementType | string;

}
