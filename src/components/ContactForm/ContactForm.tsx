"use client";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/email";
import useScrollNavigation from '@/hooks/useScrollNavigation'

const ContactForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    await sendEmail(data);
    alert("Message sent successfully!");
  };
useScrollNavigation()
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-10">
      <input {...register("name")} placeholder="Your Name" className="border p-2 w-full mb-4" />
      <input {...register("email")} type="email" placeholder="Your Email" className="border p-2 w-full mb-4" />
      <textarea {...register("message")} placeholder="Your Message" className="border p-2 w-full mb-4" />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">Send</button>
    </form>
  );
};

export default ContactForm;
