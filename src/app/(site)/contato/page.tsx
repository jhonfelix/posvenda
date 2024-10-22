import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";


export const metadata: Metadata = {
  title:
    "Contato | Play SaaS Starter Kit and Boilerplate for Next.js",
  description: "This is contact page description",
};

const ContactPage = () => {
  
  return (
    <>
      <Breadcrumb pageName="Contato" />

      <Contact />
    </>
  );
};

export default ContactPage;
