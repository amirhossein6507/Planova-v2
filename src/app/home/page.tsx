import { redirect } from "next/navigation";

function Page() {
  redirect("/home/daily");
  return null;
}

export default Page;
