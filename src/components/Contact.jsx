import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle,
  Calendar,
  Clock,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          project: '',
          message: ''
        });
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        console.error('Erro ao enviar email:', result.error);
        alert('Erro ao enviar mensagem. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Erro ao enviar mensagem. Tente novamente.');
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "filipepwajf@gmail.com",
      description: "Resposta em até 2 horas",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "WhatsApp",
      value: "+55 (32) 9 84643903",
      description: "Disponível das 8h às 18h",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Localização",
      value: "Juiz de Fora, MG",
      description: "Atendimento remoto",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Reunião Online",
      value: "Agendar Chamada",
      description: "Consultoria gratuita",
      color: "from-orange-500 to-red-500"
    }
  ];

  const projectTypes = [
    "Nova PWA do Zero",
    "Migração Web para PWA",
    "Otimização de Performance",
    "Manutenção e Suporte",
    "Consultoria Técnica",
    "Outro"
  ];

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Vamos Conversar?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pronto para transformar sua ideia em uma PWA excepcional? 
            Entre em contato e vamos discutir como posso ajudar seu projeto a alcançar o próximo nível.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Informações de Contato */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Informações de Contato
            </h3>
            
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass border-0 glow-hover cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color}`}>
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{info.title}</h4>
                        <p className="text-accent font-medium">{info.value}</p>
                        <p className="text-sm text-gray-400">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8"
            >
              <Card className="glass border-0 p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-accent" />
                    <h4 className="text-lg font-semibold text-white">Horário de Atendimento</h4>
                  </div>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex justify-between">
                      <span>Segunda - Sexta:</span>
                      <span>8h - 18h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábado:</span>
                      <span>9h - 14h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domingo:</span>
                      <span>Emergências</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Formulário de Contato */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <Card className="glass border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Solicitar Orçamento
                </h3>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-white mb-2">
                      Mensagem Enviada!
                    </h4>
                    <p className="text-gray-300">
                      Obrigado pelo contato. Retornarei em breve!
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Nome Completo *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Seu nome"
                          required
                          className="bg-muted/50 border-muted text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="seu@email.com"
                          required
                          className="bg-muted/50 border-muted text-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          WhatsApp
                        </label>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(11) 99999-9999"
                          className="bg-muted/50 border-muted text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Tipo de Projeto *
                        </label>
                        <select
                          name="project"
                          value={formData.project}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 bg-muted/50 border border-muted rounded-md text-white"
                        >
                          <option value="">Selecione...</option>
                          {projectTypes.map((type, index) => (
                            <option key={index} value={type} className="bg-muted">
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Descrição do Projeto *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Descreva seu projeto, objetivos, prazo e orçamento estimado..."
                        rows={5}
                        required
                        className="bg-muted/50 border-muted text-white resize-none"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        type="submit"
                        size="lg"
                        className="flex-1 bg-primary hover:bg-primary/90"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Enviar Mensagem
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        size="lg"
                        className="border-accent text-accent hover:bg-accent hover:text-white"
                        onClick={() => window.open("https://wa.me/5532984643903", "_blank")}
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp Direto
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* FAQ Rápido */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Perguntas Frequentes
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                question: "Quanto tempo leva para desenvolver uma PWA?",
                answer: "Depende da complexidade, mas geralmente entre 4-12 semanas."
              },
              {
                question: "PWAs funcionam em todos os dispositivos?",
                answer: "Sim! PWAs são compatíveis com iOS, Android, Windows e macOS."
              },
              {
                question: "Qual a diferença entre PWA e app nativo?",
                answer: "PWAs são mais rápidas de desenvolver e não precisam de app stores."
              },
              {
                question: "Posso converter meu site em PWA?",
                answer: "Sim! Posso migrar seu site existente para PWA mantendo o design."
              },
              {
                question: "PWAs precisam de internet para funcionar?",
                answer: "Não! Com cache inteligente, funcionam offline perfeitamente."
              },
              {
                question: "Qual o investimento para uma PWA?",
                answer: "A partir de R$ 3.000, dependendo das funcionalidades desejadas."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass border-0 h-full">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-white mb-3 text-sm">
                      {faq.question}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

