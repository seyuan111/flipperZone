import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/About" },
  { label: "Purchase", href: "/Purchase" },
  { label: "Contact", href: "/Contact" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    text: "The Flipper I have bought works well. I like how this flipper allows me to do a lot of hacking and I recommend this product.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    text: "I used this drone and it delivers the letter to my friends house and it came back to me. I recommend buying products from this site",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    text: "I love this flipper product. I love how it can hack, operate the garage etc. I recommend going on this site to buy flippers.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    text: "The people were real nice. I bought a flipper, when there was a problem, they help you get it fixed right away. I love this site and this product",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    text: "This site has the best flippers ever. I have bought a flipper from this site and it works well. I love using flippers because I am a flipper fan. This flipper has been amazing and my family loves to use them.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Flipper Zero",
    description:
      "Flipper Zero is designed to operate things using the flipper device. It can be used to open doors, gates, gain access code, etc.",
  },
  {
    icon: <Fingerprint />,
    text: "Flipper Zero Plus",
    description:
      "This is the Flipper Zero Plus. A Flipper that has a firmware update. This flipper can hack.",
  },
  {
    icon: <ShieldHalf />,
    text: "Flipper Zero Super",
    description:
      "This Flipper not only has a firmware update but it has a HB course. This flipper can do a lot of kind of things. Hacking, opening gates, gaining access code, and also opening the lights.",
  },
  {
    icon: <BatteryCharging />,
    text: "Pro Drone",
    description:
      "This Drone has a built in camera. It operates through wifi, it has a headless mode. If you want to use this to see what is going on outside.",
  },
  {
    icon: <PlugZap />,
    text: "Delivery Drone",
    description:
      "Want to deliver an item to your team. This delivery drone can help deliver items to any places where you want to deliver.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];

export const checklistItems = [
  {
    title: "Flipper Zero",
    description:
      "If you need a flipper, we will provide a flipper to you.",
  },
  {
    title: "Broken Flipper",
    description:
      "Contact support and have it delivered and we will fix it and ship it back to you for free.",
  },
  {
    title: "Need Help",
    description:
      "We will provide you with the best service possible.",
  },
  {
    title: "Review",
    description:
      "We have one of the best reviews for the flippers.",
  },
];

export const pricingOptions = [
  {
    title: "Basic",
    price: "Free",
    features: [
      "Order online",
      "Contact for support",
      "Basic plan",
      "Flippers Delivered",
    ],
  },
  {
    title: "Prime",
    price: "$20/mo",
    features: [
      "Contact for support",
      "Flippers Delivered",
      "Faster Delivery",
      "Order more stuff"
    ],
  },
  {
    title: "Premium",
    price: "$50/mo",
    features: [
      "Contact for support",
      "Flippers Delivered",
      "Order more stuff",
      "Learn how to use a Flippers"
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];