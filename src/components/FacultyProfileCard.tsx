import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowRight } from 'lucide-react';

interface FacultyProfileCardProps {
  /** Unique identifier for the faculty member, used for link anchors and React keys. Should be URL-safe. */
  id: string;
  /** URL for the faculty member's photo. */
  photoUrl: string;
  /** Full name of the faculty member. */
  name: string;
  /** Professional title (e.g., "Professor", "Associate Professor"). */
  title: string;
  /** Department or affiliation (e.g., "Department of Computer Science"). */
  department: string;
  /** Array of key research interests. */
  researchInterests: string[];
}

const FacultyProfileCard: React.FC<FacultyProfileCardProps> = ({
  id,
  photoUrl,
  name,
  title,
  department,
  researchInterests,
}) => {
  console.log(`FacultyProfileCard loaded for: ${name}, ID: ${id}`);

  const MAX_DISPLAY_INTERESTS = 3;

  return (
    <Card className="w-full max-w-md overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full bg-white dark:bg-gray-800">
      <CardHeader className="p-0">
        <AspectRatio ratio={16 / 9}>
          <img
            src={photoUrl || `https://via.placeholder.com/400x225?text=${encodeURIComponent(name)}`}
            alt={`Portrait of ${name}`}
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </AspectRatio>
      </CardHeader>

      <CardContent className="p-6 flex-grow space-y-4">
        <div className="space-y-1">
          <CardTitle className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-gray-100">
            {name}
          </CardTitle>
          <p className="text-sm text-blue-700 dark:text-blue-400 font-medium">{title}</p>
          <p className="text-xs text-gray-600 dark:text-gray-400">{department}</p>
        </div>

        {researchInterests.length > 0 && (
          <div>
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Key Research Interests:
            </h4>
            <div className="flex flex-wrap gap-2">
              {researchInterests.slice(0, MAX_DISPLAY_INTERESTS).map((interest, index) => (
                <Badge key={index} variant="secondary" className="text-xs px-2 py-1">
                  {interest}
                </Badge>
              ))}
              {researchInterests.length > MAX_DISPLAY_INTERESTS && (
                <Badge variant="outline" className="text-xs px-2 py-1">
                  +{researchInterests.length - MAX_DISPLAY_INTERESTS} more
                </Badge>
              )}
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
        <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600">
          <Link to={`/faculty-directory#${id.toLowerCase().replace(/\s+/g, '-')}`} aria-label={`View full profile for ${name}`}>
            View Full Profile
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FacultyProfileCard;