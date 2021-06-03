import React from 'react';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	return (
		<>
			{(props.movies) ? props.movies.map((movie, index) => (
				<div className='image-container d-flex justify-content-start col-md-3'
                key={index}>
                	<img src={movie.Poster} alt={movie.Title}></img>
					<div
						onClick={() => props.handleFavouritesClick(movie)}
						className='overlay d-flex align-items-center justify-content-center'
					>
						<FavouriteComponent />
					</div>
				</div>
			)):''}
		</>
	);
};

export default MovieList;

/*import React from 'react';


const MovieList = (props) => {
    console.log("forth line");
    const FavouriteComponent = props.favouriteComponent;

    return (
        <>
            {props.movies.map((movies, index) => (
                <div className="image-container d-flex justify-content-start col-md-3"
                key={index}>
                    <img src={movies.Poster} alt={movies.Title}></img>
                    <div
                        onClick={() => props.handleFavouritesClick(movies)}
                        className="overlay d-flex align-items-center justify-content-center">
                        <FavouriteComponent />
                    </div>


                </div>
            ))}
        </>
    );
};

export default MovieList;*/