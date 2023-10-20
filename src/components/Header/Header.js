import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import style from './Header.module.scss'
import {AppRoutes} from "../../Routing/AppRoutes";
import {Switch} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {themeActions} from "../../redux/slices/themeSlice";
import userLogo from './icons8-user-50.png'
import {searchActions} from "../../redux/slices/searchSlice";
import {SearchMovie} from "../SeacrhMovie/SearchMovie";

const Header = () => {
    const {themeCheck} = useSelector (state => state.theme);
    const {searchCheck} = useSelector (state => state.searchCheck)
    const dispatch = useDispatch ();
    const navigate = useNavigate ();


    return (
        <div>
            <div className={style.HeaderMain}>
                <div className={style.headerBar}>
                    <div className={style.titleClass} onClick={() => navigate (AppRoutes.MainUrl)}>
                        <h1 className={style.titleH1}>The MovieDB</h1>
                    </div>
                    <NavLink className={style.button} id={style.buttonFirst} to={AppRoutes.MainUrl}>Movies</NavLink>
                    <NavLink className={style.button} to={AppRoutes.GenreListUrl}>Genres</NavLink>
                    <div className={style.button1}
                            onClick={() => dispatch (searchActions.changeSearchCheck ())}>Search
                    </div>
                    {/*<NavLink className={style.button} to={AppRoutes.SearchPage}>Search</NavLink>*/}
                    <div className={style.themeSwitcher}>
                        <Switch  size={'small'} className={style.switch} defaultChecked={themeCheck}
                                onChange={() => dispatch (themeActions.changeThemeCheck ())}/>
                        {themeCheck ? <p className={style.titleTheme}>Dark Theme</p> :
                            <p className={style.titleTheme}>Light Theme</p>}
                    </div>
                    <div className={style.logoUser}>
                        <img className={style.imageUser} src={userLogo} alt="userLogo"/>
                        <h5 className={style.userTitle}>User</h5>
                    </div>
                </div>
            </div>
                {searchCheck && <SearchMovie/>}
        </div>
    );
};

export {Header};



