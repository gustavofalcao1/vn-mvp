import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import QuemSomosSection from "@/components/QuemSomosSection";
import OQueFazemosSection from "@/components/OQueFazemosSection";
import ServicosSection from "@/components/ServicosSection";
import ParceirosSection from "@/components/ParceirosSection";
import ProtocolosSection from "@/components/ProtocolosSection";
import EstamosAquiSection from "@/components/EstamosAquiSection";
import FAQSection from "@/components/FAQSection";
import ImpactSection from "@/components/ImpactSection";
import Footer from "@/components/Footer";
import { Service, FAQ, ContactPerson, PartnerLogo, Protocol } from "@/lib/types";
import { apiRequest } from "@/lib/queryClient";

const services: Service[] = [
  {
    icon: "House",
    title: "Crédito habitação",
    description: "Análise e planejamento para crescimento sustentável do seu negócio."
  },
  {
    icon: "RefreshCw",
    title: "Transferência de crédito",
    description: "Otimização de recursos e planejamento financeiro eficiente."
  },
  {
    icon: "PiggyBank",
    title: "Crédito pessoal",
    description: "Desenvolvimento de liderança e otimização de desempenho."
  },
  {
    icon: "Car",
    title: "Crédito automóvel",
    description: "Pesquisa e identificação de oportunidades no seu setor."
  },
  {
    icon: "HandCoins",
    title: "Crédito consolidado",
    description: "Implementação de soluções inovadoras para o seu negócio."
  },
  {
    icon: "HardHat",
    title: "Crédito para obras",
    description: "Estratégias de comunicação e posicionamento de marca."
  },
  {
    icon: "Hammer",
    title: "Autoconstrução",
    description: "Planejamento e execução eficiente de projetos empresariais."
  },
  {
    icon: "MapPinned",
    title: "Aquisição de terreno",
    description: "Implementação de tecnologias para modernizar seu negócio."
  },
  {
    icon: "CreditCard",
    title: "Cartões de crédito",
    description: "Adequação às normas e regulamentações do seu setor."
  }
];

const faqs: FAQ[] = [
  {
    question: "Tenho de pagar pelo vosso serviço?",
    answer: "Não. O nosso serviço é totalmente gratuito para ti. Atuamos segundo o artigo 46.º do Decreto-Lei 81-C/2017."
  },
  {
    question: "A Vista Nova é um banco?",
    answer: "Não. Somos uma empresa de intermediação de crédito, registada e autorizada pelo Banco de Portugal com o nº 2543."
  },
  {
    question: "Posso confiar nas propostas que me apresentam?",
    answer: "Sim. A nossa missão é aconselhar de forma clara e isenta, com base no teu perfil e nos nossos 13 parceiros."
  },
  {
    question: "Sou obrigado a aceitar a proposta que me apresentarem?",
    answer: "Não. A decisão é sempre tua. A Vista Nova apresenta, compara e aconselha, mas nunca pressiona."
  },
  {
    question: "Ajudam mesmo depois da contratação do crédito?",
    answer: "Sim. Fazemos acompanhamento pós-escritura. Estamos contigo até depois do contrato assinado."
  },
  {
    question: "Com que bancos e instituições trabalham?",
    answer: "Trabalhamos com 13 bancos e financeiras reconhecidas em Portugal. Podes ver todos na secção “Parceiros”."
  }
];

const contacts: ContactPerson[] = [
  {
    name: "Jorge Veríssimo",
    role: "Diretor",
    phone: "+351965091853",
    email: "jverissimo@vistanova.pt"
  },
  {
    name: "Ágatha Santos",
    role: "Gestora Processual",
    phone: "+351924967148",
    email: "agathasantos@vistanova.pt"
  },
  {
    name: "Gabriela Almeida",
    role: "Marketing",
    phone: "+351999999999",
    email: "gabriela@vistanova.pt"
  }
];

const partnerLogos: PartnerLogo[] = [
  { name: "PARCEIRO 1" },
  { name: "PARCEIRO 2" },
  { name: "PARCEIRO 3" },
  { name: "PARCEIRO 4" },
  { name: "PARCEIRO 5" },
  { name: "PARCEIRO 6" },
  { name: "PARCEIRO 7" },
  { name: "PARCEIRO 8" },
  { name: "PARCEIRO 9" },
  { name: "PARCEIRO 10" }
];

const protocols: Protocol[] = [
  { name: "PROTOCOLO 1" },
  { name: "PROTOCOLO 2" },
  { name: "PROTOCOLO 3" },
  { name: "PROTOCOLO 4" },
  { name: "PROTOCOLO 5" },
  { name: "PROTOCOLO 6" }
];

export default function Home() {
  const handleNewsletterSubmit = async (data: { email: string; name: string; consent: boolean }) => {
    try {
      await apiRequest("POST", "/api/newsletter", data);
      return { success: true };
    } catch (error) {
      console.error("Error submitting newsletter form:", error);
      return { success: false, error };
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden flex flex-col">
      <Header />
      
      <main>
        <HeroSection />
        <QuemSomosSection />
        <OQueFazemosSection />
        <ServicosSection services={services} />
        <ParceirosSection partners={partnerLogos} />
        <ProtocolosSection protocols={protocols} />
        <EstamosAquiSection contacts={contacts} onNewsletterSubmit={handleNewsletterSubmit} />
        <FAQSection faqs={faqs} />
        <ImpactSection />
      </main>
      
      <Footer />
    </div>
  );
}
