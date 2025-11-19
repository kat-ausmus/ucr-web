import {UCR_COL_NAMES, type UcrRowDataType} from "../../../types/ucrResponseType.ts";
import FlexRow from "./FlexRow.tsx";

const FlexCard = ({data}: { data: UcrRowDataType[] }) => {
    return (
        <div className="ucr-report">
            <h4 className="row-view">
                {Object.entries(UCR_COL_NAMES).map(([key, value]) => (
                    <p key={key}>{value}</p>
                ))}
            </h4>

            <div>
                <ul>
                    {data.map((row: UcrRowDataType) => (
                        <li key={row.id}>
                            <FlexRow data={row}/>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-2 pl-2">Total Records: {data.length}</div>
        </div>
    )
}
export default FlexCard
