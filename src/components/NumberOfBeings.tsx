interface NumberOfBeingsProps { 
	numberOfBeings: number;
	onChangeNumberOfBeings: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NumberOfBeings : React.FC<NumberOfBeingsProps> = ({ numberOfBeings, onChangeNumberOfBeings }) => {
    return (
        <>
            <label htmlFor='numberOfBeings'>Species Name</label>
            <input id='numberOfBeings' type='number' value={numberOfBeings} onChange={onChangeNumberOfBeings} />
        </>
    )
};

export default NumberOfBeings;