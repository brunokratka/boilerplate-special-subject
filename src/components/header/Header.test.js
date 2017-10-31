import React  from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
// import tested component
import Header from './Header';
import opop   from '../../resources/img/opopular.svg';

// styled-components
import { Container, Logo }  from './Header-style';

describe("Header", () => {
  const header = shallow(<Header />);
  header.find(Container).forEach((container) => {
    it("render Container", () => {
      expect(container).toHaveLength(1);
      expect(container.dive().find('div')).toHaveLength(1);
    })
    it("render title", () => {
      expect(container.find('span')).toHaveLength(1);
    })
    it("render Logo", () => {
      const logo = container.find(Logo);
      expect(logo).toHaveLength(1);
      expect(logo.prop('src')).toEqual(opop);
      expect(logo.prop('alt')).toEqual('O Popular');
    })
  });
})