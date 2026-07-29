import { TypeAnimation } from "react-type-animation";
import {
  ArrowRight,
  Download
} from "lucide-react";


export default function Home() {

  return (

    <section
      id="home"
      className="
      min-h-screen
      flex
      items-center
      overflow-hidden
      bg-[#f7f1e4]
      relative
      px-6
      "
    >


      {/* Background circles */}

      <div
        className="
        absolute
        right-20
        top-32
        w-96
        h-96
        rounded-full
        border
        border-[#c9a66b]
        opacity-30
        animate-pulse
        "
      />


      <div
        className="
        absolute
        right-40
        top-48
        w-64
        h-64
        rounded-full
        border
        border-[#c9a66b]
        opacity-20
        "
      />




      <div
        className="
        max-w-6xl
        mx-auto
        w-full
        flex
        flex-col
        md:flex-row
        items-center
        gap-16
        "
      >



        {/* IMAGE LEFT */}

        <div
          className="
          w-64
          h-64
          md:w-80
          md:h-80
          rounded-full
          p-2
          bg-gradient-to-r
          from-[#c9a66b]
          to-[#8b6f47]
          shadow-2xl
          "
        >

          <img
            src="/profile.png"
            alt="Rahma"
            className="
            w-full
            h-full
            rounded-full
            object-cover
            "
          />

        </div>






        {/* TEXT RIGHT */}

        <div
          className="
          space-y-6
          animate-fadeIn
          "
        >



          <h1
            className="
            text-5xl
            md:text-6xl
            font-bold
            text-[#1b1b1b]
            "
          >

            Hi, I'm{" "}


            <span
              className="
              text-[#8b6f47]
              "
            >


              <TypeAnimation

                sequence={[
                  "Rahma",
                  2000,
                  "a Developer",
                  2000,
                 
                ]}

                wrapper="span"

                speed={50}

                repeat={Infinity}

              />


            </span>


          </h1>






          <p
            className="
            text-xl
            text-gray-700
            "
          >

            Software Engineer

          </p>





          <p
            className="
            max-w-xl
            text-gray-600
            leading-relaxed
            "
          >

            Passionate about building modern web applications,
            creating clean interfaces and developing innovative
            software solutions.

          </p>






          {/* BUTTONS */}


          <div
            className="
            flex
            gap-4
            flex-wrap
            "
          >




            {/* CONTACT BUTTON */}

            <a
              href="#contact"
              className="
              flex
              items-center
              gap-2
              px-6
              py-3
              rounded-full
              bg-[#1b1b1b]
              text-white
              hover:scale-105
              transition-all
              duration-300
              "
            >

              Contact Me

              <ArrowRight size={18}/>


            </a>






            {/* RESUME BUTTON */}


            <a
              href="/mon cv.pdf"
              download
              className="
              flex
              items-center
              gap-2
              px-6
              py-3
              rounded-full
              border
              border-[#8b6f47]
              text-[#8b6f47]
              hover:bg-[#8b6f47]
              hover:text-white
              hover:scale-105
              transition-all
              duration-300
              "
            >

              <Download size={18}/>

              Resume


            </a>



          </div>




        </div>



      </div>



    </section>

  );

}