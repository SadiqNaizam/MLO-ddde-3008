import React from 'react';
import { Link } from 'react-router-dom';

// Custom Components
import GlobalHeader from '@/components/layout/GlobalHeader';
import GlobalFooter from '@/components/layout/GlobalFooter';
import InteractiveBuildingModelViewer from '@/components/InteractiveBuildingModelViewer';
import DepartmentShowcaseCard from '@/components/DepartmentShowcaseCard';

// Shadcn/ui Components
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, FlaskConical, Microscope, Zap, Leaf, Users } from 'lucide-react';

const carouselItems = [
  {
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2080&auto=format&fit=crop",
    alt: "Modern university campus with innovative architecture",
    title: "Pioneering the Future of Technology",
    subtitle: "Innovatech University: Where groundbreaking research meets world-class education.",
    ctaText: "Explore Our Programs",
    ctaLink: "/academics-hub",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1639756002848-695ada6981b2?q=80&w=2070&auto=format&fit=crop",
    alt: "State-of-the-art robotics lab",
    title: "Innovation at Your Fingertips",
    subtitle: "Engage with cutting-edge facilities and research that defines tomorrow.",
    ctaText: "Discover Research",
    ctaLink: "/research-and-innovation",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
    alt: "Diverse group of students collaborating",
    title: "Join a Global Community of Innovators",
    subtitle: "Shape your future alongside the brightest minds in engineering and technology.",
    ctaText: "Apply Now",
    ctaLink: "/admissions",
  },
];

const departmentData = [
  {
    slug: "ai-robotics",
    name: "Artificial Intelligence & Robotics",
    description: "Leading the charge in intelligent systems, machine learning, and autonomous robotics. Home to the National AI Research Facility.",
    keyResearchAreas: ["Machine Learning", "Computer Vision", "Human-Robot Interaction", "NLP"],
    labsUrl: "/research-and-innovation#ai-labs",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-28fc88642788?q=80&w=2070&auto=format&fit=crop",
    IconComponent: Cpu,
    departmentPagePath: "/academics-hub?discipline=ai-robotics",
  },
  {
    slug: "quantum-systems",
    name: "Quantum & Photonic Engineering",
    description: "Exploring the frontiers of quantum computing, communication, and advanced photonic materials and devices.",
    keyResearchAreas: ["Quantum Computing", "Photonics", "Nanotechnology", "Quantum Sensors"],
    labsUrl: "/research-and-innovation#quantum-labs",
    imageUrl: "https://images.unsplash.com/photo-1635405193085-378005780a73?q=80&w=2070&auto=format&fit=crop",
    IconComponent: Zap,
    departmentPagePath: "/academics-hub?discipline=quantum-systems",
  },
  {
    slug: "bio-medical-engineering",
    name: "BioMedical & Sustainable Engineering",
    description: "Innovating at the intersection of biology, medicine, and engineering to solve global health and environmental challenges.",
    keyResearchAreas: ["Bio-instrumentation", "Tissue Engineering", "Sustainable Materials", "Renewable Energy"],
    labsUrl: "/research-and-innovation#biomed-labs",
    imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2070&auto=format&fit=crop",
    IconComponent: Leaf,
    departmentPagePath: "/academics-hub?discipline=bio-medical-engineering",
  },
];

const researchHighlightsData = [
  {
    title: "Advancements in Neural Network Efficiency",
    summary: "Our researchers have developed a novel architecture that reduces computational overhead for deep learning models by up to 40%.",
    link: "/research-and-innovation#neural-efficiency",
    icon: Cpu,
    imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Graphene-Based Biosensors",
    summary: "Pioneering work in graphene biosensors demonstrates unprecedented sensitivity for early disease detection.",
    link: "/research-and-innovation#graphene-biosensors",
    icon: Microscope,
    imageUrl: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Next-Gen Energy Storage Solutions",
    summary: "Development of new battery chemistries promises higher energy density and longer lifecycles for sustainable power.",
    link: "/research-and-innovation#energy-storage",
    icon: FlaskConical,
    imageUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1780&auto=format&fit=crop",
  },
];

const Homepage: React.FC = () => {
  console.log('Homepage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <GlobalHeader />
      <main className="flex-grow">
        {/* Hero Section: Carousel */}
        <section className="relative">
          <Carousel
            opts={{ loop: true }}
            className="w-full"
            data-testid="hero-carousel"
          >
            <CarouselContent>
              {carouselItems.map((item, index) => (
                <CarouselItem key={index} className="relative">
                  <div className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] max-h-[800px] min-h-[400px]">
                    <img
                      src={item.imageUrl}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col items-center justify-end text-center p-6 sm:p-12 pb-12 sm:pb-20">
                      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 sm:mb-4 leading-tight shadow-lg">
                        {item.title}
                      </h1>
                      <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto shadow-md">
                        {item.subtitle}
                      </p>
                      <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        <Link to={item.ctaLink}>
                          {item.ctaText} <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
          </Carousel>
        </section>

        {/* Welcome & Interactive Model Section */}
        <section className="py-16 lg:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                  Welcome to Innovatech University
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  At the vanguard of pure engineering and cutting-edge technology research, Innovatech University is dedicated to fostering innovation, nurturing global talent, and architecting the future. Discover an environment where curiosity thrives and boundaries are shattered.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Explore our state-of-the-art campus and envision your journey with us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                        <Link to="/admissions">
                            Start Your Application <Users className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                        <Link to="/academics-hub">
                            View Academic Programs <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
              </div>
              <div>
                <InteractiveBuildingModelViewer
                  buildingName="Advanced Research Complex"
                  description="A glimpse into our hub of innovation, featuring collaborative labs and next-generation research facilities."
                  imageUrl="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop"
                  modelType="3d"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Disciplines Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-primary mb-4">
              Explore Our Core Disciplines
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Dive into specialized fields led by world-renowned faculty, equipped with state-of-the-art resources to drive technological breakthroughs.
            </p>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {departmentData.map((dept) => (
                <DepartmentShowcaseCard key={dept.slug} {...dept} />
              ))}
            </div>
            <div className="text-center mt-16">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/academics-hub">
                  All Academic Programs <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Research Highlights Section */}
        <section className="py-16 lg:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-primary mb-4">
              Groundbreaking Research & Innovation
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Witness the impact of our pioneering research that addresses global challenges and shapes the technological landscape.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {researchHighlightsData.map((highlight, index) => (
                <Card key={index} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {highlight.imageUrl && (
                    <div className="aspect-video overflow-hidden">
                        <img src={highlight.imageUrl} alt={highlight.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" loading="lazy"/>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl flex items-start">
                        {React.createElement(highlight.icon, { className: "mr-3 h-6 w-6 text-primary flex-shrink-0 mt-1" })} 
                        <span>{highlight.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm leading-relaxed">{highlight.summary}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild className="w-full">
                      <Link to={highlight.link}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="text-center mt-16">
              <Button size="lg" asChild variant="outline">
                <Link to="/research-and-innovation">
                  Explore All Research <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action Section - Parallax Example */}
        <section
          className="py-20 lg:py-32 bg-cover bg-fixed bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')" }}
        >
          <div className="container mx-auto px-4 text-center">
            <div className="bg-black/60 backdrop-blur-sm p-8 md:p-12 rounded-lg inline-block">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Shape the Future?
              </h2>
              <p className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto">
                Join a vibrant community at Innovatech University, dedicated to solving the world's most complex challenges through pioneering technology and engineering.
              </p>
              <Button size="lg" asChild className="bg-primary hover:bg-primary/80 text-primary-foreground text-lg px-8 py-6">
                <Link to="/admissions">
                  Apply to Innovatech University
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <GlobalFooter />
    </div>
  );
};

export default Homepage;