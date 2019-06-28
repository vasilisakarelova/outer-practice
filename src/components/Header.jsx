import React, { Component } from 'react'
import * as css from 'classnames'

export default class extends Component {
  componentDidMount () {
    document.addEventListener('scrolled', () => {
      //console.log('scrolled')
    })
  }

  render () {
    return (
      <div className='header-wrap'>
        <div className='header-inner'>
          <div className='header-intro'>Outer Practice <span className='header-intro--extra'>shows different aesthetics, different perspectives, a strange but unique point of view. We aim to propel talented artists and photographers that show a different angle. A place to showcase and curate eye-catching stories through a camera lense. All the images belong to the photographers mentioned and captioned and the use of their work is not permitted without their consent. A project by <a href="http://outerpractice.com">O–P</a>.</span></div>
        </div>
      </div>
    )
  }
}
