import { useState } from "react";
import { navItems } from "../data/content";
import { Menu, X } from "lucide-react";


export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);


  const closeMenu = () => {
    setIsOpen(false);
  };


  return (

    <header
      className="
        fixed 
        top-0 
        left-0 
        w-full 
        z-50
        border-b 
        border-stone-200/50
        bg-[#f7f1e4]/80
        backdrop-blur-xl
      "
    >


      <div
        className="
          mx-auto 
          max-w-7xl
          flex 
          items-center 
          justify-between
          px-6 
          py-4
        "
      >


        {/* Logo */}

        <a
          href="#home"
          className="
            group 
            flex 
            items-center 
            gap-3
            rounded-full
            border 
            border-stone-200
            bg-white/70
            px-5 
            py-2
            shadow-sm
            transition-all 
            duration-300
            hover:-translate-y-1
          "
        >

          <span
            className="
              w-3 
              h-3
              rounded-full
              bg-amber-600
              group-hover:scale-125
              transition
            "
          />


          <span
            className="
              text-sm
              font-bold
              tracking-[0.25em]
              uppercase
              text-stone-900
            "
          >
            Rahma.dev
          </span>


        </a>





        {/* Desktop Navigation */}

        <nav
          className="
            hidden 
            md:flex
            items-center
            gap-2
          "
        >

          {navItems.map((item) => (

            <a
              key={item.href}
              href={item.href}

              className="
                relative
                rounded-full
                px-5 
                py-2
                text-sm
                font-medium
                text-stone-600
                transition-all
                duration-300
                hover:bg-white
                hover:text-stone-950

                after:absolute
                after:left-1/2
                after:bottom-1
                after:h-[2px]
                after:w-0
                after:bg-amber-600
                after:transition-all
                after:-translate-x-1/2

                hover:after:w-1/2
              "
            >

              {item.label}

            </a>

          ))}


        </nav>






        {/* Mobile button */}

        <button
          onClick={() => setIsOpen(!isOpen)}

          aria-label="Toggle menu"

          className="
            md:hidden
            rounded-full
            border
            border-stone-200
            bg-white/70
            p-2
          "
        >

          {
            isOpen 
            ? <X size={22}/>
            : <Menu size={22}/>
          }


        </button>



      </div>







      {/* Mobile menu */}

      {
        isOpen && (

          <nav
            className="
              md:hidden
              mx-6 
              mb-4
              rounded-3xl
              border
              border-stone-200
              bg-white/90
              p-4
              shadow-lg
            "
          >

            {
              navItems.map((item)=>(

                <a
                  key={item.href}

                  href={item.href}

                  onClick={closeMenu}

                  className="
                    block
                    rounded-xl
                    px-4
                    py-3
                    text-stone-700
                    transition
                    hover:bg-[#f7f1e4]
                    hover:text-stone-950
                  "
                >

                  {item.label}

                </a>

              ))
            }


          </nav>

        )
      }


    </header>

  );
}