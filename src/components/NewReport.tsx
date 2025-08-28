import { useEffect, useState } from "react"
import api from "../api/axiosInstance";
import { useParams } from "react-router-dom";
import { GemReportCard } from "./GemReportCard";
import { RudrakshaReportCard } from "./RudrakshaReportCard";

export const NewReport = () => {

    // const [reportNumber, setReportNumber] = useState('');
    const [report, setReport] = useState<any | null>(null);
    const [error, setError] = useState<any | null>(null);

    const { reportNumber } = useParams()


    const fetchReport = async () => {
        try {
            const res = await api.get(`/reportDetails/${reportNumber}`);
            console.log(res.data);
            setReport(res.data);
            setError(null);
        } catch(err: any) {
            console.log('error ho gya', err);
            setReport(null);
            if ( err.response || err.response.data || err.response.data.error) {
                setError(err.response.data.error)
            } else {
                setError('An unknown error occured');
            }
        }
    }

    useEffect(() => {
        fetchReport();
    }, [reportNumber])

    return (
        <div className="flex justify-center content-center h-screen pt-20">
            {report?.reportNumber?.startsWith('G') && <GemReportCard report={report} />}
            {report?.reportNumber?.startsWith('R') && <RudrakshaReportCard report={report} />}
            {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        </div>
    )
} 