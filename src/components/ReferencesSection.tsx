import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";

// Example testimonials data
const testimonials = [
  {
    name: "Glen Peterson",
    role: "Engineering Manager, Volvo Cars",
    testimonial:
      "I had the opportunity to work with Prashanth when he was a consultant in the team I managed. He consistently demonstrated strong initiative, particularly in identifying and addressing application performance issues. His work directly contributed to reducing infrastructure costs and improving overall system efficiency.\n Prashanth is highly capable of working independently, and his persistence in investigating complex problems allowed him to uncover root causes that were not immediately apparent. His combination of technical expertise, problem-solving ability, and self-motivation made him a valuable member of the team.",
  },
  {
    name: "Anand Kannan",
    role: "Director of Engineering, Volvo Cars",
    testimonial:
      "I had the pleasure of working with Prashanth, who contributed as a full stack engineer on my team. Beyond his strong software engineering skills, he has an impressive depth of knowledge in infrastructure and CI/CD platforms. \n Prashanth is an extremely talented and fast learner — he consistently picks up new concepts and technologies quickly and applies them effectively to deliver high-quality solutions. His ability to move seamlessly between application development and platform/infrastructure work makes him a highly versatile engineer. \n I strongly recommend Prashanth for any team looking for a skilled Software engineer with a sharp technical mind, strong problem-solving abilities, and a genuine eagerness to learn and grow. He would be an asset to any engineering organization.",
  },
  // Add more testimonials as needed
];

const ReferencesSection: React.FC = () => {
  return (
    <section id="references" className="py-12 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">References</h2>
        <div className="relative">
          <Carousel className="">
            <CarouselContent>
              {testimonials.map((ref, idx) => (
                <CarouselItem key={idx} className="">
                  <div className="bg-white shadow rounded-lg p-6 border border-gray-200">
                    {ref.testimonial.split('\n').map((para, i) => (
                      <p key={i} className="text-lg mb-4">
                        <em className="italic">{i === 0 ? '“' : ''}{para.trim()}{i === ref.testimonial.split('\n').length - 1 ? '”' : ''}</em>
                      </p>
                    ))}
                    <div className="text-right">
                      <span className="font-semibold">{ref.name}</span>
                      <span className="text-gray-500">, {ref.role}</span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;
