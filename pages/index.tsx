import { CLient } from '@/CLient/CLient';
import { Drawer } from '@/Drawer/Drawer';
import { Footer } from '@/Footer/Footer';
import { Header } from '@/Header/Header';
import { Main } from '@/Main/Main';
import { Portfolio } from '@/Portfolio/Portfolio';
import { Process } from '@/Process/Process';
import { Services } from '@/Services/Services';
import { Testimonals } from '@/Testimonals/Testimonals';

import { useState } from 'react';
export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleOpenDrawer = () => {
    setDrawerOpen(true)
  }
  const handleCloseDrawer = () => {
    setDrawerOpen(false)
  }
  return (
    <>
      <Header handleBurgerClick={handleOpenDrawer} />
      <Drawer open={drawerOpen} handleClose={handleCloseDrawer} />
      <Main />
      <CLient />
      <Services />
      <Process />
      <Portfolio />
      <Testimonals />
      <Footer />

    </>
  );
}

export async function getStaticProps(_contex: any) {
  return {
    props: {},
  }
}