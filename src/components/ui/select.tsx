import * as React from 'react';
import { cn } from '../../utils/cn';

export function Select({ children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
    return <select {...props} className={cn('rounded-md border p-2', props.className)}>{children}</select>;
}

export function SelectTrigger({ children, className }: { children: React.ReactNode; className?: string }) {
    return <div className={cn('relative inline-block', className)}>{children}</div>;
}

export function SelectContent({ children }: { children: React.ReactNode }) {
    return <div className="absolute z-10 mt-2 w-full rounded-md bg-white shadow-lg">{children}</div>;
}

export function SelectItem({ children, value }: { children: React.ReactNode; value: string }) {
    return <option value={value}>{children}</option>;
}

export function SelectValue({ placeholder }: { placeholder?: string }) {
    return <span className="text-gray-500">{placeholder}</span>;
}
