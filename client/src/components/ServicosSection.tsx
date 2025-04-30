import React from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Service } from "@/lib/types";
import { 
  BarChart3, DollarSign, Users, PieChart, 
  Lightbulb, MessageSquare, Briefcase, Cpu, Shield 
} from "lucide-react";

interface ServicosSectionProps {
  services: Service[];
}

export default function ServicosSection({ services }: ServicosSectionProps) {
  const { ref, isVisible } = useScrollReveal();

  const getIcon = (iconName: string) => {
    const props = { className: "h-6 w-6 text-primary" };
    switch (iconName) {
      case "BarChart3": return <BarChart3 {...props} />;
      case "DollarSign": return <DollarSign {...props} />;
      case "Users": return <Users {...props} />;
      case "PieChart": return <PieChart {...props} />;
      case "Lightbulb": return <Lightbulb {...props} />;
      case "MessageSquare": return <MessageSquare {...props} />;
      case "Briefcase": return <Briefcase {...props} />;
      case "Cpu": return <Cpu {...props} />;
      case "Shield": return <Shield {...props} />;
      default: return <Briefcase {...props} />;
    }
  };

  return (
    <section 
      id="servicos" 
      className="py-20 px-4 bg-neutral-100"
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
          className="text-center mb-16"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <span className="text-secondary font-semibold">Como Podemos Ajudar</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-primary">Nossos Serviços</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card bg-white rounded-xl p-6 shadow-sm hover:shadow-lg"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.5,
                    delay: index * 0.1
                  }
                }
              }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-neutral-700">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
