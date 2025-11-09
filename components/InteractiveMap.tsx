import React, { useState, useRef } from 'react';
import type { BuildingMap } from '../types';

type Floor = 'premier' | 'deuxieme';

interface InteractiveMapProps {
  mapData: BuildingMap;
}

// Icon Components for controls
const ZoomInIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3h-6" />
    </svg>
);

const ZoomOutIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
    </svg>
);

const RotateCwIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 3l2.5 2.5M17.5 5.5L15 8M21 12a9 9 0 1 1-9-9" />
    </svg>
);

const RotateCcwIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3L6.5 5.5M6.5 5.5L9 8M3 12a9 9 0 1 0 9-9" />
    </svg>
);

const ResetIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11 7v4m0 0h-4m4 0l-5-5M4 16v4m0 0h4m-4 0l5-5m11-7V4m0 0h-4m4 0l-5 5" />
    </svg>
);


const InteractiveMap: React.FC<InteractiveMapProps> = ({ mapData }) => {
  const [activeFloor, setActiveFloor] = useState<Floor>('premier');
  const [transforms, setTransforms] = useState({
    premier: { zoom: 1, rotation: 0, pan: { x: 0, y: 0 } },
    deuxieme: { zoom: 1, rotation: 0, pan: { x: 0, y: 0 } },
  });

  const dragInfo = useRef({
    isDragging: false,
    startPoint: { x: 0, y: 0 },
    startPan: { x: 0, y: 0 },
  });

  const handleZoomIn = () => {
    setTransforms(prev => ({
      ...prev,
      [activeFloor]: {
        ...prev[activeFloor],
        zoom: Math.min(3, prev[activeFloor].zoom + 0.2),
      },
    }));
  };

  const handleZoomOut = () => {
    setTransforms(prev => ({
      ...prev,
      [activeFloor]: {
        ...prev[activeFloor],
        zoom: Math.max(0.5, prev[activeFloor].zoom - 0.2),
      },
    }));
  };
  
  const handleRotateCw = () => {
    setTransforms(prev => ({
        ...prev,
        [activeFloor]: {
            ...prev[activeFloor],
            rotation: prev[activeFloor].rotation + 15,
        },
    }));
  };
  
  const handleRotateCcw = () => {
    setTransforms(prev => ({
        ...prev,
        [activeFloor]: {
            ...prev[activeFloor],
            rotation: prev[activeFloor].rotation - 15,
        },
    }));
  };
  
  const handleReset = () => {
    setTransforms(prev => ({
        ...prev,
        [activeFloor]: { zoom: 1, rotation: 0, pan: { x: 0, y: 0 } },
    }));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (transforms[activeFloor].zoom <= 1) return;
    e.preventDefault();
    dragInfo.current = {
      isDragging: true,
      startPoint: { x: e.clientX, y: e.clientY },
      startPan: { ...transforms[activeFloor].pan },
    };
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (transforms[activeFloor].zoom <= 1 || e.touches.length !== 1) return;
    dragInfo.current = {
      isDragging: true,
      startPoint: { x: e.touches[0].clientX, y: e.touches[0].clientY },
      startPan: { ...transforms[activeFloor].pan },
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragInfo.current.isDragging) return;
    e.preventDefault();
    const dx = e.clientX - dragInfo.current.startPoint.x;
    const dy = e.clientY - dragInfo.current.startPoint.y;
    const newPanX = dragInfo.current.startPan.x + dx;
    const newPanY = dragInfo.current.startPan.y + dy;
    setTransforms(prev => ({
      ...prev,
      [activeFloor]: { ...prev[activeFloor], pan: { x: newPanX, y: newPanY } },
    }));
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!dragInfo.current.isDragging || e.touches.length !== 1) return;
    e.preventDefault();
    const dx = e.touches[0].clientX - dragInfo.current.startPoint.x;
    const dy = e.touches[0].clientY - dragInfo.current.startPoint.y;
    const newPanX = dragInfo.current.startPan.x + dx;
    const newPanY = dragInfo.current.startPan.y + dy;
    setTransforms(prev => ({
      ...prev,
      [activeFloor]: { ...prev[activeFloor], pan: { x: newPanX, y: newPanY } },
    }));
  };

  const handleDragEnd = () => {
    dragInfo.current.isDragging = false;
  };

  const Tab: React.FC<{ floor: Floor; label: string }> = ({ floor, label }) => (
    <button
      onClick={() => setActiveFloor(floor)}
      className={`relative px-6 py-3 text-md font-semibold transition-colors duration-300 focus:outline-none ${
        activeFloor === floor ? 'text-brand-teal' : 'text-brand-gray hover:text-brand-dark-blue'
      }`}
    >
      {label}
      {activeFloor === floor && (
        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-teal rounded-full" />
      )}
    </button>
  );
  
  const ControlButton: React.FC<{ onClick: () => void; ariaLabel: string; children: React.ReactNode }> = ({ onClick, ariaLabel, children }) => (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className="p-2 bg-white/70 backdrop-blur-sm rounded-full text-brand-dark-blue hover:bg-white hover:text-brand-teal transition-all duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-teal"
    >
      {children}
    </button>
  );

  return (
    <section id="map" className="text-center">
      <h2 className="text-sm font-semibold text-brand-teal mb-4 tracking-widest uppercase">La Zone Commune</h2>
      <h3 className="text-3xl sm:text-4xl font-extrabold text-brand-dark-blue mb-6">
        Un Hub d'Innovation et de Créativité
      </h3>
      <p className="text-lg text-brand-gray max-w-3xl mx-auto mb-12">
        Explorez nos installations modernes réparties sur deux étages, conçues pour catalyser la collaboration et l'excellence.
      </p>
      <div className="flex justify-center mb-4">
        <Tab floor="premier" label="Premier Étage" />
        <Tab floor="deuxieme" label="Deuxième Étage" />
      </div>
      <div 
        className="bg-white rounded-lg shadow-xl border border-brand-border relative overflow-hidden aspect-[16/10] max-w-5xl mx-auto"
        onMouseMove={handleMouseMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleDragEnd}
      >
        {/* Map Images */}
        <div className={`absolute inset-0 p-4 md:p-6 transition-opacity duration-500 ease-in-out flex items-center justify-center ${activeFloor === 'premier' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <img 
            src={mapData.floor1} 
            alt="Plan du premier étage" 
            className={`w-full h-full object-contain transition-transform duration-300 ease-in-out ${transforms.premier.zoom > 1 ? 'cursor-grab active:cursor-grabbing' : ''}`}
            style={{ 
              transform: `scale(${transforms.premier.zoom}) rotate(${transforms.premier.rotation}deg) translate(${transforms.premier.pan.x}px, ${transforms.premier.pan.y}px)`,
              touchAction: 'none'
            }}
            draggable="false"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          />
        </div>
        <div className={`absolute inset-0 p-4 md:p-6 transition-opacity duration-500 ease-in-out flex items-center justify-center ${activeFloor === 'deuxieme' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <img 
            src={mapData.floor2} 
            alt="Plan du deuxième étage" 
            className={`w-full h-full object-contain transition-transform duration-300 ease-in-out ${transforms.deuxieme.zoom > 1 ? 'cursor-grab active:cursor-grabbing' : ''}`}
            style={{ 
              transform: `scale(${transforms.deuxieme.zoom}) rotate(${transforms.deuxieme.rotation}deg) translate(${transforms.deuxieme.pan.x}px, ${transforms.deuxieme.pan.y}px)`,
              touchAction: 'none'
            }}
            draggable="false"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          />
        </div>

        {/* Controls */}
        <div className="absolute bottom-4 right-4 z-10 flex flex-col items-center gap-2">
            <div className="bg-white/50 backdrop-blur-sm p-1 rounded-full shadow-lg flex flex-col gap-1">
                <ControlButton onClick={handleZoomIn} ariaLabel="Zoom in">
                    <ZoomInIcon />
                </ControlButton>
                <ControlButton onClick={handleZoomOut} ariaLabel="Zoom out">
                    <ZoomOutIcon />
                </ControlButton>
            </div>
             <div className="bg-white/50 backdrop-blur-sm p-1 rounded-full shadow-lg flex flex-col gap-1">
                <ControlButton onClick={handleRotateCw} ariaLabel="Rotate clockwise">
                    <RotateCwIcon />
                </ControlButton>
                <ControlButton onClick={handleRotateCcw} ariaLabel="Rotate counter-clockwise">
                    <RotateCcwIcon />
                </ControlButton>
            </div>
             <div className="bg-white/50 backdrop-blur-sm p-1 rounded-full shadow-lg">
                <ControlButton onClick={handleReset} ariaLabel="Reset view">
                    <ResetIcon />
                </ControlButton>
            </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;