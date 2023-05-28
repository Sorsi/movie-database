import React from 'react';

class MovieRow extends React.Component {

  viewMovie() {
    /* console.log('kljsdfklsdkljdsf')
    console.log(this.props.movie.title) */
    window.location.href = `https://www.themoviedb.org/movie/${this.props.movie.id}`
  }

  render() {
    return <div>
      <table key={this.props.movie.id}>
        <tbody>
          <tr>
            <td>
              <img src={this.props.movie.poster_src} alt="poster" width="120" />
            </td>
            <td>
              <h3>{this.props.movie.title}</h3>
              <p>{this.props.movie.overview}</p>
              <input type="button" onClick={this.viewMovie.bind(this)} value="view" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  }
}

export default MovieRow;
