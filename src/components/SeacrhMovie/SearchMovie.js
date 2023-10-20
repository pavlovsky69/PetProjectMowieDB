import {useForm} from "react-hook-form";
import style from './SeachMovie.module.css'
import {useDispatch} from "react-redux";
import {searchActions} from "../../redux/slices/searchSlice";
import React from "react";
import {useNavigate} from "react-router-dom";
import {searchByPageActions} from "../../redux/slices/searchByPageSlice";

const SearchMovie = () => {
    const navigate=useNavigate();
    const dispatch = useDispatch ();
    const {register, handleSubmit, formState:{isValid}, reset} = useForm (
    );


    const search = ({query}) => {
        navigate ('/search/' + (query))
        reset ()
        dispatch(searchByPageActions.resetPageCount())
        dispatch (searchActions.changeSearchCheck())
    }


    return (
        <div className={style.MainBox}>
            <div className={style.SmallBox}>
            <form className={style.MyForm} onSubmit={handleSubmit (search)}>
                <input className={style.Input} type="text"
                       placeholder={'Type your query to search movie'} {...register ('query', {required:true, minLength:1})}/>
                <button  disabled={!isValid} type={"submit"} className={style.buttonSubmit}>search</button>
            </form>
            </div>
        </div>
    );
};

export {SearchMovie};


// useEffect (() => {
//     searchService.getByQuery({query})
// }, []);



// const search = async ({query})=>{
//     await searchService.getByQuery({query})
//     reset()
// }