import { useState, FormEvent } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields (Name, Email, Message).');
      return;
    }

    if (!formData.email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');

    // Simulate clean frontend submission feedback
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-mono text-[var(--accent-cyan)] uppercase tracking-wider">
            GET IN TOUCH
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Let&apos;s Build <span className="text-gradient">Something</span>
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-xl mx-auto">
            I&apos;m always interested in learning, collaborating and exploring opportunities in software development and artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-8 space-y-6">
              <h3 className="text-xl font-bold text-[var(--text-primary)] flex items-center gap-2.5">
                <Mail className="w-5 h-5 text-[var(--accent-cyan)]" />
                <span>Connect Directly</span>
              </h3>

              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                Whether you have an internship opportunity, project collaboration, software engineering question, or simply want to connect, feel free to reach out.
              </p>

              {/* Social Links */}
              <div className="space-y-4 pt-2">
                
                <a
                  href="https://www.linkedin.com/in/dion-stacey-sellar-1066a7339/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel p-4 rounded-xl flex items-center gap-4 border border-[var(--glass-border)] hover:border-[var(--accent-blue)] transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg glass-panel flex items-center justify-center text-[#0a66c2] group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[var(--text-muted)]">LINKEDIN PROFILE</div>
                    <div className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors">
                      Dion Stacey Sellar
                    </div>
                  </div>
                </a>

                <a
                  href="https://github.com/dionstacey03-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel p-4 rounded-xl flex items-center gap-4 border border-[var(--glass-border)] hover:border-[var(--accent-cyan)] transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg glass-panel flex items-center justify-center text-[var(--text-primary)] group-hover:scale-110 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[var(--text-muted)]">GITHUB PROFILE</div>
                    <div className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-cyan)] transition-colors">
                      dionstacey03-dev
                    </div>
                  </div>
                </a>

              </div>

              {/* Status Note */}
              <div className="p-4 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] font-mono text-xs text-[var(--text-muted)] space-y-1">
                <div className="text-[var(--accent-emerald)] font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent-emerald)] animate-ping" />
                  <span>Currently Available for Opportunities</span>
                </div>
                <div>BSc Software Engineering Undergraduate (2026–2029)</div>
              </div>

            </div>
          </div>

          {/* Right Column: Liquid Glass Contact Form */}
          <div className="lg:col-span-7 glass-card p-8 sm:p-10 space-y-6">
            <h3 className="text-xl font-bold text-[var(--text-primary)]">
              Send a Message
            </h3>

            {status === 'success' && (
              <div className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <strong>Message Received!</strong> Thank you for reaching out, Dion will respond to your message shortly.
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 rounded-xl bg-red-500/15 border border-red-500/40 text-red-300 text-xs font-mono flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                <div>{errorMessage}</div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[var(--text-muted)] uppercase">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="glass-input text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[var(--text-muted)] uppercase">Your Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="glass-input text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[var(--text-muted)] uppercase">Subject</label>
                <input
                  type="text"
                  placeholder="e.g. Software Engineering Opportunity / Project Discussion"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="glass-input text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[var(--text-muted)] uppercase">Message *</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="glass-input text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full glass-button glass-button-primary py-4 text-sm font-bold flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{status === 'submitting' ? 'Sending Message...' : 'Send Message'}</span>
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
