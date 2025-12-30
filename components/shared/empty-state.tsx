import { LucideIcon, Search, UserX, FileX } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EmptyStateProps {
  icon?: LucideIcon;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

export function EmptyState({
  icon: Icon = Search,
  title,
  description,
  action,
  className = '',
}: EmptyStateProps) {
  return (
    <div className={`flex flex-col items-center justify-center py-12 px-4 text-center ${className}`}>
      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-gray-400" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      {description && (
        <p className="text-sm text-gray-600 max-w-md mb-6">{description}</p>
      )}
      {action && (
        <Button onClick={action.onClick} variant="outline">
          {action.label}
        </Button>
      )}
    </div>
  );
}

// Preset variations
export function NoProvidersFound({ onClearFilters }: { onClearFilters?: () => void }) {
  return (
    <EmptyState
      icon={UserX}
      title="No providers found"
      description="Try adjusting your filters or search criteria to find more results."
      action={onClearFilters ? {
        label: 'Clear Filters',
        onClick: onClearFilters,
      } : undefined}
    />
  );
}

export function NoResultsFound() {
  return (
    <EmptyState
      icon={Search}
      title="No results found"
      description="We couldn't find what you're looking for. Try a different search."
    />
  );
}

export function NoDataAvailable() {
  return (
    <EmptyState
      icon={FileX}
      title="No data available"
      description="There is no data to display at this time."
    />
  );
}
