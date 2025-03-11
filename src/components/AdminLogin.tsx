import { useEffect, useState } from "react"
import api from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { isAdminLoggedInState } from "../store/adminState";


export function AdminLogin() {

    const [username, setUsername] = useState('');
    const [password, setpassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const setIsAdminLoggedIn = useSetRecoilState(isAdminLoggedInState)
    const navigate = useNavigate();

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const res = await api.get('/admin/checkLogin');
                if (res.status === 200) {
                    // alert(res.data.message);
                    setIsAdminLoggedIn(true);
                    navigate('/admin/addReport');
                }
            } catch(error) {
                // 
                setIsAdminLoggedIn(false);
            }
            
        }
        checkLoginStatus();
    }, []);

    return <div className="flex items-center justify-center">
    <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg mt-20">
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-semibold text-center">Log in</h2>
            </div>
            <div>
                <label htmlFor="username">Username</label>
                <input
                className="py-1 ml-3 px-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" 
                onChange={(e) => setUsername(e.target.value)}
                type="text" id="username" />
            </div>
            <div className="relative">
                <label htmlFor="password">Password</label>
                <input 
                className="py-1 ml-3 px-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                onChange={(e) => setpassword(e.target.value)}
                type={showPassword ? 'text' : 'password'} 
                id="password"/>
                <button
              type="button"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
            </div>
            <div className="flex justify-center">
                <button
                className="py-2 px-8 bg-blue-400 text-white rounded-lg"
                onClick={async () => {
                    try{
                        const res = await api.post('/admin/login', 
                            { 
                                username,
                                password
                            }, { headers: {
                                "Content-Type": "application/json"
                            }}
                        )
                        // console.log(res.data);
                        if (res) {
                            setIsAdminLoggedIn(true);
                            navigate('/admin/addReport')
                        }
                    } catch(err) {
                        // console.log(err)
                        setIsAdminLoggedIn(false);
                    }
                }}
                >Login</button>
            </div>
        </div>
    </div>
    </div>
}