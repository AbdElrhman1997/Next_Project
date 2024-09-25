"use client";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const Header = () => {
  const t = useTranslations("HomePaeg.Header");
  const locale = useLocale();
  // const router = useParams();
  // const { locale } = router;
  window.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    if (window.scrollY > 80) {
      header?.classList.add("bg-white", "text-gray-600", "shadow-md");
      header?.classList.remove("bg-[#00000036]", "text-white");
    } else {
      header?.classList.add("bg-[#00000036]", "text-white");
      header?.classList.remove("bg-white", "shadow-md", "text-gray-600");
    }
  });

  return (
    <header
      id="header"
      className="fixed w-full top-0 left-0 z-50 transition-all duration-300 bg-[#00000036] text-white font-semibold"
      dir={locale == "en" ? "ltr" : "rtl"}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        {/* Language Toggle Button */}
        <div className="flex items-center">
          <Link
            // onClick={handleChangeLanguage}
            href={locale === "en" ? "/ar" : "/en"}
            className="empty-button"
          >
            {t("login")}
          </Link>
        </div>
        {/* Navigation Links */}
        <nav className="hidden md:flex gap-x-8 justify-center items-center">
          <a href="#" className=" hover:text-gray-300">
            {t("home")}
          </a>
          <a href="#" className=" hover:text-gray-300">
            {t("aboutUs")}
          </a>
          <a href="#" className=" hover:text-gray-300">
            {t("ourServices")}
          </a>
          <a href="#" className=" hover:text-gray-300">
            {t("consultations")}
          </a>{" "}
          <a href="#" className=" hover:text-gray-300">
            {t("level7")}
          </a>{" "}
        </nav>

        <div className="text-2xl font-bold">
          <a href="/">My Website</a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex justify-between items-center p-4">
        <a href="#" className="text-gray-600">
          Menu
        </a>
        <button
          // onClick={handleChangeLanguage}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          {locale === "en" ? "العربية" : "English"}
        </button>
      </div>
    </header>
  );
};

export default Header;
