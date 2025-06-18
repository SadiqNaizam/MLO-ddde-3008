import React from 'react';
import { Link } from 'react-router-dom';

// Custom Components
import GlobalHeader from '@/components/layout/GlobalHeader';
import GlobalFooter from '@/components/layout/GlobalFooter';
import ResearchHighlightCard from '@/components/ResearchHighlightCard';

// Shadcn/ui Components
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';

// Lucide Icons
import { ChevronRight, FileText, Lightbulb, Rocket, FlaskConical, Landmark, Users, Award } from 'lucide-react';

// Placeholder data
const researchHighlightsData = [
  {
    title: "LLM Research Center: Advancing Conversational AI",
    summary: "Explore our pioneering work in Large Language Models, focusing on ethical AI, context understanding, and real-world applications that redefine human-computer interaction.",
    imageUrl: "https://via.placeholder.com/600x338?text=LLM+Research+Center",
    category: 'Project' as 'Paper' | 'Patent' | 'Startup' | 'Project' | 'Grant' | 'Other',
    detailsLink: "/research-and-innovation#llm-center-details", // Placeholder link to a section or subpage
    linkText: "Discover LLM Center"
  },
  {
    title: "Quantum Entanglement for Secure Communication",
    summary: "Our physicists are pushing the boundaries of quantum mechanics to develop unbreachable communication networks, safeguarding the future of digital information.",
    imageUrl: "https://via.placeholder.com/600x338?text=Quantum+Communication",
    category: 'Paper' as 'Paper' | 'Patent' | 'Startup' | 'Project' | 'Grant' | 'Other',
    detailsLink: "/research-and-innovation/paper/quantum-entanglement",
    linkText: "Read Publication"
  },
  {
    title: "Patent: Bio-Integrated Neural Interface",
    summary: "A groundbreaking patent for a novel neural interface that seamlessly integrates with biological systems, offering new avenues for medical prosthetics and cognitive enhancement.",
    imageUrl: "https://via.placeholder.com/600x338?text=Neural+Interface+Patent",
    category: 'Patent' as 'Paper' | 'Patent' | 'Startup' | 'Project' | 'Grant' | 'Other',
    detailsLink: "/research-and-innovation/patent/bio-neural-interface",
    linkText: "View Patent Details"
  },
  {
    title: "AeroSynth: AI-Powered Aerospace Materials",
    summary: "A campus-born startup revolutionizing aerospace engineering with AI-designed, ultra-lightweight composite materials for next-generation aircraft and spacecraft.",
    imageUrl: "https://via.placeholder.com/600x338?text=AeroSynth+Startup",
    category: 'Startup' as 'Paper' | 'Patent' | 'Startup' | 'Project' | 'Grant' | 'Other',
    detailsLink: "https://example-aerosynth.com", // External link example
    linkText: "Visit AeroSynth"
  },
];

const researchStatsData = [
  { metric: "Peer-Reviewed Publications (Annual)", value: "300+", growth: "+18%" },
  { metric: "Patents Granted (Total)", value: "120+", growth: "+22%" },
  { metric: "Active Research Grants Funding", value: "$75M+", growth: "+15%" },
  { metric: "Industry Partnerships", value: "60+", growth: "+10%" },
  { metric: "Technology Spin-offs", value: "25+", growth: "+30%" },
];

const researchDomainsData = [
  {
    id: "ai-robotics",
    title: "Artificial Intelligence & Robotics",
    icon: <Lightbulb className="mr-2 h-5 w-5 text-primary" />,
    content: "Leading advancements in machine learning, autonomous systems, human-robot interaction, and AI ethics. Our work spans from theoretical foundations to applied solutions in healthcare, manufacturing, and exploration.",
    imageUrl: "https://via.placeholder.com/400x200?text=AI+&+Robotics+Lab"
  },
  {
    id: "biotech-health",
    title: "Biotechnology & Health Sciences",
    icon: <FlaskConical className="mr-2 h-5 w-5 text-primary" />,
    content: "Innovations in genetic engineering, personalized medicine, biomaterials, and neuroscience. We aim to tackle global health challenges and improve quality of life through interdisciplinary research.",
    imageUrl: "https://via.placeholder.com/400x200?text=Biotech+Lab"
  },
  {
    id: "sustainable-tech",
    title: "Sustainable Technologies & Energy",
    icon: <Rocket className="mr-2 h-5 w-5 text-primary" />,
    content: "Developing cutting-edge solutions for renewable energy, green infrastructure, climate change mitigation, and circular economy models. Our focus is on creating a sustainable future for all.",
    imageUrl: "https://via.placeholder.com/400x200?text=Sustainable+Tech+Lab"
  },
];

const ResearchAndInnovationPage: React.FC = () => {
  console.log('ResearchAndInnovationPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-muted/30">
      <GlobalHeader />

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Research & Innovation</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Hero Section */}
          <section className="mb-12 md:mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
              Pioneering the Frontiers of Technology
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              At Innovatech University, we are dedicated to groundbreaking research and transformative innovations that shape the future. Explore our discoveries, facilities, and the brilliant minds driving progress.
            </p>
          </section>

          {/* Featured Research Highlights Section */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-3xl font-semibold tracking-tight mb-8 text-center md:text-left">Featured Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {researchHighlightsData.map((highlight, index) => (
                <ResearchHighlightCard
                  key={index}
                  title={highlight.title}
                  summary={highlight.summary}
                  imageUrl={highlight.imageUrl}
                  category={highlight.category}
                  detailsLink={highlight.detailsLink}
                  linkText={highlight.linkText}
                />
              ))}
            </div>
          </section>
          
          {/* Research Domains Section with Accordion/Cards */}
          <section id="llm-center-details" className="mb-12 md:mb-16 scroll-mt-20">
            <h2 className="text-3xl font-semibold tracking-tight mb-8 text-center">Explore Our Research Domains</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {researchDomainsData.map((domain) => (
                    <Card key={domain.id} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        {domain.imageUrl && <img src={domain.imageUrl} alt={domain.title} className="w-full h-48 object-cover" />}
                        <CardHeader>
                            <CardTitle className="flex items-center text-xl">
                                {domain.icon}
                                {domain.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground text-sm">{domain.content}</p>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" asChild className="w-full">
                                <Link to={`/research-and-innovation/domain/${domain.id}`}>
                                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
          </section>


          {/* Research Statistics Section */}
          <section className="mb-12 md:mb-16">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl flex items-center">
                  <Award className="mr-3 h-7 w-7 text-primary" />
                  Our Research Impact by the Numbers
                </CardTitle>
                <CardDescription>
                  Quantifying our commitment to excellence and innovation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableCaption>Annual research metrics and achievements.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[60%]">Metric</TableHead>
                      <TableHead>Value</TableHead>
                      <TableHead className="text-right">YoY Growth</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {researchStatsData.map((stat) => (
                      <TableRow key={stat.metric}>
                        <TableCell className="font-medium">{stat.metric}</TableCell>
                        <TableCell>{stat.value}</TableCell>
                        <TableCell className="text-right text-green-600">{stat.growth}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </section>

          {/* Facilities and Startup Center Section */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-3xl font-semibold tracking-tight mb-8 text-center">Our Ecosystem of Innovation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Landmark className="mr-2 h-6 w-6 text-primary" />
                    State-of-the-Art Labs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <img src="https://via.placeholder.com/500x281?text=Advanced+Research+Lab" alt="Advanced Research Lab" className="rounded-md mb-4" />
                  <p className="text-muted-foreground mb-4">
                    Equipped with the latest technology, our advanced research laboratories provide an unparalleled environment for discovery and experimentation across all disciplines.
                  </p>
                  <Button asChild variant="secondary">
                    <Link to="/facilities/labs">Explore Labs <ChevronRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Users className="mr-2 h-6 w-6 text-primary" />
                    Innovatech Startup Center
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <img src="https://via.placeholder.com/500x281?text=Startup+Incubator" alt="Startup Incubator" className="rounded-md mb-4" />
                  <p className="text-muted-foreground mb-4">
                    Fostering entrepreneurship, our Startup Center provides resources, mentorship, and funding opportunities to transform groundbreaking ideas into impactful ventures.
                  </p>
                  <Button asChild variant="secondary">
                    <Link to="/entrepreneurship/startup-center">Visit Startup Center <ChevronRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>
          
          {/* Call to Action / Further Exploration */}
          <section className="text-center py-10">
            <h2 className="text-2xl font-semibold mb-4">Ready to Collaborate or Learn More?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Discover partnership opportunities, explore our publications, or connect with our researchers.
            </p>
            <div className="flex justify-center gap-4">
                <Button size="lg" asChild>
                    <Link to="/contact-us">Contact Research Office</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                    <Link to="/faculty-directory">Find a Researcher</Link>
                </Button>
            </div>
          </section>

        </div>
      </main>

      <GlobalFooter />
    </div>
  );
};

export default ResearchAndInnovationPage;