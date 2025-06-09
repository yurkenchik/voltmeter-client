import * as React from 'react';
import { cn } from '../../utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, ...props }, ref) => {
    return (
        <button
            ref={ref}
            className={cn(
                'inline-flex items-center justify-center rounded-2xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50',
                className
            )}
            {...props}
        />
    );
});
Button.displayName = 'Button';