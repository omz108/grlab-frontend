import React, { useState } from "react";

type EditableReportCardProps = {
    initialData: Record<string, string>;
    onSubmit: (data: Record<string, string>) => void;
    isEditing?: boolean;
};

export function EditableReportCard({
    initialData,
    onSubmit,
    isEditing = false,
}: EditableReportCardProps) {
    const [formData, setFormData] = useState(initialData);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="my-12 w-full max-w-3xl bg-white p-6 rounded-lg shadow-md border">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {isEditing ? 'Edit Report' : 'Add New Report'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {Object.keys(initialData).map((key) =>(
                    <div key={key} className="grid grid-cols-2 gap-4">
                        <label htmlFor={key} className="font-semibold capitalize">
                            {key.replace(/([A-Z])/g, " $1")}
                        </label>
                        <input 
                        type="text"
                        id={key}
                        name={key}
                        value={formData[key]}
                        onChange={handleChange}
                        className="p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                        required={key === "reportNumber"} 
                        />
                    </div>
                ))}
                <div className="flex justify-end">
                    <button
                    type="submit"
                    className="py-2 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                        {isEditing ? "Update Report" : "Add Report"}
                    </button>
                </div>
            </form>
        </div>
    )
}