import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Contato | Fale conosco",
  description: "Sistema Online de Gestão Comercial, com NF-e, NFS-e, Controle de Estoque, Controle de Venda, Acompanhamento de NF-e, Sistema emissão Nota Fiscal Eletrônica. ",
  
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
