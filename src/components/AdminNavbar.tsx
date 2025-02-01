import { useNavigate } from "react-router-dom";
import api from "../api/axiosInstance";

export const AdminNavbar = () => {

    const navigate = useNavigate();

    const menuOptions = [
        { label: 'AddReport', href: '/admin/addReport'},
        // { label: 'EditReport', href: '/admin/editReport'},
        { label: 'UploadExcel', href: '/admin/uploadExcel'},
        { label: 'View&Update', href: '/admin/view' }
    ]

  return (
    <nav className="bg-blue-600 text-white px-4 py-3">
      <div>
        <div className="flex justify-between">
            <div>
                <button className="text-xl font-bold"
                onClick={() => navigate('/')}
                >grlab</button>
            </div>
            <div>
                <h1 className="text-red-300 text-3xl font-bold">Admin</h1>
            </div>
            <div className="space-x-8">
                { menuOptions.map((option) => (
                    <button
                    key={option.label}
                    className=""
                    onClick={() => navigate(option.href)}
                    >{option.label}</button>
                ))}
                <button
                onClick={ async () => {
                    try {
                        const res = await api.post('/admin/logout');
                        console.log(res.data.message);
                        alert(res.data.message);
                        navigate('/admin/login')
                    } catch(err) {
                        alert('You must login first');
                        navigate('/admin/login')
                    }
                }}
                >Logout</button>
            </div>
        </div>
      </div>
    </nav>
  );
};
