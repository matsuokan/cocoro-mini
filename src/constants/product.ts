// ============================================================
// cocoro mini — 製品定数ファイル
// すべての製品情報はここで一元管理。素材確定後ここを更新するだけ。
// ============================================================

export const BRAND = {
  name: "cocoro mini",
  tagline: "AIは、ここにある。",
  subTagline: "プライバシーを守るローカルAI。Mac mini より、ずっと賢く、安く。",
  os: "cocoro-OS",
  website: "https://cocoro.ai",
};

export const STARTING_PRICE = "¥69,800";

export type ModelTier = "entry" | "standard" | "pro";

export interface SpecOption {
  label: string;
  price: number; // 追加料金（円）
}

export interface ProductModel {
  id: ModelTier;
  name: string;
  badge?: string;
  price: string;
  priceNote: string;
  cpu: string;
  gpu: string;
  npu: string;
  ram: string;
  ssd: string;
  os: string;
  description: string;
  ramOptions: SpecOption[];
  ssdOptions: SpecOption[];
}

export const MODELS: ProductModel[] = [
  {
    id: "entry",
    name: "エントリー",
    price: "¥69,800",
    priceNote: "税込",
    cpu: "Intel Core Ultra 5 125H",
    gpu: "Intel Arc Graphics",
    npu: "Intel AI Boost NPU（10 TOPS）",
    ram: "16GB",
    ssd: "512GB NVMe SSD",
    os: "Windows 11 Home + cocoro-OS",
    description: "日常業務・AIアシスタント入門に最適なモデル",
    ramOptions: [
      { label: "16GB（標準）", price: 0 },
      { label: "32GB（+¥11,000）", price: 11000 },
    ],
    ssdOptions: [
      { label: "512GB（標準）", price: 0 },
      { label: "1TB（+¥8,800）", price: 8800 },
    ],
  },
  {
    id: "standard",
    name: "スタンダード",
    badge: "おすすめ",
    price: "¥98,800",
    priceNote: "税込",
    cpu: "Intel Core Ultra 7 165H",
    gpu: "Intel Arc Graphics",
    npu: "Intel AI Boost NPU（34 TOPS）",
    ram: "32GB",
    ssd: "1TB NVMe SSD",
    os: "Windows 11 Pro + cocoro-OS",
    description: "クリエイター・エンジニアに最適。7Bモデルが快適動作",
    ramOptions: [
      { label: "32GB（標準）", price: 0 },
      { label: "64GB（+¥22,000）", price: 22000 },
    ],
    ssdOptions: [
      { label: "1TB（標準）", price: 0 },
      { label: "2TB（+¥13,200）", price: 13200 },
    ],
  },
  {
    id: "pro",
    name: "プロ",
    price: "¥148,800",
    priceNote: "税込",
    cpu: "Intel Core Ultra 9 185H",
    gpu: "Intel Arc Graphics + 独立GPU",
    npu: "Intel AI Boost NPU（40 TOPS）",
    ram: "64GB",
    ssd: "2TB NVMe SSD",
    os: "Windows 11 Pro + cocoro-OS",
    description: "ローカルLLM本格運用・法人導入・AI開発者向け最上位モデル",
    ramOptions: [
      { label: "64GB（標準）", price: 0 },
      { label: "96GB（+¥33,000）", price: 33000 },
    ],
    ssdOptions: [
      { label: "2TB（標準）", price: 0 },
      { label: "4TB（+¥22,000）", price: 22000 },
    ],
  },
];

export const HIGHLIGHTS = [
  {
    icon: "shield",
    title: "ローカルAIで、安心。",
    description: "データはすべてこの中で動く。クラウドに送らないAI。個人情報も、業務情報も、外に出さない。",
    color: "#00D4AA",
  },
  {
    icon: "trending-down",
    title: "Mac miniより、賢い選択。",
    description: "同等スペックで価格は大幅ダウン。Windowsも動くから、既存ソフトがそのまま使える。",
    color: "#4F8EF7",
  },
  {
    icon: "sliders",
    title: "あなた仕様に。",
    description: "RAM・SSDを自由に選んでオーダー。後から拡張できるから、必要な分だけ最初から選べる。",
    color: "#F7924F",
  },
  {
    icon: "zap",
    title: "小さいのに、本格派。",
    description: "手のひらサイズのボディに高性能CPUとNPUを凝縮。デスクを占拠しない、でも妥協しない。",
    color: "#D44FAF",
  },
];

export const USE_CASES = [
  {
    id: "remote",
    label: "在宅ワーク",
    title: "自宅が、最強のオフィスになる。",
    description:
      "cocoro-OS のローカルAIが議事録の自動生成、メール要約、日程調整まるごとサポート。クラウドに依存せず、社外秘データも安全に扱える。",
    features: ["議事録自動生成", "メール要約・返信支援", "スケジュール最適化", "オフライン完全動作"],
    icon: "home",
  },
  {
    id: "creative",
    label: "クリエイティブ",
    title: "ローカルで動く、創作の相棒。",
    description:
      "画像生成・動画編集・音楽制作をクラウド課金なしで実行。Stable Diffusionや各種AIツールがサクサク動く十分なスペックを搭載。",
    features: ["ローカル画像生成AI", "動画編集補助", "音楽・音声生成", "プロンプト管理"],
    icon: "palette",
  },
  {
    id: "dev",
    label: "開発・AI研究",
    title: "コードを書く、AIを育てる。",
    description:
      "ローカルLLMをファインチューニングからデプロイまで完結。ollama・LM Studio・vLLMなどの主要ツールが動作確認済み。",
    features: ["ローカルLLM動作", "ファインチューニング", "VSCode連携", "Docker対応"],
    icon: "code",
  },
  {
    id: "business",
    label: "法人・業務",
    title: "社内情報は、外に出さない。",
    description:
      "医療・法律・会計など機密性の高い業種でも安心。社内ドキュメントをRAGで学習させ、専門的な業務AIを構築できる。",
    features: ["社内RAG構築", "コンプライアンス対応", "多ユーザー管理", "請求書払い対応"],
    icon: "building",
  },
  {
    id: "personal",
    label: "プライベート",
    title: "家族の思い出も、AIが守る。",
    description:
      "写真・動画整理から家計管理まで、個人情報をローカルで処理。子供の教育支援AIとしても活用できる。",
    features: ["写真・動画整理", "家計分析", "学習支援AI", "ゲーミング対応"],
    icon: "heart",
  },
];

export const COCORO_OS_FEATURES = [
  {
    icon: "message-square",
    title: "ローカルAIアシスタント",
    description: "7B〜13Bクラスのモデルをローカルで動作。常時オンライン不要。",
  },
  {
    icon: "file-text",
    title: "ドキュメント要約・生成",
    description: "PDFや長文テキストをAIが即時要約。レポート・メールの自動生成。",
  },
  {
    icon: "mic",
    title: "音声認識・文字起こし",
    description: "Whisperベースのオフライン音声認識。会議録音を自動テキスト化。",
  },
  {
    icon: "search",
    title: "ローカル知識ベース（RAG）",
    description: "自分のファイルをAIに学習させ、専用AIを構築できる。",
  },
  {
    icon: "lock",
    title: "プライバシー完全保護",
    description: "すべての処理はデバイス内で完結。APIキー不要、通信不要。",
  },
  {
    icon: "settings",
    title: "簡単セットアップ",
    description: "届いたらすぐ使える。GUIで全モデルの管理と切り替えが可能。",
  },
];

export const FAQ_ITEMS = [
  {
    q: "cocoro-OS とは何ですか？",
    a: "cocoro-OS は Windows 11 上に構築されたローカルAIランタイム環境です。LLMのダウンロード、モデル管理、チャットUI、RAG構築など、ローカルAIに必要な機能をワンパッケージで提供します。",
  },
  {
    q: "インターネットに接続しなくても使えますか？",
    a: "はい。AI機能はすべてデバイス内で完結するため、インターネット接続は不要です（初回セットアップ時の更新を除く）。",
  },
  {
    q: "どんなLLMモデルが動きますか？",
    a: "Llama 3、Mistral、Gemma、Qwen など主要オープンソースモデルの動作を確認済みです。スタンダードモデルで7Bパラメータクラスが快適に動作します。",
  },
  {
    q: "Mac mini との違いは何ですか？",
    a: "最大の違いは、Windows が動作すること、ローカルAI（cocoro-OS）が標準搭載されていること、同等スペックで低価格であること、RAM・SSDを自由にカスタマイズできることです。",
  },
  {
    q: "法人での購入は可能ですか？",
    a: "はい。請求書払い・銀行振込に対応しています。10台以上のまとめ買いは別途ご相談ください。法人向けサポートプランもご用意しています。",
  },
  {
    q: "保証期間はどのくらいですか？",
    a: "購入日より1年間のメーカー保証が付きます。保証期間内の初期不良・故障はすべて無償修理または交換対応いたします。",
  },
  {
    q: "配送はどのくらいかかりますか？",
    a: "ご注文確認後、最短3営業日以内に発送します。全国送料無料でお届けします。（離島・一部地域を除く）",
  },
  {
    q: "セットアップは難しいですか？",
    a: "いいえ。電源を入れて初回セットアップウィザードに従うだけで、AIが使えるようになります。技術知識は不要です。",
  },
  {
    q: "購入後のカスタマイズは可能ですか？",
    a: "SSDは標準的なM.2スロットを採用しており、自己責任での交換が可能です。RAMはオンボードのため、購入時のカスタマイズを推奨します。",
  },
  {
    q: "返品・返金は可能ですか？",
    a: "到着後7日以内であれば、未開封品に限り返品・全額返金に対応します。初期不良の場合は開封済みでも対応いたします。",
  },
];
