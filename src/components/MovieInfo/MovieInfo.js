import {urls} from "../../constants/urls";
import style from "../MovieInfo/MovieInfo.module.scss"
import {useNavigate} from "react-router-dom";
import {AppRoutes} from "../../Routing/AppRoutes";
import ReactStars from "react-rating-stars-component/dist/react-stars";


const MovieInfo = ({movie}) => {
    const {id, title, poster_path, vote_average} = movie;
    const navigate = useNavigate ();


    return (
            <div className={style.OneMoviesCard}>
                    {/*<img className={style.PosterImage} onClick={() => navigate (AppRoutes.movie + (id))} src={imageUrls.moviesPoster.base + movie.poster_path} alt="logo"/>*/}
                    <img className={style.PosterImage} onClick={() => navigate (AppRoutes.movie + (id))}
                         src={urls.moviesPoster.base + movie.poster_path} alt="logo"/>
                    <div className={style.MovieTitle}>{title}</div>
                    <div className={style.StarsElement}>
                        <ReactStars
                            count={10}
                            value={vote_average}
                            size={16}
                            activeColor="#ffd700"
                            isHalf={true}
                            edit={false}
                            classNames={style.Stars}
                        />
                    </div>
                </div>
    );
};

export {MovieInfo};
