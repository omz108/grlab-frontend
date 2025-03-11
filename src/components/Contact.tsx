
export function Contact() {

    return <div className="pt-20 flex flex-col items-center min-h-screen">
        <div className="text-xl font-bold max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
            <div>
                <h1 className="text-red-400 pb-1 border-b-2">Address</h1>
                <h2 className="pt-4">2444/81, Street No-08, Amar Market,</h2>
                <h2>Chandni Chowk, Delhi - 110006</h2>
            </div>
            <div>
            <h2 className="text-red-400 pt-6 pb-1 border-b-2">Contact us on:</h2>
            <h2 className="pt-3">E-mail: <a className="border rounded py-1 px-1 bg-red-400 text-white hover:bg-red-600" href="https://mail.google.com/mail/?view=cm&fs=1&to=info@grlab.in" target="_blank">info@grlab.in</a></h2>
            </div>
            
        </div>
    </div>
}