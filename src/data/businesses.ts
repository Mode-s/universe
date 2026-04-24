import type { ImageMetadata } from 'astro';

// 暫定：全事業で同じ画像を流用。後で各事業用の画像に差し替え
import businessImage from '../assets/images/photo14.jpg';

export interface Business {
  number: string;         // '01' のようなナンバリング表示用
  id: string;             // アンカーID: '/business#sales' の sales の部分
  titleJa: string;        // 日本語の事業名
  titleEn: string;        // 英語の事業名
  catchphrase: string;    // キャッチコピー（1行）
  description: string;    // TOPに載せる本文（2文程度）
  image: ImageMetadata;   // Astro の Image コンポーネントに渡す画像
}

export const businesses: Business[] = [
  {
    number: '01',
    id: 'sales',
    titleJa: '営業代行',
    titleEn: 'Sales Outsourcing',
    catchphrase: '対面・電話を通じた営業活動の代行支援',
    description: '貴社の商品・サービスを深く理解した専任チームが、新規開拓からクロージングまでを一貫して代行します。主に通信関連サービスやライフライン商材を中心に、営業支援を行っています。',
    image: businessImage,
  },
  {
    number: '02',
    id: 'consulting',
    titleJa: 'コンサルティング',
    titleEn: 'Business Consulting',
    catchphrase: '企業の課題解決に向けた戦略立案・実行支援',
    description: '営業組織の立ち上げ・改善をはじめ、売上向上のためのKPI設計やプロセスの最適化をサポート。現場に入り込み、経営層から現場メンバーまで一気通貫で伴走します。',
    image: businessImage,
  },
  {
    number: '03',
    id: 'marketing',
    titleJa: '広告マーケティング',
    titleEn: 'Advertising & Marketing',
    catchphrase: '集客・ブランディングのためのマーケティング施策',
    description: 'SNS運用・Web広告・SEO対策を組み合わせた統合マーケティングにより、見込み顧客の獲得からブランド認知の向上までを支援。データ分析に基づき、費用対効果の最大化を追求します。',
    image: businessImage,
  },
  {
    number: '04',
    id: 'training',
    titleJa: '人材育成',
    titleEn: 'Talent Development',
    catchphrase: '未経験からでも段階的に成長できる育成環境の提供',
    description: '独自の段階的カリキュラムにより、営業未経験者でも着実にスキルを習得。ロープレ研修・OJT・メンター制度を通じて、「自分で考えて動ける」人材を育成します。',
    image: businessImage,
  },
];