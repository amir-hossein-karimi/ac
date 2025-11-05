import { Code, Database, Cloud, Smartphone, BarChart, Lock, Check, HelpCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      features: ['React & TypeScript', 'Responsive Design', 'SEO Optimized', 'Performance Focused'],
      color: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['Native Performance', 'Cross-Platform', 'Offline Support', 'Push Notifications'],
      color: 'bg-cyan-100',
      iconColor: 'text-cyan-600',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for your business.',
      features: ['Auto Scaling', 'High Availability', 'Cost Optimization', 'Disaster Recovery'],
      color: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Optimize and manage your databases for peak performance and reliability.',
      features: ['Performance Tuning', 'Data Migration', 'Backup Solutions', '24/7 Monitoring'],
      color: 'bg-violet-100',
      iconColor: 'text-violet-600',
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics.',
      features: ['Real-time Dashboards', 'Predictive Analysis', 'Custom Reports', 'Data Visualization'],
      color: 'bg-sky-100',
      iconColor: 'text-sky-600',
    },
    {
      icon: Lock,
      title: 'Security Services',
      description: 'Comprehensive security solutions to protect your digital assets.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Threat Monitoring'],
      color: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: 'per month',
      description: 'Perfect for small teams and startups',
      features: [
        'Up to 5 team members',
        '10 GB storage',
        'Basic support',
        'Core features',
        'Email notifications',
      ],
      highlighted: false,
    },
    {
      name: 'Professional',
      price: '$79',
      period: 'per month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 20 team members',
        '100 GB storage',
        'Priority support',
        'Advanced features',
        'API access',
        'Custom integrations',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: 'per month',
      description: 'For large organizations',
      features: [
        'Unlimited team members',
        'Unlimited storage',
        '24/7 dedicated support',
        'All features',
        'Custom development',
        'SLA guarantee',
        'Advanced security',
      ],
      highlighted: false,
    },
  ];

  const faqs = [
    {
      question: 'What technologies do you use?',
      answer: 'We use cutting-edge technologies including React, TypeScript, Node.js, Python, and various cloud platforms like AWS and Azure. Our tech stack is always evolving to include the latest and most reliable tools.',
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on scope and complexity. A simple website might take 2-4 weeks, while a complex application could take 3-6 months. We provide detailed timelines during the initial consultation.',
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes! We offer various support packages including maintenance, updates, monitoring, and technical support. Our team is available 24/7 for enterprise clients.',
    },
    {
      question: 'Can you work with our existing systems?',
      answer: 'Absolutely. We specialize in integrating with existing systems and can work with virtually any platform or technology stack. We\'ll assess your current setup and create a seamless integration plan.',
    },
    {
      question: 'What is your development process?',
      answer: 'We follow an agile methodology with regular sprints, continuous integration, and frequent client communication. You\'ll have full visibility into the development process with regular demos and updates.',
    },
    {
      question: 'Do you offer custom solutions?',
      answer: 'Yes, all our services can be customized to meet your specific needs. We pride ourselves on creating tailored solutions that align perfectly with your business objectives.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4">Services</Badge>
          <h1 className="mb-6 text-white">Our Services</h1>
          <p className="max-w-3xl mx-auto text-blue-100">
            Comprehensive solutions tailored to your business needs. From development to deployment, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div className={`h-14 w-14 ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className={`h-7 w-7 ${service.iconColor}`} />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                          <Check className="h-4 w-4 text-blue-600" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Learn More</Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtfGVufDF8fHx8MTc2MjI4MTEyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Professional Team"
            className="rounded-lg shadow-2xl w-full max-h-96 object-cover"
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Flexible Pricing Plans</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our core features.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`${
                  plan.highlighted
                    ? 'border-blue-600 shadow-xl scale-105 relative'
                    : ''
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-blue-600">Most Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-blue-600">{plan.price}</span>
                    <span className="text-muted-foreground"> {plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-blue-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    variant={plan.highlighted ? 'default' : 'outline'}
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <HelpCircle className="h-8 w-8 text-blue-600" />
              <h2>Frequently Asked Questions</h2>
            </div>
            <p className="text-muted-foreground">
              Find answers to common questions about our services
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Process Section with Tabs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A transparent, collaborative approach to delivering exceptional results
            </p>
          </div>
          <Tabs defaultValue="discovery" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="discovery">Discovery</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
              <TabsTrigger value="development">Development</TabsTrigger>
              <TabsTrigger value="launch">Launch</TabsTrigger>
            </TabsList>
            <TabsContent value="discovery" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Discovery & Planning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">We start by understanding your business goals, target audience, and project requirements.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-blue-600 mt-0.5" />
                      <span>Initial consultation and requirement gathering</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-blue-600 mt-0.5" />
                      <span>Market research and competitor analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-blue-600 mt-0.5" />
                      <span>Project scope definition and timeline planning</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="design" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Design & Prototyping</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Our design team creates beautiful, user-friendly interfaces tailored to your brand.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-blue-600 mt-0.5" />
                      <span>Wireframing and user flow mapping</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-blue-600 mt-0.5" />
                      <span>High-fidelity mockups and interactive prototypes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-blue-600 mt-0.5" />
                      <span>Design system creation and brand guidelines</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="development" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Development & Testing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Our developers bring designs to life with clean, maintainable code.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-blue-600 mt-0.5" />
                      <span>Agile development with regular sprint reviews</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-blue-600 mt-0.5" />
                      <span>Comprehensive testing and quality assurance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-blue-600 mt-0.5" />
                      <span>Performance optimization and security hardening</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="launch" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Launch & Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">We ensure a smooth launch and provide ongoing support for your success.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-blue-600 mt-0.5" />
                      <span>Deployment to production environment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-blue-600 mt-0.5" />
                      <span>User training and documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-blue-600 mt-0.5" />
                      <span>Ongoing maintenance and support packages</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
