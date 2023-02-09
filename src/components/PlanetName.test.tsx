import { render, screen } from '@testing-library/react';
import PlanetName from './PlanetName';

test('renders Planet Name', async () => {

    render(
        <PlanetName 
            planetName={'Earth'}
            onChangePlanetName={(e : any) => ('')}
        />);

	const label = await screen.findAllByTestId('planet-name-label');
    const labelHTML = label[0] ? label[0] : false;
    
    expect(labelHTML).toBeInTheDocument();
    expect(labelHTML).toHaveTextContent('Planet')


	const input = await screen.findAllByTestId('planet-name-input');
    const inputHTML = input[0] ? input[0] : false;

    expect(inputHTML).toBeInTheDocument();
    expect(inputHTML).toHaveValue('Earth');

});