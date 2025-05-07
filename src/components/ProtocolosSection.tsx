import React from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Protocol } from "@/lib/types";

interface ProtocolosSectionProps {
  protocols: Protocol[];
}

export default function ProtocolosSection({ protocols }: ProtocolosSectionProps) {
  const { ref, isVisible } = useScrollReveal();

  // Duplicate the protocols for the infinite scrolling effect
  const duplicatedProtocols = [...protocols, ...protocols];

  return (
    <section 
      id="protocolos" 
      className="py-16 px-0 bg-neutral-100 overflow-hidden"
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
              staggerChildren: 0.1
            }
          }
        }}
      >
        <motion.div 
          className="text-center mb-12"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <span className="text-secondary font-semibold">Entidades</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-primary">Protocolos</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
        </motion.div>
        
        <div className="overflow-hidden">
          <div className="flex whitespace-nowrap">
            <div className="animate-scroll inline-flex">
              {protocols.map((protocol, index) => (
                <div 
                  key={`protocol-${index}`}
                  className="flex-shrink-0 w-48 h-24 mx-6 flex items-center justify-center bg-white rounded-lg shadow-sm"
                >
                  {protocol.logo ? (
                    <img 
                      src={protocol.logo} 
                      alt={protocol.name} 
                      className="max-h-12 max-w-32" 
                    />
                  ) : (
                    <span className="text-neutral-400 font-medium">{protocol.name}</span>
                  )}
                </div>
              ))}
            </div>
            <div className="animate-scroll inline-flex" aria-hidden="true">
              {protocols.map((protocol, index) => (
                <div 
                  key={`protocol-duplicate-${index}`}
                  className="flex-shrink-0 w-48 h-24 mx-6 flex items-center justify-center bg-white rounded-lg shadow-sm"
                >
                  {protocol.logo ? (
                    <img 
                      src={protocol.logo} 
                      alt={protocol.name} 
                      className="max-h-12 max-w-32" 
                    />
                  ) : (
                    <span className="text-neutral-400 font-medium">{protocol.name}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
