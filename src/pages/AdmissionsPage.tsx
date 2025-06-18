import React from 'react';
import { Link } from 'react-router-dom';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import GlobalHeader from '@/components/layout/GlobalHeader';
import GlobalFooter from '@/components/layout/GlobalFooter';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Users, Award, BookOpen, Globe, CalendarDays, Edit3 } from 'lucide-react';

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  programOfInterest: z.string().min(1, { message: "Please select a program." }),
  message: z.string().min(10, {message: "Message must be at least 10 characters."}).optional(),
});

const AdmissionsPage = () => {
  console.log('AdmissionsPage loaded');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      programOfInterest: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Admissions Inquiry Form submitted:", values);
    // In a real application, you would send this data to a backend service
    alert("Thank you for your inquiry! We will get back to you soon.");
    form.reset();
  }

  const faqItems = [
    {
      id: "faq1",
      question: "What are the general admission requirements?",
      answer: "Innovatech University seeks students with a strong academic background, a passion for technology and engineering, and a drive to innovate. Specific requirements vary by program (Undergraduate, Postgraduate, Doctoral). Please refer to the detailed criteria for your chosen program.",
    },
    {
      id: "faq2",
      question: "Are there specific English language proficiency requirements for international students?",
      answer: "Yes, international applicants whose first language is not English must provide proof of English proficiency through recognized tests like TOEFL or IELTS. Minimum score requirements are detailed on our international admissions page.",
    },
    {
      id: "faq3",
      question: "What financial aid and scholarship options are available?",
      answer: "We offer a range of merit-based scholarships, need-based grants, and research stipends for eligible students. We encourage all prospective students to explore these options on our Financial Aid portal.",
    },
    {
      id: "faq4",
      question: "What is the application deadline?",
      answer: "Application deadlines vary by program and intake period. Please check the 'Key Dates & Deadlines' section for the most up-to-date information for your specific program of interest.",
    },
  ];

  const programOptions = [
    "Artificial Intelligence & Machine Learning",
    "Robotics Engineering",
    "Quantum Computing",
    "Biotechnology & Genetic Engineering",
    "Sustainable Energy Systems",
    "Cybersecurity & Digital Forensics",
    "Aerospace Engineering",
    "Data Science & Big Data Analytics"
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <GlobalHeader />

      <main className="flex-grow">
        {/* Hero Section */}
        <section
          className="py-20 md:py-32 bg-cover bg-center text-white relative"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-sky-700/80 to-indigo-800/80"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              Admissions at Innovatech University
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-sky-100">
              Embark on your journey to become a leader in engineering and technology. Discover our programs, unique opportunities, and how to apply to join our global community of innovators.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <Breadcrumb className="mb-10">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Admissions</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content Area */}
            <div className="md:col-span-2 space-y-10">
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-gray-800 dark:text-white flex items-center">
                    <Users className="mr-3 h-7 w-7 text-primary" /> Admission Criteria
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    Understand the requirements to join our prestigious undergraduate and postgraduate programs.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>Innovatech University welcomes ambitious and talented individuals from around the globe. Our admission process is designed to identify students with exceptional potential and a commitment to excellence in engineering and technology.</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Undergraduate Programs:</strong> Strong academic record in science and mathematics, demonstrated passion for technology, and relevant standardized test scores (e.g., SAT, ACT, or equivalent for international students).</li>
                    <li><strong>Postgraduate Programs (Masters & PhD):</strong> A relevant Bachelor's degree with high academic standing, research aptitude, letters of recommendation, and a compelling statement of purpose. Specific GMAT/GRE requirements may apply.</li>
                    <li><strong>International Applicants:</strong> Proof of English language proficiency (e.g., TOEFL, IELTS) is required if English is not your first language. We provide support for visa applications and international student integration.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-gray-800 dark:text-white flex items-center">
                    <Edit3 className="mr-3 h-7 w-7 text-primary" /> Application Process & Deadlines
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    A step-by-step guide to navigate your application journey efficiently.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
                  <ol className="list-decimal list-inside space-y-3">
                    <li><strong>Explore Programs:</strong> Identify the program that aligns with your academic and career aspirations.</li>
                    <li><strong>Check Eligibility & Requirements:</strong> Carefully review the specific criteria for your chosen program.</li>
                    <li><strong>Prepare Documents:</strong> Gather all necessary documents, including transcripts, test scores, letters of recommendation, and personal essays.</li>
                    <li><strong>Submit Online Application:</strong> Complete and submit your application through our secure online portal before the deadline.</li>
                    <li><strong>Track Application Status:</strong> Monitor your application status through the portal. Shortlisted candidates may be invited for an interview.</li>
                  </ol>
                  <div className="mt-6 p-4 bg-sky-50 dark:bg-sky-900/30 rounded-md border border-sky-200 dark:border-sky-700">
                    <h4 className="font-semibold text-sky-700 dark:text-sky-300 flex items-center"><CalendarDays className="mr-2 h-5 w-5"/>Key Deadlines:</h4>
                    <ul className="list-disc list-inside ml-4 mt-2 text-sm">
                      <li>Early Application: October 15th</li>
                      <li>Regular Application: January 15th</li>
                      <li>Scholarship Application: February 1st</li>
                    </ul>
                    <p className="text-xs mt-2 text-gray-600 dark:text-gray-400">Deadlines are subject to change. Please refer to the official academic calendar.</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                    Start Your Application
                  </Button>
                </CardFooter>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-gray-800 dark:text-white flex items-center">
                    <Globe className="mr-3 h-7 w-7 text-primary" /> Why Study at Innovatech?
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    Discover the unique advantages and opportunities awaiting you.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700 dark:text-gray-300">
                  {[
                    { icon: <BookOpen className="h-6 w-6 text-primary" />, title: "World-Class Faculty", description: "Learn from leading researchers and industry experts at the forefront of their fields." },
                    { icon: <Award className="h-6 w-6 text-primary" />, title: "Cutting-Edge Research", description: "Engage in groundbreaking research projects with access to state-of-the-art facilities." },
                    { icon: <Users className="h-6 w-6 text-primary" />, title: "Global Network", description: "Join a diverse and vibrant international community of students and alumni." },
                    { icon: <CheckCircle className="h-6 w-6 text-primary" />, title: "Career Advancement", description: "Benefit from strong industry connections, internships, and career support services." },
                  ].map(item => (
                    <div key={item.title} className="flex items-start space-x-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      {item.icon}
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-white">{item.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Area */}
            <aside className="space-y-10">
              <Card className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold flex items-center">
                    <Award className="mr-3 h-7 w-7" /> Financial Aid & Stipends
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-blue-100">We are committed to making education accessible. Explore various scholarships, grants, and research stipends available to both domestic and international students.</p>
                  <Button variant="secondary" className="w-full bg-white text-primary hover:bg-gray-100">
                    Explore Aid Options
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">Download Prospectus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Get detailed information about our programs, campus life, and admission procedures.
                  </p>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">Virtual Campus Tour</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Explore our state-of-the-art facilities and vibrant campus from anywhere in the world.
                  </p>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                    Take a Virtual Tour
                  </Button>
                </CardContent>
              </Card>
            </aside>
          </div>

          {/* FAQ Section */}
          <section className="mt-16 md:mt-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg p-2">
              {faqItems.map((item) => (
                <AccordionItem value={item.id} key={item.id} className="border-b dark:border-gray-700">
                  <AccordionTrigger className="text-left hover:no-underline px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-200">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-3 pt-1 text-sm text-gray-600 dark:text-gray-400">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Inquiry Form Section */}
          <section className="mt-16 md:mt-20 py-12 md:py-16 bg-muted dark:bg-gray-800/50 rounded-xl shadow-inner">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Have More Questions?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Our admissions team is here to help. Fill out the form below, and we'll get back to you shortly.
              </p>
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-xl mx-auto space-y-6 p-6 md:p-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-300">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Ada Lovelace" {...field} className="dark:bg-gray-700 dark:text-white dark:border-gray-600" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-300">Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="e.g., ada.lovelace@example.com" {...field} className="dark:bg-gray-700 dark:text-white dark:border-gray-600" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="programOfInterest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-300">Program of Interest</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="dark:bg-gray-700 dark:text-white dark:border-gray-600">
                            <SelectValue placeholder="Select a program" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="dark:bg-gray-700 dark:text-white">
                          {programOptions.map(program => (
                            <SelectItem key={program} value={program} className="hover:dark:bg-gray-600">{program}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-300">Your Message (Optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us more about your inquiry..."
                          className="resize-none dark:bg-gray-700 dark:text-white dark:border-gray-600"
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white">
                  Send Inquiry
                </Button>
              </form>
            </Form>
          </section>
        </div>
      </main>

      <GlobalFooter />
    </div>
  );
};

export default AdmissionsPage;