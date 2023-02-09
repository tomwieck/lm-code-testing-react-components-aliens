import { render, screen } from '@testing-library/react';
import TwoPlusTwo from './TwoPlusTwo';

test('renders Number of Beings', async () => {
    render(
        <TwoPlusTwo 
            twoPlusTwo={'not-4'}
            onChangeTwoPlusTwo={(e : any) => (1)}
        />);
});
