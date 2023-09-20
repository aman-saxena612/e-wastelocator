import { Card, Button, Col, Row, Container, Modal } from 'react-bootstrap'
import React, { useState } from 'react'
import Card1 from './Card1';
import image1 from '../Images/policy1.jpg'
import image2 from '../Images/policy2.jpg'
import image3 from '../Images/policy3.jpg'

const data = [
  {
    title: 'e-Waste Management-Xiaomi',
    shortDescription: 'Xiaomi (Mi) India had initiated an e-waste recycling program in India to promote responsible disposal and recycling of electronic waste.',
    description: `Xiaomi had set up authorized e-waste collection centers across various cities in India. Customers could drop off their old and unused electronic devices, including Xiaomi products, at these collection points.
    Xiaomi's e-waste recycling program was not limited to their own products. They accepted electronic waste from various brands, encouraging responsible disposal of all types of electronic devices.
    The collected electronic waste was processed by authorized recycling partners following environmentally responsible recycling methods. This ensures that the materials are reused and recycled in an eco-friendly manner.
    Xiaomi conducted awareness campaigns and promotions to educate customers about the importance of recycling e-waste`,
    image: image1
  },
  {
    title: 'Tokyo 2022 Medal Project',
    shortDescription: ` The project aimed to promote sustainability and environmental awareness by using recycled materials to produce the medals that were awarded to athletes.
    `,
    description: `This was a landmark recycling initiative that ensured that each medal has been molded entirely from metal extracted from recycled consumer electronics. This was just a part of Japan’s goal of making the 2020 Olympics the “most environmentally friendly and sustainable Games so far,”

    “A total of 78,985 tons of discarded devices were collected,” the TOGOC statement reads, “a haul which included approximately 6.21 million used mobile phones, along with digital cameras, handheld games and laptops, all of which were then classified, dismantled and melted down by highly trained contractors.”

    This means that the goal of collecting 30.3kg of gold, 4,100kg of silver and 2,700kg of bronze were reached by the time the collection cycle closed on March 31, 2019.`,
    image: image2
  },
  {
    title: 'Sony e-Waste Recycling',
    shortDescription: `Sony is a well-known electronics manufacturer that has implemented various e-waste recycling and sustainability initiatives over the years.
    `,
    description: `Sony has a global recycling program that promotes responsible disposal and recycling of electronic products. This program is designed to reduce the environmental impact of electronic waste by recycling materials from old Sony products.
    Sony often offers take-back and recycling programs that allow consumers to return their old Sony electronic devices, including televisions, audio equipment, cameras, and more. Sony may partner with recycling organizations and facilities to properly dispose of and recycle these devices.
    Sony incorporates eco-friendly design principles into its products to minimize environmental impact. This includes using recycled materials, reducing energy consumption, and ensuring ease of recycling when products reach the end of their life cycle.`,
    image: image3
  },
]

const AboutUs = () => {
  return (
    <div className='' style={{ flex: 1, marginTop:'10px' }}>
      <Container className='col-12 d-flex flex-wrap'>
          {
            data?.map((item, index) => (
              <Card1
                title={item?.title}
                description={item?.description}
                shortDescription={item?.shortDescription?.slice(0,100)+'...'}
                image={item?.image}
                key={index}
              />
            ))
          }
      </Container>
    </div>
  )
}

export default AboutUs
