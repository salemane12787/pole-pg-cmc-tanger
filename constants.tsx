import React from 'react';
import type { Formation, Pole, BuildingMap } from './types';

// --- LOGO COMPONENTS ---

export const CmcLogo: React.FC = () => (
    <img 
        src="https://ik.imagekit.io/2pzcc0oar/unnamed%20(1).png?updatedAt=1762447249633" 
        alt="CMC Tanger Logo" 
        className="h-full w-auto object-contain"
    />
);


export const OfpptLogo: React.FC = () => (
    <img 
        src="https://ik.imagekit.io/2pzcc0oar/unnamed.png?updatedAt=1762447249511" 
        alt="OFPPT Logo" 
        className="h-full w-auto object-contain"
    />
);

// --- DATA CONSTANTS ---

export const BUILDING_MAP_DATA: BuildingMap = {
  title: 'Découvrez notre Zone Commune',
  floor1: 'https://ik.imagekit.io/2pzcc0oar/WhatsApp%20Image%202025-11-03%20at%2020.18.18.jpeg?updatedAt=1762452563609',
  floor2: 'https://ik.imagekit.io/2pzcc0oar/WhatsApp%20Image%202025-11-03%20at%2020.18.16%20(1).jpeg?updatedAt=1762452563718',
};

export const POLES_DATA: Record<string, Pole> = {
  graphique: {
    id: 'graphique',
    name: 'Pôle Arts & Industries Graphiques',
    formations: [
      { id: 1, title: 'TS en Infographie et Design Prépresse', level: 'Niveau: Technicien Spécialisé' },
      { id: 2, title: 'TS en Production et Impression Graphique', level: 'Niveau: Technicien Spécialisé' },
    ],
    instructors: [
      { id: 1, name: '1', expertise: 'Spécialiste en Chaîne Graphique et Impression Digitale', imageUrl: '' },
      { id: 2, name: '2', expertise: 'Expert en Design Graphique & PAO', imageUrl: '' },
      { id: 3, name: '3', expertise: 'Photographe Professionnelle et Retouche d\'image', imageUrl: '' },
    ],
  },
  digital: {
    id: 'digital',
    name: 'Pôle Digital & Intelligence Artificielle',
    formations: [
        { id: 1, title: 'Développement Digital', level: 'Niveau: Technicien Spécialisé' },
        { id: 2, title: 'Digital Design', level: 'Niveau: Technicien Spécialisé' },
        { id: 3, title: 'Infrastructure Digitale', level: 'Niveau: Technicien Spécialisé' },
        { id: 4, title: 'Développement d’Applications Web et Mobiles', level: 'Niveau: Technicien Spécialisé' },
        { id: 5, title: 'Développement d’Applications - Python', level: 'Niveau: Technicien Spécialisé' },
        { id: 6, title: 'Management de projets Digitaux', level: 'Niveau: Technicien Spécialisé' },
        { id: 7, title: 'Testeur de solutions digitales', level: 'Niveau: Technicien Spécialisé' },
        { id: 8, title: 'Community manager', level: 'Niveau: Technicien' },
        { id: 9, title: 'Cycle de découverte du numérique', level: 'Niveau: Qualification' },
    ],
    instructors: [
      { id: 1, name: '4', expertise: 'Architecte Cloud & Spécialiste DevOps', imageUrl: '' },
      { id: 2, name: '5', expertise: 'Data Scientist & Ingénieure Machine Learning', imageUrl: '' },
      { id: 3, name: '6', expertise: 'Développeur Full-Stack (React, Node.js)', imageUrl: '' },
    ],
  },
  gestion: {
    id: 'gestion',
    name: 'Pôle Gestion & Commerce',
    formations: [
      { id: 1, title: 'Assistant Administratif', level: 'Niveau: Technicien' },
      { id: 2, title: 'Chargé de clientèle en Back office', level: 'Niveau: Technicien' },
      { id: 3, title: 'E-Commerce', level: 'Niveau: Technicien Spécialisé' },
      { id: 4, title: 'Gestion des Entreprises', level: 'Niveau: Technicien Spécialisé' },
      { id: 5, title: 'Responsabilité Sociétale et environnementale des Entreprises (RSE)', level: 'Niveau: Technicien Spécialisé' },
    ],
    instructors: [
      { id: 1, name: '7', expertise: 'Expert en Stratégie Commerciale', imageUrl: '' },
      { id: 2, name: '8', expertise: 'Spécialiste E-commerce & Marketing Digital', imageUrl: '' },
      { id: 3, name: '9', expertise: 'Consultant en Gestion et RSE', imageUrl: '' },
    ],
  },
};