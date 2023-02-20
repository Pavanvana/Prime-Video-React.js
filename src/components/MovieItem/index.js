import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'

import './index.css'

// Write your code here
const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  return (
    <Popup
      modal
      trigger={<img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />}
      className="popup-content"
    >
      {close => (
        <div className="modal-container">
          <button
            type="button"
            onClick={() => close()}
            className="close-button"
            data-testid="closeButton"
          >
            <IoMdClose size="20" color="#231f20" />
          </button>
          <div className="movie-player-container">
            <ReactPlayer url={videoUrl} controls />
          </div>
        </div>
      )}
    </Popup>
  )
}
export default MovieItem
