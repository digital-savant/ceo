import { BestSeller } from "../components/BestSellers";
import { Hero } from "../components/Hero";
import { LatestCollection } from "../components/LatestCollection";
import { NewsletterBox } from "../components/NewsletterBox";
import { OurPolicy } from "../components/OurPolicy";

export function Home() {
    return (
      <div>
        <Hero/>
        <LatestCollection/>
        <BestSeller/>
        <OurPolicy/>
        <NewsletterBox/>
      </div>
    )
  }