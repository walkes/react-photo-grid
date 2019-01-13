import React, { Component } from 'react'
import LayoutCalculator from './layout/LayoutCalculator'
import PropTypes from 'prop-types'
import withSize from 'react-sizeme'
import './Photogrid.css'

class PhotoGrid extends Component {

  render() {
    const { photos, optimalHeight, size, margin } = this.props
    const viewportWidth = size.width
    const rows = new LayoutCalculator(photos, optimalHeight, viewportWidth).calculate()
    return (
      <div className='PhotoGrid'>
        {rows.map((row, rowIdx) => {
          const scalingRatio = viewportWidth / row.unscaledWidth
          let remainingWidth = viewportWidth
          return (
            <div key={rowIdx} className='Row'>
              {row.photos.map((photo, idx) => {
                let calculatedWidth = Math.round(photo.width * scalingRatio)
                let width
                if (idx === row.photos.length - 1) {
                  width = remainingWidth
                } else {
                  width = calculatedWidth
                }
                const height = Math.round(photo.height * scalingRatio)
                remainingWidth -= width
                return (
                  <img key={photo.src}
                    alt={photo.src}
                    src={photo.src}
                    width={width - 2 * margin}
                    height={height - 2 * margin}
                    style={{ margin: margin }} />
                )
              }
              )}
            </div>
          )
        }
        )}
      </div>)
  }

}

PhotoGrid.defaultProps = {
  margin: 2
}

PhotoGrid.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  })),
  optimalHeight: PropTypes.number.isRequired,
  margin: PropTypes.number
}

export default withSize()(PhotoGrid)
