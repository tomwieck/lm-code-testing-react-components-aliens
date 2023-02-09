interface TwoPlusTwoProps { 
	twoPlusTwo: string;
	onChangeTwoPlusTwo: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const TwoPlusTwo : React.FC<TwoPlusTwoProps> = ({ twoPlusTwo, onChangeTwoPlusTwo }) => {
    return (
        <>
            <label htmlFor='twoPlusTwo' data-testid="two-plus-two-label">What is 2+2?</label>
            {/* <input id='twoPlusTwo' type='text' value={twoPlusTwo} onChange={onChangeTwoPlusTwo} /> */}
            <select name="twoPlusTwo" id="twoPlusTwo" data-testid="two-plus-two-select" value={twoPlusTwo} onChange={onChangeTwoPlusTwo}>
                <option value="not-four">Not 4</option>
                <option value="four">4</option>
            </select>
        </>
    )
};

export default TwoPlusTwo;