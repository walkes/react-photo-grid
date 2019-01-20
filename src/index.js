import React, { Component } from 'react'
import LayoutCalculator from './layout/LayoutCalculator'
import PropTypes from 'prop-types'
import withSize from 'react-sizeme'
import styles from './Photogrid.css'

class PhotoGrid extends Component {

  render() {
    const { photos, optimalHeight, size, component: Component } = this.props
    const viewportWidth = size.width
    const rows = new LayoutCalculator(photos, optimalHeight, viewportWidth).calculate()
    return (
      <div className={styles.PhotoGrid}>
        {rows.map((row, rowIdx) => {
          const scalingRatio = viewportWidth / row.unscaledWidth
          let remainingWidth = viewportWidth
          return (
            <div key={rowIdx} className={styles.PhotoGridRow}>
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
                  <Component
                    key={photos.src}
                    {...photo}
                    src={photo.src}
                    width={width}
                    height={height}
                  />
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
  component: 'img'
}

PhotoGrid.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  })),
  optimalHeight: PropTypes.number.isRequired,
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
}

export default withSize()(PhotoGrid)
