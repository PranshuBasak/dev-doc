import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { ShoppingCart, Github } from 'lucide-react';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <ShoppingCart className="size-6" />
          E-commerce Docs
        </>
      ),
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [
      {
        text: 'GitHub',
        url: 'https://github.com/PranshuBasak/microservices-ecommerce',
        icon: <Github className="size-4" />,
      },
    ],
  };
}
