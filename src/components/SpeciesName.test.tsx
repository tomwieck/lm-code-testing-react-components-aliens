import { render, screen } from '@testing-library/react';
import SpeciesName from './SpeciesName';

test('renders Number of Beings', async () => {
    render(
        <SpeciesName 
            speciesName={'human'}
            onChangeSpeciesName={(e : any) => (1)}
        />);
});
