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
  detail: string[];
  image: ImageMetadata;   // Astro の Image コンポーネントに渡す画像
}

export const businesses: Business[] = [
  {
    number: '01',
    id: 'sales',
    titleJa: '営業代行',
    titleEn: 'Sales Outsourcing',
    catchphrase: '対面・電話を通じた営業活動の代行支援',
    description: '新規開拓からクロージングまで、専任チームが一貫します。',
    detail: [
      '貴社の商品・サービスを深く理解した専任チームが、新規開拓からクロージングまでを一貫して代行します。飛び込み営業やテレアポだけでなく、商談のセッティングやフォローアップまでを含めた包括的な営業プロセスを提供。',
      '短期間での成果創出と、長期的な顧客関係の構築を両立させます。主に通信関連サービスやライフライン商材を中心に、営業支援を行っています。',
    ],
    image: businessImage,
  },
  {
    number: '02',
    id: 'consulting',
    titleJa: 'コンサルティング',
    titleEn: 'Business Consulting',
    catchphrase: '企業の課題解決に向けた戦略立案・実行支援',
    description: '営業組織の構築からKPI設計まで、現場に入り込み伴走します。',
    detail: [
      '営業組織の立ち上げ・改善をはじめ、売上向上のためのKPI設計やプロセスの最適化をサポートします。現場に入り込み、机上の空論ではない実行可能な戦略を共に描き、経営層から現場メンバーまで一気通貫で伴走。',
      '現場での実行支援まで行うことで、成果に直結する改善を実現します。',
    ],
    image: businessImage,
  },
  {
    number: '03',
    id: 'marketing',
    titleJa: '広告マーケティング',
    titleEn: 'Advertising & Marketing',
    catchphrase: '集客・ブランディングのためのマーケティング施策',
    description: 'SNS・Web広告・SEOを掛け合わせ、費用対効果の最大化を追及します。',
    detail: [
      'SNS運用・Web広告・SEO対策を組み合わせた統合マーケティングにより、見込み顧客の獲得からブランド認知の向上までを支援します。データ分析に基づいたPDCAサイクルを高速で回し、費用対効果の最大化を追求。',
      '企業の「伝えたい」を「届く」に変え、成果に繋がるマーケティングを実現します。',
    ],
    image: businessImage,
  },
  {
    number: '04',
    id: 'training',
    titleJa: '人材育成',
    titleEn: 'Talent Development',
    catchphrase: '未経験からでも段階的に成長できる育成環境の提供',
    description: 'ロープレ・OJT・メンター制度で、自立して動ける人材を育てます。',
    detail: [
      '独自の段階的カリキュラムにより、営業未経験者でも着実にスキルを習得することが可能です。ロープレ研修・OJT・メンター制度を通じて、「教わる」だけでなく「自分で考えて動ける」人材を育成。',
      '営業現場と連動した育成により、実践で活躍できる人材を育てます。個人の成長が組織の成長に直結する仕組みを構築しています。',
    ],
    image: businessImage,
  },
];