import React from 'react'
import Jumbotron from '../components/jumbotron'

export default function Home() {
  return (
    <Jumbotron.Container>
      <Jumbotron.Title>I am the title</Jumbotron.Title>
      <Jumbotron.SubTitle>And I'm the subtitle</Jumbotron.SubTitle>
    </Jumbotron.Container>
  )
}
