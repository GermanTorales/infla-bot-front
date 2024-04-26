import { NavLink } from 'react-router-dom';

export function Navbar({ pages = [] }) {
  return (
    <div className="bg-brand-500 py-5">
      <div className="container mx-auto">
        <div className="flex flex-row">
          {pages.map((item, inx) => (
            <div key={inx} className="px-4">
              <NavLink
                to={`/${item.path}`}
                className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
              >
                <p className="text-white">{item.label}</p>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
