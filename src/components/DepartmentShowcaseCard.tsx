import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Building2, ArrowRight, ExternalLink } from 'lucide-react';

interface DepartmentShowcaseCardProps {
  slug: string; // e.g., "robotics-engineering"
  name: string; // e.g., "Department of Robotics Engineering"
  description: string; // A brief summary
  keyResearchAreas: string[]; // e.g., ["Humanoid Robots", "AI in Automation"]
  labsUrl: string; // URL to the labs page/section, can be internal or external
  imageUrl?: string; // URL for a representative image
  IconComponent?: React.ElementType; // Optional custom icon component (e.g., a Lucide icon)
  departmentPagePath?: string; // Optional path to the full department page. Defaults to /academics-hub/{slug}
}

const DepartmentShowcaseCard: React.FC<DepartmentShowcaseCardProps> = ({
  slug,
  name,
  description,
  keyResearchAreas,
  labsUrl,
  imageUrl,
  IconComponent,
  departmentPagePath,
}) => {
  console.log(`DepartmentShowcaseCard loaded for: ${name}`);

  const actualDepartmentPagePath = departmentPagePath || `/academics-hub/${slug}`;
  const isExternalLabsLink = labsUrl.startsWith('http://') || labsUrl.startsWith('https://');

  const renderIconOrImage = () => {
    if (imageUrl) {
      return (
        <AspectRatio ratio={16 / 9} className="bg-muted">
          <img
            src={imageUrl}
            alt={`Visual representation for ${name}`}
            className="object-cover w-full h-full rounded-t-lg transition-transform duration-300 group-hover:scale-105"
          />
        </AspectRatio>
      );
    }
    const IconToShow = IconComponent || Building2;
    return (
      <div className="flex justify-center items-center h-40 sm:h-48 bg-muted rounded-t-lg p-4">
        <IconToShow className="w-16 h-16 sm:w-20 sm:h-20 text-muted-foreground transition-transform duration-300 group-hover:scale-110" />
      </div>
    );
  };

  return (
    <Card className="w-full max-w-sm overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02] flex flex-col group bg-card border border-border">
      <CardHeader className="p-0">
        {renderIconOrImage()}
      </CardHeader>

      <CardContent className="p-5 sm:p-6 flex-grow space-y-3 sm:space-y-4">
        <CardTitle className="text-lg sm:text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
          {name}
        </CardTitle>
        <p className="text-xs sm:text-sm text-muted-foreground h-16 sm:h-20 overflow-hidden"> 
          {/* Limited height for description consistency, content may clip */}
          {description}
        </p>
        
        <div>
          <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
            Key Research Areas
          </h4>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {keyResearchAreas.slice(0, 3).map((area, index) => (
              <Badge key={index} variant="secondary" className="text-xs sm:text-sm Px-2 py-0.5 sm:px-2.5 sm:py-1">
                {area}
              </Badge>
            ))}
            {keyResearchAreas.length > 3 && (
                <Badge variant="outline" className="text-xs sm:text-sm Px-2 py-0.5 sm:px-2.5 sm:py-1">
                    +{keyResearchAreas.length - 3} more
                </Badge>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-5 sm:p-6 border-t mt-auto">
        <div className="flex flex-col sm:flex-row w-full gap-2 sm:gap-3">
          <Button asChild className="flex-1 text-xs sm:text-sm" variant="default" size="sm">
            <Link to={actualDepartmentPagePath} className="flex items-center justify-center">
              Learn More <ArrowRight className="ml-1.5 sm:ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Link>
          </Button>
          {isExternalLabsLink ? (
            <Button asChild variant="outline" size="sm" className="flex-1 text-xs sm:text-sm">
              <a href={labsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                Visit Labs <ExternalLink className="ml-1.5 sm:ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </a>
            </Button>
          ) : (
            <Button asChild variant="outline" size="sm" className="flex-1 text-xs sm:text-sm">
              <Link to={labsUrl} className="flex items-center justify-center">
                Visit Labs <ArrowRight className="ml-1.5 sm:ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default DepartmentShowcaseCard;