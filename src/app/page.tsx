"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardTwentyEight from '@/components/sections/feature/FeatureCardTwentyEight';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="largeSizeMediumTitles"
        background="aurora"
        cardStyle="inset"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        { name: "Philosophy", id: "#about" },
        { name: "Menu", id: "#menu" },
        { name: "Experience", id: "#experience" },
        { name: "Reserve", id: "#booking" },
      ]}
      brandName="PEPPERS"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{ variant: "gradient-bars" }}
      title="A Symphony of Art and Taste."
      description="Where culinary precision meets the intimate soul of an art gallery. Secure your seat for an evening of curated seasonal flavors and live, spontaneous performance."
      buttons={[
        { text: "Reserve Your Table", href: "#booking" },
        { text: "Explore Menu", href: "#menu" },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/chic-luxury-authentic-dining-room-interior-design-with-picture-frame_53876-126787.jpg"
      imageAlt="Luxurious Peppers Restaurant gallery dining space"
      mediaAnimation="blur-reveal"
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/portrait-woman-luxurious-restaurant_23-2150517450.jpg", alt: "Guest at restaurant" },
        { src: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-sitting-table_23-2149684349.jpg", alt: "Guest at restaurant" },
        { src: "http://img.b2bpic.net/free-photo/spectacular-woman-with-dark-long-hair-smiling-coffee-break_291650-641.jpg", alt: "Guest at restaurant" },
        { src: "http://img.b2bpic.net/free-photo/people-having-dinner-luxurious-restaurants_23-2151081852.jpg", alt: "Guest at restaurant" },
        { src: "http://img.b2bpic.net/free-photo/people-cheering-with-wine-glasses-luxurious-restaurant_23-2150517417.jpg", alt: "Guest at restaurant" },
      ]}
      avatarText="Join our community of art and food enthusiasts."
      marqueeItems={[
        { type: "text", text: "Seasonal Harvests" },
        { type: "text", text: "Live Jazz Nights" },
        { type: "text", text: "Curated Art Gallery" },
        { type: "text", text: "Fine Wine Pairings" },
        { type: "text", text: "Private Dining" },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="Our Philosophy"
      title="A Hidden Gem in the City's Heart."
      description="At Peppers, we believe a meal is an exhibition. We marry the freshest, hyper-local ingredients with techniques that respect the landscape, serving them within a sanctuary of contemporary art. It's not just dining; it's a curated cultural immersion."
      subdescription="Every plate tells a story of the soil, the sea, and our passion for the craft."
      icon={Sparkles}
      imageSrc="http://img.b2bpic.net/free-photo/man-preparing-salad-with-fresh-vegetables-wooden-table-cooking-tasty-healthy-food-black-background-vegetarian-food-healthy-cooking-concept_639032-425.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={false}
      products={[
        { id: "1", name: "Wild-Caught Scallop Carpaccio", price: "Market", imageSrc: "http://img.b2bpic.net/free-photo/crab-meat-coconut-cream-soup-micro-greens-gray-concrete-background-top-view-copy-space-h_1258-52397.jpg" },
        { id: "2", name: "Foraged Mushroom Risotto", price: "Market", imageSrc: "http://img.b2bpic.net/free-photo/high-view-delicious-salad-brown-plate_23-2148537250.jpg" },
        { id: "3", name: "Herb-Crusted Heritage Lamb", price: "Market", imageSrc: "http://img.b2bpic.net/free-photo/meatball-sauce-topped-with-greenery_140725-1813.jpg" },
        { id: "4", name: "Dark Chocolate & Lavender Ganache", price: "Market", imageSrc: "http://img.b2bpic.net/free-photo/young-female-cook-making-delicious-chocolate-cake-with-cream-white-table_181624-44926.jpg" },
        { id: "5", name: "Roasted Heirloom Beet Salad", price: "Market", imageSrc: "http://img.b2bpic.net/free-photo/top-view-plate-with-different-fruits_1203-529.jpg" },
        { id: "6", name: "Artisanal Cheese & Honey Selection", price: "Market", imageSrc: "http://img.b2bpic.net/free-photo/top-view-cooked-squashes-designed-meal-inside-plate-grey-surface_140725-89993.jpg" },
      ]}
      title="Curated Seasonal Offerings"
      description="A rotating selection of plates that change with the rhythm of the season."
    />
  </div>

  <div id="experience" data-section="experience">
      <FeatureCardTwentyEight
      textboxLayout="default"
      useInvertedBackground={true}
      animationType="slide-up"
      features={[
        {
          id: "live",          title: "Live Acoustic Sessions",          subtitle: "Curated piano and jazz sets.",          category: "Atmosphere",          value: "Nightly"},
        {
          id: "art",          title: "Rotating Gallery Walls",          subtitle: "Local artists on display.",          category: "Vibe",          value: "Unique"},
        {
          id: "events",          title: "Intimate Cultural Events",          subtitle: "Poetry, tasting, workshops.",          category: "Experience",          value: "Limited"},
      ]}
      title="The Art of Experience"
      description="Peppers Restaurant is an intimate canvas of sound and light."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", name: "Elena V.", role: "Art Collector", company: "Peppers Guest", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/young-woman-eating-pasta-cafe_1303-25260.jpg" },
        { id: "2", name: "Marcus R.", role: "Food Critic", company: "Peppers Guest", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/handsome-man-smiling-while-sitting-table_23-2148435789.jpg" },
        { id: "3", name: "Sophia L.", role: "Local Designer", company: "Peppers Guest", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/handsome-groom-feeding-his-bride-with-croissant-cafe_176420-2272.jpg" },
        { id: "4", name: "Julian S.", role: "Composer", company: "Peppers Guest", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/smiley-friends-enjoying-burgers_23-2148718864.jpg" },
        { id: "5", name: "Chloe M.", role: "Architect", company: "Peppers Guest", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/new-year-spend-with-friends-celebrating_23-2149196973.jpg" },
      ]}
      title="What Our Guests Say"
      description="More than a meal, a memory."
    />
  </div>

  <div id="booking" data-section="booking">
      <ContactText
      useInvertedBackground={true}
      background={{ variant: "radial-gradient" }}
      text="Secure Your Experience. Limited availability each evening ensures an intimate, dedicated environment for every guest. Reach us on WhatsApp at +441685884011."
      buttons={[{ text: "Book Your Table", href: "#" }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Visit",          items: [
            { label: "Reserve a Table", href: "#booking" },
            { label: "Find Us", href: "#" },
          ],
        },
        {
          title: "Explore",          items: [
            { label: "Philosophy", href: "#about" },
            { label: "Menu", href: "#menu" },
          ],
        },
        {
          title: "Contact",          items: [
            { label: "Private Events", href: "#" },
            { label: "Careers", href: "#" },
          ],
        },
      ]}
      logoText="PEPPERS"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}