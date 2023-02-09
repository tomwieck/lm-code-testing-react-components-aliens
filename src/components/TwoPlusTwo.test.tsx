import { render, screen } from '@testing-library/react';
import TwoPlusTwo from './TwoPlusTwo';

test('renders Reason for Sparing', async () => {

    render(
        <TwoPlusTwo 
            twoPlusTwo={'not-four'}
            onChangeTwoPlusTwo={(e : any) => ('')}
        />);

	const label = await screen.findAllByTestId('two-plus-two-label');
    const labelHTML = label[0] ? label[0] : false;
    
    expect(labelHTML).toBeInTheDocument();
    expect(labelHTML).toHaveTextContent('What is 2+2?')


	const input = await screen.findAllByTestId('two-plus-two-select');
    const inputHTML = input[0] ? input[0] : false;

    expect(inputHTML).toBeInTheDocument();
    expect(inputHTML).toHaveValue('not-four');

});