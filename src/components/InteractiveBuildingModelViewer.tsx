import React, { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ZoomIn, ZoomOut, RotateCcw, Play, Pause, Building } from 'lucide-react';
import { cn } from "@/lib/utils"; // Assuming utils.ts exists for cn

interface InteractiveBuildingModelViewerProps {
  buildingName: string;
  description?: string;
  modelType?: '3d' | '2d-animation';
  imageUrl?: string; // Placeholder image for the model/animation
  className?: string;
}

const InteractiveBuildingModelViewer: React.FC<InteractiveBuildingModelViewerProps> = ({
  buildingName,
  description = "Explore an interactive model of this state-of-the-art facility.",
  modelType = '3d',
  imageUrl,
  className,
}) => {
  useEffect(() => {
    console.log(`InteractiveBuildingModelViewer loaded for: ${buildingName}`);
  }, [buildingName]);

  const placeholderImage = imageUrl || `https://via.placeholder.com/800x450?text=${encodeURIComponent(buildingName)}`;

  const handleInteraction = (action: string) => {
    console.log(`${action} for ${buildingName}`);
    // In a real implementation, this would trigger model manipulation or animation control
  };

  return (
    <Card className={cn("w-full overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300", className)}>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800">{buildingName}</CardTitle>
        {description && <CardDescription className="text-sm text-gray-600">{description}</CardDescription>}
      </CardHeader>

      <CardContent className="p-0">
        <AspectRatio ratio={16 / 9} className="bg-gray-200 dark:bg-gray-700">
          {imageUrl ? (
            <img
              src={placeholderImage}
              alt={`Interactive model of ${buildingName}`}
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-gray-500 dark:text-gray-400">
              <Building className="w-24 h-24 mb-4 opacity-50" />
              <p className="text-lg font-medium">Interactive Model Preview</p>
              <p className="text-sm">{buildingName}</p>
            </div>
          )}
        </AspectRatio>
      </CardContent>

      <CardFooter className="p-4 bg-gray-50 dark:bg-gray-800/50 border-t">
        <div className="flex w-full justify-between items-center">
          <p className="text-xs text-muted-foreground">
            {modelType === '3d' ? '3D Model Controls' : 'Animation Controls'}
          </p>
          <div className="flex space-x-2">
            {modelType === '3d' ? (
              <>
                <Button variant="outline" size="icon" onClick={() => handleInteraction('Zoom In')}>
                  <ZoomIn className="h-4 w-4" />
                  <span className="sr-only">Zoom In</span>
                </Button>
                <Button variant="outline" size="icon" onClick={() => handleInteraction('Zoom Out')}>
                  <ZoomOut className="h-4 w-4" />
                  <span className="sr-only">Zoom Out</span>
                </Button>
                <Button variant="outline" size="icon" onClick={() => handleInteraction('Rotate')}>
                  <RotateCcw className="h-4 w-4" />
                  <span className="sr-only">Rotate</span>
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" size="icon" onClick={() => handleInteraction('Play Animation')}>
                  <Play className="h-4 w-4" />
                  <span className="sr-only">Play Animation</span>
                </Button>
                <Button variant="outline" size="icon" onClick={() => handleInteraction('Pause Animation')}>
                  <Pause className="h-4 w-4" />
                  <span className="sr-only">Pause Animation</span>
                </Button>
              </>
            )}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default InteractiveBuildingModelViewer;