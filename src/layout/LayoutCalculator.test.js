import LayoutCalculator from './LayoutCalculator';

const photos = [
    {
        src: '1.jpg',
        width: 858,
        height: 500,
    },
    {
        src: '2.jpg',
        width: 750,
        height: 500,
    },
    {
        src: '3.jpg',
        width: 750,
        height: 500,
    },
    {
        src: '4.jpg',
        width: 792,
        height: 500,
    },
    {
        src: '5.jpg',
        width: 696,
        height: 500,
    },
    {
        src: '6.jpg',
        width: 749,
        height: 500,
    },
    {
        src: '7.jpg',
        width: 800,
        height: 500,
    },
    {
        src: '8.jpg',
        width: 2000,
        height: 500,
    },
    {
        src: '9.jpg',
        width: 1053,
        height: 500,
    },
    {
        src: '10.jpg',
        width: 1920,
        height: 500,
    },
];

it('should split photos in rows', () => {
    // given
    const layoutCalculator = new LayoutCalculator(photos, 180, 900);

    // expect
    expect(layoutCalculator.calculate().map(row => row.photos.map(photo => photo.src))).toEqual([
        ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
        ['5.jpg', '6.jpg', '7.jpg', '8.jpg'],
        ['9.jpg', '10.jpg'],
    ]);
});

it("should place one photo in each row if viewport width is smaller than photo width", () => {
    // given
    const layoutCalculator = new LayoutCalculator(photos, 180, 50);

    // expect
    expect(layoutCalculator.calculate().map(row => row.photos.map(photo => photo.src))).toEqual([
        ['1.jpg'],
        ['2.jpg'],
        ['3.jpg'],
        ['4.jpg'],
        ['5.jpg'],
        ['6.jpg'],
        ['7.jpg'],
        ['8.jpg'],
        ['9.jpg'],
        ['10.jpg'],
    ]);
});

it("should put all pictures in one row if viewport width allows that", () => {
    // given
    const layoutCalculator = new LayoutCalculator(photos, 180,
        photos.map(photo => photo.width).reduce((a, b) => a + b, 0));

    // expect
    expect(layoutCalculator.calculate().map(row => row.photos.map(photo => photo.src))).toEqual([
        ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg']
    ]);
});
