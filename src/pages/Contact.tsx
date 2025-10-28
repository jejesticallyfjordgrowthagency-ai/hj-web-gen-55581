import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Clock, Mail, MessageCircle, Facebook, Instagram } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import heroImage from "@/assets/hero-workshop.jpg";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const service = formData.get('service');
    const message = formData.get('message');
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Service Booking Request from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nService Needed: ${service}\n\nAdditional Details:\n${message}`
    );
    window.location.href = `mailto:hjautorepairs@hotmail.com?subject=${subject}&body=${body}`;
    
    toast.success("Opening your email client...");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70"></div>
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
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
                    Fill out the form below — it will open your email client to send your enquiry to hjautorepairs@hotmail.com
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
                        <h3 className="font-semibold text-lg mb-1">Phone & WhatsApp</h3>
                        <a href="tel:+447789548910" className="text-muted-foreground hover:text-accent transition-colors block mb-1">
                          07789 548910
                        </a>
                        <a 
                          href="https://wa.me/447789548910" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-1 text-sm"
                        >
                          <MessageCircle className="h-4 w-4" />
                          WhatsApp Us
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10">
                          <Mail className="h-6 w-6 text-accent" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Email</h3>
                        <a href="mailto:hjautorepairs@hotmail.com" className="text-muted-foreground hover:text-accent transition-colors break-all">
                          hjautorepairs@hotmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10">
                          <Facebook className="h-6 w-6 text-accent" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Social Media</h3>
                        <div className="flex gap-4">
                          <a 
                            href="https://www.facebook.com/profile.php?id=61560948601635&mibextid=ZbWKwL" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-1"
                          >
                            <Facebook className="h-4 w-4" />
                            Facebook
                          </a>
                          <a 
                            href="https://www.instagram.com/hj_auto_repairs?igsh=dDU3OWZ2dHhzcGpt" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-1"
                          >
                            <Instagram className="h-4 w-4" />
                            Instagram
                          </a>
                        </div>
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
                    <h3 className="text-2xl font-bold mb-4">Quick Contact</h3>
                    <p className="mb-6 text-primary-foreground/90">
                      Message us on WhatsApp or call directly
                    </p>
                    <div className="space-y-3">
                      <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full">
                        <a href="https://wa.me/447789548910" target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="mr-2 h-5 w-5" />
                          WhatsApp: 07789 548910
                        </a>
                      </Button>
                      <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full">
                        <a href="tel:+447789548910">
                          <Phone className="mr-2 h-5 w-5" />
                          Call: 07789 548910
                        </a>
                      </Button>
                    </div>
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
