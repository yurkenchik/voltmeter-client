import * as React from 'react';
import { cn } from '../../utils/cn';

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={cn('rounded-2xl border shadow-sm', className)} {...props} />;
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={cn('p-4', className)} {...props} />;
}