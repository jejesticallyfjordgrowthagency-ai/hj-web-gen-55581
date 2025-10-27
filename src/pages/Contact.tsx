import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you soon.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
              Get in touch to book your car service or ask any questions. We're here to help!
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Book Your Service</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" name="name" placeholder="John Smith" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="07123 456789" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" name="email" type="email" placeholder="john.smith@example.com" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Needed *</Label>
                      <Input id="service" name="service" placeholder="e.g., Brake repair, Speaker upgrade" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Details</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        placeholder="Tell us more about your vehicle and what you need..."
                        rows={4}
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90" size="lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Get In Touch</CardTitle>
                    <CardDescription>
                      Visit us at our Bedford workshop or message us to book your car service
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10">
                          <MapPin className="h-6 w-6 text-accent" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Address</h3>
                        <p className="text-muted-foreground">
                          Unit 7a, Fenlake Road<br />
                          Bedford MK42 0HB<br />
                          United Kingdom
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10">
                          <Phone className="h-6 w-6 text-accent" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Phone</h3>
                        <a href="tel:+441234567890" className="text-muted-foreground hover:text-accent transition-colors">
                          01234 567890
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10">
                          <Clock className="h-6 w-6 text-accent" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Opening Hours</h3>
                        <div className="text-muted-foreground space-y-1">
                          <p>Monday – Wednesday: 9am–3pm / 4–6pm</p>
                          <p>Thursday – Friday: 9am–6pm</p>
                          <p>Saturday: 9am–1pm</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Call to Action */}
                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">Prefer to Call?</h3>
                    <p className="mb-6 text-primary-foreground/90">
                      Speak directly with our team to discuss your automotive needs
                    </p>
                    <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full">
                      <a href="tel:+441234567890">
                        <Phone className="mr-2 h-5 w-5" />
                        Call Now: 01234 567890
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Find Us</CardTitle>
                <CardDescription>Unit 7a, Fenlake Road, Bedford MK42 0HB</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video w-full rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.954!2d-0.437!3d52.124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDA3JzI2LjQiTiAwwrAyNicxMy4yIlc!5e0!3m2!1sen!2suk!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="H & J Auto Repairs Location"
                  ></iframe>
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

export default Contact;
