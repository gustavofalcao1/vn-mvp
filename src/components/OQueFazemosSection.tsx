import React from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Zap } from "lucide-react";

export default function OQueFazemosSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section 
      id="o-que-fazemos" 
      className="py-20 px-14 bg-white"
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
            className="lg:w-[35%]"
            variants={{
              hidden: { opacity: 0, x: 0 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1615827133505-0eacaf28c33a?q=80&w=2454&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Nossa equipe em ação" 
              className="
                rounded-2xl shadow-lg
                lg:w-full
                w-[500px]
                h-[250px] object-cover         // default: corta e fixa a altura
                lg:h-auto lg:object-contain    // em telas grandes, mostra natural
              "
            />
          </motion.div>
          
          <motion.div 
            className="lg:w-[65%] space-y-8"
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
              Comparamos, aconselhamos e negociamos por ti.<br />
              Mas mais do que isso: acompanhamos-te em cada passo, desde o primeiro contacto até muito depois da escritura.<br />
              O nosso compromisso é contigo!

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
                  <h3 className="text-xl font-semibold text-primary">Não vendendemos crédito</h3>
                  <p className="mt-2 text-neutral-700">O nosso trabalho não é vender crédito, é analisar o teu perfil financeiro, perceber a tua capacidade de endividamento, e encontrar, junto dos nossos parceiros bancários, a melhor solução para ti, adaptada às tuas necessidades e condições.</p>
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
                  <h3 className="text-xl font-semibold text-primary">E sabe o melhor?</h3>
                  <p className="mt-2 text-neutral-700">Todo este serviço, apoio e dedicação é totalmente gratuito para ti.<br />
                  Sim, leste bem: não pagas nada.</p>
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
                  <h3 className="text-xl font-semibold text-primary">Como é possível?</h3>
                  <p className="mt-2 text-neutral-700">Atuamos ao abrigo do artigo 46.º do Decreto-Lei n.º 81-C/2017, de 7 de julho, que define o regime jurídico dos intermediários de crédito.</p>
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
                  <h4 className="font-semibold">Parece bom demais para ser verdade?</h4>
                  <p className="text-sm text-neutral-700 mt-1">Nós chamamos-lhe… transparência.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
