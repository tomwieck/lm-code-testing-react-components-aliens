import { useState } from 'react';
import W12MHeader from './W12MHeader';
import SpeciesName from './SpeciesName';
import PlanetName from './PlanetName';
import NumberOfBeings from './NumberOfBeings';
import TwoPlusTwo from './TwoPlusTwo';
import ReasonForSparing from './ReasonForSparing';

const W12MForm = () => {
	const [speciesName, setSpeciesName] = useState<string>('Humans');
	const [planetName, setPlanetName] = useState<string>('Earth');
	const [numberOfBeings, setNumberOfBeings] = useState<number>(1);
	const [twoPlusTwo, setTwoPlusTwo] = useState<string>('not-four');
	const [reasonForSparing, setReasonForSparing] = useState<string>('');

	return (
		<section className='w12MForm'>
			<W12MHeader />
			<div>
				<SpeciesName 
					speciesName={speciesName} 
					onChangeSpeciesName={
						(e : any) => setSpeciesName(e.target.value)
					} 
				/>
			</div>
			<div>
				<PlanetName 
					planetName={planetName} 
					onChangePlanetName={
						(e : any) => setPlanetName(e.target.value)
					} 
				/>
			</div>
			<div>
				<NumberOfBeings 
					numberOfBeings={numberOfBeings} 
					onChangeNumberOfBeings={
						(e : any) => setNumberOfBeings(e.target.value)
					} 
				/>
			</div>
			<div>
				<TwoPlusTwo 
					twoPlusTwo={twoPlusTwo} 
					onChangeTwoPlusTwo={
						(e : any) => setTwoPlusTwo(e.target.value)
					} 
				/>
			</div>
			<div>
				<ReasonForSparing 
					reasonForSparing={reasonForSparing} 
					onChangeReasonForSparing={
						(e : any) => setReasonForSparing(e.target.value)
					} 
				/>
			</div>
			{/* REST OF FORM GOES HERE */}
		</section>
	);
};

export default W12MForm;
