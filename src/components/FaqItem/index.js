import './index.css'

const FaqItem = props => {
  const {eachItem, onFaq, isValue} = props
  const {questionText, id, answerText} = eachItem
  const onClickFaq = () => {
    onFaq(id)
  }
  const imgText = !isValue
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

  const altValue = !isValue ? 'plus' : 'minus'

  const getRenderedAnswer = () => (
    <div>
      <hr className="hr-line" />
      <p className="answer-text">{answerText}</p>
    </div>
  )

  return (
    <li className="each-item-container">
      <div className="item-container">
        <h1 className="faq-item-head">{questionText}</h1>
        <button type="button" className="button" onClick={onClickFaq}>
          <img src={imgText} alt={altValue} />
        </button>
      </div>
      {isValue && getRenderedAnswer()}
    </li>
  )
}

export default FaqItem
