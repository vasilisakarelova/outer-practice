import React, { Component } from 'react'
import * as css from 'classnames'

import ovfa from '../helpers/ovfa.js'

import GridItem from './GridItem.jsx'

import test_00 from '../assets/test_00.png'
import test_01 from '../assets/test_01.jpg'
import test_02 from '../assets/test_02.png'
import test_03 from '../assets/test_03.png'
import test_04 from '../assets/test_04.jpg'
import test_05 from '../assets/test_05.jpg'
import Mark_Yareham_00 from '../assets/Mark_Yareham_00.jpeg'
import Oriol_Gil_00 from '../assets/Oriol_Gil_00.jpg'

export default class extends Component {
  render () {
    return (
      <div className='grid-photos'>
        <GridItem link='http://outerpractice.com' author='' img={test_00} />
        <GridItem link='http://outerpractice.com' author='' img={test_01} />
        <GridItem link='http://outerpractice.com' author='' img={test_02} />
        <GridItem link='http://outerpractice.com' author='' img={test_03} />
        <GridItem link='http://outerpractice.com' author='' img={test_04} />
        <GridItem link='http://outerpractice.com' author='' img={test_05} />
        <GridItem link='http://outerpractice.com' author='Mark Yareham' img={Mark_Yareham_00} />
        <GridItem link='http://outerpractice.com' author='Oriol Gil' img={Oriol_Gil_00} />
        <GridItem link='http://outerpractice.com' author='' img={test_00} />
        <GridItem link='http://outerpractice.com' author='' img={test_01} />
        <GridItem link='http://outerpractice.com' author='' img={test_02} />
        <GridItem link='http://outerpractice.com' author='' img={test_03} />
        <GridItem link='http://outerpractice.com' author='' img={test_04} />
        <GridItem link='http://outerpractice.com' author='' img={test_05} />
        <GridItem link='http://outerpractice.com' author='Mark Yareham' img={Mark_Yareham_00} />
        <GridItem link='http://outerpractice.com' author='Oriol Gil' img={Oriol_Gil_00} />
        <GridItem link='http://outerpractice.com' author='' img={test_00} />
        <GridItem link='http://outerpractice.com' author='' img={test_01} />
        <GridItem link='http://outerpractice.com' author='' img={test_02} />
        <GridItem link='http://outerpractice.com' author='' img={test_03} />
        <GridItem link='http://outerpractice.com' author='' img={test_04} />
        <GridItem link='http://outerpractice.com' author='' img={test_05} />
        <GridItem link='http://outerpractice.com' author='Mark Yareham' img={Mark_Yareham_00} />
        <GridItem link='http://outerpractice.com' author='Oriol Gil' img={Oriol_Gil_00} />
        <GridItem link='http://outerpractice.com' author='' img={test_00} />
        <GridItem link='http://outerpractice.com' author='' img={test_01} />
        <GridItem link='http://outerpractice.com' author='' img={test_02} />
        <GridItem link='http://outerpractice.com' author='' img={test_03} />
        <GridItem link='http://outerpractice.com' author='' img={test_04} />
        <GridItem link='http://outerpractice.com' author='' img={test_05} />
        <GridItem link='http://outerpractice.com' author='Mark Yareham' img={Mark_Yareham_00} />
        <GridItem link='http://outerpractice.com' author='Oriol Gil' img={Oriol_Gil_00} />
      </div>
    )
  }
}
