import Breadcrumb from "@/components/Common/Breadcrumb";
import Faq from "@/components/Faq";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Planos | Conheça nossos planos",
  description: "PosVenda planos do melhor sistema de gestão recomendados para a sua empresa",
};

const PricingPage = () => {
  return (
    <>
      
      <Pricing />
      
    </>
  );
};
//<Breadcrumb pageName="Conheça nossos planos" />
//<Faq />
export default PricingPage;
