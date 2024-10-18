import About from "@/components/About";
import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PosVenda - Simplifique a Gestão do seu Negócio",
  description: "Sistema Online de Gestão Comercial, com NF-e, NFS-e, Controle de Estoque, Controle de Venda, Acompanhamento de NF-e, Sistema emissão Nota Fiscal Eletrônica. ",
};

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main>
      <ScrollUp />
      <Hero />
      <Features />
      <About />
      <CallToAction />

      
      

      
      <Contact />

    </main>
  );
  

  /* 
  git init -b main
  git add .
  git commit -m 'firt commit'
  git remote add origin https://github.com/jhonfelix/posvenda.git
  git push -f origin main
  
  <Faq />
  <Testimonials />
  <Clients />
    <HomeBlogSection posts={posts} />
          <Team />
                <Pricing />
  */
}
