import * as React from 'react'
import PhotoGrid from 'react-photos-grid'

class Example extends React.Component {

  component = (props) => {
    const margin = 2
    return (<img
      alt={props.src}
      key={props.src}
      src={props.src}
      width={props.width - 2 * margin}
      height={props.height - 2 * margin}
      style={{margin: margin}}
    />)
  }

  render() {

    const photos = new Array(50).fill(undefined).map(() => {
      const width = Math.floor(Math.random() * (500 - 300)) + 300
      const ratio = Math.floor(Math.random() * (1.8 - 0.5)) + 0.5
      const height = Math.floor(width * ratio)
      return {
        src: 'https://picsum.photos/' + width + '/' + height,
        width: width,
        height: height,
      }
    })

    return (
      <PhotoGrid photos={photos} optimalHeight={400} ImageComponent={this.component}/>
    )

  }
}

export default Example
