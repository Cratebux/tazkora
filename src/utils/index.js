import { redirect } from "next/navigation";

export const handlePageRedirect = (page, closeFun) => {
  setTimeout(() => {
    closeFun(false);
  }, 1500);

  page !== "" && redirect(page);
};
