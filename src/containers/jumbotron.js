import React from 'react'
import jumboData from '../fixtures/jumbo.json'
import Jumbotron from '../components/jumbotron'

export function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumboData.map(item => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Title>{item.title}</Jumbotron.Title>
          <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          <Jumbotron.Image src={item.image} alt={item.alt} />
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  )
}
