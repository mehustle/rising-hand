import React, { useState } from 'react';
import { useCMS } from '../context/CMSContext';
import { DonationFrequency, PaymentMethodType, DonationRecord } from '../types';
import { RHOLogo } from '../components/RHOLogo';
import {
  Heart,
  CreditCard,
  Building2,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Copy,
  Check,
  Printer,
  Sparkles,
  Info,
  ArrowRight,
  AlertCircle,
  Globe2
} from 'lucide-react';

export const DonatePage: React.FC = () => {
  const { settings, addDonationRecord } = useCMS();

  // Donation Preferences
  const [frequency, setFrequency] = useState<DonationFrequency>('one-time');
  const [currency, setCurrency] = useState<'TZS' | 'USD' | 'EUR' | 'GBP'>('TZS');
  const [amount, setAmount] = useState<number>(50000);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [designation, setDesignation] = useState<string>(
    'Where Most Needed (General Mission & Community Fund)'
  );

  // Donor Details
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [donorNote, setDonorNote] = useState('');

  // Payment Method
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodType>('mobile_money');
  const [mobileProvider, setMobileProvider] = useState<'mpesa' | 'tigo' | 'airtel'>('mpesa');
  const [selectedBankCurrency, setSelectedBankCurrency] = useState<'TZS' | 'USD'>('TZS');

  // Confirmation / Receipt State
  const [createdReceipt, setCreatedReceipt] = useState<DonationRecord | null>(null);
  const [receiptBankCurrency, setReceiptBankCurrency] = useState<'TZS' | 'USD'>('TZS');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Currency presets
  const presetsByCurrency: Record<'TZS' | 'USD' | 'EUR' | 'GBP', number[]> = {
    TZS: [25000, 50000, 100000, 250000, 500000],
    USD: [15, 30, 60, 150, 300],
    EUR: [15, 30, 55, 140, 280],
    GBP: [12, 25, 50, 120, 250]
  };

  const currentPresets = presetsByCurrency[currency];

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 3000);
  };

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!donorName || !donorEmail) return;

    const finalAmount = customAmount ? parseFloat(customAmount) : amount;
    if (isNaN(finalAmount) || finalAmount <= 0) return;

    // Structured provider label
    let providerDetails = '';
    if (paymentMethod === 'mobile_money') {
      providerDetails =
        mobileProvider === 'mpesa'
          ? 'Vodacom M-Pesa'
          : mobileProvider === 'tigo'
          ? 'Tigo Pesa'
          : 'Airtel Money';
    } else if (paymentMethod === 'bank_transfer') {
      const activeBank = selectedBankCurrency === 'TZS' ? settings.bankAccountTsh : settings.bankAccountUsd;
      providerDetails = `CRDB Bank (${selectedBankCurrency} Account - ${activeBank?.accountNumber || ''})`;
    } else {
      providerDetails = 'Online Card Gateway (Pre-Integration Staging)';
    }

    // Save record to CMS
    const newRecord = addDonationRecord({
      donorName: isAnonymous ? 'Anonymous Supporter' : donorName,
      donorEmail,
      donorPhone,
      amount: finalAmount,
      currency,
      frequency,
      designation,
      paymentMethod,
      providerDetails,
      status: paymentMethod === 'mobile_money' ? 'pending_verification' : 'pledged',
      isAnonymous,
      notes: donorNote
    });

    setReceiptBankCurrency(selectedBankCurrency);
    setCreatedReceipt(newRecord);
    window.scrollTo({ top: 150, behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner (Professional Polish Theme) */}
      <section className="bg-[#002147] text-white py-16 border-b-4 border-[#D4AF37] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-widest uppercase text-[#D4AF37] bg-[#001733] px-3.5 py-1.5 rounded-sm border border-[#D4AF37]/30">
              Transform a Life Today
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4">
              Support Our Mission
            </h1>
            <p className="mt-3 text-lg font-bold text-[#D4AF37] uppercase tracking-wider">
              “BUILDING BRIGHTER FUTURE TOGETHER”
            </p>
            <p className="mt-4 text-base text-slate-200 leading-relaxed">
              Your charitable giving provides children with school kits, trains youth in market-ready vocational trades, and sustains vulnerable families across Tanzania.
            </p>
          </div>
        </div>
      </section>

      {/* Main Donation Container */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {createdReceipt ? (
            /* OFFICIAL PLEDGE & RECEIPT CONFIRMATION */
            <div className="bg-white rounded-sm border-2 border-slate-200 shadow-xl overflow-hidden p-8 sm:p-12 space-y-8" id="donation-receipt">
              <div className="text-center space-y-3 pb-6 border-b border-slate-200">
                <div className="flex justify-center mb-3">
                  <RHOLogo variant="crest" size="lg" />
                </div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-sm bg-emerald-50 text-emerald-600 border border-emerald-200 mb-1">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002147] font-serif">
                  Donation Pledge Confirmed
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
                  Thank you for standing with Rising Hands Organisation. Your official donation reference has been registered in our financial database.
                </p>
                <div className="inline-block px-4 py-1.5 rounded-sm bg-[#002147] text-[#D4AF37] font-mono text-sm font-bold border border-[#D4AF37]/30">
                  Ref Code: {createdReceipt.referenceCode}
                </div>
              </div>

              {/* Summary Table */}
              <div className="bg-slate-50 rounded-sm p-6 border border-slate-200 space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Donor Name:</span>
                  <span className="font-bold text-[#002147]">{createdReceipt.donorName}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Email:</span>
                  <span className="text-slate-900">{createdReceipt.donorEmail}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Pledge Amount:</span>
                  <span className="font-extrabold text-[#002147] text-base">
                    {createdReceipt.currency} {createdReceipt.amount.toLocaleString()} ({createdReceipt.frequency})
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Designation:</span>
                  <span className="font-semibold text-slate-800 text-right max-w-xs">{createdReceipt.designation}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500 font-medium">Selected Payment Channel:</span>
                  <span className="font-bold text-[#002147]">{createdReceipt.providerDetails}</span>
                </div>
              </div>

              {/* Channel-Specific Finalization Steps */}
              <div className="p-6 rounded-sm bg-slate-50 border-l-4 border-[#D4AF37] border-y border-r border-slate-200 space-y-4">
                <h3 className="text-sm font-bold text-[#002147] uppercase tracking-wider flex items-center gap-2">
                  <Info className="w-4 h-4 text-[#D4AF37]" />
                  <span>How to Complete Your Transfer:</span>
                </h3>

                {createdReceipt.paymentMethod === 'mobile_money' && (
                  <div className="text-xs sm:text-sm text-slate-700 space-y-2">
                    <p>
                      <strong className="text-[#002147]">Vodacom M-Pesa / Tigo Pesa / Airtel Money Instructions:</strong>
                    </p>
                    <ol className="list-decimal list-inside space-y-1.5 text-xs text-slate-700">
                      <li>Open your mobile phone dialer and dial *150*00# (Vodacom) or *150*01# (Tigo).</li>
                      <li>Select <strong>Pay with M-Pesa / Lipa Namba</strong>.</li>
                      <li>
                        Enter Till Number:{' '}
                        <strong className="text-[#002147] font-mono bg-white px-2 py-0.5 rounded-sm border border-slate-300">
                          {settings.mpesaTillPlaceholder}
                        </strong>
                      </li>
                      <li>
                        Enter Amount: <strong className="text-[#002147]">{createdReceipt.currency} {createdReceipt.amount.toLocaleString()}</strong>
                      </li>
                      <li>
                        Enter Reference:{' '}
                        <strong className="text-[#002147] font-mono bg-white px-2 py-0.5 rounded-sm border border-slate-300">
                          {createdReceipt.referenceCode}
                        </strong>
                      </li>
                      <li>Confirm with your secret mobile money PIN.</li>
                    </ol>
                  </div>
                )}

                {createdReceipt.paymentMethod === 'bank_transfer' && (
                  <div className="text-xs sm:text-sm text-slate-700 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <p>
                        <strong className="text-[#002147]">Direct Wire Transfer Details:</strong>
                      </p>
                      <div className="inline-flex rounded-sm p-0.5 bg-slate-200 border border-slate-300">
                        <button
                          type="button"
                          onClick={() => setReceiptBankCurrency('TZS')}
                          className={`px-2.5 py-1 text-[11px] font-bold rounded-xs transition-colors cursor-pointer ${
                            receiptBankCurrency === 'TZS'
                              ? 'bg-[#002147] text-[#D4AF37] shadow-xs'
                              : 'text-slate-700 hover:text-slate-900'
                          }`}
                        >
                          TSH Account (TZS)
                        </button>
                        <button
                          type="button"
                          onClick={() => setReceiptBankCurrency('USD')}
                          className={`px-2.5 py-1 text-[11px] font-bold rounded-xs transition-colors cursor-pointer ${
                            receiptBankCurrency === 'USD'
                              ? 'bg-[#002147] text-[#D4AF37] shadow-xs'
                              : 'text-slate-700 hover:text-slate-900'
                          }`}
                        >
                          USD Account ($)
                        </button>
                      </div>
                    </div>

                    {(() => {
                      const account = receiptBankCurrency === 'TZS' ? settings.bankAccountTsh : settings.bankAccountUsd;
                      return (
                        <div className="bg-white p-4 rounded-sm border border-slate-200 text-xs space-y-2 text-slate-800">
                          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                            <span className="font-bold text-[#002147]">
                              {receiptBankCurrency === 'TZS' ? 'Tanzanian Shillings Account (TSH)' : 'US Dollar Account (USD Wire)'}
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm bg-slate-100 text-slate-700">
                              {receiptBankCurrency} Currency
                            </span>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-[11px]">
                            <div><span className="text-slate-500 font-sans">Bank:</span> {account?.bankName || 'CRDB Bank Plc (Tanzania)'}</div>
                            <div><span className="text-slate-500 font-sans">Account Name:</span> {account?.accountName || 'RISING HANDS ORGANISATION (RHO)'}</div>
                            <div className="flex items-center justify-between pr-2">
                              <div><span className="text-slate-500 font-sans">Account Number:</span> <strong className="text-[#002147]">{account?.accountNumber}</strong></div>
                              <button
                                type="button"
                                onClick={() => handleCopy(account?.accountNumber || '', `receipt_acc_${receiptBankCurrency}`)}
                                className="text-[10px] font-sans font-bold text-[#002147] hover:text-[#D4AF37] flex items-center gap-1 cursor-pointer"
                              >
                                {copiedField === `receipt_acc_${receiptBankCurrency}` ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                                {copiedField === `receipt_acc_${receiptBankCurrency}` ? 'Copied' : 'Copy'}
                              </button>
                            </div>
                            <div className="flex items-center justify-between pr-2">
                              <div><span className="text-slate-500 font-sans">SWIFT/BIC:</span> <strong>{account?.swiftCode || 'CORUTZTZXXX'}</strong></div>
                              <button
                                type="button"
                                onClick={() => handleCopy(account?.swiftCode || '', `receipt_swift_${receiptBankCurrency}`)}
                                className="text-[10px] font-sans font-bold text-[#002147] hover:text-[#D4AF37] flex items-center gap-1 cursor-pointer"
                              >
                                {copiedField === `receipt_swift_${receiptBankCurrency}` ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                                {copiedField === `receipt_swift_${receiptBankCurrency}` ? 'Copied' : 'Copy'}
                              </button>
                            </div>
                            <div className="sm:col-span-2"><span className="text-slate-500 font-sans">Branch:</span> {account?.branch || 'Dar es Salaam Corporate Branch, Tanzania'}</div>
                          </div>
                          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                            <span className="text-[11px] font-bold text-[#002147]">Transfer Remark / Memo: <span className="font-mono">{createdReceipt.referenceCode}</span></span>
                            <button
                              type="button"
                              onClick={() => handleCopy(createdReceipt.referenceCode, 'receipt_memo')}
                              className="text-[10px] font-bold text-[#002147] hover:text-[#D4AF37] flex items-center gap-1 cursor-pointer"
                            >
                              {copiedField === 'receipt_memo' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                              {copiedField === 'receipt_memo' ? 'Copied' : 'Copy Memo'}
                            </button>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                )}

                {createdReceipt.paymentMethod === 'card_gateway' && (
                  <div className="text-xs sm:text-sm text-slate-700 space-y-2">
                    <p>
                      <strong className="text-[#002147]">Card Payment Gateway Integration Status:</strong>
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Your card pledge has been securely staged. In production, this integrates with certified gateways (Stripe / Flutterwave / DPO Pay) to process transactions with zero friction.
                    </p>
                  </div>
                )}
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100">
                <button
                  onClick={() => window.print()}
                  className="px-5 py-2.5 rounded-sm text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center gap-2"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Receipt / Instructions</span>
                </button>
                <button
                  onClick={() => setCreatedReceipt(null)}
                  className="px-6 py-2.5 rounded-sm text-xs font-bold bg-[#002147] text-[#D4AF37] hover:bg-[#001733] transition-colors"
                >
                  Make Another Donation
                </button>
              </div>
            </div>
          ) : (
            /* ACTIVE DONATION FORM */
            <form
              onSubmit={handleDonationSubmit}
              className="bg-white rounded-sm border border-slate-200 shadow-sm p-6 sm:p-12 space-y-10"
              id="donation-form"
            >
              {/* Step 1: Frequency & Currency */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest block">
                    Step 1: Choose Giving Rhythm & Currency
                  </span>
                  <span className="text-xs text-slate-500 font-medium">Safe & Transparent</span>
                </div>

                {/* Frequency Selector */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                  {[
                    { id: 'one-time', label: 'One-Time Gift' },
                    { id: 'monthly', label: 'Monthly Sustainer' },
                    { id: 'quarterly', label: 'Quarterly Ally' },
                    { id: 'annual', label: 'Annual Sponsor' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setFrequency(item.id as DonationFrequency)}
                      className={`py-3 px-3 rounded-sm text-xs font-bold transition-all ${
                        frequency === item.id
                          ? 'bg-[#002147] text-[#D4AF37] shadow-md border-b-2 border-[#D4AF37]'
                          : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                {/* Currency Switcher */}
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-xs font-bold text-[#002147] uppercase tracking-wider mr-2">
                    Currency:
                  </span>
                  {(['TZS', 'USD', 'EUR', 'GBP'] as const).map((curr) => (
                    <button
                      key={curr}
                      type="button"
                      onClick={() => {
                        setCurrency(curr);
                        setAmount(presetsByCurrency[curr][1]);
                        setCustomAmount('');
                        setSelectedBankCurrency(curr === 'TZS' ? 'TZS' : 'USD');
                      }}
                      className={`px-3 py-1.5 rounded-sm text-xs font-bold transition-colors ${
                        currency === curr
                          ? 'bg-[#D4AF37] text-[#002147] font-black shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {curr}
                    </button>
                  ))}
                </div>

                {/* Amount Presets */}
                <div className="space-y-3">
                  <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider">
                    Select Contribution Amount ({currency})
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5">
                    {currentPresets.map((preset) => {
                      const isSelected = !customAmount && amount === preset;
                      return (
                        <button
                          key={preset}
                          type="button"
                          onClick={() => {
                            setAmount(preset);
                            setCustomAmount('');
                          }}
                          className={`py-3 px-2 rounded-sm text-xs font-bold transition-all ${
                            isSelected
                              ? 'bg-[#D4AF37] text-[#002147] border-2 border-[#002147] shadow-sm font-extrabold'
                              : 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {currency} {preset.toLocaleString()}
                        </button>
                      );
                    })}
                  </div>

                  {/* Custom Amount Field */}
                  <div className="pt-2">
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-extrabold text-slate-500">
                        {currency}
                      </span>
                      <input
                        type="number"
                        min="1"
                        placeholder="Or enter custom amount..."
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        className="w-full pl-14 pr-4 py-3 rounded-sm border border-slate-300 text-sm font-semibold text-slate-900 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Program Designation */}
              <div className="pt-6 border-t border-slate-100">
                <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest block mb-1">
                  Step 2: Direct Your Impact
                </span>
                <div className="mt-4">
                  <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-2">
                    Where would you like your gift to go?
                  </label>
                  <select
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                    className="w-full px-4 py-3 rounded-sm border border-slate-300 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] bg-white"
                  >
                    <option value="Where Most Needed (General Mission & Community Fund)">
                      Where Most Needed (General Mission & Community Fund)
                    </option>
                    <option value="EDUCATE: Primary/Secondary Student Scholastic Kits & Fees">
                      EDUCATE: Primary/Secondary Student Scholastic Kits & Fees
                    </option>
                    <option value="EMPOWER: Youth Technical Vocational Apprenticeships">
                      EMPOWER: Youth Technical Vocational Apprenticeships
                    </option>
                    <option value="EMPOWER: Women Micro-Enterprise Seed Support">
                      EMPOWER: Women Micro-Enterprise Seed Support
                    </option>
                    <option value="INSPIRE: Community Youth Sports & Leadership Leagues">
                      INSPIRE: Community Youth Sports & Leadership Leagues
                    </option>
                    <option value="TRANSFORM: Vulnerable Families Emergency Food & WASH Water">
                      TRANSFORM: Vulnerable Families Emergency Food & WASH Water
                    </option>
                  </select>
                </div>
              </div>

              {/* Step 3: Donor Information */}
              <div className="pt-6 border-t border-slate-100 space-y-4">
                <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest block mb-1">
                  Step 3: Donor Details
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      placeholder="e.g. Maryam Salim"
                      className="w-full px-4 py-2.5 rounded-sm border border-slate-300 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                      placeholder="e.g. maryam@example.tz"
                      className="w-full px-4 py-2.5 rounded-sm border border-slate-300 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-2">
                      Phone Number (Mobile Money / WhatsApp)
                    </label>
                    <input
                      type="tel"
                      value={donorPhone}
                      onChange={(e) => setDonorPhone(e.target.value)}
                      placeholder="e.g. +255 700 000 000"
                      className="w-full px-4 py-2.5 rounded-sm border border-slate-300 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                    />
                  </div>

                  <div className="flex items-center pt-6">
                    <label className="flex items-center gap-2.5 cursor-pointer text-xs font-semibold text-slate-700">
                      <input
                        type="checkbox"
                        checked={isAnonymous}
                        onChange={(e) => setIsAnonymous(e.target.checked)}
                        className="w-4 h-4 rounded-sm text-[#002147] focus:ring-[#D4AF37]"
                      />
                      <span>Make my donation anonymous on public reports</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#002147] uppercase tracking-wider mb-2">
                    Optional Message or Dedication
                  </label>
                  <input
                    type="text"
                    value={donorNote}
                    onChange={(e) => setDonorNote(e.target.value)}
                    placeholder="In honour of... / Special words of encouragement"
                    className="w-full px-4 py-2.5 rounded-sm border border-slate-300 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                  />
                </div>
              </div>

              {/* Step 4: Structured Payment Method Selection */}
              <div className="pt-6 border-t border-slate-100 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest block">
                    Step 4: Select Structured Payment Method
                  </span>
                  <span className="text-xs text-slate-400">Gateways Ready</span>
                </div>

                {/* Method Options */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('mobile_money')}
                    className={`p-4 rounded-sm text-left border transition-all ${
                      paymentMethod === 'mobile_money'
                        ? 'bg-slate-50 border-2 border-[#D4AF37] shadow-sm'
                        : 'bg-white border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Phone className="w-5 h-5 text-[#D4AF37]" />
                      <span className="text-[10px] font-bold uppercase text-[#002147] bg-slate-100 px-2 py-0.5 rounded-sm">
                        Tanzania
                      </span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#002147]">Mobile Money</h4>
                    <p className="text-[11px] text-slate-500 mt-1">
                      M-Pesa, Tigo Pesa, Airtel Money Lipa Namba
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('bank_transfer')}
                    className={`p-4 rounded-sm text-left border transition-all ${
                      paymentMethod === 'bank_transfer'
                        ? 'bg-slate-50 border-2 border-[#D4AF37] shadow-sm'
                        : 'bg-white border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Building2 className="w-5 h-5 text-[#D4AF37]" />
                      <span className="text-[10px] font-bold uppercase text-slate-600 bg-slate-100 px-2 py-0.5 rounded-sm">
                        Global / Wire
                      </span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#002147]">Bank Wire (CRDB)</h4>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Direct SWIFT & local EFT bank deposit
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card_gateway')}
                    className={`p-4 rounded-sm text-left border transition-all ${
                      paymentMethod === 'card_gateway'
                        ? 'bg-slate-50 border-2 border-[#D4AF37] shadow-sm'
                        : 'bg-white border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <CreditCard className="w-5 h-5 text-[#D4AF37]" />
                      <span className="text-[10px] font-bold uppercase text-slate-600 bg-slate-100 px-2 py-0.5 rounded-sm">
                        Staging
                      </span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#002147]">Debit / Credit Card</h4>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Visa / Mastercard gateway integration
                    </p>
                  </button>
                </div>

                {/* Sub-Panel for Selected Method */}
                {paymentMethod === 'mobile_money' && (
                  <div className="p-5 rounded-sm bg-slate-50 border border-slate-200 space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#002147]">Select Provider:</span>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setMobileProvider('mpesa')}
                          className={`px-3 py-1 rounded-sm text-xs font-bold ${
                            mobileProvider === 'mpesa' ? 'bg-red-600 text-white' : 'bg-slate-200 text-slate-700'
                          }`}
                        >
                          Vodacom M-Pesa
                        </button>
                        <button
                          type="button"
                          onClick={() => setMobileProvider('tigo')}
                          className={`px-3 py-1 rounded-sm text-xs font-bold ${
                            mobileProvider === 'tigo' ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-700'
                          }`}
                        >
                          Tigo Pesa
                        </button>
                        <button
                          type="button"
                          onClick={() => setMobileProvider('airtel')}
                          className={`px-3 py-1 rounded-sm text-xs font-bold ${
                            mobileProvider === 'airtel' ? 'bg-red-700 text-white' : 'bg-slate-200 text-slate-700'
                          }`}
                        >
                          Airtel Money
                        </button>
                      </div>
                    </div>
                    <div className="text-xs text-slate-600 space-y-1">
                      <p>
                        <strong className="text-[#002147]">Lipa Namba Till:</strong>{' '}
                        <code className="bg-white px-2 py-0.5 rounded-sm border font-bold text-[#002147]">
                          {mobileProvider === 'mpesa'
                            ? settings.mpesaTillPlaceholder
                            : mobileProvider === 'tigo'
                            ? settings.tigopesaTillPlaceholder
                            : settings.airtelMoneyPlaceholder}
                        </code>
                      </p>
                      <p className="text-[11px] text-slate-500">
                        A unique reference code will be generated upon confirmation for your transfer memo.
                      </p>
                    </div>
                  </div>
                )}

                {paymentMethod === 'bank_transfer' && (
                  <div className="p-5 rounded-sm bg-slate-50 border border-slate-200 space-y-4 text-xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200">
                      <div>
                        <p className="font-bold text-[#002147] text-sm flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-[#D4AF37]" />
                          <span>Official RHO Bank Accounts</span>
                        </p>
                        <p className="text-[11px] text-slate-500">
                          Select your currency account below for domestic (TSH) or international wire (USD) transfers:
                        </p>
                      </div>
                      <span className="text-[10px] font-bold text-slate-600 bg-white px-2.5 py-1 rounded-sm border border-slate-200 uppercase tracking-wider self-start sm:self-auto">
                        CRDB Bank Plc
                      </span>
                    </div>

                    {/* Dual Currency Account Switcher Buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* TSH Option */}
                      <button
                        type="button"
                        onClick={() => setSelectedBankCurrency('TZS')}
                        className={`p-3.5 text-left rounded-sm border transition-all cursor-pointer ${
                          selectedBankCurrency === 'TZS'
                            ? 'bg-white border-[#002147] shadow-sm ring-2 ring-[#002147]'
                            : 'bg-white/60 border-slate-200 hover:border-slate-300 text-slate-600'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-xs text-[#002147] flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                            TSH Account (TSh / TZS)
                          </span>
                          <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded-xs ${
                            selectedBankCurrency === 'TZS' ? 'bg-[#002147] text-[#D4AF37]' : 'bg-slate-100 text-slate-600'
                          }`}>
                            LOCAL
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 mb-1">
                          For transfers within Tanzania (TISS, EFT & Mobile-to-Bank)
                        </p>
                        <p className="font-mono text-xs font-bold text-[#002147]">
                          {settings.bankAccountTsh?.accountNumber || '0150392817200'}
                        </p>
                      </button>

                      {/* USD Option */}
                      <button
                        type="button"
                        onClick={() => setSelectedBankCurrency('USD')}
                        className={`p-3.5 text-left rounded-sm border transition-all cursor-pointer ${
                          selectedBankCurrency === 'USD'
                            ? 'bg-white border-[#002147] shadow-sm ring-2 ring-[#002147]'
                            : 'bg-white/60 border-slate-200 hover:border-slate-300 text-slate-600'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-xs text-[#002147] flex items-center gap-1.5">
                            <Globe2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                            USD Account ($ / USD)
                          </span>
                          <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded-xs ${
                            selectedBankCurrency === 'USD' ? 'bg-[#002147] text-[#D4AF37]' : 'bg-slate-100 text-slate-600'
                          }`}>
                            INTERNATIONAL
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 mb-1">
                          For overseas diaspora donors & cross-border wire via SWIFT
                        </p>
                        <p className="font-mono text-xs font-bold text-[#002147]">
                          {settings.bankAccountUsd?.accountNumber || '0250392817201'}
                        </p>
                      </button>
                    </div>

                    {/* Active Bank Account Details Breakdown */}
                    {(() => {
                      const active = selectedBankCurrency === 'TZS' ? settings.bankAccountTsh : settings.bankAccountUsd;
                      return (
                        <div className="bg-white p-4 rounded-sm border border-slate-200 space-y-2.5">
                          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                            <span className="font-bold text-[#002147] text-xs">
                              Remittance Destination ({selectedBankCurrency === 'TZS' ? 'Tanzanian Shillings Account' : 'US Dollars Wire Account'}):
                            </span>
                            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-sm border border-emerald-200">
                              Active Receiver
                            </span>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-[11px] text-slate-700">
                            <div>
                              <span className="text-slate-500 font-sans block text-[10px] uppercase font-bold">Bank Name</span>
                              <span className="font-sans font-bold text-[#002147]">{active?.bankName || 'CRDB Bank Plc (Tanzania)'}</span>
                            </div>
                            <div>
                              <span className="text-slate-500 font-sans block text-[10px] uppercase font-bold">Beneficiary Name</span>
                              <span className="font-sans font-bold text-[#002147]">{active?.accountName || 'RISING HANDS ORGANISATION (RHO)'}</span>
                            </div>
                            <div className="bg-slate-50 p-2 rounded-xs border border-slate-200 flex items-center justify-between">
                              <div>
                                <span className="text-slate-500 font-sans block text-[10px] uppercase font-bold">
                                  {selectedBankCurrency} Account Number
                                </span>
                                <span className="font-bold text-sm text-[#002147] tracking-wider">{active?.accountNumber}</span>
                              </div>
                              <button
                                type="button"
                                onClick={() => handleCopy(active?.accountNumber || '', `form_acc_${selectedBankCurrency}`)}
                                className="px-2.5 py-1 rounded-sm text-[10px] font-sans font-bold bg-white text-[#002147] border border-slate-300 hover:border-[#D4AF37] flex items-center gap-1 shadow-2xs cursor-pointer"
                              >
                                {copiedField === `form_acc_${selectedBankCurrency}` ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                                {copiedField === `form_acc_${selectedBankCurrency}` ? 'Copied' : 'Copy'}
                              </button>
                            </div>
                            <div className="bg-slate-50 p-2 rounded-xs border border-slate-200 flex items-center justify-between">
                              <div>
                                <span className="text-slate-500 font-sans block text-[10px] uppercase font-bold">SWIFT / BIC Code</span>
                                <span className="font-bold text-sm text-[#002147] tracking-wider">{active?.swiftCode || 'CORUTZTZXXX'}</span>
                              </div>
                              <button
                                type="button"
                                onClick={() => handleCopy(active?.swiftCode || '', `form_swift_${selectedBankCurrency}`)}
                                className="px-2.5 py-1 rounded-sm text-[10px] font-sans font-bold bg-white text-[#002147] border border-slate-300 hover:border-[#D4AF37] flex items-center gap-1 shadow-2xs cursor-pointer"
                              >
                                {copiedField === `form_swift_${selectedBankCurrency}` ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                                {copiedField === `form_swift_${selectedBankCurrency}` ? 'Copied' : 'Copy'}
                              </button>
                            </div>
                            <div className="sm:col-span-2">
                              <span className="text-slate-500 font-sans block text-[10px] uppercase font-bold">Corporate Branch</span>
                              <span className="font-sans text-slate-700">{active?.branch || 'Dar es Salaam Corporate Branch, Tanzania'}</span>
                            </div>
                          </div>

                          <div className="p-2.5 rounded-sm bg-amber-50/60 border border-amber-200/80 text-[11px] text-amber-900 leading-relaxed flex items-start gap-2">
                            <Info className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                            <span>
                              {selectedBankCurrency === 'TZS'
                                ? 'For local donations in Tanzanian Shillings, transfer directly through your Tanzanian bank app (CRDB SimBanking, NMB Mkononi, Stanbic, etc.) or TISS/EFT.'
                                : 'For international foreign currency wires in USD, EUR, or GBP, quote SWIFT code CORUTZTZXXX. Funds will credit to RHO’s verified USD foreign currency account.'}
                            </span>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                )}

                {paymentMethod === 'card_gateway' && (
                  <div className="p-5 rounded-sm bg-slate-50 border border-slate-200 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#002147]">
                      <Lock className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Card Payment Gateway Tokenizer (Staging Interface)</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <input
                        type="text"
                        disabled
                        placeholder="Card Number: •••• •••• •••• ••••"
                        className="px-3 py-2 bg-white rounded-sm border border-slate-200 text-slate-400 font-mono cursor-not-allowed"
                      />
                      <div className="flex gap-2">
                        <input
                          type="text"
                          disabled
                          placeholder="MM/YY"
                          className="w-1/2 px-3 py-2 bg-white rounded-sm border border-slate-200 text-slate-400 font-mono cursor-not-allowed"
                        />
                        <input
                          type="text"
                          disabled
                          placeholder="CVC"
                          className="w-1/2 px-3 py-2 bg-white rounded-sm border border-slate-200 text-slate-400 font-mono cursor-not-allowed"
                        />
                      </div>
                    </div>
                    <p className="text-[11px] text-amber-800 flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>
                        Notice: Real payment gateways will connect here via official production keys. No fake transactions will be charged.
                      </span>
                    </p>
                  </div>
                )}
              </div>

              {/* Submit CTA */}
              <div className="pt-6 border-t border-slate-200">
                <button
                  type="submit"
                  className="w-full py-4 px-8 rounded-sm font-extrabold text-base text-[#002147] bg-[#D4AF37] hover:bg-[#002147] hover:text-white shadow-xl transition-all flex items-center justify-center gap-2"
                  id="submit-donation-pledge-btn"
                >
                  <Heart className="w-5 h-5 text-rose-600" />
                  <span>
                    Confirm Contribution Pledge: {currency}{' '}
                    {(customAmount ? parseFloat(customAmount) || 0 : amount).toLocaleString()}
                  </span>
                </button>
                <p className="text-center text-[11px] text-slate-500 mt-2">
                  Transparent Non-Profit Bookkeeping • Child Safeguarding Standards • Tanzania NGO
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
