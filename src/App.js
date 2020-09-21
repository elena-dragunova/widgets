import React from 'react'
import Accordion from './components/Accordion'

const items = [
  {
    title: 'What is React',
    content: 'React is a JS framework',
  },
  {
    title: 'Why use React',
    content: 'React is a favorite JS framework among many engineers',
  },
  {
    title: 'How dow you use React',
    content: 'You use React by creating components',
  },
];

export default () => {
  return (
    <div>
      <Accordion items={items}/>
    </div>
  )
}
