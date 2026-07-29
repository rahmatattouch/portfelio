import { Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { contact } from "../data/content";


export default function Contact() {

  return (

    <section
      id="contact"
      className="bg-[#f7f1e4] py-24"
    >

      <div className="mx-auto max-w-7xl px-6">


        {/* Header */}

        <div className="mb-16 text-center">

          <p className="
            text-sm 
            font-semibold 
            uppercase 
            tracking-[0.35em] 
            text-amber-700
          ">
            Contact
          </p>


          <h2 className="
            mt-3 
            text-4xl 
            font-bold 
            text-stone-900
          ">
            Let's Work Together
          </h2>


          <p className="
            mx-auto 
            mt-5 
            max-w-2xl 
            text-stone-600
          ">
            Whether you have a project, an internship opportunity,
            or simply want to connect, I'd be happy to hear from you.
          </p>


        </div>





        <div className="grid gap-12 lg:grid-cols-2">



          {/* FORM */}

          <div
            className="
              rounded-[2rem]
              border
              border-stone-200
              bg-white
              p-8
              shadow-lg
            "
          >

            <h3 className="
              text-2xl
              font-semibold
              text-stone-900
            ">
              Send Me a Message
            </h3>



            <form

              action="https://formspree.io/f/mojgbwpq"

              method="POST"

              className="mt-8 space-y-6"

            >


              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required

                className="
                  w-full
                  rounded-xl
                  border
                  border-stone-300
                  bg-stone-50
                  px-4
                  py-3
                  outline-none
                  transition
                  focus:border-amber-500
                "
              />



              <input

                type="email"

                name="email"

                placeholder="Your Email"

                required

                className="
                  w-full
                  rounded-xl
                  border
                  border-stone-300
                  bg-stone-50
                  px-4
                  py-3
                  outline-none
                  transition
                  focus:border-amber-500
                "

              />



              <input

                type="text"

                name="subject"

                placeholder="Subject"

                className="
                  w-full
                  rounded-xl
                  border
                  border-stone-300
                  bg-stone-50
                  px-4
                  py-3
                  outline-none
                  transition
                  focus:border-amber-500
                "

              />



              <textarea

                name="message"

                rows="6"

                placeholder="Write your message..."

                required

                className="
                  w-full
                  rounded-xl
                  border
                  border-stone-300
                  bg-stone-50
                  px-4
                  py-3
                  outline-none
                  transition
                  focus:border-amber-500
                "

              />



              <button

                type="submit"

                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-stone-900
                  px-6
                  py-3
                  font-medium
                  text-white
                  transition
                  hover:bg-stone-800
                "

              >

                <Send size={18}/>

                Send Message

              </button>


            </form>


          </div>







          {/* INFORMATION */}


          <div className="flex flex-col justify-center">


            <h3 className="
              text-2xl
              font-semibold
              text-stone-900
            ">
              Get in Touch
            </h3>



            <p className="
              mt-5
              leading-8
              text-stone-600
            ">
              I am always open to discussing new opportunities,
              software development projects, internships,
              collaborations, or simply connecting with people
              who share the same passion for technology.
            </p>





            <div className="mt-10 space-y-5">


              <div className="flex items-center gap-4">

                <Mail className="text-amber-700"/>

                <span>
                  {contact.email}
                </span>

              </div>




              <div className="flex items-center gap-4">

                <MapPin className="text-amber-700"/>

                <span>
                  Tunisia
                </span>

              </div>


            </div>







            {/* Social buttons */}


            <div className="mt-10 flex gap-5">


              <a

                href={contact.github}

                target="_blank"

                rel="noopener noreferrer"

                className="
                  rounded-full
                  bg-white
                  p-4
                  shadow
                  transition
                  hover:-translate-y-1
                "

              >

                <FaGithub size={24}/>

              </a>





              <a

                href={contact.linkedin}

                target="_blank"

                rel="noopener noreferrer"

                className="
                  rounded-full
                  bg-white
                  p-4
                  shadow
                  transition
                  hover:-translate-y-1
                "

              >

                <FaLinkedin size={24}/>

              </a>



            </div>



          </div>



        </div>



      </div>


    </section>

  );

}