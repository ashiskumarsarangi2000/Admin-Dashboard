/**
 * v0 by Vercel.
 * @see https://v0.dev/t/cymsYMfVJFj
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Component() {
    return (
        <>
            <Navbar />
            <div style={{ display: 'flex', height: '100%' }}>
                <Sidebar />
                <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
                    <div className="w-full max-w-4xl">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <h2 className="text-lg font-medium">Product List</h2>
                            </div>
                        </div>
                        <div className="mt-6">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 border-b">ID</th>
                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 border-b">Product Name</th>
                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 border-b">Sub Category</th>
                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 border-b">Category</th>
                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 border-b">Status</th>
                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 border-b">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="px-4 py-2 text-sm border-b">1</td>
                                        <td className="px-4 py-2 text-sm border-b">Ghee Jar</td>
                                        <td className="px-4 py-2 text-sm border-b">Ghee</td>
                                        <td className="px-4 py-2 text-sm border-b">Ghee & Oil</td>
                                        <td className="px-4 py-2 text-sm border-b">
                                            <span style={{ backgroundColor: '#34D399', color: '#065F46' }} className="inline-block px-2 py-1 text-xs font-medium rounded-md">
                                                Active
                                            </span>

                                        </td>
                                        <td className="px-4 py-2 text-sm border-b">
                                            <div className="flex items-center space-x-2">
                                                <button className="p-2 rounded-md hover:bg-gray-100 transition-colors">
                                                    <i className="bi bi-eye" aria-hidden="true"></i>
                                                    <span className="sr-only"></span>
                                                </button>
                                                <button className="p-2 rounded-md hover:bg-gray-100 transition-colors">
                                                    <i className="bi bi-trash" aria-hidden="true"></i>
                                                    <span className="sr-only"></span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 text-sm border-b">2</td>
                                        <td className="px-4 py-2 text-sm border-b">Black Tea</td>
                                        <td className="px-4 py-2 text-sm border-b">Black Tea</td>
                                        <td className="px-4 py-2 text-sm border-b">Tea</td>
                                        <td className="px-4 py-2 text-sm border-b">
                                            <span style={{ backgroundColor: '#34D399', color: '#065F46' }} className="inline-block px-2 py-1 text-xs font-medium rounded-md">
                                                Active
                                            </span>

                                        </td>
                                        <td className="px-4 py-2 text-sm border-b">
                                            <div className="flex items-center space-x-2">
                                                <button className="p-2 rounded-md hover:bg-gray-100 transition-colors">
                                                    <i className="bi bi-eye" aria-hidden="true"></i>
                                                    <span className="sr-only"></span>
                                                </button>
                                                <button className="p-2 rounded-md hover:bg-gray-100 transition-colors">
                                                    <i className="bi bi-trash" aria-hidden="true"></i>
                                                    <span className="sr-only"></span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 text-sm border-b">3</td>
                                        <td className="px-4 py-2 text-sm border-b">Sunflower Oil</td>
                                        <td className="px-4 py-2 text-sm border-b">Oil</td>
                                        <td className="px-4 py-2 text-sm border-b">Ghee & Oil</td>
                                        <td className="px-4 py-2 text-sm border-b">
                                            <span style={{ backgroundColor: '#F59E0B', color: '#FFFFFF' }} className="inline-block px-2 py-1 text-xs font-medium rounded-md">
                                                Pending
                                            </span>

                                        </td>
                                        <td className="px-4 py-2 text-sm border-b">
                                            <div className="flex items-center space-x-2">
                                                <button className="p-2 rounded-md hover:bg-gray-100 transition-colors">
                                                    <i className="bi bi-eye" aria-hidden="true"></i>
                                                    <span className="sr-only"></span>
                                                </button>
                                                <button className="p-2 rounded-md hover:bg-gray-100 transition-colors">
                                                    <i className="bi bi-trash" aria-hidden="true"></i>
                                                    <span className="sr-only"></span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 text-sm border-b">4</td>
                                        <td className="px-4 py-2 text-sm border-b">Green Tea</td>
                                        <td className="px-4 py-2 text-sm border-b">Green Tea</td>
                                        <td className="px-4 py-2 text-sm border-b">Tea</td>
                                        <td className="px-4 py-2 text-sm border-b">
                                            <span style={{ backgroundColor: '#34D399', color: '#065F46' }} className="inline-block px-2 py-1 text-xs font-medium rounded-md">
                                                Active
                                            </span>

                                        </td>
                                        <td className="px-4 py-2 text-sm border-b">
                                            <div className="flex items-center space-x-2">
                                                <button className="p-2 rounded-md hover:bg-gray-100 transition-colors">
                                                    <i className="bi bi-eye" aria-hidden="true"></i>
                                                    <span className="sr-only"></span>
                                                </button>
                                                <button className="p-2 rounded-md hover:bg-gray-100 transition-colors">
                                                    <i className="bi bi-trash" aria-hidden="true"></i>
                                                    <span className="sr-only"></span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 text-sm border-b">5</td>
                                        <td className="px-4 py-2 text-sm border-b">Coconut Oil</td>
                                        <td className="px-4 py-2 text-sm border-b">Oil</td>
                                        <td className="px-4 py-2 text-sm border-b">Ghee & Oil</td>
                                        <td className="px-4 py-2 text-sm border-b">
                                            <span style={{ backgroundColor: '#EF4444', color: '#FDEEEE' }} className="inline-block px-2 py-1 text-xs font-medium rounded-md">
                                                Inactive
                                            </span>


                                        </td>
                                        <td className="px-4 py-2 text-sm border-b">
                                            <div className="flex items-center space-x-2">
                                                <button className="p-2 rounded-md hover:bg-gray-100 transition-colors">
                                                    <i className="bi bi-eye" aria-hidden="true"></i>
                                                    <span className="sr-only"></span>
                                                </button>
                                                <button className="p-2 rounded-md hover:bg-gray-100 transition-colors">
                                                    <i className="bi bi-trash" aria-hidden="true"></i>
                                                    <span className="sr-only"></span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="flex justify-end mt-6 space-x-4">
                            <button className="px-4 py-2 text-sm font-medium rounded-md bg-gray-100 hover:bg-gray-200 transition-colors">
                                Cancel
                            </button>
                            <button style={{ backgroundColor: '#1a73e8', color: '#ffffff' }} className="px-4 py-2 text-sm font-medium rounded-md hover:bg-blue-700 transition-colors">
                                Save
                            </button>


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
