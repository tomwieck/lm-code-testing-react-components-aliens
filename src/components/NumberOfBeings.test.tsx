import { render, screen } from '@testing-library/react';
import NumberOfBeings from './NumberOfBeings';

test('renders Number of Beings', async () => {

    render(
        <NumberOfBeings 
            numberOfBeings={100}
            onChangeNumberOfBeings={(e : any) => (1)}
        />);

	const label = await screen.findAllByTestId('number-of-beings-label');
    const labelHTML = label[0] ? label[0] : false;
    
    expect(labelHTML).toBeInTheDocument();
    expect(labelHTML).toHaveTextContent('Species Name')


	const input = await screen.findAllByTestId('number-of-beings-input');
    const inputHTML = input[0] ? input[0] : false;

    expect(inputHTML).toBeInTheDocument();
    expect(inputHTML).toHaveValue(100);

});

// Does the component render?
// If we give input fields certain values through props, do they display that value?
// Does each input field call its onChange function and pass it the correct parameters?
// Does the submit button call its handler function and pass it the correct parameters?
