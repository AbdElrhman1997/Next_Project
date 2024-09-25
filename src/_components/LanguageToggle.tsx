import { useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";

const LanguageToggle = () => {
  const locale = useLocale();

  return (
    <Link
      href={locale === "en" ? "/ar" : "/en"}
      className="bg-white fixed bottom-0 right-40 shadow-lg px-[6px]"
      style={{ borderRadius: "8px 8px 0 0", zIndex: "100" }}
    >
      <div className="flex items-center justify-center">
        {locale === "en" ? (
          <Image
            src="/images/united-kingdom.png"
            alt="English Flag"
            width={35}
            height={35}
            className="m-[6px]"
          />
        ) : (
          <Image
            src="/images/flag.png"
            alt="Arabic Flag"
            width={48}
            height={48}
          />
        )}
      </div>
    </Link>
  );
};

export default LanguageToggle;
