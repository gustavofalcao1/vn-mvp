import React, { useState } from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronDown, Check } from "lucide-react";

export default function QuemSomosSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section 
      id="quem-somos" 
      className="py-20 px-4"
      ref={ref}
    >
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        <motion.div 
          className="text-center mb-16"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <span className="text-secondary font-semibold">Conheça-nos</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-primary">Quem Somos</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <p className="text-lg text-neutral-800 text-center mb-12">
            Somos uma consultoria de referência no mercado, focada em resultados tangíveis para os nossos clientes através de metodologias ágeis e inovadoras.
          </p>

          <Accordion type="single" collapsible className="space-y-4">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <AccordionItem value="missao" className="border border-neutral-200 rounded-xl overflow-hidden bg-white">
                <AccordionTrigger className="px-6 py-4 hover:bg-neutral-50 transition-colors text-left font-semibold">
                  Nossa Missão
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 border-t border-neutral-100">
                  <p className="py-4">
                    Potencializar o crescimento sustentável dos nossos clientes, proporcionando soluções personalizadas que transformam desafios em oportunidades e garantem resultados consistentes.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
            
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <AccordionItem value="visao" className="border border-neutral-200 rounded-xl overflow-hidden bg-white">
                <AccordionTrigger className="px-6 py-4 hover:bg-neutral-50 transition-colors text-left font-semibold">
                  Nossa Visão
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 border-t border-neutral-100">
                  <p className="py-4">
                    Ser reconhecida como a consultoria de referência em inovação e excelência, liderando o mercado com soluções que antecipam tendências e criam valor duradouro para os nossos clientes.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
            
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <AccordionItem value="valores" className="border border-neutral-200 rounded-xl overflow-hidden bg-white">
                <AccordionTrigger className="px-6 py-4 hover:bg-neutral-50 transition-colors text-left font-semibold">
                  Nossos Valores
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 border-t border-neutral-100">
                  <ul className="py-4 space-y-2">
                    <li className="flex items-start gap-2">
                      <Check size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                      <span><strong>Integridade:</strong> Atuamos com transparência e ética em todas as nossas relações.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                      <span><strong>Inovação:</strong> Buscamos constantemente novas soluções e abordagens para os desafios dos nossos clientes.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                      <span><strong>Excelência:</strong> Comprometemo-nos com a qualidade superior em todos os serviços prestados.</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          </Accordion>
        </motion.div>
      </motion.div>
    </section>
  );
}
