import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import SearchScreen from './SearchScreen';

describe('Tests for SearchScreen component', () => {
  it('Should search for an api when submitted', async () => {
    const {getByTestId} = render(<SearchScreen />);
    const fieldNode = await waitFor(() => getByTestId('input-field'));
    console.log(fieldNode);
    //digitar no input
    //clicar no enter
    //buscar a flatlist
    //verificar se o user foi adicionado na flatlist
  });
});
