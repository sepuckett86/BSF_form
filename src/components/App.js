import React from 'react';
import Form from './Form';

export default function App() {
  return (
    <>
      <h1>Biology of Skin Foundation Online Giving Page</h1>
      <p>Thank you for supporting the Biology of Skin Foundation and the Montagna Symposium.</p>
      <p>This form is for online giving and will direct you towards Paypal.</p>
      <p>Please note that 2.2% of your donation will go towards Paypal transaction fees. To avoid these fees, you may send a check or perform a wire transfer, as described on the <a href="https://biologyofskinfoundation.org/founder.html">Become a Founder</a> page.</p>
      <Form />
    </>
  );
}
