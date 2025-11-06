import type React from 'react';

export interface Formation {
  id: number;
  title: string;
  level: string;
  description?: string;
  courseType?: string;
  diplomaType?: string;
  tags?: string[];
}

export interface Instructor {
  id: number;
  name: string;
  expertise: string;
  imageUrl: string;
}

export interface Pole {
  id: string;
  name: string;
  formations: Formation[];
  instructors: Instructor[];
}

export interface BuildingMap {
  title: string;
  floor1: string;
  floor2: string;
}