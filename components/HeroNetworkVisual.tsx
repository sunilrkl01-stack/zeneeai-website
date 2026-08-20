'use client';

import React, { useEffect, useRef } from 'react';

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  radius: number;
  color: string;
  pulseRadius: number;
  isCenter?: boolean;
}

interface Particle {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
  color: string;
  size: number;
}

export const HeroNetworkVisual: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Nodes setup centered around ZENEEAI hub
    const getNodes = (): Node[] => {
      const cx = width / 2;
      const cy = height / 2;
      const r = Math.min(width, height) * 0.32;

      return [
        // Center Hub
        {
          id: 'zeneeai',
          label: 'ZENEEAI',
          x: cx,
          y: cy,
          targetX: cx,
          targetY: cy,
          radius: 42,
          color: '#FF6B00',
          pulseRadius: 42,
          isCenter: true,
        },
        // Top-Left: AI & Automation
        {
          id: 'ai',
          label: 'AI & Automation',
          x: cx - r * 0.95,
          y: cy - r * 0.75,
          targetX: cx - r * 0.95,
          targetY: cy - r * 0.75,
          radius: 24,
          color: '#FF8533',
          pulseRadius: 24,
        },
        // Top-Right: Payments & FinTech
        {
          id: 'payments',
          label: 'FinTech & Payments',
          x: cx + r * 0.95,
          y: cy - r * 0.75,
          targetX: cx + r * 0.95,
          targetY: cy - r * 0.75,
          radius: 24,
          color: '#FF6B00',
          pulseRadius: 24,
        },
        // Bottom-Right: Future Mobility
        {
          id: 'mobility',
          label: 'Future Mobility',
          x: cx + r * 0.85,
          y: cy + r * 0.75,
          targetX: cx + r * 0.85,
          targetY: cy + r * 0.75,
          radius: 24,
          color: '#FF9E43',
          pulseRadius: 24,
        },
        // Bottom-Left: Enterprise Technology
        {
          id: 'enterprise',
          label: 'Enterprise Tech',
          x: cx - r * 0.85,
          y: cy + r * 0.75,
          targetX: cx - r * 0.85,
          targetY: cy + r * 0.75,
          radius: 24,
          color: '#FFA857',
          pulseRadius: 24,
        },
      ];
    };

    let nodes = getNodes();

    // Data Flow Particles traveling between Center and Outer Nodes
    const particles: Particle[] = Array.from({ length: 18 }, () => ({
      fromNode: 0,
      toNode: Math.floor(Math.random() * 4) + 1,
      progress: Math.random(),
      speed: 0.003 + Math.random() * 0.005,
      color: Math.random() > 0.5 ? '#FF6B00' : '#FFFFFF',
      size: 2.5 + Math.random() * 2,
    }));

    let rotationAngle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      rotationAngle += 0.003;

      // 1. Draw Background Orbital Rings
      ctx.save();
      ctx.translate(cx, cy);

      // Outer dashed orbital ring
      ctx.beginPath();
      ctx.arc(0, 0, Math.min(width, height) * 0.35, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 107, 0, 0.12)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([8, 12]);
      ctx.stroke();

      // Inner orbital ring
      ctx.beginPath();
      ctx.arc(0, 0, Math.min(width, height) * 0.22, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 6]);
      ctx.stroke();

      ctx.restore();

      // 2. Draw Connecting Lines with Gradient Glows
      for (let i = 1; i < nodes.length; i++) {
        const centerNode = nodes[0];
        const targetNode = nodes[i];

        const grad = ctx.createLinearGradient(centerNode.x, centerNode.y, targetNode.x, targetNode.y);
        grad.addColorStop(0, 'rgba(255, 107, 0, 0.6)');
        grad.addColorStop(0.5, 'rgba(255, 133, 51, 0.3)');
        grad.addColorStop(1, 'rgba(255, 255, 255, 0.15)');

        ctx.beginPath();
        ctx.moveTo(centerNode.x, centerNode.y);
        ctx.lineTo(targetNode.x, targetNode.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.8;
        ctx.stroke();
      }

      // Inter-node secondary mesh lines
      ctx.beginPath();
      ctx.moveTo(nodes[1].x, nodes[1].y);
      ctx.lineTo(nodes[2].x, nodes[2].y);
      ctx.lineTo(nodes[3].x, nodes[3].y);
      ctx.lineTo(nodes[4].x, nodes[4].y);
      ctx.closePath();
      ctx.strokeStyle = 'rgba(255, 107, 0, 0.08)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // 3. Draw Particles (Data Pulses)
      particles.forEach((p) => {
        p.progress += p.speed;
        if (p.progress >= 1) {
          p.progress = 0;
          // Switch direction randomly
          if (Math.random() > 0.5) {
            p.fromNode = 0;
            p.toNode = Math.floor(Math.random() * 4) + 1;
          } else {
            p.fromNode = Math.floor(Math.random() * 4) + 1;
            p.toNode = 0;
          }
        }

        const start = nodes[p.fromNode];
        const end = nodes[p.toNode];

        const px = start.x + (end.x - start.x) * p.progress;
        const py = start.y + (end.y - start.y) * p.progress;

        // Glowing particle
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // 4. Draw Nodes
      nodes.forEach((node) => {
        // Expand/contract pulse radius
        node.pulseRadius += 0.15;
        if (node.pulseRadius > node.radius * 1.8) {
          node.pulseRadius = node.radius;
        }

        // Pulse ring
        const alpha = 1 - (node.pulseRadius - node.radius) / (node.radius * 0.8);
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.pulseRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 107, 0, ${Math.max(0, alpha * 0.4)})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Node Glow Shadow
        ctx.shadowColor = node.color;
        ctx.shadowBlur = node.isCenter ? 25 : 15;

        // Main circle fill
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.isCenter ? '#0E111A' : '#141824';
        ctx.fill();
        ctx.strokeStyle = node.isCenter ? '#FF6B00' : 'rgba(255, 107, 0, 0.5)';
        ctx.lineWidth = node.isCenter ? 3 : 1.5;
        ctx.stroke();

        ctx.shadowBlur = 0;

        // Node Label
        ctx.font = node.isCenter ? 'bold 14px system-ui' : '500 12px system-ui';
        ctx.fillStyle = node.isCenter ? '#FFFFFF' : '#CBD5E1';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(node.label, node.x, node.y + (node.isCenter ? 0 : node.radius + 18));
      });

      // Central Hub emblem text if center
      ctx.font = 'bold 15px system-ui';
      ctx.fillStyle = '#FFFFFF';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('ZENEEAI', nodes[0].x, nodes[0].y);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-[450px] md:h-[550px] lg:h-[600px] flex items-center justify-center">
      {/* Canvas */}
      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* Decorative subtle ambient backdrop glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#FF6B00]/15 rounded-full blur-[100px] pointer-events-none" />
    </div>
  );
};
