interface NumberOfBeingsProps { 
	numberOfBeings: number;
	onChangeNumberOfBeings: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NumberOfBeings : React.FC<NumberOfBeingsProps> = ({ numberOfBeings, onChangeNumberOfBeings }) => {
    return (
        <>
            <label htmlFor='numberOfBeings' data-testid="number-of-beings-label">Species Name</label>
            <input id='numberOfBeings' data-testid="number-of-beings-input" type='number' value={numberOfBeings} onChange={onChangeNumberOfBeings} />
        </>
    )
};

export default NumberOfBeings;