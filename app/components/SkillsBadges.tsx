"use client";

import { useState, useEffect } from "react";

interface Tool {
  name: string;
  alt: string;
  src: string;
  iconClassName?: string;
}

interface SkillsBadgesProps {
  tools: Tool[];
}

const MOBILE_ITEMS_LIMIT = 5;

export function SkillsBadges({ tools }: SkillsBadgesProps) {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar se é mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const displayTools = isMobile && !showAll 
    ? tools.slice(0, MOBILE_ITEMS_LIMIT) 
    : tools;

  const shouldShowMoreButton = isMobile && tools.length > MOBILE_ITEMS_LIMIT;

  return (
    <>
      <div 
        className="badges-accordion"
        style={{
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          overflow: 'hidden',
          maxHeight: isMobile && !showAll 
            ? `${MOBILE_ITEMS_LIMIT * 60}px` 
            : `${tools.length * 60}px`,
          opacity: isMobile && !showAll ? 0.95 : 1
        }}
      >
        <div className="badges">
          {tools.map((tool, index) => (
            <span 
              key={tool.name} 
              className={`badge ${isMobile && index >= MOBILE_ITEMS_LIMIT && !showAll ? 'badge-hidden' : ''}`}
              style={{
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                opacity: isMobile && index >= MOBILE_ITEMS_LIMIT && !showAll ? 0 : 1,
                transform: isMobile && index >= MOBILE_ITEMS_LIMIT && !showAll 
                  ? 'translateY(-20px) scale(0.8)' 
                  : 'translateY(0) scale(1)',
                visibility: isMobile && index >= MOBILE_ITEMS_LIMIT && !showAll ? 'hidden' : 'visible'
              }}
            >
              <span className="badge-content">
                <img
                  className={`tool-logo ${tool.iconClassName ?? ""}`.trim()}
                  src={tool.src}
                  alt={tool.alt}
                  height={30}
                  width={30}
                  loading="lazy"
                />
                <span>{tool.name}</span>
              </span>
            </span>
          ))}
        </div>
      </div>
      
      {shouldShowMoreButton && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '12px' }}>
          <button
            type="button"
            className="show-more-button"
            onClick={() => setShowAll(!showAll)}
            style={{
              padding: '8px 16px',
              backgroundColor: 'transparent',
              border: '1px solid var(--brand)',
              borderRadius: '999px',
              color: 'var(--brand)',
              fontSize: '0.86rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: showAll ? 'scale(0.95)' : 'scale(1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--brand)';
              e.currentTarget.style.color = 'var(--bg)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--brand)';
              e.currentTarget.style.transform = showAll ? 'scale(0.95)' : 'scale(1)';
            }}
          >
            <span style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '6px',
              transition: 'transform 0.3s ease'
            }}>
              <span style={{
                display: 'inline-block',
                transition: 'transform 0.3s ease',
                transform: showAll ? 'rotate(180deg)' : 'rotate(0deg)'
              }}>
                ▼
              </span>
              {showAll ? 'Mostrar menos' : `Mostrar mais (${tools.length - MOBILE_ITEMS_LIMIT})`}
            </span>
          </button>
        </div>
      )}
      
      <style jsx>{`
        .badge-hidden {
          position: absolute;
          pointer-events: none;
        }
        
        .badges-accordion {
          position: relative;
        }
        
        .show-more-button:hover span:last-child {
          transform: translateY(-1px);
        }
      `}</style>
    </>
  );
}
