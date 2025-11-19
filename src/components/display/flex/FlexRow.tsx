import type {UcrRowDataType} from "../../../types/ucrResponseType.ts";

const FlexRow =  ({data}: {data: UcrRowDataType}  ) => {
    const paddedNumber = (value) => String(value).padStart(6, '0');
    return (
        <div className="row-view">
            <p> {paddedNumber(data.id)} </p>
            <p> {data.ori} </p>
            <p> {data.state_name} </p>
            <p> {data.data_year} </p>
            <p> {data.actual_count} </p>
            <p> {data.unfounded_count} </p>
        </div>
    )
}
export default FlexRow
