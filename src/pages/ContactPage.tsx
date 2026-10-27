import React, { useState } from 'react';
import { useCMS } from '../context/CMSContext';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  ShieldCheck,
  Globe2,
  MessageSquare
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { settings, addContactMessage } = useCMS();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('General Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    addContactMessage({
      name,
      email,
      phone,
      subject,
      message
    });

    setSubmitted(true);
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner (Professional Polish Theme) */}
      <section className="bg-[#002147] text-white py-16 border-b-4 border-[#D4AF37] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-widest uppercase text-[#D4AF37] bg-[#001733] px-3.5 py-1.5 rounded-sm border border-[#D4AF37]/30">
              Get in Touch
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4">
              Contact Rising Hands
            </h1>
            <p className="mt-3 text-lg font-bold text-[#D4AF37] uppercase tracking-wider">
              “BUILDING BRIGHTER FUTURE TOGETHER”
            </p>
            <p className="mt-4 text-base text-slate-200 leading-relaxed">
              We welcome dialogue with community members, international partners, prospective volunteers, and donor institutions. Reach our national secretariat in Dar es Salaam.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Info Cards + Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Contact Details & Office Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-sm p-8 border border-slate-200 shadow-sm space-y-6">
                <div>
                  <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest block mb-1">
                    National Secretariat
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#002147]">
                    {settings.name || settings.organizationName || 'Rising Hands Organisation'}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">
                    Tanzanian Non-Governmental Organisation
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-sm bg-amber-50 text-[#002147] border border-amber-200 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-[#D4AF37]" />
                    </div>
                    <div>
                      <strong className="block text-[#002147] font-bold">Physical Address:</strong>
                      <span>{settings.officialAddressPlaceholder || settings.addressPlaceholder || 'Dar es Salaam, Tanzania'}</span>
                      <span className="block text-[10px] text-[#002147]/70 font-mono mt-0.5">
                        [National Headquarters]
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-sm bg-blue-50 text-[#002147] border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-4 h-4 text-[#002147]" />
                    </div>
                    <div>
                      <strong className="block text-[#002147] font-bold">Phone / WhatsApp:</strong>
                      <span>{settings.phonePlaceholder || '+255 (0) 700 000 000'}</span>
                      <span className="block text-[10px] text-slate-400">
                        Lines open Mon-Fri during working hours
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-sm bg-teal-50 text-[#002147] border border-teal-200 flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-4 h-4 text-[#002147]" />
                    </div>
                    <div>
                      <strong className="block text-[#002147] font-bold">Official Email:</strong>
                      <span>{settings.primaryEmailPlaceholder || settings.emailPlaceholder || 'info@risinghands.org'}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-sm bg-purple-50 text-[#002147] border border-purple-200 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-4 h-4 text-[#002147]" />
                    </div>
                    <div>
                      <strong className="block text-[#002147] font-bold">Office Operating Hours:</strong>
                      <span>{settings.officeHours || settings.officeHoursPlaceholder || 'Monday – Friday: 08:30 – 17:00 EAT'}</span>
                      <span className="block text-[10px] text-slate-400">
                        East Africa Time (GMT+3)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-500 leading-relaxed">
                  <strong className="text-[#002147]">Note:</strong> All address and phone numbers are maintained with verified placeholders in accordance with RHO’s public transparency policy.
                </div>
              </div>

              {/* Child Safeguarding Note */}
              <div className="bg-[#002147] text-white rounded-sm p-6 border-l-4 border-[#D4AF37] border-y border-r border-[#D4AF37]/30 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                  <span>Safeguarding & Ethics Focal Point</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  To report any child protection concern or request our anti-corruption guidelines, select the "Safeguarding Lead" subject in the form.
                </p>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-sm p-8 sm:p-10 border border-slate-200 shadow-sm">
                <div className="mb-6">
                  <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest block mb-1">
                    Direct Message
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#002147]">
                    Send Us an Inquiry
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Your message will be channeled directly to the appropriate department coordinator.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 rounded-sm bg-emerald-50 border border-emerald-200 text-emerald-900 text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h4 className="text-lg font-bold">Message Received!</h4>
                    <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto">
                      Thank you for contacting Rising Hands Organisation. Our community liaison desk has logged your inquiry and will reply shortly via email.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-5 py-2 rounded-sm text-xs font-bold bg-[#002147] text-white hover:bg-[#001733] transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" id="contact-inquiry-form">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-2">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Baraka John"
                          className="w-full px-4 py-2.5 rounded-sm border border-slate-300 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-slate-900"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. baraka@example.com"
                          className="w-full px-4 py-2.5 rounded-sm border border-slate-300 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-slate-900"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-2">
                          Phone / Mobile Number
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. +255 700 000 000"
                          className="w-full px-4 py-2.5 rounded-sm border border-slate-300 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-slate-900"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-2">
                          Inquiry Subject
                        </label>
                        <select
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-sm border border-slate-300 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-slate-900 bg-white"
                        >
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Partnership & Grants">Partnership & Institutional Grants</option>
                          <option value="Volunteer Programs">Volunteer Opportunities</option>
                          <option value="Child Education Sponsorship">Child Education Sponsorship</option>
                          <option value="Youth Vocational Programs">Youth Vocational Programs</option>
                          <option value="Safeguarding Lead">Safeguarding & Ethics Lead</option>
                          <option value="Media & Communications">Media & Communications</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-2">
                        Your Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Write your message or inquiry here..."
                        className="w-full px-4 py-3 rounded-sm border border-slate-300 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-slate-900"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 rounded-sm font-bold text-sm text-[#002147] bg-[#D4AF37] hover:bg-[#002147] hover:text-white shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Inquiry to RHO</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
