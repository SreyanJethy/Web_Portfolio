"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const images = [
    "/images/self1.jpg",
    "/images/clouds1.jpg",
    "/images/bike1.jpg",
    "/images/sunset1.jpg",
  ];

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{ opacity: 0, y: -50, rotate: 0 }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt={`about-${index}`}
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl">
        <Paragraph className="mt-4">
          Hey there, I&apos;m Sreyan Jethy - a third-year Computer Science and Engineering student,
          at C V Raman Global University in Bhubaneswar. Welcome to my piece of the digital 
          universe!
        </Paragraph>
        <Paragraph className="mt-4">
          From the moment I wrote my first line of code, I was hooked on the limitless possibilities
          tech offers. Technology&apos;s power to change lives fascinates me,
          and I love diving deep into this world, dreaming up ways to make it better for everyone. 
          My interests lean toward AI and Machine Learning, and while I&apos;m still finding my favorites,
          I thrive wherever there&apos;s a new tool or challenge to explore.
        </Paragraph>
        <Paragraph className="mt-4">
          Beyond engineering, you&apos;ll catch me on a bike ride with music in my ears—two passions that keep me balanced and inspired.
          I&apos;ve pushed myself in the competitive world, reaching the finals of events like 
          Smart India Hackathon internal finals, D3 Hackathon, D3 Ideate (which I won), and Silicon Tech Fest Nirman. 
          These experiences have fueled my drive to keep learning, collaborating, and pushing boundaries.
        </Paragraph>
        <Paragraph className="mt-4">
          What sets me apart is my unwavering appreciation for design. I believe
          that aesthetics and usability go hand in hand. My eye for awesome
          design ensures that every project I undertake not only works
          flawlessly under the hood but also looks stunning on the surface.
        </Paragraph>
        <Paragraph className="mt-4">
          I believe in starting small to make a big difference. 
          My goal is to improve my surroundings, step by step—whether that&apos;s lending a hand to a peer, 
          sharing what I know, or finding creative solutions to everyday problems. 
          I connect easily with people, value teamwork, and always look for ways to move forward—together.
        </Paragraph>
        <Paragraph className="mt-4">
          This site is my way of sharing not just my technical explorations, achievements, and projects,
          but also my stories, lessons learned, and the occasional burst of creative energy. 
          Whether you&apos;re a fellow tech enthusiast, a curious soul, or just here for a bit of inspiration, 
          I hope you find something that sparks your interest.
        </Paragraph>
        <Paragraph className="mt-4">
          Let&apos;s connect, create, and grow—because making the world a better place starts here,
          with every small action and every big dream. Thanks for stopping by.
        </Paragraph>
      </div>
    </div>
  );
}
