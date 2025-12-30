import { Star } from 'lucide-react';

interface RatingStarsProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
  className?: string;
}

export function RatingStars({
  rating,
  maxRating = 5,
  size = 'md',
  showValue = false,
  className = '',
}: RatingStarsProps) {
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  // Round rating to nearest 0.5 for half-star display
  const roundedRating = Math.round(rating * 2) / 2;

  const renderStar = (index: number) => {
    const starValue = index + 1;
    const filled = starValue <= roundedRating;
    const halfFilled = starValue - 0.5 === roundedRating;

    if (filled) {
      return (
        <Star
          key={index}
          className={`${sizeClasses[size]} fill-accent-400 text-accent-400`}
        />
      );
    } else if (halfFilled) {
      return (
        <div key={index} className="relative">
          <Star className={`${sizeClasses[size]} text-gray-300`} />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className={`${sizeClasses[size]} fill-accent-400 text-accent-400`} />
          </div>
        </div>
      );
    } else {
      return (
        <Star
          key={index}
          className={`${sizeClasses[size]} text-gray-300`}
        />
      );
    }
  };

  return (
    <div className={`inline-flex items-center gap-1 ${className}`}>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: maxRating }, (_, i) => renderStar(i))}
      </div>
      {showValue && (
        <span className={`font-medium text-gray-700 ml-1 ${textSizes[size]}`}>
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
