import { motion } from 'framer-motion';
import { Code2, Smartphone, Zap, Globe, Users, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skills = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Desenvolvimento Frontend",
      description: "React, Vue.js, Angular, Svelte com foco em performance e UX",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Progressive Web Apps",
      description: "Service Workers, Web App Manifest, Push Notifications, Offline-first",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance & Otimização",
      description: "Core Web Vitals, Lazy Loading, Code Splitting, Caching Strategies",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web APIs Modernas",
      description: "WebRTC, Geolocation, Camera, Payment Request, Web Share",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const stats = [
    { number: "50+", label: "PWAs Desenvolvidas" },
    { number: "3+", label: "Anos de Experiência" },
    { number: "98%", label: "Satisfação dos Clientes" },
    { number: "24/7", label: "Suporte Técnico" }
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Sobre Mim
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Especialista em Progressive Web Apps com paixão por criar experiências digitais 
            que funcionam perfeitamente em qualquer dispositivo, online ou offline.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Transformando Ideias em PWAs Excepcionais
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Com mais de 3 anos de experiência no desenvolvimento de Progressive Web Apps, 
              especializo-me em criar aplicações que combinam a acessibilidade da web com 
              a funcionalidade de aplicativos nativos.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Minha abordagem foca em performance, experiência do usuário e implementação 
              de recursos avançados como funcionamento offline, notificações push e 
              integração com APIs nativas do dispositivo.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Cada projeto é desenvolvido seguindo as melhores práticas de PWA, garantindo 
              que sua aplicação seja rápida, confiável e envolvente em qualquer plataforma.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent" />
                <span className="text-sm text-gray-300">Google PWA Expert</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-accent" />
                <span className="text-sm text-gray-300">50+ Clientes Satisfeitos</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="glass border-0 p-6">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-gradient mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-300">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Especialidades Técnicas
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="glass border-0 h-full glow-hover">
                  <CardContent className="p-6 text-center">
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${skill.color} mb-4`}>
                      {skill.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-3">
                      {skill.title}
                    </h4>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {skill.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <Card className="glass border-0 p-8 max-w-4xl mx-auto">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-white mb-4">
                Por que escolher PWAs?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-accent mb-2">Performance Superior</h4>
                  <p className="text-sm text-gray-300">
                    Carregamento instantâneo e experiência fluida mesmo em conexões lentas.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-2">Funciona Offline</h4>
                  <p className="text-sm text-gray-300">
                    Seus usuários podem usar a aplicação mesmo sem conexão com a internet.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-2">Multiplataforma</h4>
                  <p className="text-sm text-gray-300">
                    Uma única aplicação que funciona em desktop, mobile e tablet.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

