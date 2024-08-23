import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Store } from "../../../Utils/Store";

const Sidebar = () => {
    const {dispatch } = useContext(Store)
 
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('UserInfo');
        dispatch({ type: 'ClearUserInfo', payload: null })
        navigate('/login');
        window.location.reload()
    };
    return (
        <>
            <div className="vertical-menu">
                <div data-simplebar="init" className="h-100">
                    <div className="simplebar-wrapper" style={{ margin: 0 }}>
                        <div className="simplebar-height-auto-observer-wrapper">
                            <div className="simplebar-height-auto-observer" />
                        </div>
                        <div className="simplebar-mask">
                            <div className="simplebar-offset" style={{ right: "-17px", bottom: 0 }}>
                                <div
                                    className="simplebar-content-wrapper"
                                    style={{ height: "100%", overflow: "hidden scroll" }}
                                >
                                    <div className="simplebar-content" style={{ padding: 0 }}>
                                        {/*- Sidemenu */}
                                        <div id="sidebar-menu" className="mm-active">
                                            <p className="mb-2 ml-4"><b>User Name DASHBOARD</b></p>

                                            <ul className="metismenu list-unstyled mm-show" id="side-menu">
                                                <li className='menu-title' id='key-menu'>
                                                    Sidebar
                                                </li>
                                                <li>
                                                    <Link to="/admin/dashboard" className="waves-effect">
                                                        <i className="bx bx-home" />
                                                        <span key="t-chat">Profile</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/admin/all/ideas" className="waves-effect">
                                                        <i className="bx bx-bulb" />
                                                        <span key="t-chat">Ideas</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/admin/contracts" className="waves-effect">
                                                        <i className="bx bx-book" />
                                                        <span key="t-chat">Contracts</span>
                                                    </Link>
                                                </li>
                                                <li onClick={handleLogout}>
                                                    <Link className="waves-effect">
                                                        <i className="bx bx-power-off" />
                                                        <span key="t-chat">Logout</span>
                                                    </Link>
                                                </li>
                                            </ul>


                                        </div>
                                        {/* Sidebar */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="simplebar-placeholder"
                            style={{ width: "auto", height: 1237 }}
                        />
                    </div>
                    <div
                        className="simplebar-track simplebar-horizontal"
                        style={{ visibility: "hidden" }}
                    >
                        <div
                            className="simplebar-scrollbar"
                            style={{ transform: "translate3d(0px, 0px, 0px)", display: "none" }}
                        />
                    </div>
                    <div
                        className="simplebar-track simplebar-vertical"
                        style={{ visibility: "visible" }}
                    >
                        <div
                            className="simplebar-scrollbar"
                            style={{
                                height: 618,
                                transform: "translate3d(0px, 0px, 0px)",
                                display: "block"
                            }}
                        />
                    </div>
                </div>
            </div>


        </>
    )
}

export default Sidebar