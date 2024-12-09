"use client";
import email from "@/public/contact_email.jpg";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import SectionHeading from "./components/SectionHeading";
import * as data from "./data";
import Form from "./components/Form";
import Link from "next/link";
import { contactLinks } from "./data";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactSection() {
  return (
    <>
      <div className="text-sm">
        <SectionHeading buttonVisibility={false} image={data.contactTitleImage}>
          {data.contactTitle}
        </SectionHeading>

        <div className="mt-8 flex flex-col md:flex-row justify-between gap-9">
          <div className="">
            <ContactButton
              href="mailto:ashishsaha.software@gmail.com"
              image={email}
            >
              Email: ashishsaha.software@gmail.com
            </ContactButton>

            <div className="grid grid-cols-2 gap-x-16 gap-y-9 mt-9">
              {contactLinks.map((contact, index) => (
                <ContactButton
                  key={index}
                  image={contact.image}
                  href={contact.href}
                >
                  {contact.label}
                </ContactButton>
              ))}
            </div>
          </div>

          <Form
            handleSubmit={async (formData) => {
              console.log(formData);

              try {
                const response = await fetch("/api/sendEmail", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(formData),
                });

                const result = await response.json();
                if (response.ok) {
                  toast.success("Message sent successfully!");
                } else {
                  toast.error(`Failed to send message: ${result.error}`);
                }
              } catch (error) {
                console.error("Error:", error);
                toast.error("Failed to send message. Please try again.");
              }
            }}
          />
        </div>
      </div>

      <ToastContainer />
    </>
  );
}

export default ContactSection;

function ContactButton({
  image,
  children,
  href,
}: {
  image: StaticImageData;
  children: ReactNode;
  href: string;
}) {
  return (
    <>
      <Link
        target="_blank"
        href={href}
        className="flex justify-start items-center gap-x-3 opacity-70 hover:opacity-100 hover:-translate-y-1 transition"
      >
        <Image src={image} className="size-6 " alt={"social"} />
        {children}
      </Link>
    </>
  );
}
