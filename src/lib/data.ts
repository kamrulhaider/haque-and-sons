import { Building, Wrench, RefreshCw, type LucideIcon } from 'lucide-react';
import { PlaceHolderImages } from './placeholder-images';

export const placeholderImages = PlaceHolderImages;

export type NavLink = {
  href: string;
  label: string;
};

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

export type Service = {
  id: string;
  title: string;
  description: string;
  details: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    id: 'installation',
    title: 'New Installations',
    description: 'Custom elevator solutions for new constructions, designed for performance and aesthetics.',
    details: 'Our team works with architects and builders to integrate state-of-the-art elevator systems seamlessly into your new building. We handle everything from design to final inspection, ensuring compliance with all safety codes.',
    icon: Building,
  },
  {
    id: 'modernization',
    title: 'Modernization & Upgrades',
    description: 'Upgrade your existing elevators with the latest technology for improved safety and efficiency.',
    details: 'Modernization enhances safety, performance, and aesthetics. We can upgrade controllers, door systems, and cabin interiors to meet current standards and improve energy efficiency, providing a better user experience.',
    icon: RefreshCw,
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Repair',
    description: 'Proactive maintenance plans and responsive repair services to ensure maximum uptime.',
    details: 'Regular maintenance is key to elevator longevity and safety. We offer comprehensive service plans to keep your systems running smoothly and provide 24/7 emergency repair services to address any issues promptly.',
    icon: Wrench,
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  imageId: string;
  type: 'Commercial' | 'Residential' | 'Hospitality' | 'Public';
  location: string;
};

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Apex Tower',
    description: 'A suite of high-speed, smart elevators for a flagship commercial skyscraper in the city center.',
    imageId: 'project-commercial-1',
    type: 'Commercial',
    location: 'Downtown Metropolis',
  },
  {
    id: 'p2',
    title: 'The Veridian Residences',
    description: 'Luxurious and silent elevators for an exclusive residential complex, featuring custom cabin designs.',
    imageId: 'project-residential-1',
    type: 'Residential',
    location: 'Evergreen Suburbs',
  },
  {
    id: 'p3',
    title: 'Grand Horizon Hotel',
    description: 'Scenic glass elevators offering panoramic views, enhancing the guest experience at this 5-star hotel.',
    imageId: 'project-hospitality-1',
    type: 'Hospitality',
    location: 'Coastal Resort City',
  },
  {
    id: 'p4',
    title: 'Metropolis Grand Station',
    description: 'Heavy-duty, accessible elevators and escalators designed for high-traffic public transport hubs.',
    imageId: 'project-public-1',
    type: 'Public',
    location: 'Downtown Metropolis',
  },
  {
    id: 'p5',
    title: 'Innovatech Corporate Park',
    description: 'Energy-efficient destination control elevators across a multi-building corporate campus.',
    imageId: 'project-commercial-2',
    type: 'Commercial',
    location: 'Evergreen Suburbs',
  },
  {
    id: 'p6',
    title: 'Cypress Loft Apartments',
    description: 'Reliable and stylish elevators for a modern, mid-rise apartment building.',
    imageId: 'project-residential-2',
    type: 'Residential',
    location: 'Downtown Metropolis',
  },
];

export const projectTypes = ['All', ...Array.from(new Set(projects.map(p => p.type)))];
