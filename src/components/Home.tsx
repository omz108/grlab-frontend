
export function Home() {

    return <>
        <div className="pt-10 flex flex-col items-center">
            <div className="text-blue-950 font-extrabold">
                <h1>REPORT VERIFICATION SYSTEM</h1>
            </div>
            <p className="py-4 font-bold">Please enter details and click Show for result.</p>
            <div className="max-w-md w-full bg-blue-50 p-8 rounded-lg shadow-lg">
                <form className="space-y-4">
                    <div>
                        <label htmlFor="reportId">Report Number</label>
                        <input 
                        className="py-1 px-3 ml-3  border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        type="text" id="reportId"/>
                    </div>
                    <div>
                        <label htmlFor="mobNum">Mobile Number</label>
                        <input 
                        className="py-1 px-3 ml-3  border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        type="number" id="mobNum"/>
                    </div>
                    <div className="flex justify-center">
                        <button className="px-3 py-1 bg-blue-400 text-white rounded-lg hover:bg-blue-500"
                        onClick={() => {}}
                        >Send OTP</button>
                    </div>
                    <div>
                        <label htmlFor="otp">Enter OTP</label>
                        <input 
                        className="py-1 px-3 ml-12  border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        type="number" id="otp"/>
                    </div>
                    <div className="flex justify-center">
                        <button className="px-3 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500"
                        onClick={() => {}}
                        >Show Report</button>
                    </div>
                </form>
            </div>
            
            
        </div>
    </>
}