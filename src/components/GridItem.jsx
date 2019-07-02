import React, { Component } from 'react'
import * as css from 'classnames'

import ovfa from '../helpers/ovfa.js'

import linkSign from '../assets/link-symbol_1f517.png'

export default class extends Component {
  render () {
    var imgName = this.props.img.split('/').slice(-1)[0]

    return (
      <div className='grid-item--wrap'>
        <div className='grid-item--img-wrap'>
          <img className='grid-item--img' src={this.props.img} alt={imgName} />
        </div>
        <div className='grid-item--link-wrap'>
          <a className='grid-item--link' href={this.props.link} target='_blank' rel="noopener noreferrer"><span className='grid-item--link-name'>{imgName}</span><span className='grid-item--link-sign-wrap'><img src={linkSign} alt='link sign' className='grid-item--link-sign' />{this.props.author}</span></a>
        </div>
      </div>
    )
  }
}
