import { redirect } from "next/navigation";
import { urls } from "../db";

export default async function Url({
  params,
}: {
  params: Promise<{ url: string }>;
}) {
  const { url } = await params;
  const alias = await urls.findOne({ alias: url });
  if (!alias) {
    return (
      <div className="flex justify-center items-center h-lvh">
        <p className="text-3xl font-bold">Url Not Found</p>
      </div>
    );
  } else {
    redirect(alias.url);
  }
}
