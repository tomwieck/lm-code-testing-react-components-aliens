import { render, screen } from '@testing-library/react';
import SpeciesName from './SpeciesName';

test('renders Reason for Sparing', async () => {

    render(
        <SpeciesName 
            speciesName={'Humans'}
            onChangeSpeciesName={(e : any) => ('')}
        />);

	const label = await screen.findAllByTestId('species-name-label');
    const labelHTML = label[0] ? label[0] : false;
    
    expect(labelHTML).toBeInTheDocument();
    expect(labelHTML).toHaveTextContent('Species Name')


	const input = await screen.findAllByTestId('species-name-input');
    const inputHTML = input[0] ? input[0] : false;

    expect(inputHTML).toBeInTheDocument();
    expect(inputHTML).toHaveValue('Humans');

});