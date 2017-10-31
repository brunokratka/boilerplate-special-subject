import React  from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// import tested component
import Image from './Image';
const mockImagePropsWithoutSubtitle = {
  src: 'urlImage/content.jpg',
  width: '200',
  height: '400',
  margin: '0',
  rectangle: true
};
const mockImagePropsWithSubtitle = Object.assign(
  {subtitle: 'Subtitle'},
  mockImagePropsWithoutSubtitle
);

// styled-components
import { Figure, Img, FigCaption }  from './Image-style';

describe("Image", () => {
  const image = shallow(<Image {...mockImagePropsWithSubtitle}/>);
  image.find(Figure).forEach((figure) => {
    const {
      src,
      width,
      height,
      margin,
      rectangle,
      subtitle
    } = mockImagePropsWithSubtitle;
    it("render Figure component", () => {
      expect(figure).toHaveLength(1);
      expect(figure.dive().find('figure')).toHaveLength(1);
      expect(figure.prop('imgWidth')).toEqual(width);
      expect(figure.prop('imgHeight')).toEqual(height);
      expect(figure.prop('rectangle')).toEqual(rectangle);
    })
    it('render Img component', () => {
      const img = figure.find(Img);
      expect(img).toHaveLength(1);
      expect(img.dive().find('img')).toHaveLength(1);
      expect(img.prop('src')).toEqual(src);
      expect(img.prop('sub')).toEqual(true);
      expect(img.prop('rectangle')).toEqual(rectangle);
    })
    it('render FigCaption component', () => {
      const figCaption = figure.find(FigCaption);
      expect(figCaption).toHaveLength(1);
      expect(figCaption.dive().find('figcaption')).toHaveLength(1);
      expect(figCaption.prop('rectangle')).toEqual(rectangle);
      expect(figCaption.dive().find('figcaption').text()).toEqual(subtitle);
    })
  });
  const imageWithoutSub = shallow(<Image {...mockImagePropsWithoutSubtitle} />);
  imageWithoutSub.find(Figure).forEach((figure) => {
    const {
      src,
      width,
      height,
      margin
    } = mockImagePropsWithoutSubtitle;
    it('render Figure component without subtitle', () => {
      expect(figure).toHaveLength(1);
      expect(figure.dive().find('figure')).toHaveLength(1);
      expect(figure.prop('imgWidth')).toEqual(width);
      expect(figure.prop('imgHeight')).toEqual(height);
      expect(figure.prop('imgMargin')).toEqual(margin);
    })
    
  })
})