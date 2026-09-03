import React, { useState } from 'react';
import { X, ShieldCheck, Phone, MessageSquare, Upload, CheckCircle2, AlertCircle } from 'lucide-react';
import { translations } from '../data/translations';

export default function PickupBookingModal({ isOpen, onClose, currentLang }) {
  const t = translations[currentLang] || translations.en;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    sareeType: 'Kanchipuram Silk',
    condition: 'Good Condition',
    notes: '',
    photoName: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhotoUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, photoName: e.target.files[0].name });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Sri Pattu & Zari Hub,\nI want to book a Doorstep Saree Pickup:\n\n👤 Name: ${formData.name || 'Customer'}\n📞 Phone: ${formData.phone}\n📍 City: ${formData.city}\n👗 Saree Type: ${formData.sareeType}\n✨ Condition: ${formData.condition}\n📝 Notes: ${formData.notes || 'None'}\n\nPlease call me back for pickup appointment.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl bg-neutral-950 border border-amber-500/40 rounded-2xl shadow-2xl overflow-hidden text-left">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-red-950 via-amber-950 to-red-950 p-5 border-b border-amber-500/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold gold-text">{t.form.title}</h3>
              <p className="text-xs text-amber-200/70">{t.form.subtitle}</p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="text-amber-400 hover:text-white p-1 rounded-lg bg-neutral-900/60"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-5">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-400/40">
                <CheckCircle2 className="w-10 h-10 animate-bounce" />
              </div>
              <h4 className="text-xl font-bold text-amber-300">
                Pickup Request Registered Successfully!
              </h4>
              <p className="text-sm text-amber-100/80 max-w-md mx-auto">
                {t.form.successMsg}
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/916374067251?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-emerald text-sm justify-center"
                >
                  <MessageSquare className="w-4 h-4 fill-emerald-300" />
                  <span>Send Photos on WhatsApp Now</span>
                </a>
                
                <a
                  href="tel:6374067251"
                  className="btn-gold text-sm justify-center"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Sri Pattu Hub (63740 67251)</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-amber-300 mb-1">{t.form.name} *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-amber-300 mb-1">{t.form.phone} *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Mobile number (e.g. 9876543210)"
                    className="form-input"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-amber-300 mb-1">{t.form.city} *</label>
                <input
                  type="text"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="e.g. Chennai, Bangalore, Hyderabad, Madurai, Coimbatore..."
                  className="form-input"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-amber-300 mb-1">{t.form.sareeTypeSelect}</label>
                  <select
                    name="sareeType"
                    value={formData.sareeType}
                    onChange={handleChange}
                    className="form-input text-amber-100 font-medium"
                  >
                    <option value="Kanchipuram Pure Silk Saree">Kanchipuram Silk Saree (காஞ்சி பட்டு)</option>
                    <option value="Arani / Dharmavaram Saree">Arani / Dharmavaram Silk Saree</option>
                    <option value="Mysore Pure Silk Saree">Mysore Pure Silk Saree</option>
                    <option value="Silk Veshti & Angavastram">Pure Silk Veshti & Angavastram</option>
                    <option value="Damaged / Torn Silk Saree">Damaged / Torn Silk Saree</option>
                    <option value="Raw Pure Zari Threads">Raw Pure Zari Threads / Scrap Zari</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-amber-300 mb-1">{t.form.condition}</label>
                  <select
                    name="condition"
                    value={formData.condition}
                    onChange={handleChange}
                    className="form-input text-amber-100 font-medium"
                  >
                    <option value="Good Condition">{t.form.goodCondition}</option>
                    <option value="Slightly Worn / Stained">{t.form.slightlyDamaged}</option>
                    <option value="Very Old / Torn / Damaged">{t.form.oldTorn}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-amber-300 mb-1">{t.form.uploadPhoto}</label>
                <label className="flex items-center justify-center gap-2 p-3 border border-dashed border-amber-500/40 rounded-xl cursor-pointer hover:border-amber-400 bg-neutral-900/60 transition-colors">
                  <Upload className="w-4 h-4 text-amber-400" />
                  <span className="text-xs text-amber-200 font-medium">
                    {formData.photoName ? `Attached: ${formData.photoName}` : 'Click to select photo (Optional)'}
                  </span>
                  <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
                </label>
              </div>

              <div>
                <label className="block text-xs font-bold text-amber-300 mb-1">{t.form.notes}</label>
                <textarea
                  name="notes"
                  rows="2"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Number of sarees, address details, preferred call time..."
                  className="form-input"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button type="submit" className="w-full btn-gold text-sm justify-center py-3">
                  <span>{t.form.submitBtn}</span>
                </button>
                <a
                  href={`https://wa.me/916374067251?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full btn-emerald text-sm justify-center py-3"
                >
                  <MessageSquare className="w-4 h-4 fill-emerald-300" />
                  <span>WhatsApp Directly</span>
                </a>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
