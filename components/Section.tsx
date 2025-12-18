import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    className?: string;
    id?: string;
    background?: 'white' | 'gray' | 'blue' | 'pattern';
}

export function Section({ children, className, id, background = 'white' }: Props) {
    const backgrounds = {
        white: 'bg-white',
        gray: 'bg-soft-gray',
        blue: 'bg-primary-blue text-white',
        pattern: 'bg-soft-gray bg-[url("/pattern.png")]', // placeholder for pattern
    };

    return (
        <section
            id={id}
            className={cn(
                "py-16 md:py-24",
                backgrounds[background],
                className
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </section>
    );
}
