import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Award, Users, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import teamImage from "@/assets/team.jpg";

const About = () => {
  const values = [
    {
      icon: Star,
      title: "24 Five-Star Google Reviews",
      description: "Our reputation is built on consistent quality and customer satisfaction",
    },
    {
      icon: Award,
      title: "Highly Skilled Technicians",
      description: "Years of experience in automotive repair and modern upgrade installations",
    },
    {
      icon: Users,
      title: "Personalized Attention",
      description: "Every customer receives dedicated service tailored to their vehicle's needs",
    },
    {
      icon: Heart,
      title: "Honest Pricing, No Hidden Fees",
      description: "Transparent quotes and fair pricing — you'll know exactly what you're paying for",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About H & J Auto Repairs</h1>
            <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
              Your trusted automotive partner in Bedford, delivering honest service and expert repairs since day one.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    At H & J Auto Repairs, quality speaks for itself. We don't rely on flashy advertisements 
                    or gimmicks — our customers recommend us because we deliver honest, top-class results every time.
                  </p>
                  <p>
                    Located in the heart of Bedford at Unit 7a, Fenlake Road, we've built our reputation 
                    on transparency, skill, and genuine care for every vehicle that enters our workshop.
                  </p>
                  <p>
                    We're proud <strong>specialists in Nissan and Volkswagen (VW)</strong> vehicles, providing 
                    expert care, servicing, and upgrades tailored to these brands. Whether you need a simple 
                    oil change, complex engine diagnostics, or want to upgrade your car's audio system, we treat 
                    every job with the same level of professionalism and attention to detail.
                  </p>
                  <p>
                    We use <strong>ClickMechanic</strong> to provide accurate pricing estimates for our customers — 
                    it's one of the best resources for realistic service costs, and our pricing closely matches their guides.
                  </p>
                </div>
              </div>
              
              <div>
                <img 
                  src={teamImage} 
                  alt="H & J Auto Repairs Team"
                  className="w-full h-[500px] object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              To provide reliable auto repairs and upgrades with transparency, skill, and care. 
              We believe in building long-term relationships with our customers through honest communication 
              and exceptional workmanship.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're more than just a repair shop — we're your automotive partners
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10">
                          <value.icon className="h-6 w-6 text-accent" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl mb-2">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Rating Highlight */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="flex justify-center items-center space-x-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-12 w-12 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">5.0 Star Rating</h2>
              <p className="text-2xl mb-8 text-primary-foreground/90">Based on 24 verified Google reviews</p>
              <p className="text-xl max-w-2xl mx-auto mb-8 text-primary-foreground/80">
                Our customers' satisfaction is our greatest achievement. Every positive review motivates 
                us to maintain the highest standards of service.
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link to="/contact">Experience Our Service</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
