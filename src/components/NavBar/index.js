import './index.css'

const NavBar = props => {
  const {tempClickedEmojisList, isWinOrLoseCardActive, topScore} = props
  return (
    <div className="navbar-container">
      <div className="width-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="emoji-logo"
          />
          <h1 className="emoji-logo-heading">Emoji Game</h1>
        </div>
        {isWinOrLoseCardActive ? null : (
          <div className="score-container">
            <p className="scores">Score: {tempClickedEmojisList.length}</p>
            <p className="scores">Top Score: {Math.max(...topScore)}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBar
