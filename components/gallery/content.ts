import anTogetherImage from '@/images/gallery/AN Together.jpeg';
import explainImage from '@/images/gallery/Explain.jpeg';
import explain2Image from '@/images/gallery/Explain 2.jpeg';
import fibroImage from '@/images/gallery/Fibro.png';
import groupImage from '@/images/gallery/Group.jpeg';
import poojaImage from '@/images/gallery/Pooja Maam.jpeg';
import studentsImage from '@/images/gallery/Students.png';
import { withBasePath } from '@/lib/paths';

export interface GalleryPhoto {
  src: string;
  alt: string;
  caption?: string;
  type?: 'image' | 'video';
  poster?: string;
}

export interface GalleryAlbum {
  slug: string;
  title: string;
  location: string;
  date: string;
  photoCount: number;
  description: string;
  coverImage: string;
  highlight: string;
  gallery: GalleryPhoto[];
}

export const albums: GalleryAlbum[] = [
  {
    slug: 'school-health-camp',
    title: 'School Health Camp',
    location: 'Delhi Public School, Noida',
    date: 'March 14, 2026',
    photoCount: 4,
    description:
      'A full-day wellness initiative focused on nutrition, hydration, and preventive health education for students and educators.',
    coverImage: studentsImage.src,
    highlight: 'Nutrition & wellness',
    gallery: [
      {
        src: fibroImage.src,
        alt: 'A student receiving a health screening during a school health camp',
        caption: 'Students received practical health screenings from medical mentors.',
      },
      {
        src: explainImage.src,
        alt: 'Students learning about liver health during the school health camp',
        caption: 'Students were explained about liver health during the school health camp.',
      },
      {
        src: explain2Image.src,
        alt: 'Students understanding liver health during the school health camp',
        caption: 'Students learned about liver health and healthy habits.',
      },
      {
        src: anTogetherImage.src,
        alt: 'Our team receiving the certificate together',
        caption: 'Our team proudly received the certificate together.',
      },
    ],
  },
  {
    slug: 'liver-health-awareness-drive',
    title: 'Liver Health Awareness Drive',
    location: 'ILBS Community Centre, New Delhi',
    date: 'April 08, 2026',
    photoCount: 4,
    description:
      'A community-facing event that connected families with specialists and practical guidance on early prevention.',
    coverImage: poojaImage.src,
    highlight: 'Early prevention',
    gallery: [
      {
        src: poojaImage.src,
        alt: 'Health educators sharing liver health information at an awareness event',
        caption: 'Liver health educators connected visitors with practical preventive guidance.',
      },
      {
        src: groupImage.src,
        alt: 'Health professionals and programme participants gathered at an ILBS event',
        caption: 'The awareness drive brought health professionals and community partners together.',
      },
      {
        src: withBasePath('/images/gallery/Naveen%201.mp4'),
        alt: 'Project coordinator Naveen in interview 1',
        caption: 'Project coordinator Naveen speaks about the liver health awareness drive in an interview.',
        type: 'video',
        poster: withBasePath('/images/gallery/naveen-cover-1-latest.png'),
      },
      {
        src: withBasePath('/images/gallery/Naveen%202.mp4'),
        alt: 'Project coordinator Naveen in interview 2',
        caption: 'Project coordinator Naveen shares his perspective during the interview session.',
        type: 'video',
        poster: withBasePath('/images/gallery/naveen-cover-2.png'),
      },
    ],
  },
  {
    slug: 'community-wellness-festival',
    title: 'Community Wellness Festival',
    location: 'ILBS Hospital, Delhi',
    date: 'May 02, 2026',
    photoCount: 31,
    description:
      'A vibrant public festival bringing together schools, local champions, and families around healthier living.',
    coverImage: groupImage.src,
    highlight: 'Community engagement',
    gallery: [
      {
        src: fibroImage.src,
        alt: 'A student receiving a health screening at a community wellness event',
        caption: 'Community wellness begins with accessible, practical health screening.',
      },
      {
        src: groupImage.src,
        alt: 'Health professionals and community partners gathered at a wellness event',
        caption: 'Local champions and health professionals came together around prevention.',
      },
      {
        src: poojaImage.src,
        alt: 'Health educators sharing wellness resources with community visitors',
        caption: 'Wellness resources helped visitors turn awareness into action.',
      },
      {
        src: studentsImage.src,
        alt: 'Students celebrating their participation in a community health programme',
        caption: 'Students carried the message of healthier living back to their communities.',
      },
      {
        src: fibroImage.src,
        alt: 'A student receiving a health screening at a community wellness event',
        caption: 'Hands-on screening made preventive care visible and approachable.',
      },
      {
        src: groupImage.src,
        alt: 'Health professionals and community partners gathered at a wellness event',
        caption: 'Shared expertise helped make the wellness festival a community effort.',
      },
    ],
  },
];

export function getAlbumBySlug(slug: string) {
  return albums.find((album) => album.slug === slug);
}
