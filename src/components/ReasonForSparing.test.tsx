import { render, screen } from '@testing-library/react';
import ReasonForSparing from './ReasonForSparing';

test('renders Reason for Sparing', async () => {

    render(
        <ReasonForSparing 
            reasonForSparing={'Living'}
            onChangeReasonForSparing={(e : any) => ('')}
        />);

	const label = await screen.findAllByTestId('reason-for-sparing-label');
    const labelHTML = label[0] ? label[0] : false;
    
    expect(labelHTML).toBeInTheDocument();
    expect(labelHTML).toHaveTextContent('Reason for sparing')


	const input = await screen.findAllByTestId('reason-for-sparing-input');
    const inputHTML = input[0] ? input[0] : false;

    expect(inputHTML).toBeInTheDocument();
    expect(inputHTML).toHaveValue('Living');

});