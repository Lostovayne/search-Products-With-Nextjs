import { db } from "@/db";
import { productsTable } from "@/db/schema";
import { redirect } from "next/navigation";

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const Page = async ({ searchParams }: PageProps) => {
  const query = searchParams.query;

  if (!query || Array.isArray(query)) {
    return redirect("/");
  }

  const products = await db.select().from(productsTable);

  // querying logic

  return <p>Hello</p>;
};

export default Page;
