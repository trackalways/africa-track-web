
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Briefcase, Users, Code, Rocket } from 'lucide-react';

const Career = () => {
  const careers = [
    {
      title: "Sales Executive",
      department: "Sales",
      location: "Nairobi, Kenya",
      type: "Full-time",
      description: "Join our growing sales team to promote Trackalways solutions across the African market.",
      responsibilities: [
        "Develop and maintain relationships with clients",
        "Identify and pursue new sales opportunities",
        "Conduct product demonstrations",
        "Achieve sales targets",
        "Provide feedback on market trends"
      ],
      requirements: [
        "2+ years of sales experience",
        "Knowledge of fleet management or telematics industry preferred",
        "Excellent communication and presentation skills",
        "Self-motivated with a drive to succeed"
      ],
      icon: Briefcase
    },
    {
      title: "Technical Support Engineer",
      department: "Customer Support",
      location: "Nairobi, Kenya",
      type: "Full-time",
      description: "Provide technical support to our clients and ensure smooth operation of our telematics solutions.",
      responsibilities: [
        "Troubleshoot hardware and software issues",
        "Install and configure telematics devices",
        "Provide training to clients",
        "Document technical processes",
        "Collaborate with the development team on product improvements"
      ],
      requirements: [
        "Technical background in IT, electronics, or related field",
        "Experience with GPS tracking systems or telematics preferred",
        "Strong problem-solving skills",
        "Customer-oriented mindset"
      ],
      icon: Code
    },
    {
      title: "Business Development Manager",
      department: "Business Development",
      location: "Nairobi, Kenya",
      type: "Full-time",
      description: "Lead our expansion efforts across East Africa and develop strategic partnerships.",
      responsibilities: [
        "Identify and pursue new business opportunities",
        "Develop and maintain strategic partnerships",
        "Analyze market trends and competition",
        "Create and implement business development strategies",
        "Represent the company at industry events"
      ],
      requirements: [
        "5+ years of business development experience",
        "Experience in telematics or related industry preferred",
        "Strong networking and relationship-building skills",
        "Strategic thinking and planning abilities"
      ],
      icon: Rocket
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We constantly seek new ways to improve our products and services, embracing the latest technologies."
    },
    {
      title: "Trust",
      description: "We build trust through transparency, reliability, and consistent delivery on our promises."
    },
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, setting high standards for our products and services."
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork, both within our organization and with our partners and clients."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Be part of a dynamic team transforming how businesses across Africa track, manage, and secure their assets and fleet.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Why Work With Us</h2>
          <p className="text-lg text-gray-700 mb-8">
            At Trackalways Africa, we're building the future of telematics across the continent. We offer a 
            collaborative environment where innovation is encouraged, and your contributions make a real impact. 
            Join us in our mission to transform how Africa tracks, moves, and secures.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-blue-900 mb-8">Current Openings</h2>
        
        <div className="space-y-8">
          {careers.map((career, index) => {
            const Icon = career.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Icon className="text-blue-900 mr-2" />
                      {career.title}
                    </div>
                    <span className="text-sm font-normal bg-blue-100 text-blue-800 py-1 px-3 rounded-full">
                      {career.type}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                    <div>{career.department}</div>
                    <div>•</div>
                    <div>{career.location}</div>
                  </div>
                  
                  <p className="mb-4">{career.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Responsibilities:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {career.responsibilities.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {career.requirements.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-md transition">
                    Apply Now
                  </button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">Don't see the right role?</h3>
          <p className="text-lg text-gray-700 mb-6">
            We're always looking for talented individuals to join our team. Send your resume to 
            <a href="mailto:careers@trackalwaysafrica.com" className="text-blue-700 ml-1 hover:underline">
              careers@trackalwaysafrica.com
            </a>
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Career;
