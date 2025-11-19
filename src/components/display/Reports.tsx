import {useEffect, useState} from 'react'
import Spinner from "../Spinner.tsx";
import {type UcrRowDataType} from "../../types/ucrResponseType.ts";
import FlexCard from "./flex/FlexCard.tsx";


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

    useEffect(() => {
        fetchUcrData();
    },[])

    return (
        <div className="flex flex-col gap-4 text-amber-50">
                { isLoading ? (
                    <Spinner />
                ) : errorMessages ? (
                    <p className="text-red-500">{errorMessages}</p>
                ) : (
                    <FlexCard data={ucrData}/>
                )}
        </div>
    )
}
export default Reports
