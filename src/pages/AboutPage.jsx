import React from 'react'

function AboutPage() {
  return (
    <div className="mt-[9vh] fixed w-full flex justify-center ">
      <h1 className=' absolute text-3xl top-2'>Bizning Manzil</h1>
         <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1283.1649663372152!2d60.76452456047192!3d41.48062873901428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfc5004a42e169%3A0x91b84b55c0e870b7!2sFoood%20City!5e0!3m2!1suz!2s!4v1722512242492!5m2!1suz!2s"
        width="100%"
        className='h-[91vh]'
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
        </div>
  )
}

export default AboutPage