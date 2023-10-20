import style from './OneGenre.module.css'
import {useNavigate} from "react-router-dom";
import {AppRoutes} from "../../Routing/AppRoutes";

const OneGenre = ({genre}) => {
    const {id, name} = genre;
    const navigate = useNavigate ();
    return (
        <div className={style.MainGenreBlock} onClick={() => navigate (AppRoutes.GenreFind + (id))}>
            <div className={style.GenreTitleBlock}>
                <h1 className={style.TitleGenre}>{name}</h1>
            </div>
        </div>
    );
};

export {OneGenre};