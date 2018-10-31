import React from 'react'
import { action } from '@storybook/addon-actions';
import Accordion from '../../src'
import '../simple.css'

export default () => (
  <Accordion className="accordion" onChange={action('onChange outer')}>
    <div data-header="🎹 Piano" className="inner">
      <p>First item content</p>
      <p>The piano (a clipping of earlier pianoforte) is an acoustic, stringed musical instrument invented in Italy by Bartolomeo Cristofori around the year 1700 (the exact year is uncertain), in which the strings are struck by hammers.</p>
    </div>
    <div data-header="🎸 Guitar" className="inner">
      <p>Second item content</p>
      <Accordion className="accordion" onChange={action('onChange inner')}>
        <div data-header="🦇 Bat" className="inner">
          <p>Bats are mammals of the order Chiroptera; with their forelimbs adapted as wings, they are the only mammals naturally capable of true and sustained flight.</p>
        </div>
        <div data-header="🦐 Shrimp" className="inner">
          <p>The term shrimp is used to refer to some decapod crustaceans, although the exact animals covered can vary.</p>
        </div>
      </Accordion>
      <p>The guitar is a fretted musical instrument that usually has six strings. It is typically played with both hands by strumming or plucking the strings with either a guitar pick or the finger(s)/fingernails of one hand, while simultaneously fretting (pressing the strings against the frets) with the fingers of the other hand.</p>
    </div>
  </Accordion>
)

export const docs =
`<Accordion>
  <div data-header="🎹 Piano">
    <p>First item content</p>
    <p>The piano...</p>
  </div>
  <div data-header="🎸 Guitar">
    <p>Second item content</p>
    <Accordion>
      <div data-header="🦇 Bat">
        <p>Bats are...</p>
      </div>
      <div data-header="🦐 Shrimp">
        <p>The term shrimp...</p>
      </div>
    </Accordion>
    <p>The guitar...</p>
  </div>
</Accordion>`
