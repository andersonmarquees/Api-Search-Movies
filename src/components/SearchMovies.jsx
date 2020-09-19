import React, { useState } from 'react';


import { DivComponent, TitleComponent, FormComponent,
    LabelComponent, InputComponent, ButtonComponent} from './index';

import { DivCard, CardComponent, ImgCard, CardP, Card, CardH3 } from '../containers/Card'


export const SearchMovie = () => {

    const [ query, setQuery ] = useState('')
    const [ movies, setMovies] = useState([])

    const searchMovies = async (event) => {
        event.preventDefault()
        const url = `
        https://api.themoviedb.org/3/search/movie?api_key= <<your-key>> &query=${query}
        &page=1&include_adult=false`

        try {
            const res = await fetch(url)
            const data = await res.json()
            setMovies(data.results)
        } catch(e) {
            console.error(e)
        }
    }
    return (
        <>
            <DivComponent>
                <TitleComponent>Search Movies</TitleComponent>
                <FormComponent onSubmit={searchMovies}>
                    <LabelComponent>Movies</LabelComponent>
                    <InputComponent value={query} onChange={(e) => setQuery(e.target.value)}/>
                    <ButtonComponent>Submit</ButtonComponent>
                </FormComponent>
            </DivComponent>


            <DivCard>

                {movies.filter(movie => movie.poster_path).map(movie => (

                    <CardComponent key={movie.id}>

                        <Card>
                            <CardH3>{movie.title}</CardH3>
                            <CardP>RELEASE DATE: {movie.release_date}</CardP>
                            <CardP>RATING: {movie.vote_average}</CardP>

                        </Card>

                        <ImgCard
                            src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                            alt={movie.title + 'poster'} />

                        <CardP>{movie.overview}</CardP>
                    </CardComponent>
                ))}
            </DivCard>
        </>
    )
}

