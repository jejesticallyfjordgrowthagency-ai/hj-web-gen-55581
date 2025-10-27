import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import carAudioImage from "@/assets/car-audio.jpg";
import mechanicalImage from "@/assets/mechanical-service.jpg";
import detailingImage from "@/assets/detailing.jpg";

const Services = () => {
  const serviceCategories = [
    {
      title: "Car Audio & Electronics Upgrades",
      description: "Upgrade your driving experience with modern car audio and infotainment systems.",
      image: carAudioImage,
      services: [
        "Speaker Upgrades",
        "Head Unit Installation",
        "Reverse & Parking Camera Installation",
        "Bluetooth & Connectivity Upgrades",
        "Sound System Enhancement",
      ],
    },
    {
      title: "Mechanical & Repair Services",
      description: "Skilled technicians providing precise, reliable car repairs.",
      image: mechanicalImage,
      services: [
        "Brake Service & Repair",
        "Battery Replacement & Testing",
        "Oil Change & Filter Replacement",
        "Engine Diagnostics",
        "Transmission Repair",
        "Steering & Suspension",
        "Exhaust System Repairs",
      ],
    },
    {
      title: "Comfort & Detailing",
      description: "Breathe fresh, drive clean — our detailing keeps your car feeling new.",
      image: detailingImage,
      services: [
        "Interior Cleaning & Valeting",
        "Air Conditioning Service & Repair",
        "Air & Cabin Filter Replacement",
        "Vehicle Detailing",
        "Odor Removal",
      ],
    },
    {
      title: "Alignment & Performance",
      description: "Smooth steering and stability for safer driving.",
      image: mechanicalImage,
      services: [
        "Wheel Alignment",
        "Wheel Balancing",
        "Tracking Adjustments",
        "Performance Diagnostics",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
              Comprehensive car repair and upgrade services in Bedford. From audio installations to mechanical repairs, 
              we've got you covered.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {serviceCategories.map((category, index) => (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  
                  <Card className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <CardHeader>
                      <CardTitle className="text-2xl md:text-3xl">{category.title}</CardTitle>
                      <CardDescription className="text-base">{category.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {category.services.map((service, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <span className="text-accent text-xl">•</span>
                            <span className="text-base">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Note */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <p className="text-lg font-semibold text-muted-foreground">
              Please Note: We do not provide tyre services at this time
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Service?</h2>
                <p className="text-xl mb-8 text-primary-foreground/90">
                  Get in touch today to book your car service or ask about our services
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link to="/contact">Book Your Car In Today</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <a href="tel:+441234567890">Call for a Quote</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
