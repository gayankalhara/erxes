import { shallow } from 'enzyme';
import React from 'react';

import TextInfo from '../../../modules/common/components/TextInfo';

describe('TextInfo component', () => {
  const defaultProps = {
    children: 'child'
  };

  test('renders TextInfo successfully', () => {
    shallow(<TextInfo {...defaultProps} />);
  });
});
