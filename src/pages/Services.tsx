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
        <section className="relative py-20 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${mechanicalImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70"></div>
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
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
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Car Services & Upgrades</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From essential maintenance to modern upgrades — we've got your vehicle covered
              </p>
            </div>
            
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

        {/* Pricing Guide */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing Guide</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                The practice of using a standardized flat-rate system is also known as "book time." 
                This is a common practice in the auto repair industry where a manufacturer or industry 
                guide determines the amount of time a particular repair should take.
              </p>
            </div>

            <Card className="max-w-5xl mx-auto">
              <CardContent className="p-6 md:p-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-4 px-4 font-semibold">Service</th>
                        <th className="text-left py-4 px-4 font-semibold">0–1400cc</th>
                        <th className="text-left py-4 px-4 font-semibold">1401–2000cc</th>
                        <th className="text-left py-4 px-4 font-semibold">2001–3000cc</th>
                        <th className="text-left py-4 px-4 font-semibold">Over 3000cc</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-4 px-4 font-medium">Oil & Filter Change</td>
                        <td className="py-4 px-4 text-muted-foreground">from £120</td>
                        <td className="py-4 px-4 text-muted-foreground">from £145</td>
                        <td className="py-4 px-4 text-muted-foreground">from £165</td>
                        <td className="py-4 px-4 text-muted-foreground">from £190</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-4 px-4 font-medium">Interim Service</td>
                        <td className="py-4 px-4 text-muted-foreground">from £175</td>
                        <td className="py-4 px-4 text-muted-foreground">from £200</td>
                        <td className="py-4 px-4 text-muted-foreground">from £225</td>
                        <td className="py-4 px-4 text-muted-foreground">from £245</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-4 px-4 font-medium">Full Service</td>
                        <td className="py-4 px-4 text-muted-foreground">from £235</td>
                        <td className="py-4 px-4 text-muted-foreground">from £260</td>
                        <td className="py-4 px-4 text-muted-foreground">from £285</td>
                        <td className="py-4 px-4 text-muted-foreground">from £305</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-4 px-4 font-medium">Brake Service</td>
                        <td className="py-4 px-4 text-muted-foreground">from £80</td>
                        <td className="py-4 px-4 text-muted-foreground">from £90</td>
                        <td className="py-4 px-4 text-muted-foreground">from £100</td>
                        <td className="py-4 px-4 text-muted-foreground">from £110</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 font-medium">Diagnostics</td>
                        <td className="py-4 px-4 text-muted-foreground">from £45</td>
                        <td className="py-4 px-4 text-muted-foreground">from £45</td>
                        <td className="py-4 px-4 text-muted-foreground">from £45</td>
                        <td className="py-4 px-4 text-muted-foreground">from £45</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-muted-foreground mt-6 text-center">
                  We use ClickMechanic pricing data as a transparent guide to ensure fairness and consistency. 
                  You'll always receive a confirmed quote before work begins.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Important Notes */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-4 text-center">
              <p className="text-lg font-semibold text-muted-foreground">
                Please Note: We do not provide tyre services at this time
              </p>
              <p className="text-lg font-semibold text-foreground">
                ✓ Pick Up & Collection Service Available — We can collect your vehicle for service and return it to you
              </p>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Love Our Service?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Your feedback helps us grow and helps others find quality car service in Bedford. 
                We'd be grateful if you could share your experience!
              </p>
              <Card className="bg-accent/10 border-accent">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center space-y-6">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-500 text-4xl">⭐</span>
                      ))}
                    </div>
                    <p className="text-lg font-semibold">Join our 24 satisfied customers with 5-star reviews!</p>
                    <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      <a 
                        href="https://g.page/r/CYx6LHb-UDw5EBM/review" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Leave a Google Review
                      </a>
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      Takes less than a minute • Helps us serve you better
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Book Your Service?</h2>
                <p className="text-xl mb-8 text-primary-foreground/90">
                  Get in touch today via WhatsApp or call us for a quick quote
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <a href="https://wa.me/447789548910" target="_blank" rel="noopener noreferrer">
                      Book Now via WhatsApp
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <a href="tel:+447789548910">Call: 07789 548910</a>
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
