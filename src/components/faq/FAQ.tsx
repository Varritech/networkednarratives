import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import { Card } from '../ui/Card';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card 
      className={`overflow-hidden transition-all duration-300 ${isOpen ? 'border-[#00e5ff]/30' : 'border-white/10'}`}
      hoverable={false}
    >
      <button 
        className="w-full py-6 px-6 flex justify-between items-center text-left focus:outline-none bg-transparent"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-xl font-semibold text-white">{question}</h3>
        <span className={`flex-shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'text-[#00e5ff]' : 'text-gray-400'}`}>
          {isOpen ? (
            <ChevronUpIcon className="w-6 h-6" />
          ) : (
            <ChevronDownIcon className="w-6 h-6" />
          )}
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pt-0 pb-6">
          <div className="w-full h-px bg-white/10 mb-6"></div>
          <p className="text-gray-300 leading-relaxed">{answer}</p>
        </div>
      </div>
    </Card>
  );
};

export const FAQ: React.FC = () => {
  const faqItems = [
    {
      question: "How does the interview process work?",
      answer: "Our interview process is designed to be simple and stress-free. We schedule a convenient time, and our team guides you through a conversation about your expertise. We handle all the technical aspects, and you just need to show up and share your knowledge. The raw footage is then transformed into multiple pieces of content."
    },
    {
      question: "Do I need special equipment?",
      answer: "No special equipment is needed. A computer with a webcam and a stable internet connection are all you need. We provide guidance on optimal lighting and sound setup using what you already have available."
    },
    {
      question: "How long does the process take from start to finish?",
      answer: "From initial interview to delivered content, the process typically takes 2-3 weeks. This includes the interview session (1-2 hours), content creation, revisions, and final delivery. Rush options are available for time-sensitive projects."
    },
    {
      question: "Can I review content before it's published?",
      answer: "Absolutely! Client approval is a crucial part of our process. You'll have the opportunity to review all content and request revisions before anything is published or delivered for your use."
    },
    {
      question: "What platforms do you optimize content for?",
      answer: "We create content optimized for LinkedIn, Instagram, TikTok, YouTube, Twitter/X, and more. Our team stays current with platform-specific requirements and best practices to ensure your content performs well wherever you choose to share it."
    }
  ];

  return (
    <section id="faq" className="bg-gradient-to-b from-black to-black/90 py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#00e5ff] mb-4 text-center">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#00e5ff]/70 to-[#00e5ff] mx-auto mb-16"></div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 
