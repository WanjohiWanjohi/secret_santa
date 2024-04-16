"use client"; 

import { useState } from 'react'
import { Listbox } from '@headlessui/react'

const people = [
  { id: 1, name: 'Perpetual Wangui', unavailable: false },
  { id: 2, name: 'Wamuyu Wanjoh', unavailable: false },
  { id: 3, name: 'Karugu Wanjohi', unavailable: false },
  { id: 4, name: 'Wanja Kanyi', unavailable: false },
  { id: 5, name: 'Grace Wambura Kanyi', unavailable: false },
  { id: 6, name: 'Joseph Kanyi', unavailable: false },
  { id: 7, name: 'Charles Nathaniel Kanyi', unavailable: false },
  { id: 8, name: 'Patricia Wamaitha', unavailable: false },
  { id: 9, name: 'Rhoda Wamaitha', unavailable: false },
  { id: 10, name: 'Wanjiku Mburu', unavailable: false },
  { id: 11, name: 'Wanjeri Maina', unavailable: false },
  { id: 12, name: 'Timothy Maina', unavailable: false },
  { id: 13, name: 'Nyambura Maina', unavailable: false },
  { id: 14, name: 'Jennifer Maina', unavailable: false },
  { id: 15, name: 'Talya Ngoiri', unavailable: false },
]

export function MyListbox() {
  const [selectedPerson, setSelectedPerson] = useState(people[0])

  return (
    <Listbox value={selectedPerson} onChange={setSelectedPerson}>
      <Listbox.Button>{selectedPerson.name}</Listbox.Button>
      <Listbox.Options>
        {people.map((person) => (
          <Listbox.Option
            key={person.id}
            value={person}
            disabled={person.unavailable}
          >
            {person.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}