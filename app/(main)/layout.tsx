import React from "react";
import MainNavigation from "./_components/main-navigation";
import Footer from "@/components/footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="px-5 md:px-10 pb-5 md:pb-10">
      <MainNavigation />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
