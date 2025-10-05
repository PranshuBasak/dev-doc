'use client';

import React, { useEffect, useState } from 'react';
// import { useTheme } from 'next-themes';

interface MermaidResult {
  svg: string;
}

export function Mermaid({ chart }: { chart: string }) {
  const [mounted, setMounted] = useState(false);
  const [svg, setSvg] = useState<string>('');

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      renderMermaidChart(chart).then(result => {
        setSvg(result.svg);
      }).catch(error => {
        console.error('Failed to render mermaid diagram:', error);
      });
    }
  }, [mounted, chart]);

  if (!mounted || !svg) {
    return <div className="flex items-center justify-center p-8 text-muted-foreground">Loading diagram...</div>;
  }

  return (
    <div
      dangerouslySetInnerHTML={{ __html: svg }}
      className="mermaid-diagram overflow-auto"
    />
  );
}

async function renderMermaidChart(chart: string): Promise<MermaidResult> {
  // Dynamic import to avoid SSR issues
  const mermaid = await import('mermaid');

  mermaid.default.initialize({
    startOnLoad: false,
    securityLevel: 'loose',
    fontFamily: 'inherit',
    themeCSS: 'margin: 1.5rem auto 0;',
    theme: 'default', // We'll handle theme switching differently
  });

  const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
  const { svg } = await mermaid.default.render(id, chart.replaceAll('\\n', '\n'));

  return { svg };
}
