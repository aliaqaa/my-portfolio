"use client";
import { useForm } from "react-hook-form";
import useScrollNavigation from "@/hooks/useScrollNavigation";
import { TfiEmail } from "react-icons/tfi";
import { FaPhone } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

const ContactForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async () => {
   
    alert("Message sent successfully!");
  };
  useScrollNavigation();
  return (
    <div className="flex justify-center gap-10 items-center py-20">
      <div className="flex flex-col text-white gap-5 ">
        <h2 className="text-center m-2 uppercase">Contact with Me</h2>
        <hr />

        <span className="flex items-center gap-x-3">
          <TfiEmail  className="text-3xl"/>
          Ali.tousi77@gmail.com
        </span>
        <span className="flex items-center gap-x-3">
        <FaPhone  className="text-3xl"/>

         +989362432872
        </span>
        <span className="flex items-center gap-x-3">
        <IoLocationOutline  className="text-3xl"/>

          Iran,Mazandaran,Sari
        </span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className=" text-white mt-20">
        <input
          {...register("name")}
          placeholder="Your Name"
          className="border p-2 w-full mb-4 bg-slate-300 text-slate-700 rounded "
        />
        <input
          {...register("email")}
          type="email"
          placeholder="Your Email"
          className="border p-2 w-full mb-4 bg-slate-300 text-slate-700 rounded "
        />
        <textarea
          {...register("message")}
          placeholder="Your Message"
          className="border p-2 w-full mb-4 bg-slate-300 text-slate-700 rounded "
        />
        <button
          type="submit"
          className="bg-slate-500 text-white p-2  flex m-auto px-10 rounded hover:bg-slate-600"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
