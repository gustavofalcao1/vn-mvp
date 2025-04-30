import React from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Zap } from "lucide-react";

export default function OQueFazemosSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section 
      id="o-que-fazemos" 
      className="py-20 px-4 bg-white"
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
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Nossa equipe em ação" 
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 space-y-8"
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <span className="text-secondary font-semibold">Nossa Abordagem</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 text-primary">O Que Fazemos</h2>
            </motion.div>
            
            <motion.p 
              className="text-lg"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              Oferecemos consultoria especializada para empresas de todos os portes, desenvolvendo soluções personalizadas para cada desafio.
            </motion.p>
            
            <motion.div 
              className="space-y-6"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              <motion.div 
                className="flex gap-4"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">01</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary">Análise</h3>
                  <p className="mt-2 text-neutral-700">Diagnóstico detalhado do seu negócio, identificando pontos fortes e oportunidades de melhoria.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex gap-4"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">02</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary">Aconselhamento</h3>
                  <p className="mt-2 text-neutral-700">Elaboração de estratégias direcionadas para os objetivos específicos da sua empresa.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex gap-4"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">03</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary">Acompanhamento</h3>
                  <p className="mt-2 text-neutral-700">Suporte contínuo durante a implementação das estratégias, garantindo resultados consistentes.</p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="bg-neutral-100 rounded-xl p-6 border-l-4 border-secondary"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="flex items-start gap-3">
                <Zap className="h-6 w-6 text-secondary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Primeira Consulta Gratuita</h4>
                  <p className="text-sm text-neutral-700 mt-1">Oferecemos uma avaliação inicial sem compromisso para entender as necessidades do seu negócio.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
