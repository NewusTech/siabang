import { Metadata } from "next";
import { UserAuthForm } from "~/components/user-auth-form";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return (
    <div className="container flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative">
        <div className="hidden h-screen w-full md:block">
          <Image
            src="/bg2.jpeg"
            alt="background"
            width={1000}
            height={2000}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="inset-0 z-10 hidden h-screen w-full bg-zinc-900 opacity-50 md:absolute md:block"></div>
        <div className="inset-0 z-20 flex flex-col items-center justify-center md:absolute md:py-40 xl:py-64">
          <div className="mb-[10px] mt-12 md:mt-0">
            <img
              className="m-auto h-32 items-center md:h-[30vh] xl:mt-12"
              alt="logo"
              src="/logo.png"
              style={{ color: `white` }}
            />
          </div>
          <div className="relative z-20 mt-auto flex justify-center md:text-white">
            <blockquote className="space-y-2">
              <p className="text-center text-sm md:text-lg">
                &ldquo;SISTEM INFORMASI ADMINISTRASI PEMBANGUNAN&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </div>

      <div className="container lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
            <p className="text-sm text-muted-foreground">
              Input email and password
            </p>
          </div>
          <UserAuthForm />
        </div>
      </div>
    </div>
  );
}
