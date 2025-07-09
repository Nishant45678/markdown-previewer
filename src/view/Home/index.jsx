import { Component } from 'react'
import RawText from '../../components/RawText'
import MarkedPreview from '../../components/MarkedPreview'
import "./index.css"

export default class Home extends Component {
  render() {
    return (

      <>
      <div className='Home__header'>
      Markdown previewer
      </div>
      <div className='Home__wrapper'>
        <RawText className="Home__child"/>
        <MarkedPreview className="Home__child"/>
      </div>
      </>
    )
  }
}
