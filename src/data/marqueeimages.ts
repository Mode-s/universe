import type { ImageMetadata } from 'astro';

// 暫定：同じ画像を流用。後で各写真に差し替え
import photo1 from '../assets/images/photo8.jpg';
import photo2 from '../assets/images/photo9.jpg';
import photo3 from '../assets/images/photo12.jpg';
import photo4 from '../assets/images/photo16.jpg';
import photo5 from '../assets/images/photo17.jpg';

export const marqueeImages: ImageMetadata[] = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
];