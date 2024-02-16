import { expect, test, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from '../app/page';
import Hero from "../app/ui/Home/Hero";
import Hot from "../app/ui/Home/Hot";
import Features from "../app/ui/Home/Features";
import Location from "../app/ui/Home/Location";
import OurStory from "../app/ui/Home/OurStory";
import Testimonial from "../app/ui/Home/Testimonial";

describe("tests landing page components", () => {
  test('tests if header renders properly', () => {
    render(<Hero/>)
    screen.debug()
  })
})