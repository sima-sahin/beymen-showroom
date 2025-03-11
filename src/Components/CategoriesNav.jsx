import { NavLink } from "react-router-dom";

export default function CategoriesNav() {
  // Tekrar eden sınıfları kolay okumak için bir değişkende tutabiliriz.
  const baseClasses = `
    relative
    pb-1
    hover:text-primary
    after:content-['']
    after:absolute
    after:bottom-0
    after:left-0
    after:h-[2px]
    after:bg-black
    after:transition-width
    after:duration-300
  `;

  return (
    <nav className="flex overflow-x-auto space-x-4 py-4 text-md items-center justify-evenly">
      <NavLink
        to="/giyim"
        className={({ isActive }) =>
          isActive
            ? // Aktif link
              `${baseClasses} after:w-full`
            : // Pasif link
              `${baseClasses} after:w-0 hover:after:w-full`
        }
      >
        Giyim
      </NavLink>

      <NavLink
        to="/canta"
        className={({ isActive }) =>
          isActive
            ? `${baseClasses} after:w-full`
            : `${baseClasses} after:w-0 hover:after:w-full`
        }
      >
        Çanta
      </NavLink>

      <NavLink
        to="/ayakkabi"
        className={({ isActive }) =>
          isActive
            ? `${baseClasses} after:w-full`
            : `${baseClasses} after:w-0 hover:after:w-full`
        }
      >
        Ayakkabı
      </NavLink>

      <NavLink
        to="/aksesuar"
        className={({ isActive }) =>
          isActive
            ? `${baseClasses} after:w-full`
            : `${baseClasses} after:w-0 hover:after:w-full`
        }
      >
        Aksesuar
      </NavLink>

      <NavLink
        to="/cok-satanlar"
        className={({ isActive }) =>
          isActive
            ? `${baseClasses} after:w-full`
            : `${baseClasses} after:w-0 hover:after:w-full`
        }
      >
        Çok Satanlar
      </NavLink>

      <NavLink
        to="/en-yeniler"
        className={({ isActive }) =>
          isActive
            ? `${baseClasses} after:w-full`
            : `${baseClasses} after:w-0 hover:after:w-full`
        }
>
        En Yeniler
      </NavLink>

      <NavLink
        to="/outlet"
        className={({ isActive }) =>
          isActive
            ? `${baseClasses} after:w-full`
            : `${baseClasses} after:w-0 hover:after:w-full`
        }
      >
        Outlet
      </NavLink>

      <NavLink
        to="/reborn"
        className={({ isActive }) =>
          isActive
            ? `${baseClasses} after:w-full`
            : `${baseClasses} after:w-0 hover:after:w-full`
        }
      >
        Reborn
      </NavLink>
    </nav>
  );
}
