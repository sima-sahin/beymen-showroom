import { NavLink } from "react-router-dom";

export default function CategoriesNav() {
  // Tekrar eden sınıfları kolay okumak için bir değişkende tutabiliriz.
  const baseClasses = `
   relative
  inline-flex
  pb-4
  hover:text-primary
  after:content-['']
  after:absolute
  after:bottom-0
  after:left-1/2
  after:-translate-x-1/2
  after:h-[2.5px]
  after:bg-black
  after:transition-all
  after:duration-300
  `;

  return (
    <nav className="flex overflow-x-auto pt-4 text-md items-center justify-evenly">
      <NavLink
        to="/giyim"
        className={({ isActive }) =>
          isActive
            ? // Aktif link
              `${baseClasses} after:w-[50%]`
            : // Pasif link
              `${baseClasses} after:w-0 hover:after:w-[50%]`
        }
      >
        Giyim
      </NavLink>

      <NavLink
        to="/canta"
        className={({ isActive }) =>
          isActive
            ? `${baseClasses} after:w-24`
            : `${baseClasses} after:w-0 hover:after:w-24`
        }
      >
        Çanta
      </NavLink>

      <NavLink
        to="/ayakkabi"
        className={({ isActive }) =>
          isActive
            ? `${baseClasses} after:w-24`
            : `${baseClasses} after:w-0 hover:after:w-24`
        }
      >
        Ayakkabı
      </NavLink>

      <NavLink
        to="/aksesuar"
        className={({ isActive }) =>
          isActive
            ? `${baseClasses} after:w-24`
            : `${baseClasses} after:w-0 hover:after:w-24`
        }
      >
        Aksesuar
      </NavLink>

      <NavLink
        to="/cok-satanlar"
        className={({ isActive }) =>
          isActive
            ? `${baseClasses} after:w-24`
            : `${baseClasses} after:w-0 hover:after:w-24`
        }
      >
        Çok Satanlar
      </NavLink>

      <NavLink
        to="/en-yeniler"
        className={({ isActive }) =>
          isActive
            ? `${baseClasses} after:w-24`
            : `${baseClasses} after:w-0 hover:after:w-24`
        }
>
        En Yeniler
      </NavLink>

      <NavLink
        to="/outlet"
        className={({ isActive }) =>
          isActive
            ? `${baseClasses} after:w-24`
            : `${baseClasses} after:w-0 hover:after:w-24`
        }
      >
        Outlet
      </NavLink>

      <NavLink
        to="/reborn"
        className={({ isActive }) =>
          isActive
            ? `${baseClasses} after:w-24`
            : `${baseClasses} after:w-0 hover:after:w-24`
        }
      >
        Reborn
      </NavLink>
    </nav>
  );
}
