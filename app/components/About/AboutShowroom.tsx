import Image from 'next/image'
import React from 'react'

function AboutShowroom() {
  return (
    <div id="about" className='grid grid-cols-1 md:grid-cols-1'>
      <div>
      <h1 className='text-5xl text-black font-bold m-5'>About</h1>
      <p className='m-5 mb-6'>Welcome to Rent A Car, your ultimate destination for all your car rental needs. Whether you're planning a weekend getaway, a business trip, or simply need a temporary replacement vehicle, we've got you covered with a diverse fleet of vehicles and exceptional customer service.

At Rent A Car, we believe that your journey should be as enjoyable and stress-free as possible. Founded on the principles of trust, reliability, and customer satisfaction, our mission is to provide you with a seamless car rental experience that exceeds your expectations every time. <br /><br />
<span className='text-2xl font-semibold'>Our Story</span><br />


Rent A Car was established in 2024 with a vision to revolutionize the car rental industry. What started as a small fleet of vehicles has grown into a comprehensive network, serving customers across multiple locations. Our dedication to quality and excellence has earned us a reputation as a trusted name in car rentals. <br /> <br />
<span className='text-2xl font-semibold'>Our Fleet</span><br />


We understand that every journey is unique, which is why we offer a wide range of vehicles to suit your specific needs. From compact cars for city driving to spacious SUVs for family trips, and even luxury vehicles for those special occasions, our fleet is meticulously maintained to ensure your safety and comfort. <br /> <br />
<span className='text-2xl font-semibold'>Customer-Centric Approach</span><br />


Our customers are at the heart of everything we do. We pride ourselves on our friendly and knowledgeable staff, who are always ready to assist you with personalized service and expert advice. Whether you need help selecting the right vehicle or have questions about your rental, we're here to make your experience smooth and hassle-free. <br /> <br />
<span className='text-2xl font-semibold'>Innovation and Technology</span><br />


At Rent A Car, we embrace innovation to enhance your rental experience. Our user-friendly website and mobile app make it easy to browse our fleet, make reservations, and manage your bookings on the go. We also offer convenient features such as contactless pick-up and drop-off to ensure your safety and convenience. <br /> <br />
<span className='text-2xl font-semibold'>Sustainability</span><br />


We are committed to sustainability and reducing our environmental impact. Our fleet includes eco-friendly options such as hybrid and electric vehicles, and we continuously strive to implement green practices across our operations. By choosing Rent A Car, you're not only getting a reliable rental but also contributing to a greener future. <br /> <br />
<span className='text-2xl font-semibold'>Community Engagement</span><br />


As a proud member of the community, we believe in giving back and supporting local initiatives. We partner with various organizations and participate in community events to make a positive difference in the areas we serve. <br /><br />
<span className='text-2xl font-semibold'>Join Us on the Road</span><br />


Thank you for considering Rent A Car for your car rental needs. We look forward to being a part of your journey and providing you with an exceptional rental experience. Whether you're exploring new destinations or navigating familiar routes, we're here to ensure that your travels are safe, comfortable, and enjoyable.

Discover the freedom of the open road with Rent A Car. Let's hit the road together!</p>
      </div>

      <div>
        <Image src='/BMW.jpg' alt='hero-image' width={300} height={400} className='w-full object-cover'/> 
      </div>
      
    </div>
  )
}

export default AboutShowroom
