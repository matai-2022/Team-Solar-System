/**
 * @jest-environment jsdom
 */

import React from 'react'
import { screen } from '@testing-library/react'
import Navbar from './Navbar'
import { renderWithRedux } from './test-utils'

describe('Nav bar', () => {
  it('renders 1 link', () => {
    renderWithRedux(<Navbar />, {
      initialEntries: ['/solarsystem'],
      route: '/solarsystem',
      initialState: {
        pause: false,
        planet: '',
      },
    })
    const link = screen.getAllByRole('link')
    expect(link).toHaveLength(1)
    expect(link[0].textContent).toMatch(/Home/i)
  })

  it('renders 10 buttons', () => {
    renderWithRedux(<Navbar />, {
      initialEntries: ['/solarsystem'],
      route: '/solarsystem',
      initialState: {
        pause: false,
        planet: '',
      },
    })
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(10)
    expect(buttons[0].textContent).toMatch('SUN')
  })
})
