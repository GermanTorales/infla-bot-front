import { Navbar } from './Navbar';

export function NavbarContainer() {
  const pages = [
    {
      path: '/infla-bot-front',
      label: 'Home',
    },
    {
      path: '/infla-bot-front/products',
      label: 'Canasta Basica',
    },
    {
      path: '/infla-bot-front/inflation',
      label: 'Datos de inflacion',
    },
  ];

  return <Navbar pages={pages} />;
}
