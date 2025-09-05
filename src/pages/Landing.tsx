import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { 
  Rocket, 
  Leaf, 
  Wifi, 
  Globe, 
  Shield, 
  Zap,
  CheckCircle,
  Clock,
  Users
} from 'lucide-react';
import { roadmapItems, teamMembers, faqs } from '@/data/mockData';
import heroValidatorImage from '@/assets/hero-validator.jpg';
import elenaImage from '@/assets/team-elena.jpg';
import marcusImage from '@/assets/team-marcus.jpg';
import amiraImage from '@/assets/team-amira.jpg';
import jakeImage from '@/assets/team-jake.jpg';

const teamImages = {
  '1': elenaImage,
  '2': marcusImage,
  '3': amiraImage,
  '4': jakeImage
};

const Landing = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-success" />;
      case 'in-progress':
        return <Clock className="w-5 h-5 text-warning" />;
      default:
        return <Clock className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-success/10 text-success border-success/20">Completed</Badge>;
      case 'in-progress':
        return <Badge className="bg-warning/10 text-warning border-warning/20">In Progress</Badge>;
      default:
        return <Badge variant="outline">Upcoming</Badge>;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/50 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  Next-Gen Validator Infrastructure
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                  Decentralized Validators{' '}
                  <span className="bg-gradient-cosmic bg-clip-text text-transparent">
                    Powered by Space
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Run blockchain validators anywhere on Earth with Starlink connectivity, 
                  renewable energy, and enterprise-grade reliability. Join the future of 
                  decentralized infrastructure.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="cosmic" 
                  size="xl"
                  asChild
                >
                  <Link to="/checkout">
                    Purchase Validator - 1200 USDT
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="xl"
                  asChild
                >
                  <Link to="#features">
                    Learn More
                  </Link>
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-success" />
                  <span>99.9% Uptime SLA</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Leaf className="w-4 h-4 text-success" />
                  <span>100% Renewable</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Wifi className="w-4 h-4 text-success" />
                  <span>Global Coverage</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src={heroValidatorImage} 
                  alt="Orion Remote Validator"
                  className="w-full rounded-xl shadow-cosmic"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-cosmic rounded-xl opacity-20 blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Orion Section */}
      <section id="features" className="py-20 lg:py-32 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Why Choose{' '}
              <span className="bg-gradient-cosmic bg-clip-text text-transparent">
                Orion?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unlike traditional validators, Orion operates in the most remote locations 
              using cutting-edge satellite and renewable energy technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-cosmic rounded-lg flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>100% Renewable Energy</CardTitle>
                <CardDescription>
                  Solar panels and wind turbines power your validator with zero carbon footprint
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Integrated solar panel system</li>
                  <li>• Wind turbine compatibility</li>
                  <li>• Battery backup for 24/7 operation</li>
                  <li>• Smart energy management</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-cosmic rounded-lg flex items-center justify-center mb-4">
                  <Wifi className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>Starlink Ready</CardTitle>
                <CardDescription>
                  High-speed satellite internet connectivity anywhere on the planet
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Built-in Starlink terminal</li>
                  <li>• Backup cellular connectivity</li>
                  <li>• Auto-failover networking</li>
                  <li>• 99.9% uptime guarantee</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-cosmic rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>True Decentralization</CardTitle>
                <CardDescription>
                  Deploy validators in remote locations for maximum network resilience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Remote location deployment</li>
                  <li>• Disaster-resistant infrastructure</li>
                  <li>• Geographic diversification</li>
                  <li>• Censorship resistance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Meet{' '}
              <span className="bg-gradient-cosmic bg-clip-text text-transparent">
                The Team
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry veterans from SpaceX, Ethereum Foundation, and leading renewable energy companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="bg-gradient-card border-border/50 shadow-card text-center">
                <CardHeader>
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <img 
                      src={teamImages[member.id as keyof typeof teamImages]} 
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover ring-2 ring-border"
                    />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 lg:py-32 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Development{' '}
              <span className="bg-gradient-cosmic bg-clip-text text-transparent">
                Roadmap
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our journey towards global decentralized validator infrastructure.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {roadmapItems.map((item, index) => (
                <Card key={item.id} className="bg-gradient-card border-border/50 shadow-card">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        {getStatusIcon(item.status)}
                        <div>
                          <CardTitle className="text-xl">{item.title}</CardTitle>
                          <CardDescription className="text-base mt-1">
                            {item.description}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="text-right space-y-2">
                        {getStatusBadge(item.status)}
                        <p className="text-sm text-muted-foreground">{item.date}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Frequently Asked{' '}
              <span className="bg-gradient-cosmic bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="bg-gradient-card border border-border/50 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-cosmic opacity-10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Ready to Join the{' '}
              <span className="bg-gradient-cosmic bg-clip-text text-transparent">
                Future?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get your Orion Remote Validator today and start earning rewards 
              while supporting truly decentralized blockchain infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="cosmic" 
                size="xl"
                asChild
              >
                <Link to="/checkout">
                  <Zap className="w-5 h-5 mr-2" />
                  Purchase Now - 1200 USDT
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="xl"
              >
                <Users className="w-5 h-5 mr-2" />
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;