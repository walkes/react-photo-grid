import React, { Component } from 'react';
import LayoutCalculator from "./layout/LayoutCalculator";
import PropTypes from 'prop-types';
import { withSize } from 'react-sizeme';
import './Photogrid.css';

class PhotoGrid extends Component {

    render() {
        const { photos, maxHeight, size } = this.props;
        const viewportWidth = size.width;
        const rows = new LayoutCalculator(photos, maxHeight, viewportWidth).calculate();
        return (
            <div className="PhotoGrid">
                {rows.map((row, rowIdx) => {
                    return (
                        <div key={rowIdx} className="Row">
                            {row.photos.map((photo) => {
                                const scalingRatio = viewportWidth / row.unscaledWidth;
                                const width = Math.round(photo.width * scalingRatio);
                                const height = Math.round(photo.height * scalingRatio);
                                return (
                                    <img key={photo.src}
                                        alt={photo.src}
                                        src={photo.src}
                                        width={width}
                                        height={height} />
                                );
                            }
                            )}
                        </div>
                    );
                }
                )}
            </div>);
    }
}

PhotoGrid.propTypes = {
    photos: PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
    })),
    maxHeight: PropTypes.number.isRequired,
};

export default withSize()(PhotoGrid);
