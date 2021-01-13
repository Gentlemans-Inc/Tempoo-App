import React from 'react';
import renderer from 'react-test-renderer';
import {Button} from '../index';
import theme from '../../../styles/theme';
import 'jest-styled-components';

const foo = () => {};

test('Button component', () => {
  const tree = renderer
    .create(<Button label="foo" onPress={foo} theme={theme} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
