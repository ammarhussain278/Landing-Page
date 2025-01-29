export interface TestimonialProps {
  image: string;
  name: string;
  date: string;
  content: string;
}

export interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export interface ServicesSectionProps {
  title: string;
  subtitle: string;
  services: ServiceCardProps[];
}

export interface StatCardProps {
  value: string;
  description: string;
  image?: string;
  bgColor?: string;
}

export interface ArticleCardProps {
  image: string;
  title: string;
  content: string;
  ctaText?: string;
}

export interface NavItemProps {
  label: string;
  href: string;
}

export interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
}

export interface FooterProps {
  navItems: NavItemProps[];
  socialLinks: string[];
}

export interface MentalHealthSectionProps {
  title: string;
  content: string;
  image: string;
  ctaText: string;
}

export interface TestimonialSliderProps {
  testimonials: TestimonialProps[];
}