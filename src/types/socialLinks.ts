import { IconName } from './Icon';

export interface SocialLink {
  url: string;
  icon: IconName;
}

export interface BandSocialLinksProps {
  socialLinks: SocialLink[];
}
