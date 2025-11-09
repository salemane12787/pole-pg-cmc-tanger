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
  floor1: 'https://ik.imagekit.io/2pzcc0oar/RDC.png',
  floor2: 'https://ik.imagekit.io/2pzcc0oar/ETAGE%201.png',
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
      { id: 1, name: 'KAMAL EL-MOUZOUADE', expertise: 'Spécialiste en Chaîne Graphique et Impression Digitale', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzUggCtVsdiXKyUUy4PpbTy_24UzpgGlpccCohU27x7velqXZkcUd27a8XVf3y5bhOBtE&usqp=CAU' },
      { id: 2, name: 'GOT ACHRAF', expertise: 'Expert en Design Graphique & PAO', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzUggCtVsdiXKyUUy4PpbTy_24UzpgGlpccCohU27x7velqXZkcUd27a8XVf3y5bhOBtE&usqp=CAU' },
      { id: 3, name: 'BELGHAROUADI YASSINE', expertise: 'Spécialiste en Chaîne Graphique', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzUggCtVsdiXKyUUy4PpbTy_24UzpgGlpccCohU27x7velqXZkcUd27a8XVf3y5bhOBtE&usqp=CAU' },
      { id: 4, name: 'Leamari abdllah', expertise: 'Expert en Design Graphique & PAO', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzUggCtVsdiXKyUUy4PpbTy_24UzpgGlpccCohU27x7velqXZkcUd27a8XVf3y5bhOBtE&usqp=CAU' }
      { id: 5, name: 'MOUMEN JAMAI HIND', expertise: 'Expert en Design Graphique & PAO', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzUggCtVsdiXKyUUy4PpbTy_24UzpgGlpccCohU27x7velqXZkcUd27a8XVf3y5bhOBtE&usqp=CAU' }
      { id: 6, name: 'ISSAM OUSSAIR', expertise: 'PIE', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzUggCtVsdiXKyUUy4PpbTy_24UzpgGlpccCohU27x7velqXZkcUd27a8XVf3y5bhOBtE&usqp=CAU' }
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
      { id: 1, name: 'Yasser ejaja', expertise: 'Architecte Cloud & Spécialiste DevOps', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzUggCtVsdiXKyUUy4PpbTy_24UzpgGlpccCohU27x7velqXZkcUd27a8XVf3y5bhOBtE&usqp=CAU' },
      { id: 2, name: 'Mohammed lebyed', expertise: 'Data Scientist & Ingénieure Machine Learning', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzUggCtVsdiXKyUUy4PpbTy_24UzpgGlpccCohU27x7velqXZkcUd27a8XVf3y5bhOBtE&usqp=CAU' },
      { id: 3, name: 'Hamza ', expertise: 'Développeur Full-Stack (React, Node.js)', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzUggCtVsdiXKyUUy4PpbTy_24UzpgGlpccCohU27x7velqXZkcUd27a8XVf3y5bhOBtE&usqp=CAU' },
      { id: 4, name: 'Anas ', expertise: 'Développeur ', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzUggCtVsdiXKyUUy4PpbTy_24UzpgGlpccCohU27x7velqXZkcUd27a8XVf3y5bhOBtE&usqp=CAU' },
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
      { id: 1, name: 'Azzikhnin Aabile', expertise: 'Expert en Stratégie Commerciale', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzUggCtVsdiXKyUUy4PpbTy_24UzpgGlpccCohU27x7velqXZkcUd27a8XVf3y5bhOBtE&usqp=CAU' },
      { id: 2, name: 'El Mkharbch Ghizlane', expertise: 'Spécialiste E-commerce & Marketing Digital', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzUggCtVsdiXKyUUy4PpbTy_24UzpgGlpccCohU27x7velqXZkcUd27a8XVf3y5bhOBtE&usqp=CAU' },
      { id: 3, name: 'LAHBABI MOHAMMED AMINE', expertise: 'Consultant en Gestion et RSE', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzUggCtVsdiXKyUUy4PpbTy_24UzpgGlpccCohU27x7velqXZkcUd27a8XVf3y5bhOBtE&usqp=CAU' },
    ],
  },
};