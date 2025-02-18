import { useState } from "react";
import api from "../api/axiosInstance";
// import axios from "axios";
import { GemReportCard } from "./GemReportCard";
import { RudrakshaReportCard } from "./RudrakshaReportCard";

export function Home() {

    const [reportNumber, setReportNumber] = useState('');
    // const [mobileNumber, setMobileNumber] = useState('');
    // const [otp, setOtp] = useState('');
    const [report, setReport] = useState<any | null>(null);
    const [error, setError] = useState<any | null>(null);
    // const [otpSent, setOtpSent] = useState(false);
    // const [otpVerified, setOtpVerified] = useState(false);

    return <div>
        <div className="pt-10 flex flex-col items-center">
            <div className="text-blue-950 font-extrabold">
                <h1>REPORT VERIFICATION SYSTEM</h1>
            </div>
            <p className="py-4 font-bold">Please enter details and click Show for result.</p>
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
                <div className="space-y-4">
                    
                    {/* <div>
                        <label htmlFor="mobNum" className="block text-sm font-md">Mobile Number</label>
                        <input 
                        disabled={otpSent}
                        className="py-1 px-3 mr-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        type="tel"
                        pattern="[0-9]*"
                        id="mobNum"
                        onChange={(e) => setMobileNumber(`+91${e.target.value}`)}
                        />
                        <button
                        disabled={otpSent} 
                        className="px-3 py-1 bg-blue-400 text-white rounded-lg hover:bg-blue-500 disabled:bg-gray-400"
                        onClick={ async () => {
                            try {
                                const res = await api.post('/otp/generate',
                                    { mobileNumber }, { headers: {
                                        "Content-Type": "application/json"
                                    }}
                                )
                                console.log(res.data);
                                if (res?.status === 200) {
                                    setOtpSent(true);
                                }
                                setError(null);
                            } catch(err: any) {
                                console.log('error ho gya', err);
                                if ( err.response || err.response.data || err.response.data.error) {
                                    setError(err.response.data.error)
                                } else {
                                    setError('An unknown error occured');
                                }
                            }
                        }}
                        >Send OTP</button>
                    </div>
                    <div>
                        <label htmlFor="otp" className="block text-sm font-md">Enter OTP</label>
                        <input 
                        className="py-1 px-3 mr-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        type="number" id="otp"
                        onChange={(e) => setOtp(e.target.value)}
                        disabled={!otpSent || otpVerified}
                        />
                        <button
                        disabled={!otpSent || otpVerified} 
                        className="px-3 py-1 bg-blue-400 text-white rounded-lg hover:bg-blue-500 disabled:bg-gray-400"
                        onClick={ async () => {
                            try {
                                const res = await api.post('/otp/verify',
                                    { mobileNumber, otp }, { headers: {
                                        "Content-Type": "application/json"
                                    }}
                                )
                                console.log(res?.data);
                                if (res.status === 200) {
                                    setOtpVerified(true);
                                }
                                setError(null);
                            } catch(err: any) {
                                console.log('error ho gya', err);
                                if ( err.response || err.response.data || err.response.data.error) {
                                    setError(err.response.data.error)
                                } else {
                                    setError('An unknown error occured');
                                }
                            }
                        }}
                        >Verify</button>
                    </div> */}
                    <div>
                        <label htmlFor="reportId" className="text-xl font-md mr-2">Report Number</label>
                        <input
                        // disabled={!otpVerified}
                        className="py-2 px-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        type="text" id="reportId"
                        onChange={(e) =>{ setReportNumber(e.target.value)
                        }}
                        />
                    </div>
                    <div className="flex justify-center">
                        <button 
                        // disabled={!otpVerified}
                        className="px-3 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 disabled:bg-gray-400"
                        onClick={ async () => {
                            try {
                                const res = await api.post('/reportDetails',
                                    { 
                                        reportNumber
                                    }, { headers: {
                                        "Content-Type": 'application/json'
                                    }}
                                );
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
                        }}
                        >Show Report</button>
                    </div>
                    <div className="text-center">
                        {error && <p className="text-red-500 mt-4">{error}</p>}
                    </div>
                </div>
            </div> 
            <div className="my-5">
                {report?.reportNumber?.startsWith('G') && <GemReportCard report={report} />}
                {report?.reportNumber?.startsWith('R') && <RudrakshaReportCard report={report} />}
            </div>   
        </div>
    </div>
    
    
}