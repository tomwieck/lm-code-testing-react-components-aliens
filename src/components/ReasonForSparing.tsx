interface ReasonForSparingProps { 
	reasonForSparing: string;
	onChangeReasonForSparing: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const ReasonForSparing : React.FC<ReasonForSparingProps> = ({ reasonForSparing, onChangeReasonForSparing }) => {
    return (
        <>
            <label htmlFor='reasonForSparing' data-testid="reason-for-sparing-label">Reason for sparing</label>
            <textarea id="reason-for-sparing" data-testid="reason-for-sparing-input" name="reason" value={reasonForSparing} onChange={onChangeReasonForSparing} >
                
            </textarea>
        </>
    )
};

export default ReasonForSparing;