import React from 'react'
import TitelandSub from '../../../shared/titelandSub'
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './chackOutFrom';

console.log(import.meta.env.VITE_PUBLIC_KEY_GETWAYE)
const stripePromise = loadStripe(import.meta.env.VITE_PUBLIC_KEY_GETWAYE);
const PaymentPage = () => {
  return (
    <div>
      <TitelandSub heading="----At a Glance----" subtitel="Payment History"></TitelandSub>
      <Elements stripe={stripePromise}>
        <CheckOutForm></CheckOutForm>
      </Elements>
    </div>
  )
}

export default PaymentPage
