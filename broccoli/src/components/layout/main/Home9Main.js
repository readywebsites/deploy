import Blogs2 from "@/components/sections/blogs/Blogs2";
import CallToAction2 from "@/components/sections/call-to-action/CallToAction2";
import Categories3 from "@/components/sections/categories/Categories3";
import CounterUp2 from "@/components/sections/counters/CounterUp2";
import Features4 from "@/components/sections/features/Features4";
import Hero6 from "@/components/sections/hero-banners/Hero6";
import Portfolio4 from "@/components/sections/portfolio/Portfolio4";
import FeaturedProducts from "@/components/sections/products/FeaturedProducts";
import Products3 from "@/components/sections/products/Products3";

const Home9Main = () => {
  return (
    <main>
      <Hero6
        size={"sm"}
        slide1Title={
          <>
            Our {"Garden's"} Most <br /> Favorite Food
          </>
        }
      />
      <Portfolio4 />
      <Categories3 type={3} />
      <Categories3 />
      <Products3 isDouble={true} title={"Our Products"} pt={" pt-85"} />

      <CounterUp2 />
      <FeaturedProducts />
      <CallToAction2 />
      <Blogs2 type={2} pb={"pb-70"} />
      <Features4 type={2} mb={" mb-120"} />
    </main>
  );
};

export default Home9Main;