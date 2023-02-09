interface SpeciesNameProps { 
	speciesName: string;
	onChangeSpeciesName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SpeciesName : React.FC<SpeciesNameProps> = ({ speciesName, onChangeSpeciesName }) => {
    return (
        <>
            <label htmlFor='speciesName' data-testid="species-name-label">Species Name</label>
            <input id='speciesName' data-testid="species-name-input" type='text' value={speciesName} onChange={onChangeSpeciesName} />
        </>
    )
};

export default SpeciesName;