import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'

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

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'The Color Blue',
    value: 'blue',
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Dropdown selected={selected}
                options={options}
                onSelectedChange={setSelected}/>
    </div>
  )
}
