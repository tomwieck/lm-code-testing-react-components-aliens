interface PlanetNameProps { 
	planetName: string;
	onChangePlanetName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PlanetName : React.FC<PlanetNameProps> = ({ planetName, onChangePlanetName }) => {
    return (
        <>
            <label htmlFor='planetName' data-testid="planet-name-label">Planet Name</label>
            <input id='planetName' type='text' data-testid="planet-name-input" value={planetName} onChange={onChangePlanetName} />
        </>
    )
};

export default PlanetName;