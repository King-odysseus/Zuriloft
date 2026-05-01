import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      label: 'Address',
      value: 'Westlands, Nairobi, Kenya',
      icon: (
        <>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </>
      ),
    },
    {
      label: 'Phone',
      value: '+254 712 345 678',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
    },
    {
      label: 'Email',
      value: 'info@zurilofts.co.ke',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
    },
    {
      label: 'WhatsApp',
      value: '+254 712 345 678',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-[#262262] pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Have questions about our apartments? We would love to hear from you.
            Our team is ready to help you find the perfect stay.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          {/* Contact Form - Full Width */}
          <div className="neu-card p-8">
            <h2 className="text-2xl font-bold text-[#262262] mb-6">Send us a Message</h2>

            {submitted && (
              <div className="mb-6 p-4 bg-[#C49A6C]/20 border border-[#C49A6C] text-[#262262] rounded-xl">
                Thank you for your message! We will get back to you within 2 hours.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-[#1f2937] mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className="neu-input w-full px-5 py-3 focus:outline-none transition-all bg-white text-[#1f2937] placeholder-[#6b7280]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1f2937] mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="neu-input w-full px-5 py-3 focus:outline-none transition-all bg-white text-[#1f2937] placeholder-[#6b7280]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1f2937] mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="neu-input w-full px-5 py-3 focus:outline-none transition-all bg-white text-[#1f2937] placeholder-[#6b7280]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1f2937] mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+254 712 345 678"
                  className="neu-input w-full px-5 py-3 focus:outline-none transition-all bg-white text-[#1f2937] placeholder-[#6b7280]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1f2937] mb-2">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="neu-input w-full px-5 py-3 focus:outline-none transition-all bg-white text-[#1f2937]"
                >
                  <option value="">Select a subject</option>
                  <option value="booking">Booking Inquiry</option>
                  <option value="availability">Check Availability</option>
                  <option value="pricing">Pricing Information</option>
                  <option value="support">Customer Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1f2937] mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your inquiry..."
                  className="neu-input w-full px-5 py-3 focus:outline-none transition-all bg-white text-[#1f2937] placeholder-[#6b7280] h-32 resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full neu-btn text-[#262262] font-semibold py-3 rounded-full hover:shadow-[2px_2px_4px_#d9d9d9,-2px_-2px_4px_#ffffff] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#262262]" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>

          {/* Combined Info Card - Get in Touch + Business Hours + Fast Response */}
          <div className="neu-card p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#D9D9D9]">
              {/* Get in Touch */}
              <div className="pb-6 md:pb-0 md:pr-8">
                <h2 className="text-xl font-bold text-[#C49A6C] mb-6">Get in Touch</h2>
                <div className="space-y-5">
                  {contactInfo.map(({ label, value, icon }) => (
                    <div key={label} className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-[#C49A6C] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-[#262262]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {icon}
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#262262] text-sm">{label}</h4>
                        <p className="text-[#6b7280] text-sm">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <div className="py-6 md:py-0 md:px-8">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-[#C49A6C]/10 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-[#C49A6C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#262262]">Business Hours</h3>
                </div>
                <div className="space-y-3 text-sm text-[#1f2937]">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">10:00 AM - 2:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Fast Response */}
              <div className="pt-6 md:pt-0 md:pl-8 text-center">
                <svg className="w-10 h-10 text-[#C49A6C] mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h3 className="text-lg font-bold text-[#262262] mb-2">Fast Response</h3>
                <p className="text-[#6b7280] text-sm">We typically respond within 2 hours during business hours.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image + Text Section */}
        <div className="max-w-7xl mx-auto px-6 mt-8">
          <div className="neu-card overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-64 md:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                  alt="Zurilofts Office"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-[#262262] mb-4">Visit Our Office</h3>
                <p className="text-[#1f2937] leading-relaxed mb-4">
                  Come see us in person! Our office is located in the vibrant Westlands neighborhood, 
                  surrounded by great restaurants, cafes, and shopping. We'd love to show you around 
                  and help you find the perfect apartment for your stay in Nairobi.
                </p>
                <div className="flex items-center gap-4 flex-wrap">
                  <a
                    href="https://wa.me/254712345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neu-btn px-4 py-2 rounded-full text-sm font-medium text-[#262262] hover:shadow-[2px_2px_4px_#d9d9d9,-2px_-2px_4px_#ffffff] transition-all duration-200 flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </a>
                  <a
                    href="mailto:info@zurilofts.co.ke"
                    className="neu-btn px-4 py-2 rounded-full text-sm font-medium text-[#262262] hover:shadow-[2px_2px_4px_#d9d9d9,-2px_-2px_4px_#ffffff] transition-all duration-200 flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#262262] mb-4">Find Us</h2>
            <p className="text-[#6b7280] max-w-2xl mx-auto">
              Located in the heart of Westlands, Nairobi. Visit our office to discuss your stay in person.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden neu-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19891802623!2d36.7203769!3d-1.3028611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ContactPage;
