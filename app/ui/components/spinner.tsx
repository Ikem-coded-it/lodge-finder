"use client"
import { ColorRing } from "react-loader-spinner";

const ColorRingSpinner = ({size}: {size?: number}) => (
  <ColorRing
  visible={true}
  height={size || 50}
  width={size || 50}
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />
)

export default ColorRingSpinner