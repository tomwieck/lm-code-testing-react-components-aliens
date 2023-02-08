interface ReasonForSparingProps { 
	reasonForSparing: string;
	onChangeReasonForSparing: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const ReasonForSparing : React.FC<ReasonForSparingProps> = ({ reasonForSparing, onChangeReasonForSparing }) => {
    return (
        <>
            <label htmlFor='reasonForSparing'>Reason for sparing</label>
            <textarea id="reason-for-sparing" name="reason" value={reasonForSparing} onChange={onChangeReasonForSparing} >
                
            </textarea>
        </>
    )
};

export default ReasonForSparing;