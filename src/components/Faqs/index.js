import {Component} from 'react'
import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  state = {listValue: []}

  onFaq = id => {
    const {listValue} = this.state

    const isPresent = listValue.includes(id)
    if (isPresent) {
      const filteredData = listValue.filter(ele => ele !== id)
      this.setState({listValue: filteredData})
    } else {
      this.setState(prevState => ({listValue: [...prevState.listValue, id]}))
    }
  }

  render() {
    const {faqsList} = this.props
    const {listValue} = this.state
    console.log(listValue)
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="faq-head">FAQs</h1>
          <ul className="faq-list-container">
            {faqsList.map(eachItem => (
              <FaqItem
                eachItem={eachItem}
                key={eachItem.id}
                onFaq={this.onFaq}
                isValue={listValue.includes(eachItem.id)}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
