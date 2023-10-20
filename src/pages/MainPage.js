import {Outlet} from "react-router-dom";
import style from './MainPage.module.css'
import {useSelector} from "react-redux";


const MainPage = () => {
    const {themeCheck} = useSelector (state => state.theme);
    return (
        <div className={style.MainPage}>
            <div className={themeCheck ? style.white : style.black}>
                <Outlet/>
            </div>
        </div>
    );
};

export {MainPage};