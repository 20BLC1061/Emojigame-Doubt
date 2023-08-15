import './index.css'

const WinOrLoseCard = props => {
  const {playAgainOption, tempClickedEmojisList, topScore} = props
  const resultImage =
    tempClickedEmojisList.length === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const score =
    Math.max(...topScore) === tempClickedEmojisList.length
      ? 'Best Score'
      : 'Score'
  const resultTextDisplay =
    tempClickedEmojisList.length === 12 ? 'You Won' : 'You Lose'

  return (
    <div className="WinOrLoseCard-container">
      <div className="result-container">
        <img src={resultImage} alt="win or lose" className="result-pic" />
        <div className="content">
          <h1 className="result-heading">{resultTextDisplay}</h1>
          <p className="subtitle">{score}</p>
          <p className="final-score">{tempClickedEmojisList.length}/12</p>
          <button
            type="button"
            onClick={playAgainOption}
            className="playAgain-Btn"
          >
            Play Again
          </button>
        </div>
      </div>
    </div>
  )
}

export default WinOrLoseCard
