
import { SelectedPages } from "@/shared/typesEnum";
import Link from "next/link";


function MyLink({ 
  page, 
  selectedPage, 
  setSelectedPage 
}) {
  const lowerCasePage = page
    .toLowerCase()
    .replace(/ /g, "");
  return (
    <Link className={`transition duration-500 hover:bg-themePrimary hover:py-4 hover:font-extrabold xl:hover:bg-themePrimaryLighter cursor-pointer p-3 xl:p-0 xl:py-3 xl:px-10 rounded-xl ${selectedPage === lowerCasePage ? "text-secondary-100 bg-themePrimary xl:bg-themePrimaryLighter font-extrabold text-neutral-300" : "text-white"}`}

      href={`/#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </Link>

  );
};

export default MyLink