import ActsAndRules from "@/components/ActsAndRules";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InfoForm from "@/components/InfoForm";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import NotificationsAndCirculars from "@/components/NotificationsAndCirculars";
import GSTForms from "@/components/GSTForms";

export default function Home() {
  return (
    <main className="bg-full px-32 overflow-x-hidden pb-32 flex flex-col bg-white items-center justify-center">
      <Navbar />
      <Header />
      <Services />
      <NotificationsAndCirculars />
      <GSTForms />
      <ActsAndRules />
      <InfoForm />
      <Footer />
    </main>
  );
}
