import { RatingStars } from '@/components/shared/rating-stars';

interface ProviderRatingProps {
  rating: number;
  reviewCount: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  /** Label shown when the provider has no reviews yet. Defaults to "Nuevo". */
  newLabel?: string;
}

/**
 * Renders a provider's rating honestly:
 * - With ≥1 review: star rating + numeric value + review count.
 * - With 0 reviews: a neutral "Nuevo" pill instead of a fake 5.0 / empty stars.
 * Empty 5-star ratings destroy trust, so we never show stars at zero reviews.
 */
export function ProviderRating({
  rating,
  reviewCount,
  size = 'sm',
  className = '',
  newLabel = 'Nuevo',
}: ProviderRatingProps) {
  if (!reviewCount || reviewCount <= 0) {
    return (
      <span
        className={`inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600 ${className}`}
      >
        {newLabel}
      </span>
    );
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <RatingStars rating={rating} size={size} showValue />
      <span className="text-sm text-gray-500">({reviewCount})</span>
    </div>
  );
}
