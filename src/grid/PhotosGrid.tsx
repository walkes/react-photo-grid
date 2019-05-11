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
            return (
              <div key={rowIdx} className="PhotoGridRow">
                {row.photos.map((photo, idx) => {
                  return (
                    <ImageComponent
                      key={idx}
                      src={photo.src}
                      width={photo.scaledWidth}
                      height={photo.scaledHeight}/>
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
