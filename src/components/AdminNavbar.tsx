import { useNavigate } from "react-router-dom";

export const AdminNavbar = () => {

    const navigate = useNavigate();

    const menuOptions = [
        { label: 'AddReport', href: '/admin/addReport'},
        { label: 'EditReport', href: '/admin/editReport'},
        { label: 'Logout', href:'' }
    ]

  return (
    <nav className="bg-blue-600 text-white px-4 py-3">
      <div>
        <div className="flex justify-between">
            <div>
                <button className="text-xl font-bold">grlab</button>
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
            </div>
        </div>
      </div>
    </nav>
  );
};
