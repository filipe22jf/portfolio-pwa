import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Globe, Zap, Users, ShoppingCart, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

// Importando as imagens
import pwaImage1 from '../assets/xWN9mtXu8Pv4.png';
import pwaImage2 from '../assets/OZiAM1y5IZNq.jpg';
import pwaImage3 from '../assets/de6VMJm4Iu4A.png';
import pwaImage4 from '../assets/hlJUm6r5EzzD.jpg';
import pwaImage5 from '../assets/mCO3VflL2jKt.png';
import pwaImage6 from '../assets/etVTsvgLpshS.png';

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState([]);

  const projects = [
    {
      id: 1,
      title: "EcoTrack",
      description: "PWA para monitoramento de sustentabilidade pessoal com gamificação e metas ambientais.",
      image: pwaImage1,
      technologies: ["React", "PWA", "IndexedDB", "Web Push"],
      features: ["Offline-first", "Push Notifications", "Geolocalização", "Câmera"],
      icon: <Globe className="w-6 h-6" />,
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 2,
      title: "FitPulse",
      description: "Aplicativo fitness PWA com tracking de exercícios, planos personalizados e comunidade.",
      image: pwaImage2,
      technologies: ["Vue.js", "PWA", "WebRTC", "Service Workers"],
      features: ["Modo Offline", "Sincronização", "Wearables", "Social"],
      icon: <Zap className="w-6 h-6" />,
      color: "from-red-500 to-pink-600"
    },
    {
      id: 3,
      title: "TaskFlow",
      description: "Gerenciador de projetos colaborativo com interface intuitiva e recursos avançados.",
      image: pwaImage3,
      technologies: ["Angular", "PWA", "WebSockets", "Background Sync"],
      features: ["Colaboração Real-time", "Offline Sync", "Notificações", "Drag & Drop"],
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 4,
      title: "FoodieMap",
      description: "Descoberta de restaurantes com reviews, reservas e delivery integrado.",
      image: pwaImage4,
      technologies: ["React", "PWA", "Maps API", "Payment API"],
      features: ["Geolocalização", "Pagamentos", "Reviews", "Reservas"],
      icon: <Globe className="w-6 h-6" />,
      color: "from-orange-500 to-red-600"
    },
    {
      id: 5,
      title: "StudyBuddy",
      description: "Plataforma de estudos com flashcards, quizzes e acompanhamento de progresso.",
      image: pwaImage5,
      technologies: ["Svelte", "PWA", "Web Speech", "IndexedDB"],
      features: ["Reconhecimento de Voz", "Offline Study", "Progress Tracking", "Gamificação"],
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-purple-500 to-violet-600"
    },
    {
      id: 6,
      title: "ShopSmart",
      description: "E-commerce PWA com experiência nativa, carrinho offline e checkout otimizado.",
      image: pwaImage6,
      technologies: ["Next.js", "PWA", "Payment Request", "Web Share"],
      features: ["Carrinho Offline", "One-Click Payment", "Share API", "Push Notifications"],
      icon: <ShoppingCart className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-600"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = parseInt(entry.target.dataset.projectId);
            setVisibleProjects(prev => [...new Set([...prev, projectId])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectElements = document.querySelectorAll('[data-project-id]');
    projectElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Projetos PWA
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Aplicações web progressivas que combinam o melhor da web com a experiência de apps nativos.
            Cada projeto demonstra diferentes aspectos e capacidades das PWAs modernas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              data-project-id={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={visibleProjects.includes(project.id) ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card className="project-card glass border-0 h-full overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image w-full h-48 object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-80 transition-opacity duration-300`} />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      <Button size="sm" variant="secondary" className="p-2">
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="p-2">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${project.color}`}>
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>

                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-accent mb-2">Tecnologias:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs bg-muted rounded-full text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-accent mb-2">Features PWA:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.features.map((feature, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-6">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Smartphone className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                    <Button size="sm" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-white"
          >
            Ver Todos os Projetos
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

