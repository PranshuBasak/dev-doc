import Link from 'next/link';
import { ArrowRight, BookOpen, Code, Database, ShoppingCart, Sparkles, Zap, Shield, Linkedin, ExternalLink, User } from 'lucide-react';
import type { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  gradient: string;
}

function FeatureCard({ icon, title, description, gradient }: FeatureCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-primary/50">
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${gradient}`} />
      <div className="relative z-10">
        <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-primary/10 p-3 transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
        <h3 className="mb-3 text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

interface StatCardProps {
  number: string;
  label: string;
}

function StatCard({ number, label }: StatCardProps) {
  return (
    <div className="text-center">
      <div className="mb-2 text-4xl font-bold gradient-text">{number}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col overflow-hidden">
      {/* Hero Section with Gradient Background */}
      <section className="relative flex flex-1 flex-col items-center justify-center px-4 py-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="mx-auto max-w-5xl text-center relative z-10">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium backdrop-blur-sm">
            <Sparkles className="size-4 text-primary" />
            <span>Production-Ready Microservices Architecture</span>
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="block mb-2">E-commerce Platform</span>
            <span className="gradient-text">Documentation Hub</span>
          </h1>

          <p className="mb-10 text-lg text-muted-foreground sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive documentation for a full-stack e-commerce application built with modern microservices architecture, event-driven design, and best practices.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center mb-16">
            <Link
              href="/docs"
              className="group inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/50 animate-glow"
            >
              <BookOpen className="mr-2 size-5" />
              Explore Documentation
              <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="https://github.com/PranshuBasak/microservices-ecommerce"
              className="inline-flex items-center justify-center rounded-xl border-2 border-border bg-background/50 backdrop-blur-sm px-8 py-4 text-base font-semibold transition-all duration-300 hover:scale-105 hover:bg-accent hover:border-primary/50"
            >
              <Code className="mr-2 size-5" />
              View Source Code
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <StatCard number="5+" label="Microservices" />
            <StatCard number="100%" label="TypeScript" />
            <StatCard number="∞" label="Scalability" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative border-t bg-muted/30 px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-4xl font-bold">
              What&apos;s <span className="gradient-text">Inside</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A complete ecosystem of modern technologies and architectural patterns
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<ShoppingCart className="size-8 text-primary" />}
              title="Client Application"
              description="Modern Next.js storefront with product catalog, shopping cart, and secure checkout powered by Stripe integration."
              gradient="bg-gradient-to-br from-blue-500 to-cyan-500"
            />

            <FeatureCard
              icon={<Database className="size-8 text-primary" />}
              title="Backend Services"
              description="Microservices for products, orders, payments, authentication, and email with event-driven communication via Kafka."
              gradient="bg-gradient-to-br from-purple-500 to-pink-500"
            />

            <FeatureCard
              icon={<Code className="size-8 text-primary" />}
              title="Developer Experience"
              description="Turborepo monorepo with shared packages, TypeScript, comprehensive testing, and detailed documentation."
              gradient="bg-gradient-to-br from-orange-500 to-red-500"
            />

            <FeatureCard
              icon={<Zap className="size-8 text-primary" />}
              title="Event-Driven Architecture"
              description="Apache Kafka for reliable message streaming, ensuring loose coupling and high scalability across services."
              gradient="bg-gradient-to-br from-green-500 to-teal-500"
            />

            <FeatureCard
              icon={<Shield className="size-8 text-primary" />}
              title="Secure Authentication"
              description="JWT-based authentication with refresh tokens, role-based access control, and secure session management."
              gradient="bg-gradient-to-br from-indigo-500 to-purple-500"
            />

            <FeatureCard
              icon={<Sparkles className="size-8 text-primary" />}
              title="Modern Tech Stack"
              description="Built with Next.js 15, React 19, TypeScript, Prisma, PostgreSQL, and deployed with Docker containers."
              gradient="bg-gradient-to-br from-pink-500 to-rose-500"
            />
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="relative border-t px-4 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 -z-10" />
        
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-4xl font-bold">
              Meet the <span className="gradient-text">Developer</span>
            </h2>
          </div>

          <div className="relative rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 md:p-12 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Avatar */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-500 rounded-full blur-xl opacity-50" />
                <img
                  src="https://res.cloudinary.com/dc2tldczs/image/upload/v1759687964/1759686003033_cldmnn_b82ffe.png"
                  alt="Pranshu Basak - Developer"
                  width={150}
                  height={150}
                  className="relative rounded-full border-4 border-background shadow-xl"
                />
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="mb-2 text-2xl font-bold">Pranshu Basak</h3>
                <p className="mb-6 text-muted-foreground leading-relaxed">
                  Passionate Software Engineer crafting innovative web solutions with Next.js, MERN, and Creatio Developer.
                </p>

                {/* Links */}
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <Link
                    href="https://basakspeaks.pranshubasak.site/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium transition-all hover:bg-accent hover:border-primary/50"
                  >
                    <ExternalLink className="size-4" />
                    Personal Blog
                  </Link>

                  <Link
                    href="https://basakspeaks.pranshubasak.site/about"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium transition-all hover:bg-accent hover:border-primary/50"
                  >
                    <User className="size-4" />
                    About Me
                  </Link>

                  <Link
                    href="https://www.linkedin.com/in/pranshubasak/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#0077B5] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#006399] hover:scale-105"
                  >
                    <Linkedin className="size-4" />
                    LinkedIn
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative border-t px-4 py-24">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent -z-10" />
        
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Ready to <span className="gradient-text">Get Started?</span>
          </h2>
          <p className="mb-10 text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow our comprehensive setup guide to get the entire platform running locally in minutes.
          </p>

          <Link
            href="/docs/5-development/setup"
            className="group inline-flex items-center justify-center rounded-xl bg-primary px-10 py-5 text-lg font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/50"
          >
            <BookOpen className="mr-2 size-6" />
            Setup Guide
            <ArrowRight className="ml-2 size-6 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}