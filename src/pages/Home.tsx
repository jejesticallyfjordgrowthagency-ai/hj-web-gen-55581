import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Wrench, Car, Shield, Clock, CheckCircle, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-workshop.jpg";
import carAudioImage from "@/assets/car-audio.jpg";
import mechanicalImage from "@/assets/mechanical-service.jpg";
import detailingImage from "@/assets/detailing.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Home = () => {
  const specialties = [
    "Speaker & Head Unit Upgrades",
    "Camera Installation",
    "Engine Diagnostics",
    "Brake Service & Repair",
    "Oil Change",
    "Electrical Fixes",
    "Suspension & Steering",
    "Transmission Repair",
    "Air Conditioning Service",
    "Vehicle Detailing",
    "Battery Replacement",
    "Wheel Alignment",
  ];

  const whyChooseUs = [
    {
      icon: Star,
      title: "5-Star Customer Satisfaction",
      description: "22 verified Google reviews praising our quality service",
    },
    {
      icon: Shield,
      title: "Honest, Transparent Pricing",
      description: "No hidden fees, clear quotes before any work begins",
    },
    {
      icon: Wrench,
      title: "Professional Workmanship",
      description: "Skilled technicians with years of automotive expertise",
    },
    {
      icon: Clock,
      title: "Fast Turnaround Times",
      description: "Efficient service without compromising on quality",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Excellent service! They installed a new head unit and speakers in my car. Professional work and fair prices.",
    },
    {
      name: "Michael Brown",
      rating: 5,
      text: "Best mechanics in Bedford. Fixed my brakes quickly and explained everything clearly. Highly recommend!",
    },
    {
      name: "Emma Wilson",
      rating: 5,
      text: "Great experience from start to finish. Honest advice and quality work. Will definitely return for future services.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section - Carousel */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full h-full"
          >
            <CarouselContent className="h-[600px]">
              {/* Slide 1 */}
              <CarouselItem>
                <div className="relative h-[600px] flex items-center justify-center">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${heroImage})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70"></div>
                  </div>
                  
                  <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                      Professional Car Repairs, Upgrades & Diagnostics in Bedford
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 animate-fade-in">
                      Trusted by hundreds of satisfied customers — top-rated 5.0⭐ auto repair and upgrade experts
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
                      <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
                        <a href="https://wa.me/447789548910" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <MessageCircle className="h-5 w-5" />
                          Book Now
                        </a>
                      </Button>
                      <Button asChild size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20 text-lg px-8">
                        <a href="tel:+447789548910">Call Now</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>

              {/* Slide 2 - Customer Satisfaction */}
              <CarouselItem>
                <div className="relative h-[600px] flex items-center justify-center">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${mechanicalImage})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70"></div>
                  </div>
                  
                  <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                      Customer Satisfaction Guaranteed
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 animate-fade-in">
                      22 Five-Star Reviews • Honest Pricing • Professional Service
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
                      <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
                        <a href="https://wa.me/447789548910" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <MessageCircle className="h-5 w-5" />
                          Book Now
                        </a>
                      </Button>
                      <Button asChild size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20 text-lg px-8">
                        <Link to="/services">Our Services</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>

              {/* Slide 3 - Car Audio */}
              <CarouselItem>
                <div className="relative h-[600px] flex items-center justify-center">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${carAudioImage})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70"></div>
                  </div>
                  
                  <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                      Expert Car Audio Upgrades
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 animate-fade-in">
                      Premium Speaker & Head Unit Installation • Camera Systems
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
                      <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
                        <a href="https://wa.me/447789548910" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <MessageCircle className="h-5 w-5" />
                          Book Now
                        </a>
                      </Button>
                      <Button asChild size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20 text-lg px-8">
                        <Link to="/services">View Services</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>

              {/* Slide 4 - Detailing */}
              <CarouselItem>
                <div className="relative h-[600px] flex items-center justify-center">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${detailingImage})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70"></div>
                  </div>
                  
                  <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                      Complete Vehicle Care & Detailing
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 animate-fade-in">
                      Keep Your Car Looking Fresh Inside & Out
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
                      <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
                        <a href="https://wa.me/447789548910" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <MessageCircle className="h-5 w-5" />
                          Book Now
                        </a>
                      </Button>
                      <Button asChild size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20 text-lg px-8">
                        <Link to="/contact">Contact Us</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </section>

        {/* Quick Info Bar */}
        <section className="bg-muted py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-500" />
                <span className="font-semibold">5.0⭐ Rating (22 Reviews)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold">📍 Unit 7a, Fenlake Rd, Bedford MK42 0HB</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold">⏰ Mon-Fri: 9am-6pm | Sat: 9am-1pm</span>
              </div>
            </div>
          </div>
        </section>

        {/* Our Specialties */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Specialties</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive auto repair and upgrade services to keep your vehicle running smoothly
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {specialties.map((specialty, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-sm font-medium">{specialty}</span>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Note: We do not provide tyre services
              </p>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why People Choose H & J Auto Repairs</h2>
              <p className="text-lg text-muted-foreground">
                Quality speaks for itself. Our customers recommend us because we deliver.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                      <item.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
              <p className="text-lg text-muted-foreground">
                Don't just take our word for it — hear from our satisfied customers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm mb-4 italic">{testimonial.text}</p>
                    <p className="font-semibold">{testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Your Car Serviced?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Book your appointment today and experience top-quality auto repair service
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href="https://wa.me/447789548910" target="_blank" rel="noopener noreferrer">Book Your Car In Today</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <a href="tel:+447789548910">Call Us Now</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
