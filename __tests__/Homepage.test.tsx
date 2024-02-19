import { expect, test, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import Hero from "../app/ui/Home/Hero";

describe("tests landing page components", () => {
  test('tests if header renders properly', () => {
    render(<Hero/>)
    screen.debug()
  })
})