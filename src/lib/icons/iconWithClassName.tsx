// import type { LucideIcon } from 'lucide-react-native';
import { cssInterop, } from 'nativewind';

// export function iconWithClassName(icon: LucideIcon) {
export function iconWithClassName(icon: any) {
  cssInterop(icon, {
    className: {
      target: 'style',
      nativeStyleToProp: {
        color: true,
        opacity: true,
      },
    },
  });
}