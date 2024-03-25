import Wrapper from "@/components/layout/Wrapper";
import HomeMain from "./(homes)/home-page/page";

export const metadata = {
  title: "titlu meta",
  description: "meta descriere",
};

export default function Home() {
  return (
    <Wrapper>
      <HomeMain />
    </Wrapper>
  );
}
