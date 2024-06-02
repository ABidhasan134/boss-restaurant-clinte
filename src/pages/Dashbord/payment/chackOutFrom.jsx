import React, { useContext, useEffect, useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import useAxiosSequer from '../../../hooks/useAxiosSequer';
import useCards from '../../../hooks/useCards';
import { AuthContext } from '../../../context/authProvider';
import Swal from 'sweetalert2'

const CheckOutForm = () => {
  const [error, setError] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSequer();
  const [card,refetch] = useCards();
  const [clientSecret, setClientSecret] = useState('');
  const { user } = useContext(AuthContext);
  const [transactionId,setTransactionId] = useState('');

  const totalPrice = card.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure.post('/create-payment-intent', { price: totalPrice })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        })
        .catch((error) => {
          console.error('Error creating payment intent:', error);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (cardElement == null) {
      return;
    }

    // Create payment method
    const { error: paymentMethodError, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (paymentMethodError) {
      console.log('[PaymentMethod Error]', paymentMethodError);
      setError(paymentMethodError.message);
      return;
    } else {
      setError('');
    }

    // Confirm card payment
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          email: user?.email || 'anonymous',
          name: user?.displayName || 'anonymous',
        },
      },
    });

    if (confirmError) {
      console.log('Payment confirmation error:', confirmError);
      setError(confirmError.message);
    } else {
      console.log('Payment successful:', paymentIntent);
      setError('');
    }
    if(paymentIntent.status==='succeeded')
      {
        console.log("Transaction Id", paymentIntent)
        setTransactionId(paymentIntent.id);
        // now send or save it on database
        const payment={
          date: new Date(),//utc date converte by moment js
          email: user?.email,
          name: user?.displayName,
          paymentId: paymentIntent.id,
          itemCardId: card.map((item)=>item._id),
          status: 'pending',
          price: paymentIntent.amount,
        }
        axiosSecure.post('/payments',payment)
        .then((res)=>{
          console.log(res.data);
          if(res.data?.paymentResult?.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `Thank you ${user.displayName} for payment`,
              showConfirmButton: false,
              timer: 1500
            });
          }
        })
        
      }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-5">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button
        disabled={!stripe || !elements}
        className="btn btn-primary my-4"
        type="submit"
      >
        Pay
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {transactionId && <p style={{color: 'green'}}>{`your Transaction id is ${transactionId}`}</p>}
    </form>
    
  );
};

export default CheckOutForm;
