import React from 'react';
import renderer from 'react-test-renderer';
import {Input} from '../index';
import theme from '../../../styles/theme';
import 'jest-styled-components';

test('Input Component', () => {
  const tree = renderer.create(<Input theme={theme} />).toJSON();
  expect(tree).toMatchSnapshot();
});
