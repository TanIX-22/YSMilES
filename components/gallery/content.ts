import fibroImage from '@/images/gallery/Fibro.png';
import groupImage from '@/images/gallery/Group.jpeg';
import poojaImage from '@/images/gallery/Pooja Maam.jpeg';
import studentsImage from '@/images/gallery/Students.png';

export interface GalleryPhoto {
  src: string;
  alt: string;
  caption?: string;
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
    photoCount: 24,
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
        src: studentsImage.src,
        alt: 'Students proudly holding certificates after a school health programme',
        caption: 'Students celebrated their participation and learning together.',
      },
      {
        src: fibroImage.src,
        alt: 'A student receiving a health screening during a school health camp',
        caption: 'Health screenings helped make preventive care practical and accessible.',
      },
      {
        src: studentsImage.src,
        alt: 'Students proudly holding certificates after a school health programme',
        caption: 'The programme gave students a moment to share their achievement.',
      },
      {
        src: fibroImage.src,
        alt: 'A student receiving a health screening during a school health camp',
        caption: 'Medical teams brought careful, student-focused screening to the classroom.',
      },
      {
        src: studentsImage.src,
        alt: 'Students proudly holding certificates after a school health programme',
        caption: 'Learning and recognition came together in this school health camp moment.',
      },
    ],
  },
  {
    slug: 'liver-health-awareness-drive',
    title: 'Liver Health Awareness Drive',
    location: 'ILBS Community Centre, New Delhi',
    date: 'April 08, 2026',
    photoCount: 18,
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
        src: poojaImage.src,
        alt: 'Health educators sharing liver health information at an awareness event',
        caption: 'Visitors received clear information about liver wellness and early prevention.',
      },
      {
        src: groupImage.src,
        alt: 'Health professionals and programme participants gathered at an ILBS event',
        caption: 'Collaboration strengthened the reach of the liver health awareness initiative.',
      },
      {
        src: poojaImage.src,
        alt: 'Health educators sharing liver health information at an awareness event',
        caption: 'Every conversation encouraged informed choices and healthier habits.',
      },
      {
        src: groupImage.src,
        alt: 'Health professionals and programme participants gathered at an ILBS event',
        caption: 'The event reflected a shared commitment to preventive liver health.',
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
