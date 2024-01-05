import { Metadata } from "next";
import EmailSubscribeCard from "@/app/email-subscribe/components/EmailSubscribeCard";

export const metadata: Metadata = {
  title: "Learn Tailwind - Email Subscribe Card",
};

export default function Page() {
  return (
    <main className="flex h-screen items-center justify-center bg-zinc-700">
      <EmailSubscribeCard />
    </main>
  );
}
