import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';
import UserAdmin from '../../Hooks/UserAdmin';
import Navbar from '../Shared/Navbar/Navbar';

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = UserAdmin(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to={'/dashboard'}>My Appointments</Link></li>
                        {
                            isAdmin && <>
                                <li><Link to={'/dashboard/users'}>All Users</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;