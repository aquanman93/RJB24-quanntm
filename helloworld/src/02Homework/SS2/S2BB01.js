import React from 'react'
import Func from "./SS2BB01-func"
const charbar = [
  {
    text: "BANDWIDTH",
    color1: "darkred",
    colors: "lightred",
    percentage: 20,
  }
]
export default function S2BB01() {
  return (
    <>
    <Func input={charbar}></Func> 
    </>
  )
}
