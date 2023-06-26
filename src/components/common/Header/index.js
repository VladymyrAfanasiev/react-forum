import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom'

import eventEmitter from '../../../events/EventEmitter'
import authService from '../../../services/AuthService';

import './Header.css';

function Header() {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const [authenticationInfo, setAuthenticationInfo] = useState(null);

    eventEmitter.on('login', async () => {
        const authenticationInfo = await authService.getAuthenticationInfo();
        setAuthenticationInfo(authenticationInfo);
    })

    useEffect(() => {
        async function getAuthenticationInfo() {
            const authenticationInfo = await authService.getAuthenticationInfo();
            setAuthenticationInfo(authenticationInfo);
        }

        getAuthenticationInfo();
     }, [authService])

    async function logoutClicked () {
        const success = await authService.logout();
        if (success) {
            const authenticationInfo = await authService.getAuthenticationInfo();
            setAuthenticationInfo(authenticationInfo);
            navigate('/')
        }
    }

    function changeLanguage() {
        const index = i18n.options.supportedLngs.indexOf(i18n.language);
        if (index == i18n.options.supportedLngs.length - 2) {
            i18n.changeLanguage(i18n.options.supportedLngs[0]);
        } else {
            i18n.changeLanguage(i18n.options.supportedLngs[index + 1]);
        }
    }

    return (
        <div className="header">
            <div className="header-content">
                {
                    authenticationInfo?.isAuthenticated ? (
                        <div className="header_navigation">
                            <div className="header_dropdown">
                                <button className="root_button">
                                    {
                                        t("Menu")
                                    }
                                </button>
                                <ul className="header_menu_dropdown" id="header_menu_dropdown">
                                    <li>
                                        <Link className="root_a_button" to="/requestCreateNewGroup">
                                            {
                                                t("Request to create a new group")
                                            }
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="root_a_button" to="/about">
                                            {
                                                t("About")
                                            }
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="header_home header_indent">
                                <Link className="root_a_button" to="/">
                                    {
                                        t("Forum name")
                                    }
                                </Link>
                            </div>     
                        </div>
                    ) : (
                        <div className="header_home">
                            <Link className="root_a_button" to="/">
                                {
                                    t("Forum name")
                                }
                            </Link>
                        </div>   
                    )
                }
                {
                    authenticationInfo?.isAuthenticated ? (
                        <div className="header_auth">
                            <div className="header_dropdown">
                                <button className="root_button">
                                    {
                                        authenticationInfo.user.name
                                    }
                                </button>
                                <ul className="header_menu_dropdown" id="header_menu_dropdown">
                                    <li>
                                        <Link className="root_a_button" to={ "/user/" + authenticationInfo.user.name }>
                                            {
                                                t("Profile")
                                            }
                                        </Link>
                                    </li>
                                    <li>
                                        <button className="root_button" to="/" onClick={logoutClicked}>
                                            {
                                                t("Logout")
                                            }
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <a className="root_a_button header_indent" onClick={changeLanguage}>
                                {
                                    i18n.language
                                }
                            </a>
                        </div>
                    ) : (
                        <div className="header_auth">
                            <Link className="root_a_button" to="/login">
                                {
                                    t("Login")
                                }
                            </Link>
                            <Link className="root_a_button header_indent" to="/registerlicence">
                                {
                                    t("Register")
                                }
                            </Link>
                            <button className="root_button header_indent" onClick={changeLanguage}>
                                {
                                    i18n.language
                                }
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Header;