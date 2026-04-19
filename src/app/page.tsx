import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Highlights from "@/components/sections/Highlights";
import Design from "@/components/sections/Design";
import Performance from "@/components/sections/Performance";
import CocoroOS from "@/components/sections/CocoroOS";
import UseCases from "@/components/sections/UseCases";
import Pricing from "@/components/sections/Pricing";
import Purchase from "@/components/sections/Purchase";
import Support from "@/components/sections/Support";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* 00. Hero — ファーストビュー */}
        <Hero />

        {/* 01. ハイライト — 4本柱 */}
        <Highlights />

        {/* 02. デザイン紹介 */}
        <Design />

        {/* 03. AI性能・スペック */}
        <Performance />

        {/* 04. cocoro-OS 機能紹介 */}
        <CocoroOS />

        {/* 05. ユースケース */}
        <UseCases />

        {/* 06. モデル選択・価格表 */}
        <Pricing />

        {/* 07. 購入セクション */}
        <Purchase />

        {/* 08. サポート・保証 */}
        <Support />
      </main>
      <Footer />
    </>
  );
}
