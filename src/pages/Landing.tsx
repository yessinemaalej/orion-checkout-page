import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import video from '../../public/video.mp4'
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
import heroValidatorImage from '@/assets/or.png';
import orionImage from '@/assets/Orion.png';
import oliImage from '@/assets/team-Oli.webp';
import azeemImage from '@/assets/team-azeem.webp';
import stefanImage from '@/assets/team-stefan.webp';
import jakeImage from '@/assets/team-jake.jpg';
import ValuePropositionDiagram from '@/components/ValuePropositionDiagram';


const teamImages = {
  '1': azeemImage,
  '2': orionImage,
  '3': oliImage,
  '4': orionImage,
  '5': orionImage

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
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/50 to-transparent" />
        <div className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="flex items-center justify-between gap-12">
            <div className="flex-1 space-y-8 max-w-3xl">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  Next-Gen Validator Infrastructure
                </Badge>
                <h1 className="title-hero">
                  Decentralized Validators{' '}
                  <span className="gradient-text">
                    Powered by Space
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Run blockchain validators anywhere on Earth with Starlink connectivity, 
                  renewable energy, and enterprise-grade reliability. Join the future of 
                  decentralized infrastructure and earn passive income.
                </p>
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
            
            <div className="flex-shrink-0">
              <Button 
                variant="cosmic" 
                size="xl"
                asChild
                className="min-w-[280px]"
              >
                <Link to="/checkout">
                  <Zap className="w-5 h-5 mr-2" />
                  Purchase ORION - 1200 USDT
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Video Section */}
<section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="title-section">
              ORION{' '}
              <span className="gradient-text">
                in Light
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Watch how ORION harnesses renewable energy and satellite connectivity to validate blockchain transactions from the most remote locations on Earth.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-cosmic">
              <iframe
                src="https://www.youtube.com/embed/47UKW76BoCo"
                title="ORION in Light - Renewable Validator Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            
            {/* Video Captions */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-3 bg-gradient-card p-4 rounded-lg">
                <h4 className="font-semibold text-primary">What You'll See:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Solar panels capturing renewable energy</li>
                  <li>• ORION's energy management system</li>
                  <li>• Starlink satellite connection setup</li>
                  <li>• Remote deployment in action</li>
                </ul>
              </div>
              <div className="space-y-3 bg-gradient-card p-4 rounded-lg">
                <h4 className="font-semibold text-primary">How It Works:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Blockchain validation in remote locations</li>
                  <li>• Decentralized network strengthening</li>
                  <li>• 24/7 autonomous operation</li>
                  <li>• Earning rewards while you sleep</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Orion Section */}
      <section id="features" className="py-20 lg:py-32 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="title-section">
              Why Choose{' '}
              <span className="gradient-text">
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

      {/* What's In It For Me - Revenue Section */}
      <section id="revenue" className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="title-section">
              What's{' '}
              <span className="gradient-text">
                In It For Me?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              ORION isn't just technology - it's your passive income generator. Here's how you make money.
           </p>
          </div>

          {/* Value Proposition Diagram */}
          <div className="mb-20">
            <ValuePropositionDiagram />
          </div>

          <div className="text-center space-y-4 mb-16">
            <h3 className="text-2xl font-bold">
              Your Path to{' '}
              <span className="gradient-text">
                Passive Income
              </span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four simple steps from purchase to profit
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-card border-border/50 shadow-card text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-cosmic rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">1</span>
                </div>
                <CardTitle className="text-lg">Purchase ORION</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Buy your ORION validator for 1200 USDT. One-time investment, lifetime earning potential.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-card text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-cosmic rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">2</span>
                </div>
                <CardTitle className="text-lg">We Deploy & you Stake</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We handle everything: deployment, staking setup, and technical maintenance. You just wait.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-card text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-cosmic rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">3</span>
                </div>
                <CardTitle className="text-lg">Validate & Earn</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Your ORION validates blockchain transactions 24/7, earning you validator rewards automatically.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-card text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-cosmic rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">4</span>
                </div>
                <CardTitle className="text-lg">Passive Income</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Receive monthly payments in your wallet. No work required - just steady, passive income.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Team Section */}
      <section id="team" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="title-section">
              Meet{' '}
              <span className="gradient-text">
                The Team
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry veterans from Dione Protocol leading renewable energy Blockchain development.
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
            <h2 className="title-section">
              Development{' '}
              <span className="gradient-text">
                Roadmap
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our journey towards global decentralized validator infrastructure.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {roadmapItems.map((item, index) => (
                <Card key={item.id} className="bg-gradient-card border-border/50 shadow-card">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(item.status)}
                        <div>
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                          <CardDescription className="text-sm mt-1">
                            {item.description}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="text-right space-y-2">
                        {getStatusBadge(item.status)}
<p className="text-xs text-muted-foreground">{item.date}</p>                      </div>
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
            <h2 className="title-section">
              Frequently Asked{' '}
              <span className="gradient-text">
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
            <h2 className="title-section">
              Ready to Join the{' '}
              <span className="gradient-text">
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