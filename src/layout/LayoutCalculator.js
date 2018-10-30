class LayoutCalculator {

    constructor(photos, maxHeight, viewportWidth) {
        this.photos = photos;
        this.maxHeight = maxHeight;
        this.viewportWidth = viewportWidth;
    }

    calculate() {
        const rows = [];
        const maxHeight = this.maxHeight;
        const viewportWidth = this.viewportWidth;
        let currentWidth = 0;
        let row = {photos: [], unscaledWidth: 0};
        this.photos.forEach(photo => {
            row.photos.push(photo);
            currentWidth += (maxHeight / photo.height) * photo.width;
            row.unscaledWidth += photo.width;
            if (currentWidth >= viewportWidth) {
                rows.push(row);
                row = {photos: [], unscaledWidth: 0};
                currentWidth = 0;
            }
        });
        if (row.photos.length > 0) {
            rows.push(row);
        }
        return rows;
    }
}

export default LayoutCalculator;