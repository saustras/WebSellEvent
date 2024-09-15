import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './layout/layout'
import EventPromotion from './components/EventPromotion/EventPromotion'
import PrizeInfo from './components/PrizeInfo/PrizeInfo'
import { createGlobalStyle } from 'styled-components'
import TicketPurchase from './components/TicketPurchase/TicketPurchase'
import Premiados from './components/Premiados/Premiados'
import FooterBar from './components/Foobar/Foobar'
import PurchaseOptions from './components/PurchaseOptions/PurchaseOptions'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');

  body {
  font-family: 'DM Sans', sans-serif !important;
  }
`;

const App = () => {
  const homeRef = useRef(null);
  const verifierRef = useRef(null);
  const contactRef = useRef(null);
  const ticketListRef = useRef(null);

  return (
    <>
    <GlobalStyle />
    <Layout
      homeRef={homeRef}
      verifierRef={verifierRef}
      contactRef={contactRef}
      ticketListRef={ticketListRef}
    />
      <div ref={homeRef} style={{ height: '100vh' }}>
        <PrizeInfo />
        <Premiados />
        {/* <TicketPurchase/> */}
        <PurchaseOptions />
        <FooterBar/>
      </div>

    </>
  );
};

export default App
