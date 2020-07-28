import React from 'react';

import {Container, Label} from './styles.web';

const Button = ({onPress}) => (
  <Container onPress={onPress}>
    <Label>Hello World para dar Sorte</Label>
  </Container>
);

export default Button;
