import { Metadata } from "next";
import LoginModal from "@/app/login-modal/components/LoginModal";

export const metadata: Metadata = {
  title: "Learn Tailwind - Login Modal",
};

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-rose-50">
      <LoginModal />
    </main>
  );
}
