import { Navbar } from './Navbar';

export function NavbarContainer() {
  const pages = [
    {
      path: '',
      label: 'Home',
    },
    {
      path: 'products',
      label: 'Canasta Basica',
    },
    {
      path: 'inflation',
      label: 'Datos de inflacion',
    },
  ];

  return <Navbar pages={pages} />;
}
