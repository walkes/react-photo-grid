# react-photos-grid

> Justified photos grid react component

[![NPM](https://img.shields.io/npm/v/react-photos-grid.svg)](https://www.npmjs.com/package/react-photos-grid)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Build Status](https://travis-ci.org/walkes/react-photos-grid.svg?branch=master)](https://travis-ci.org/walkes/react-photos-grid)

[Demo](https://walkes.github.io/react-photos-grid/)



## Install

```bash
npm install --save react-photos-grid
```

## Usage

```tsx
import * as React from 'react'

import PhotoGrid from 'react-photos-grid'

class Example extends React.Component {

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
```

## License

Apache 2.0 © [walkes](https://github.com/walkes)
