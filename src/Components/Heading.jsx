import React from 'react'
import "./Heading.css";


export default function Heading(props) {
  return (
    <>
      <div className="heading">
        <h1>{props.title}<span>{props.subTitle}</span></h1>
      </div>
    </>
  )
}
