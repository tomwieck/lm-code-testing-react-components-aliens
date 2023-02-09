import { render, screen } from '@testing-library/react';
import ReasonForSparing from './ReasonForSparing';

test('renders Number of Beings', async () => {
    render(
        <ReasonForSparing 
            reasonForSparing={'reason'}
            onChangeReasonForSparing={(e : any) => (1)}
        />);
});
