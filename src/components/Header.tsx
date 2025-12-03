import { useTranslations } from "next-intl";

export const Header: React.FC = () => {
  const t = useTranslations('HomePage');

  return (
    <header className="text-center mb-12">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-violet-400 to-pink-400">
        {t("title")}
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
        {t("subtitle")}
      </p>
    </header>
  );
};