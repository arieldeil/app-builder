import React from 'react';
import 'test/enzyme-init';
import { shallow } from 'enzyme';

import RenderSearchFormInput from 'ui/common/form/RenderSearchFormInput';

describe('RenderSearchFormInput', () => {
  let component;
  beforeEach(() => {
    component = shallow(<RenderSearchFormInput />);
  });

  it('renders without crashing', () => {
    expect(component.exists()).toEqual(true);
  });
});
