import { ButtonHTMLAttributes, forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
}

// Combining framer motion props with button props
type Props = ButtonProps & HTMLMotionProps<"button">;

const Button = forwardRef<HTMLButtonElement, Props>(({
    className,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    children,
    ...props
}, ref) => {

    const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-primary-blue text-white hover:bg-blue-600 focus:ring-primary-blue",
        secondary: "bg-fresh-green text-white hover:bg-green-600 focus:ring-fresh-green",
        outline: "border-2 border-primary-blue text-primary-blue hover:bg-primary-blue/10 focus:ring-primary-blue",
        ghost: "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
    };

    const sizes = {
        sm: "px-4 py-1.5 text-sm",
        md: "px-6 py-2.5 text-base",
        lg: "px-8 py-3.5 text-lg",
    };

    return (
        <motion.button
            ref={ref}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                baseStyles,
                variants[variant],
                sizes[size],
                fullWidth ? "w-full" : "",
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
});

Button.displayName = "Button";

export { Button };
