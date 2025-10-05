import Link from 'next/link';
import { ArrowRight, BookOpen, Code, Database, ShoppingCart } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      {/* Hero Section */}
      <section className="flex flex-1 flex-col items-center justify-center text-center px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex items-center justify-center">
            <ShoppingCart className="mr-3 size-12 text-primary" />
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              E-commerce Platform
            </h1>
          </div>

          <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
            Comprehensive documentation for a full-stack e-commerce application built with microservices architecture
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/docs"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <BookOpen className="mr-2 size-4" />
              View Documentation
              <ArrowRight className="ml-2 size-4" />
            </Link>

            <Link
              href="https://github.com/PranshuBasak/microservices-ecommerce"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Code className="mr-2 size-4" />
              View Source Code
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t bg-muted/30 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold">What&apos;s Inside</h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-card p-6 text-card-foreground">
              <div className="mb-4 flex items-center">
                <ShoppingCart className="mr-3 size-8 text-primary" />
                <h3 className="text-xl font-semibold">Client Application</h3>
              </div>
              <p className="text-muted-foreground">
                Modern Next.js storefront with product catalog, shopping cart, and secure checkout powered by Stripe.
              </p>
            </div>

            <div className="rounded-lg border bg-card p-6 text-card-foreground">
              <div className="mb-4 flex items-center">
                <Database className="mr-3 size-8 text-primary" />
                <h3 className="text-xl font-semibold">Backend Services</h3>
              </div>
              <p className="text-muted-foreground">
                Microservices for products, orders, payments, authentication, and email with event-driven communication.
              </p>
            </div>

            <div className="rounded-lg border bg-card p-6 text-card-foreground">
              <div className="mb-4 flex items-center">
                <Code className="mr-3 size-8 text-primary" />
                <h3 className="text-xl font-semibold">Developer Experience</h3>
              </div>
              <p className="text-muted-foreground">
                Turborepo monorepo with shared packages, TypeScript, comprehensive testing, and detailed documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Follow our comprehensive setup guide to get the entire platform running locally.
          </p>

          <Link
            href="/docs/5-development/setup"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-lg font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <BookOpen className="mr-2 size-5" />
            Setup Guide
            <ArrowRight className="ml-2 size-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
