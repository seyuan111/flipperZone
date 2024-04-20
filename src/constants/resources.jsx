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
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
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
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
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