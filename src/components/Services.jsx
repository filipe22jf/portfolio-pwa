import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Code, 
  Zap, 
  Shield, 
  Globe, 
  Headphones,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Desenvolvimento PWA Completo",
      description: "Criação de Progressive Web Apps do zero com todas as funcionalidades nativas.",
      features: [
        "Service Workers para cache inteligente",
        "Web App Manifest configurado",
        "Push Notifications integradas",
        "Funcionamento offline completo",
        "Instalação nativa no dispositivo"
      ],
      price: "A partir de R$ 3.500",
      color: "from-blue-500 to-indigo-600",
      popular: true
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Migração Web para PWA",
      description: "Transforme seu site existente em uma PWA moderna e performática.",
      features: [
        "Análise técnica completa",
        "Implementação de Service Workers",
        "Otimização de performance",
        "Configuração de cache strategies",
        "Testes em múltiplos dispositivos"
      ],
      price: "A partir de R$ 3.000",
      color: "from-green-500 to-emerald-600",
      popular: false
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Otimização de Performance",
      description: "Melhore drasticamente a velocidade e experiência da sua PWA.",
      features: [
        "Auditoria de Core Web Vitals",
        "Implementação de lazy loading",
        "Code splitting otimizado",
        "Compressão de assets",
        "Relatório detalhado de melhorias"
      ],
      price: "A partir de R$ 2.000",
      color: "from-yellow-500 to-orange-600",
      popular: false
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "PWA Segura & Confiável",
      description: "Implementação de segurança avançada e confiabilidade para PWAs empresariais.",
      features: [
        "HTTPS obrigatório configurado",
        "Autenticação segura",
        "Backup automático de dados",
        "Monitoramento de uptime",
        "Compliance com LGPD"
      ],
      price: "A partir de R$ 4.000",
      color: "from-purple-500 to-violet-600",
      popular: false
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "PWA Multiplataforma",
      description: "Desenvolvimento de PWAs que funcionam perfeitamente em todos os dispositivos.",
      features: [
        "Design responsivo avançado",
        "Testes em iOS, Android e Desktop",
        "Adaptação para diferentes telas",
        "Gestos touch otimizados",
        "Compatibilidade cross-browser"
      ],
      price: "A partir de R$ 6.000",
      color: "from-cyan-500 to-blue-600",
      popular: false
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Suporte & Manutenção",
      description: "Suporte técnico contínuo e atualizações para manter sua PWA sempre atual.",
      features: [
        "Suporte técnico 24/7",
        "Atualizações de segurança",
        "Monitoramento de performance",
        "Backup automático",
        "Relatórios mensais detalhados"
      ],
      price: "R$ 500/mês",
      color: "from-pink-500 to-rose-600",
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Serviços Especializados
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ofereço soluções completas em Progressive Web Apps, desde o desenvolvimento 
            inicial até a manutenção contínua, garantindo que sua aplicação esteja sempre 
            na vanguarda da tecnologia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-accent to-primary px-4 py-1 rounded-full text-sm font-semibold text-white">
                    Mais Popular
                  </span>
                </div>
              )}
              
              <Card className={`glass border-0 h-full glow-hover ${service.popular ? 'ring-2 ring-accent' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color}`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <p className="text-2xl font-bold text-accent mt-1">{service.price}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white`}
                  >
                    Solicitar Orçamento
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <Card className="glass border-0 p-8">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Processo de Desenvolvimento
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Sigo uma metodologia comprovada que garante entregas de qualidade 
                    dentro do prazo e orçamento estabelecidos.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      "1. Análise de Requisitos e Planejamento",
                      "2. Design UX/UI e Prototipagem",
                      "3. Desenvolvimento e Implementação",
                      "4. Testes e Otimização",
                      "5. Deploy e Treinamento",
                      "6. Suporte e Manutenção Contínua"
                    ].map((step, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <span className="text-gray-300">{step.substring(3)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-r from-primary to-accent mb-6">
                    <Code className="w-16 h-16 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">
                    Garantia de Qualidade
                  </h4>
                  <p className="text-gray-300 mb-6">
                    Todos os projetos incluem garantia de 6 meses e suporte técnico 
                    para resolver qualquer problema que possa surgir.
                  </p>
                  <Button 
                    size="lg"
                    className="bg-primary hover:bg-primary/90"
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  >
                    Iniciar Projeto
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

