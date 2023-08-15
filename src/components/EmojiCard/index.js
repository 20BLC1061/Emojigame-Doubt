import './index.css'

const EmojiCard = props => {
  const {cardDetails, onClickEmoji} = props

  return (
    <li className="emoji">
      <button type="button" className="btn-element">
        <img
          src={cardDetails.emojiUrl}
          alt={cardDetails.emojiName}
          className="emoji-image"
          onClick={() => onClickEmoji(cardDetails.id)}
        />
      </button>
    </li>
  )
}

export default EmojiCard
