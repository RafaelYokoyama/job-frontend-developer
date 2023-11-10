import * as lucideIcons from 'lucide-react';

export type IconName = keyof typeof lucideIcons;

export type IconProps = {
  color?: string;
  size?: number;
  className?: string;
  style?: string;
};
