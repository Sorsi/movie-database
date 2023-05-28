import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow';
import $ from 'jquery';

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};

		this.performSearch('');
	}

	searchChangeHandler(event) {
		const searchTerm = event.target.value;
		this.performSearch(searchTerm);
	}

	performSearch(searchTerm) {
		console.log('Search using Movie DB');
		const urlString = `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=${searchTerm}`;
		$.ajax({
			url: urlString,
			success: (searchResults) => {
				console.log('Fetched data successfully');
				const results = searchResults.results;

				let movieRows = [];

				results.forEach((movie) => {
					movie.poster_src = `https://image.tmdb.org/t/p/w185${
						movie.poster_path
					}`;
					const movieRow = <MovieRow key={movie.id} movie={movie} />;
					movieRows.push(movieRow);
				});

				this.setState({ rows: movieRows });
			},
			error: (xhr, status, err) => {
				console.log('Failed to fetch data');
			},
		});
	}

	render() {
		return (
			<div className="App">
				<table className="titleBar">
					<tbody>
						<tr>
							<td>
								<img width="100" src="image.svg" alt="logo" />
							</td>
							<td width="8" />
							<td>
								<h1>MovieDB Search</h1>
							</td>
						</tr>
					</tbody>
				</table>

				<input
					className="inputField"
					placeholder="Search here"
					type="text"
					onChange={this.searchChangeHandler.bind(this)}
				/>
				{this.state.rows}
			</div>
		);
	}
}

export default App;
