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
    icon: "BarChart3",
    title: "Consultoria Estratégica",
    description: "Análise e planejamento para crescimento sustentável do seu negócio."
  },
  {
    icon: "DollarSign",
    title: "Gestão Financeira",
    description: "Otimização de recursos e planejamento financeiro eficiente."
  },
  {
    icon: "Users",
    title: "Gestão de Equipes",
    description: "Desenvolvimento de liderança e otimização de desempenho."
  },
  {
    icon: "PieChart",
    title: "Análise de Mercado",
    description: "Pesquisa e identificação de oportunidades no seu setor."
  },
  {
    icon: "Lightbulb",
    title: "Inovação Empresarial",
    description: "Implementação de soluções inovadoras para o seu negócio."
  },
  {
    icon: "MessageSquare",
    title: "Marketing Estratégico",
    description: "Estratégias de comunicação e posicionamento de marca."
  },
  {
    icon: "Briefcase",
    title: "Gestão de Projetos",
    description: "Planejamento e execução eficiente de projetos empresariais."
  },
  {
    icon: "Cpu",
    title: "Transformação Digital",
    description: "Implementação de tecnologias para modernizar seu negócio."
  },
  {
    icon: "Shield",
    title: "Compliance Empresarial",
    description: "Adequação às normas e regulamentações do seu setor."
  }
];

const faqs: FAQ[] = [
  {
    question: "Como funciona o processo de consultoria?",
    answer: "O nosso processo de consultoria inicia-se com uma reunião de diagnóstico gratuita, onde identificamos as necessidades específicas da sua empresa. Em seguida, elaboramos uma proposta personalizada com as soluções mais adequadas. Após a aprovação, desenvolvemos um plano de ação detalhado e acompanhamos a implementação, garantindo resultados efetivos."
  },
  {
    question: "Quais são os custos envolvidos?",
    answer: "Os custos variam de acordo com as necessidades específicas de cada projeto e o escopo dos serviços contratados. Oferecemos diferentes modelos de contratação, desde projetos pontuais até acompanhamento contínuo. Após a reunião inicial gratuita, apresentamos uma proposta comercial detalhada e transparente, sem custos ocultos."
  },
  {
    question: "Quanto tempo dura o processo de consultoria?",
    answer: "A duração depende da complexidade do projeto e dos objetivos estabelecidos. Projetos pontuais podem ser concluídos em algumas semanas, enquanto processos de transformação mais profundos podem estender-se por vários meses. Desenvolvemos um cronograma detalhado no início do projeto, com marcos claros e entregas definidas."
  },
  {
    question: "Como são medidos os resultados?",
    answer: "Definimos indicadores de desempenho (KPIs) específicos para cada projeto, alinhados aos objetivos do cliente. Realizamos avaliações periódicas para monitorar o progresso e fazer ajustes quando necessário. Ao final do projeto, apresentamos um relatório detalhado com os resultados alcançados, comparando com a situação inicial e os objetivos estabelecidos."
  },
  {
    question: "Vocês atendem empresas de qualquer setor ou porte?",
    answer: "Sim, trabalhamos com empresas de todos os portes, desde startups e pequenos negócios até grandes corporações. Nossa equipe conta com especialistas em diversos setores, permitindo-nos oferecer soluções adaptadas às especificidades de cada indústria e às necessidades particulares de cada negócio, independentemente do seu tamanho ou área de atuação."
  }
];

const contacts: ContactPerson[] = [
  {
    name: "Maria Silva",
    role: "Consultora Sênior",
    phone: "+351912345678",
    email: "maria@consultpro.com"
  },
  {
    name: "João Santos",
    role: "Diretor Comercial",
    phone: "+351923456789",
    email: "joao@consultpro.com"
  },
  {
    name: "Ana Oliveira",
    role: "Consultora Financeira",
    phone: "+351934567890",
    email: "ana@consultpro.com"
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
    <div className="min-h-screen flex flex-col">
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
