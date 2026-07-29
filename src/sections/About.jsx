import { aboutData, skillGroups } from "../data/content";


export default function About() {

  return (

    <section
      id="about"
      className="
        bg-[#faf5eb]
        py-24
      "
    >

      <div
        className="
          mx-auto
          max-w-7xl
          px-6
        "
      >


        {/* Header */}

        <div className="mb-16 text-center">

          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.35em]
              text-amber-700
            "
          >
            About Me
          </p>


          <h2
            className="
              mt-3
              text-4xl
              font-bold
              text-stone-900
            "
          >
            Discover My Journey
          </h2>


          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-stone-600
            "
          >
            Passionate software engineer focused on building modern,
            secure and scalable digital solutions.
          </p>


        </div>






        {/* Main Card */}


        <div
          className="
            grid
            gap-12
            rounded-[2.5rem]
            border
            border-stone-200
            bg-white/80
            p-8
            shadow-[0_20px_60px_rgba(120,92,52,0.08)]
            lg:grid-cols-2
            lg:p-12
          "
        >




          {/* LEFT SIDE */}



          <div>


            {/* Profile Image */}


            <div
              className="
                flex
                justify-center
              "
            >

              <div
                className="
                  overflow-hidden
                  rounded-[2rem]
                  border-8
                  border-white
                  shadow-xl
                "
              >

                <img

                  src="/profile.png"

                  alt={aboutData.name}

                  className="
                    h-80
                    w-80
                    object-cover
                  "

                />

              </div>


            </div>







            {/* Technical Skills */}



            <div className="mt-10">


              <h3
                className="
                  mb-6
                  text-xl
                  font-bold
                  text-stone-900
                "
              >
                Technical Skills
              </h3>




              <div
                className="
                  grid
                  grid-cols-2
                  gap-3
                "
              >


                {
                  skillGroups.map((skill)=>(


                    <div

                      key={skill.name}

                      className="
                        rounded-2xl
                        border
                        border-stone-200
                        bg-[#f7f1e4]
                        px-4
                        py-3
                        text-center
                        text-sm
                        font-medium
                        text-stone-700
                        transition
                        hover:-translate-y-1
                        hover:shadow-md
                      "

                    >

                      {skill.name}


                    </div>


                  ))
                }


              </div>


            </div>




          </div>









          {/* RIGHT SIDE */}



          <div
            className="
              flex
              flex-col
              justify-center
            "
          >



            <h3
              className="
                text-3xl
                font-bold
                text-stone-900
              "
            >

              Hello, I'm {aboutData.name} 👋

            </h3>





            <p
              className="
                mt-6
                leading-8
                text-stone-600
              "
            >

              {aboutData.description}

            </p>





            <p
              className="
                mt-5
                leading-8
                text-stone-600
              "
            >

              During my academic journey, I developed strong experience
              in full-stack development, databases, cybersecurity and
              artificial intelligence. I enjoy transforming ideas into
              reliable and scalable software solutions.

            </p>






            <p
              className="
                mt-5
                leading-8
                text-stone-600
              "
            >

              My objective is to join innovative teams where I can
              contribute my technical knowledge, solve real-world
              problems and continuously improve my skills.

            </p>







            {/* Education */}



            <div
              className="
                mt-8
                rounded-2xl
                bg-[#f7f1e4]
                p-6
                border
                border-stone-200
              "
            >

              <h4
                className="
                  font-bold
                  text-stone-900
                "
              >
                Education
              </h4>


              <p
                className="
                  mt-3
                  text-stone-600
                "
              >

                🎓 Bachelor's Degree in Software Engineering and
                Information Systems

              </p>


            </div>








            {/* Interests */}



            <div className="mt-8">


              <h4
                className="
                  font-bold
                  text-stone-900
                "
              >
                Interests
              </h4>




              <div
                className="
                  mt-4
                  flex
                  flex-wrap
                  gap-3
                "
              >

                {
                  aboutData.interests?.map((item)=>(


                    <span

                      key={item}

                      className="
                        rounded-full
                        bg-stone-100
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-stone-700
                        border
                        border-stone-200
                      "

                    >

                      {item}


                    </span>


                  ))
                }


              </div>


            </div>





          </div>




        </div>



      </div>


    </section>

  );

}