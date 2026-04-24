// src/data/navLinks.ts

export interface NavLink {
  href: string;
  labelJa: string;
  labelEn: string;
  isAccent?: boolean;
}

export const navLinks: NavLink[] = [
  { href: '/about', labelJa: '私たちについて', labelEn: 'ABOUT' },
  { href: '/business', labelJa: '事業内容', labelEn: 'BUSINESS' },
  { href: '/recruit', labelJa: '採用情報', labelEn: 'RECRUIT' },
  { href: '/contact', labelJa: 'お問い合わせ', labelEn: 'CONTACT', isAccent: true },
];