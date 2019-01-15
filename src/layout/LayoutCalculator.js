class LayoutCalculator {

  constructor(photos, optimalHeight, viewportWidth) {
    this.photos = this.normalizePhotos(photos, optimalHeight)
    this.optimalHeight = optimalHeight
    this.viewportWidth = viewportWidth
  }

  normalizePhotos(photos, optimalHeight) {
    return photos.map(photo => {
      const height = optimalHeight
      const width = photo.width * (height / photo.height)
      const copy = Object.assign({}, photo)
      return Object.assign(copy, { width: width, height: height })
    })
  }

  generateSplitDAG(parentIdx, parentCost, visited, costs, shortestPath, indicesQueue, costsQueue) {
    let currentWidth = 0
    let currentIdx = parentIdx
    while (++currentIdx < this.photos.length) {
      // get photo
      const photo = this.photos[currentIdx]

      // calculate height, width and cost
      currentWidth += photo.width
      const currentHeight = (this.viewportWidth / currentWidth) * photo.height
      const currentCost = parentCost + Math.pow(currentHeight - this.optimalHeight, 2)

      // continue if row height is too big
      if (this.optimalHeight * 2 < currentHeight) continue

      // break if row is too small
      if (this.optimalHeight / 2 > currentHeight) break

      if (costs[currentIdx] > currentCost) {
        costs[currentIdx] = currentCost
        shortestPath[currentIdx] = parentIdx
      }

      if (!visited[currentIdx]) {
        indicesQueue.push(currentIdx)
        costsQueue.push(currentCost)
        visited[currentIdx] = true
      }
    }

    while ((currentIdx = indicesQueue.shift()) !== undefined) {
      const currentCost = costsQueue.shift()
      this.generateSplitDAG(currentIdx, currentCost, visited, costs, shortestPath, indicesQueue, costsQueue)
    }
  }

  calculate() {
    const visited = this.photos.map(() => false)
    const costs = this.photos.map(() => Infinity)
    const shortestPaths = this.photos.map(() => undefined)
    const indicesQueue = []
    const costsQueue = []
    this.generateSplitDAG(-1, 0, visited, costs, shortestPaths, indicesQueue, costsQueue)

    const rows = []

    let row = { photos: [], unscaledWidth: 0 }
    let currentRowIdx = shortestPaths[shortestPaths.length - 1]

    for (let i = shortestPaths.length - 1; i >= 0; i--) {
      if ((currentRowIdx === i || currentRowIdx === undefined) && row.photos.length > 0) {
        rows.unshift(row)
        row = { photos: [], unscaledWidth: 0 }
        currentRowIdx = shortestPaths[i]
      }
      row.photos.unshift(this.photos[i])
      row.unscaledWidth += this.photos[i].width
    }

    if (row.photos.length > 0) {
      rows.unshift(row)
    }

    return rows
  }

}

export default LayoutCalculator
