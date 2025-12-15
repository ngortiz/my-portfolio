import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tree from './components/Tree';
import treePlaceholder from './assets/christmas-tree-placeholder.png';
import SkillsModal from './components/SkillsModal';
import Navbar from './components/Navbar';
import Snow from './components/Snow';
import Stars from './components/Stars';
import MusicPlayer from './components/MusicPlayer';
import GiftsUnderTree from './components/GiftsUnderTree';
import Contact from './components/Contact';
import './styles/app.css';

type Project = { label: string; color: string; url: string };

const projects: Project[] = [
  { label: 'Learn English', color: '#C4472C', url: 'https://github.com/wildomonges/learn-english-platform' },
  { label: 'Adopt a Friend', color: '#D97706', url: 'https://github.com/ngortiz/adopt-a--friend' },
  { label: 'Travel Agency UI', color: '#D8A119', url: 'https://github.com/ngortiz/travel-agency-ui' },
  { label: 'SmartSeller UI', color: '#2563EB', url: 'https://github.com/ngortiz/Smartseller-ui' },
  { label: 'App de Películas', color: '#C026D3', url: 'https://github.com/ngortiz/buscador-peliculas' },
];

export default function App() {
  const [skillsOpen, setSkillsOpen] = React.useState(false);
  const images = import.meta.glob('./assets/christmas-tree.*', { eager: true, as: 'url' });
  const treeAsset = (images['./assets/christmas-tree.png'] as string) ||
    (images['./assets/christmas-tree.jpg'] as string) ||
    (images['./assets/christmas-tree.webp'] as string) ||
    (images['./assets/christmas-tree.svg'] as string);
  const treeImage = treeAsset ?? treePlaceholder;

  return (
    <div className="page">
      <Navbar />
      <Stars />
      <Snow />
      <MusicPlayer />
      <header className="header" id="sobre-mi">
        <motion.h1
          className="title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hola! soy Nidia Ortiz
        </motion.h1>
        <motion.p
          className="subtitle"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
         
          Soy <strong>Desarrolladora de Software</strong> con foco en <strong>Frontend</strong>, especializada en el desarrollo de aplicaciones web utilizando React y TypeScript. He desarrollado proyectos orientados a negocio, incluyendo plataformas de Ecommerce, Sistemas de Adopción de Mascotas y Plataformas Web para Aprendizaje de Inglés. En estos proyectos he trabajado en la construcción de interfaces interactivas, manejo de estado, consumo de APIs y flujos completos de usuario. Actualmente amplío mis habilidades hacia <strong>Backend</strong>, utilizando NestJS, TypeORM y PostgreSQL, e integrando servicios de AWS.
        </motion.p>
      </header>

      <main className="main">
        <Tree imageSrc={treeImage} baubles={projects} />
        <GiftsUnderTree skills={["React","TypeScript","JavaScript","HTML","CSS","NestJS","TypeORM","PostgreSQL","AWS"]} />

        <section id="proyectos" style={{ marginTop: 12 }} />
      </main>

      <Contact />

      <AnimatePresence>
        {skillsOpen && (
          <div id="habilidades">
            <SkillsModal onClose={() => setSkillsOpen(false)} />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
