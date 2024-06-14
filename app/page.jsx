import Wrapper from "@/components/layout/Wrapper";
import HomeMain from "./(homes)/home-page/page";

export const metadata = {
  title: "titlu meta",
  description: "meta descriere",
};

export const revalidate = 60; // revalidate at most every minute , hour at 3600

export default function Home() {
  return (
    <Wrapper>
      <HomeMain />
    </Wrapper>
  );
}
