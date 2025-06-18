import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Custom Components
import GlobalHeader from '@/components/layout/GlobalHeader';
import GlobalFooter from '@/components/layout/GlobalFooter';
import FacultyProfileCard from '@/components/FacultyProfileCard';

// Shadcn/ui Components
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";

// Lucide Icons
import { Search } from 'lucide-react';

interface FacultyMember {
  id: string;
  photoUrl: string;
  name: string;
  title: string;
  department: string;
  researchInterests: string[];
}

// Placeholder data for faculty members
const allFacultyMembers: FacultyMember[] = [
  {
    id: 'dr-elara-vance',
    photoUrl: 'https://images.unsplash.com/photo-1580894732444-8ec533675014?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    name: 'Dr. Elara Vance',
    title: 'Professor & Head of Department',
    department: 'Artificial Intelligence & Machine Learning',
    researchInterests: ['Deep Learning', 'Natural Language Processing', 'Ethical AI', 'Reinforcement Learning'],
  },
  {
    id: 'dr-kenji-tanaka',
    photoUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    name: 'Dr. Kenji Tanaka',
    title: 'Associate Professor',
    department: 'Robotics Engineering',
    researchInterests: ['Humanoid Robots', 'Autonomous Systems', 'Surgical Robotics', 'AI in Automation'],
  },
  {
    id: 'dr-anya-sharma',
    photoUrl: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    name: 'Dr. Anya Sharma',
    title: 'Professor',
    department: 'Quantum Computing',
    researchInterests: ['Quantum Algorithms', 'Quantum Cryptography', 'Quantum Machine Learning'],
  },
  {
    id: 'dr-ben-carter',
    photoUrl: 'https://images.unsplash.com/photo-1627541901053-f67878971416?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    name: 'Dr. Ben Carter',
    title: 'Assistant Professor',
    department: 'Cybersecurity & Network Engineering',
    researchInterests: ['Network Security', 'Blockchain Technology', 'IoT Security', 'Cryptography'],
  },
  {
    id: 'dr-chloe-davis',
    photoUrl: 'https://images.unsplash.com/photo-1530785601000-8f89105ac069?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    name: 'Dr. Chloe Davis',
    title: 'Professor',
    department: 'Bioinformatics & Computational Biology',
    researchInterests: ['Genomic Data Analysis', 'Systems Biology', 'Drug Discovery', 'Personalized Medicine'],
  },
  {
    id: 'dr-marcus-chen',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    name: 'Dr. Marcus Chen',
    title: 'Distinguished Research Fellow',
    department: 'Advanced Materials Science',
    researchInterests: ['Nanotechnology', 'Smart Materials', 'Sustainable Energy Materials', 'Photonics'],
  },
   {
    id: 'dr-isabelle-moreau',
    photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    name: 'Dr. Isabelle Moreau',
    title: 'Professor',
    department: 'Software Engineering & Architecture',
    researchInterests: ['Cloud Computing', 'Microservices', 'DevOps', 'Scalable Systems'],
  },
  {
    id: 'dr-samuel-green',
    photoUrl: 'https://images.unsplash.com/photo-1635107510872-7930517e07fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    name: 'Dr. Samuel Green',
    title: 'Lecturer',
    department: 'Data Science & Analytics',
    researchInterests: ['Big Data', 'Machine Learning Applications', 'Data Visualization', 'Statistical Modeling'],
  },
  {
    id: 'dr-olivia-lee',
    photoUrl: 'https://images.unsplash.com/photo-1571260899240-9950356c1086?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    name: 'Dr. Olivia Lee',
    title: 'Associate Professor',
    department: 'Human-Computer Interaction',
    researchInterests: ['User Experience (UX)', 'Virtual Reality (VR)', 'Accessible Technology', 'AI Ethics in HCI'],
  }
];

const ITEMS_PER_PAGE = 6;

const FacultyDirectoryPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    console.log('FacultyDirectoryPage loaded');
    window.scrollTo(0, 0); // Scroll to top on initial load
  }, []);

  const filteredFaculty = useMemo(() => {
    const term = searchTerm.toLowerCase();
    if (!term) {
      return allFacultyMembers;
    }
    return allFacultyMembers.filter(faculty =>
      faculty.name.toLowerCase().includes(term) ||
      faculty.department.toLowerCase().includes(term) ||
      faculty.researchInterests.some(interest => interest.toLowerCase().includes(term))
    );
  }, [searchTerm]);

  const paginatedFaculty = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredFaculty.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredFaculty, currentPage]);

  const totalPages = Math.ceil(filteredFaculty.length / ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 200, behavior: 'smooth' }); // Scroll to just above the cards
  };
  
  const getPaginationItems = () => {
    const pageItems = [];
    const maxPagesToShow = 5; // Max number of page links to show (e.g., 1 ... 4 5 6 ... 10)
    const halfPagesToShow = Math.floor(maxPagesToShow / 2);

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageItems.push(
          <PaginationItem key={`page-${i}`}>
            <PaginationLink href="#" onClick={(e) => { e.preventDefault(); handlePageChange(i); }} isActive={currentPage === i}>
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    } else {
      // Always show first page
      pageItems.push(
        <PaginationItem key="page-1">
          <PaginationLink href="#" onClick={(e) => { e.preventDefault(); handlePageChange(1); }} isActive={currentPage === 1}>
            1
          </PaginationLink>
        </PaginationItem>
      );

      let startPage = Math.max(2, currentPage - halfPagesToShow + (currentPage > totalPages - halfPagesToShow ? maxPagesToShow - (totalPages - currentPage) -1 : 0) );
      let endPage = Math.min(totalPages - 1, currentPage + halfPagesToShow - (currentPage < halfPagesToShow+1 ? maxPagesToShow - currentPage : 0));
      
      if(currentPage - halfPagesToShow <= 1) endPage = Math.min(totalPages-1, maxPagesToShow-1);
      if(currentPage + halfPagesToShow >= totalPages) startPage = Math.max(2, totalPages - maxPagesToShow + 2);


      if (startPage > 2) {
        pageItems.push(<PaginationItem key="ellipsis-start"><PaginationEllipsis /></PaginationItem>);
      }

      for (let i = startPage; i <= endPage; i++) {
        pageItems.push(
          <PaginationItem key={`page-${i}`}>
            <PaginationLink href="#" onClick={(e) => { e.preventDefault(); handlePageChange(i); }} isActive={currentPage === i}>
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }

      if (endPage < totalPages - 1) {
        pageItems.push(<PaginationItem key="ellipsis-end"><PaginationEllipsis /></PaginationItem>);
      }
      
      // Always show last page
      pageItems.push(
        <PaginationItem key={`page-${totalPages}`}>
          <PaginationLink href="#" onClick={(e) => { e.preventDefault(); handlePageChange(totalPages); }} isActive={currentPage === totalPages}>
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }
    return pageItems;
  };


  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-gray-100">
      <GlobalHeader />
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Breadcrumbs and Title Section */}
          <header className="mb-8 md:mb-12">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Faculty Directory</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-4">
              Our Esteemed Faculty
            </h1>
            <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-3xl">
              Meet the brilliant minds shaping the future of technology and engineering. Our faculty are world-class researchers, dedicated educators, and industry leaders.
            </p>
          </header>

          {/* Search Section */}
          <section className="mb-8 md:mb-12">
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by name, department, or research interest..."
                className="w-full pl-12 pr-4 py-3 text-base rounded-lg shadow-sm border-gray-300 dark:border-gray-600 focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-white"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1); // Reset to first page on new search
                }}
                aria-label="Search faculty"
              />
            </div>
          </section>

          {/* Faculty Profiles Grid */}
          {filteredFaculty.length === 0 ? (
             <div className="text-center py-12 min-h-[300px] flex flex-col justify-center items-center">
                <h2 className="text-2xl font-semibold text-muted-foreground mb-2">No Faculty Found</h2>
                <p className="text-muted-foreground">
                  No faculty members match your current search criteria. Please try different keywords.
                </p>
             </div>
          ) : (
            <>
              <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
                {paginatedFaculty.map((faculty) => (
                  <FacultyProfileCard
                    key={faculty.id}
                    id={faculty.id}
                    name={faculty.name}
                    title={faculty.title}
                    department={faculty.department}
                    photoUrl={faculty.photoUrl}
                    researchInterests={faculty.researchInterests}
                  />
                ))}
              </section>

              {/* Pagination Section */}
              {totalPages > 1 && (
                <section className="mt-12 flex justify-center">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          href="#"
                          onClick={(e) => { e.preventDefault(); if (currentPage > 1) handlePageChange(currentPage - 1); }}
                          className={currentPage === 1 ? "pointer-events-none opacity-60" : ""}
                          aria-disabled={currentPage === 1}
                        />
                      </PaginationItem>
                      {getPaginationItems()}
                      <PaginationItem>
                        <PaginationNext
                          href="#"
                          onClick={(e) => { e.preventDefault(); if (currentPage < totalPages) handlePageChange(currentPage + 1); }}
                          className={currentPage === totalPages ? "pointer-events-none opacity-60" : ""}
                          aria-disabled={currentPage === totalPages}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </section>
              )}
            </>
          )}
        </div>
      </main>
      <GlobalFooter />
    </div>
  );
};

export default FacultyDirectoryPage;