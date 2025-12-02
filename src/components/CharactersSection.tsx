import { useTranslations } from "next-intl";
import { Alice } from "./Alice";
import { Bob } from "./Bob";
import { Carol } from "./Carol";

export const CharactersSection: React.FC = () => {
  const t = useTranslations("HomePage");

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-center md:text-left">
        {t("Meet the Characters")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-purple-400/50 hover:scale-105 transition-transform">
          <Alice />
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-blue-400/50 hover:scale-105 transition-transform">
          <Bob />
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-pink-400/50 hover:scale-105 transition-transform">
          <Carol />
        </div>
      </div>
    </section>
  );
};