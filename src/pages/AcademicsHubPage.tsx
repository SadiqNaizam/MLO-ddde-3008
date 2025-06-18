import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';

import GlobalHeader from '@/components/layout/GlobalHeader';
import GlobalFooter from '@/components/layout/GlobalFooter';
import DepartmentShowcaseCard from '@/components/DepartmentShowcaseCard';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search, Cpu, FlaskConical, Rocket, Lightbulb, Atom } from 'lucide-react'; // Added Atom for variety

interface DepartmentDisplayData {
  slug: string;
  name: string;
  description: string;
  keyResearchAreas: string[];
  labsUrl: string;
  imageUrl?: string;
  IconComponent?: React.ElementType;
  departmentPagePath?: string;
  category: 'department' | 'research_center';
}

const allDepartmentsAndCenters: DepartmentDisplayData[] = [
  {
    slug: 'computer-science',
    name: 'Department of Computer Science',
    description: 'Pioneering advancements in algorithms, software engineering, and computational theory. Home to leading AI and ML research.',
    keyResearchAreas: ['Artificial Intelligence', 'Machine Learning', 'Cybersecurity', 'Data Science', 'Quantum Computing'],
    labsUrl: '/research-and-innovation/cs-labs',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4138d04d405b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbXB1dGVyJTIwc2NpZW5jZXxlbnwwfDB8MHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80',
    IconComponent: Cpu,
    category: 'department',
  },
  {
    slug: 'ai-llm-research',
    name: 'AI & LLM Research Center',
    description: 'Dedicated to foundational and applied research in Artificial Intelligence, with a special focus on Large Language Models and their societal impact.',
    keyResearchAreas: ['Large Language Models', 'Natural Language Processing', 'AI Ethics', 'Cognitive AI'],
    labsUrl: '/research-and-innovation/ai-llm-center',
    imageUrl: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFyZ2UlMjBsYW5ndWFnZSUyMG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80',
    IconComponent: Lightbulb,
    category: 'research_center',
  },
  {
    slug: 'robotics-mechatronics',
    name: 'Department of Robotics & Mechatronics',
    description: 'Innovating in autonomous systems, human-robot interaction, and intelligent automation for various industries.',
    keyResearchAreas: ['Autonomous Systems', 'Humanoid Robots', 'Drone Technology', 'Medical Robotics'],
    labsUrl: '/research-and-innovation/robotics-labs', // Assuming an internal link convention
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-2858200e9486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9ib3RpY3N8ZW58MHwwfDB8fDA%3D&auto=format&fit=crop&w=600&q=80',
    IconComponent: Rocket,
    category: 'department',
  },
  {
    slug: 'bioengineering-biotech',
    name: 'Center for Bioengineering & Biotechnology',
    description: 'Fusing engineering principles with biological sciences to address challenges in healthcare, sustainability, and synthetic biology.',
    keyResearchAreas: ['Medical Devices', 'Synthetic Biology', 'Biomaterials', 'Computational Biology'],
    labsUrl: '/research-and-innovation/bioengineering-center',
    imageUrl: 'https://images.unsplash.com/photo-1581093447472-9590f7523809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmlvdGVjaG5vbG9neSUyMGxhYnxlbnwwfDB8MHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80',
    IconComponent: FlaskConical,
    category: 'research_center',
  },
  {
    slug: 'advanced-materials',
    name: 'Department of Advanced Materials Science',
    description: 'Exploring novel materials for applications in aerospace, energy, and quantum technologies. Focus on nanomaterials and smart materials.',
    keyResearchAreas: ['Nanomaterials', 'Smart Materials', 'Quantum Materials', 'Sustainable Polymers'],
    labsUrl: '/research-and-innovation/materials-science-labs',
    imageUrl: 'https://images.unsplash.com/photo-1518314916360-663f8f305091?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWF0ZXJpYWxzJTIwc2NpZW5jZXxlbnwwfDB8MHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80',
    IconComponent: Atom,
    category: 'department',
  },
];

const AcademicsHubPage: React.FC = () => {
  console.log('AcademicsHubPage loaded');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'department' | 'research_center'>('all');

  const filteredItems = useMemo(() => {
    return allDepartmentsAndCenters
      .filter(item => {
        if (activeTab === 'all') return true;
        return item.category === activeTab;
      })
      .filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.keyResearchAreas.some(area => area.toLowerCase().includes(searchTerm.toLowerCase()))
      );
  }, [searchTerm, activeTab]);

  return (
    <div className="flex flex-col min-h-screen bg-background dark:bg-gray-900">
      <GlobalHeader />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section aria-label="Breadcrumbs" className="mb-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Academics Hub</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </section>

        <section aria-labelledby="page-title" className="text-center mb-12">
          <h1 id="page-title" className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            Explore Our Disciplines & Research
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Innovatech University is at the forefront of engineering education and technological research. Discover our diverse programs, state-of-the-art facilities, and opportunities to shape the future.
          </p>
        </section>

        <section aria-label="Search and filter controls" className="mb-10">
          <div className="relative max-w-2xl mx-auto mb-6">
            <Input
              type="search"
              placeholder="Search disciplines, research areas, or keywords..."
              className="w-full pl-12 pr-4 py-3 text-base rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search academic programs and research centers"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
          </div>

          <Tabs 
            value={activeTab} 
            onValueChange={(value) => setActiveTab(value as 'all' | 'department' | 'research_center')} 
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 sm:max-w-lg mx-auto h-auto sm:h-12">
              <TabsTrigger value="all" className="py-2 sm:py-0">All Programs</TabsTrigger>
              <TabsTrigger value="department" className="py-2 sm:py-0">Engineering Departments</TabsTrigger>
              <TabsTrigger value="research_center" className="py-2 sm:py-0">Research Centers</TabsTrigger>
            </TabsList>
          </Tabs>
        </section>

        <section aria-live="polite" aria-atomic="true">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
              {filteredItems.map((item) => (
                <DepartmentShowcaseCard
                  key={item.slug}
                  slug={item.slug}
                  name={item.name}
                  description={item.description}
                  keyResearchAreas={item.keyResearchAreas}
                  labsUrl={item.labsUrl}
                  imageUrl={item.imageUrl}
                  IconComponent={item.IconComponent} // Pass the specific icon
                  departmentPagePath={item.departmentPagePath || `/academics-hub/${item.slug}`}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500 dark:text-gray-400">No programs or centers match your current search or filter.</p>
              <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">Try adjusting your search term or selecting a different category.</p>
            </div>
          )}
        </section>

        <section aria-labelledby="interdisciplinary-title" className="my-16 py-12 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="interdisciplinary-title" className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Interdisciplinary Frontiers
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              At Innovatech, innovation thrives at the intersection of disciplines. Our collaborative environment encourages students and faculty to explore synergies between fields, leading to groundbreaking discoveries and solutions.
            </p>
            <Link 
              to="/research-and-innovation?focus=interdisciplinary" // Example link to a filtered research page
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 dark:bg-primary-dark dark:hover:bg-primary-dark/90 transition-colors"
            >
              Discover Interdisciplinary Projects
            </Link>
          </div>
        </section>
      </main>
      <GlobalFooter />
    </div>
  );
};

export default AcademicsHubPage;