import { render, screen } from '@testing-library/react';
import PlanetName from './PlanetName';

test('renders Planet Name', () => {
	render(<PlanetName 
        planetName={'Earth'}
        onChangePlanetName={(e : any) => (1)}
    />);
});
