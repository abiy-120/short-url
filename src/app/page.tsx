"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addUrl } from "./actions";
import { useActionState } from "react";
import Link from "next/link";

export default function Home() {
  const [state, formAction, isPending] = useActionState(addUrl, null);
  const currentUrl = window.location.href;

  return (
    <div className="flex flex-col justify-center items-center h-lvh space-y-3 p-5">
      <p className="text-3xl font-bold">Shorten URL</p>
      {state && (
        <p>
          Shortened Url is{" "}
          <Link className=" underline" href={currentUrl + state}>
            {currentUrl + state}
          </Link>
        </p>
      )}
      <form
        action={formAction}
        className="space-y-3 w-full sm:w-1/2 md:w-1/3 text-center"
      >
        <Input name="url" className="" required />
        <Button type="submit" className="cursor-pointer">
          {isPending ? "Shortening..." : "Shorten"}
        </Button>
      </form>
      <p className="text-xs absolute bottom-4">Abyi Hailu</p>
    </div>
  );
}
