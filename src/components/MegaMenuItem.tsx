import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, BookOpen, FlaskConical, Cpu } from 'lucide-react'; // Example icons
import { cn } from '@/lib/utils'; // Assumed to be available from shadcn/ui setup

interface MegaMenuLink {
  label: string;
  href: string;
  icon?: React.ReactElement;
  description?: string;
}

export interface MegaMenuItemProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
  links?: MegaMenuLink[];
  children?: React.ReactNode;
  className?: string;
}

const MegaMenuItem: React.FC<MegaMenuItemProps> = ({
  title,
  description,
  imageUrl,
  imageAlt,
  links,
  children,
  className,
}) => {
  console.log('MegaMenuItem loaded', { title });

  return (
    <div className={cn("p-4 md:p-6 space-y-3", className)}>
      {imageUrl && (
        <div className="mb-3 overflow-hidden rounded-md">
          <img
            src={imageUrl}
            alt={imageAlt || title || 'Mega menu item image'}
            className="w-full h-auto max-h-40 object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      {title && (
        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{title}</h4>
      )}
      {description && (
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      )}
      {links && links.length > 0 && (
        <ul className="space-y-2">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                to={link.href}
                className="group flex items-start text-sm text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 transition-colors duration-200"
              >
                <span className="mr-2 mt-1 flex-shrink-0 h-4 w-4">
                  {link.icon || <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-sky-700 dark:group-hover:text-sky-300" />}
                </span>
                <div className="flex-grow">
                  <span className="font-medium group-hover:underline">{link.label}</span>
                  {link.description && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{link.description}</p>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
      {children}
    </div>
  );
};

// Example usage (for testing or demonstration, not part of the component export directly)
// You would typically use this component within your GlobalHeader or a similar mega menu structure.
/*
const ExampleMegaMenuItems = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-b-lg">
    <MegaMenuItem
      title="Academic Programs"
      links={[
        { label: "AI & Machine Learning", href: "/academics-hub", icon: <Cpu size={16} />, description: "Cutting-edge AI research and studies." },
        { label: "Robotics Engineering", href: "/academics-hub", icon: <FlaskConical size={16} />, description: "Build the future of automation." },
        { label: "Quantum Computing", href: "/academics-hub", description: "Explore the next frontier." },
      ]}
      description="Discover our diverse range of innovative programs."
    />
    <MegaMenuItem
      title="Research & Innovation"
      imageUrl="https://via.placeholder.com/300x150/E0E7FF/4F46E5?Text=Innovation+Hub"
      imageAlt="Innovation Hub"
      links={[
        { label: "Our Labs", href: "/research-and-innovation" },
        { label: "Publications", href: "/research-and-innovation" },
      ]}
    />
    <MegaMenuItem title="Admissions">
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Ready to join the pioneers of tomorrow? Learn about our admissions process and apply today.</p>
      <Link to="/admissions" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700">
        Apply Now <ChevronRight size={16} className="ml-1" />
      </Link>
    </MegaMenuItem>
  </div>
);
*/

export default MegaMenuItem;