import * as React from "react";
import {ElementType} from "react";
import {SizeMe} from "react-sizeme";
import {PhotosGrid} from "./grid/PhotosGrid";
import {IPhoto} from "./model/IPhoto";

export default class ReactPhotosGrid extends React.Component<IPhotoGridProps> {

  public static defaultProps = {ImageComponent: "img"};

  public render() {
    const {photos, optimalHeight, ImageComponent} = this.props;
    return (
      <SizeMe>{({size}) =>
        <PhotosGrid photos={photos} optimalHeight={optimalHeight} size={size} ImageComponent={ImageComponent}/>
      }
      </SizeMe>
    );
  }

}

interface IPhotoGridProps {

  photos: IPhoto[];
  optimalHeight: number;
  ImageComponent: ElementType | string;

}
