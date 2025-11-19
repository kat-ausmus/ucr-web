import {useState, useEffect, useRef} from 'react'
import FlexRow from "./FlexRow.tsx";
import Spinner from "./Spinner";
import {UCR_COL_NAMES, type UcrRowDataType} from "../types/ucrResponseType.ts";


const Reports = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessages, setErrorMessages] = useState('');
    const [ucrData, setUcrData] = useState<UcrRowDataType[]>([]);
    const apiUrlBase = "http://127.0.0.1:3000";
    const apiEndPoint = "ucr/human_trafficking";

    const fetchUcrData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`${apiUrlBase}/${apiEndPoint}`);

            if (!response.ok) {
                throw new Error('Failed to fetch UCR data');
            }

            const ucrRaw = await response.json();

            if (ucrRaw.Response === 'False') {
                setErrorMessages(ucrRaw.Error || 'Failed to fetch movies');
                setUcrData([]);
                return;
            }

            setUcrData(ucrRaw.data);
        } catch (error) {
            setErrorMessages(`An error occurred while fetching data, error=> ${error}`);
        } finally {
            setIsLoading(false);
        }
    }

    const count = useRef(0);
    useEffect(() => {
        console.log(`useEffect called ${++count.current} times`);
        fetchUcrData();
    },[])

    return (
        <div className="flex flex-col gap-4 text-amber-50 border-2 border-amber-50 rounded-lg">
                <h2 className="flex flex-row justify-center border-b-2"> UCR Data</h2>

                { isLoading ? (
                    <Spinner />
                ) : errorMessages ? (
                    <p className="text-red-500">{errorMessages}</p>
                ) : (
                    <div className="flex flex-col">
                        <h4 className="row-view gap-2 border-b-2 pl-4">
                            { Object.entries(UCR_COL_NAMES).map(([key, value]) => (
                                <p key={key}>{value}</p>
                            ))}
                        </h4>

                        <div className="pl-2">
                          <ul>
                            {ucrData.map((row: UcrRowDataType) => (
                                <li key={row.id}>
                                    <FlexRow data={row} />
                                </li>
                            ))}
                          </ul>
                        </div>
                       <div className="mt-2 border-t-2 pl-2">Total Records: {ucrData.length}</div>
                    </div>
                )}
        </div>
    )
}
export default Reports
