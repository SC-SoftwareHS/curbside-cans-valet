import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'success' | 'info'
}

export function Badge({ children, className, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold',
        {
          'bg-slate-100 text-slate-700': variant === 'default',
          'bg-green-100 text-green-700': variant === 'success',
          'bg-blue-100 text-blue-700': variant === 'info',
        },
        className
      )}
    >
      {children}
    </span>
  )
}