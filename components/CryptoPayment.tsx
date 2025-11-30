import React, { useState, useEffect } from 'react';

// ============================================
// CRYPTO PAYMENT MODAL - SECURE & PROFESSIONAL
// ============================================

const TELEGRAM_SUCCESS_URL = "https://t.me/oranoliokay";
const PRODUCT_PRICE = 150;

const CRYPTO_OPTIONS = [
  {
    id: 'btc',
    name: 'Bitcoin',
    symbol: 'BTC',
    icon: '₿',
    color: '#F7931A',
    address: 'bc1qxv394xty8p380gq25qf70nm5r84zemgwzh3z06',
    network: 'Bitcoin Network'
  },
  {
    id: 'eth',
    name: 'Ethereum',
    symbol: 'ETH',
    icon: 'Ξ',
    color: '#627EEA',
    address: '0xde0F05DAB6c6c335161505B36268ccFc104E506f',
    network: 'Ethereum Network (ERC-20)'
  },
  {
    id: 'usdt',
    name: 'Tether',
    symbol: 'USDT',
    icon: '₮',
    color: '#26A17B',
    address: '0xde0F05DAB6c6c335161505B36268ccFc104E506f',
    network: 'ERC-20 (Ethereum Network)'
  },
  {
    id: 'ltc',
    name: 'Litecoin',
    symbol: 'LTC',
    icon: 'Ł',
    color: '#BFBBBB',
    address: 'LW1rr8n8u437YkHuBjKdhNkhAWqJy2tezG',
    network: 'Litecoin Network'
  },
  {
    id: 'sol',
    name: 'Solana',
    symbol: 'SOL',
    icon: '◎',
    color: '#9945FF',
    address: '3BPJBjiPSvHfmjp6isCAfi1HtxJsjFSV3GWuCFaQK1Te',
    network: 'Solana Network'
  }
];

// QR Code Component using Google Charts API
const QRCode: React.FC<{ data: string; size?: number }> = ({ data, size = 180 }) => {
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(data)}&bgcolor=FFFFFF&color=1A2A3A&margin=1`;
  
  return (
    <img 
      src={qrUrl} 
      alt="QR Code" 
      width={size} 
      height={size}
      className="mx-auto"
      style={{ imageRendering: 'pixelated' }}
    />
  );
};

interface CryptoPaymentProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CryptoPayment: React.FC<CryptoPaymentProps> = ({ isOpen, onClose }) => {
  const [selectedCrypto, setSelectedCrypto] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [step, setStep] = useState<'select' | 'pay'>('select');
  const [timeLeft, setTimeLeft] = useState(900); // 15 min timer

  // Countdown timer for urgency
  useEffect(() => {
    if (!isOpen || step !== 'pay') return;
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, [isOpen, step]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const handleCryptoSelect = (cryptoId: string) => {
    setSelectedCrypto(cryptoId);
    setStep('pay');
    setTimeLeft(900);
  };

  const handleCopyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleVerifyPayment = () => {
    window.open(TELEGRAM_SUCCESS_URL, '_blank');
    onClose();
  };

  const handleBack = () => {
    setStep('select');
    setSelectedCrypto(null);
  };

  const handleClose = () => {
    setStep('select');
    setSelectedCrypto(null);
    onClose();
  };

  const selectedCryptoData = CRYPTO_OPTIONS.find(c => c.id === selectedCrypto);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0F1923]/98 backdrop-blur-md"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative bg-[#0F1923] border border-[#2D9C8E]/50 w-full max-w-md max-h-[90vh] overflow-y-auto shadow-[0_0_60px_rgba(45,156,142,0.15)] rounded-lg">
        
        {/* Security Header Bar */}
        <div className="bg-gradient-to-r from-[#2D9C8E]/10 to-[#1A2A3A]/20 border-b border-[#2D9C8E]/30 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-[#2D9C8E] rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <span className="text-[11px] font-semibold text-[#2D9C8E] uppercase tracking-wide">Secure Payment Portal</span>
              <div className="text-[9px] text-[#FDFBF7]/60 font-mono">Bank-grade encryption</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#2D9C8E] rounded-full animate-pulse"></span>
            <span className="text-[9px] font-mono text-[#FDFBF7]/70">TLS 1.3 Protected</span>
          </div>
        </div>

        {/* Header */}
        <div className="bg-[#1A2A3A] border-b border-[#FDFBF7]/10 p-6">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-[#FF8A75] rounded flex items-center justify-center">
                  <span className="text-[#1A2A3A] font-bold text-sm">O</span>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-[#FDFBF7] font-['Space_Grotesk']">
                    ORANOLIO PROTOCOL
                  </h2>
                  <p className="text-[10px] text-[#2D9C8E] font-mono">Verified Merchant • Est. 2014</p>
                </div>
              </div>
            </div>
            <button 
              onClick={handleClose}
              className="text-[#FDFBF7]/30 hover:text-[#FF8A75] transition-colors p-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Order Summary */}
          <div className="mt-4 p-4 bg-gradient-to-r from-[#0F1923] to-[#1A2A3A] border border-[#FDFBF7]/10 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <div>
                <span className="text-sm font-semibold text-[#FDFBF7]">The Oranolio Protocol</span>
                <div className="text-[10px] text-[#FDFBF7]/60">Digital Course & Resources</div>
              </div>
              <span className="text-2xl font-bold text-[#2D9C8E] font-['Space_Grotesk']">${PRODUCT_PRICE}</span>
            </div>
            <div className="flex justify-between text-[11px] text-[#FDFBF7]/70">
              <span>One-time payment</span>
              <span>Lifetime access</span>
            </div>
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#2D9C8E]/30 to-transparent mt-3"></div>
          </div>
        </div>

        <div className="p-6">
          
          {/* Step 1: Select Crypto */}
          {step === 'select' && (
            <div>
              <h3 className="text-sm font-bold text-[#FDFBF7] mb-4 uppercase tracking-wider">
                Select Payment Method
              </h3>
              
              <div className="space-y-2">
                {CRYPTO_OPTIONS.map((crypto) => (
                  <button
                    key={crypto.id}
                    onClick={() => handleCryptoSelect(crypto.id)}
                    className="w-full p-4 bg-[#1A2A3A] border border-[#FDFBF7]/10 hover:border-[#2D9C8E] transition-all flex items-center gap-4 group rounded"
                  >
                    <div 
                      className="w-10 h-10 flex items-center justify-center text-xl font-bold rounded"
                      style={{ backgroundColor: `${crypto.color}15`, color: crypto.color }}
                    >
                      {crypto.icon}
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-bold text-[#FDFBF7] text-sm group-hover:text-[#2D9C8E] transition-colors">
                        {crypto.name}
                      </div>
                      <div className="text-[10px] text-[#FDFBF7]/40 font-mono">
                        {crypto.network}
                      </div>
                    </div>
                    <svg className="w-4 h-4 text-[#FDFBF7]/20 group-hover:text-[#2D9C8E] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="mt-6 pt-4 border-t border-[#FDFBF7]/10">
                <div className="grid grid-cols-3 gap-3">
                  <div className="flex flex-col items-center gap-2 p-2 bg-[#1A2A3A]/30 rounded-lg border border-[#2D9C8E]/20">
                    <svg className="w-5 h-5 text-[#2D9C8E]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[9px] font-semibold text-[#FDFBF7] text-center">Verified Merchant</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-2 bg-[#1A2A3A]/30 rounded-lg border border-[#2D9C8E]/20">
                    <svg className="w-5 h-5 text-[#2D9C8E]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[9px] font-semibold text-[#FDFBF7] text-center">Bank-Level Security</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-2 bg-[#1A2A3A]/30 rounded-lg border border-[#2D9C8E]/20">
                    <svg className="w-5 h-5 text-[#2D9C8E]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[9px] font-semibold text-[#FDFBF7] text-center">Instant Delivery</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Payment Details */}
          {step === 'pay' && selectedCryptoData && (
            <div>
              
              {/* Back Button */}
              <button 
                onClick={handleBack}
                className="text-[#FDFBF7]/40 hover:text-[#FDFBF7] text-xs flex items-center gap-1 mb-4"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Change payment method
              </button>

              {/* Timer */}
              <div className="bg-[#FF8A75]/10 border border-[#FF8A75]/30 rounded p-3 mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#FF8A75]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-xs text-[#FDFBF7]/70">Payment window expires in</span>
                </div>
                <span className="font-mono font-bold text-[#FF8A75]">{formatTime(timeLeft)}</span>
              </div>

              {/* Selected Payment Method */}
              <div className="flex items-center gap-3 p-3 bg-[#1A2A3A] rounded border border-[#FDFBF7]/10 mb-4">
                <div 
                  className="w-8 h-8 flex items-center justify-center text-lg font-bold rounded"
                  style={{ backgroundColor: `${selectedCryptoData.color}15`, color: selectedCryptoData.color }}
                >
                  {selectedCryptoData.icon}
                </div>
                <div>
                  <div className="font-bold text-[#FDFBF7] text-sm">{selectedCryptoData.name}</div>
                  <div className="text-[10px] text-[#FDFBF7]/40">{selectedCryptoData.network}</div>
                </div>
              </div>

              {/* QR Code */}
              <div className="bg-white p-4 rounded mb-4">
                <QRCode data={selectedCryptoData.address} size={180} />
              </div>

              {/* Amount */}
              <div className="text-center mb-4">
                <div className="text-xs text-[#FDFBF7]/50 uppercase tracking-wider mb-1">Send Exactly</div>
                <div className="text-2xl font-bold text-[#2D9C8E] font-['Space_Grotesk']">
                  ${PRODUCT_PRICE} <span className="text-sm text-[#FDFBF7]/50">USD</span>
                </div>
                <div className="text-[10px] text-[#FDFBF7]/40">
                  in {selectedCryptoData.symbol} (check current exchange rate)
                </div>
              </div>

              {/* Address */}
              <div className="mb-4">
                <div className="text-[10px] text-[#FDFBF7]/50 uppercase tracking-wider mb-2">
                  {selectedCryptoData.symbol} Address
                </div>
                <div className="bg-[#1A2A3A] p-3 rounded border border-[#FDFBF7]/10 flex items-center gap-2">
                  <code className="flex-1 text-xs text-[#FDFBF7] break-all font-mono">
                    {selectedCryptoData.address}
                  </code>
                  <button
                    onClick={() => handleCopyAddress(selectedCryptoData.address)}
                    className={`flex-shrink-0 p-2 rounded transition-all ${copied ? 'bg-[#2D9C8E] text-white' : 'bg-[#FDFBF7]/10 text-[#FDFBF7]/60 hover:text-[#2D9C8E]'}`}
                  >
                    {copied ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Important Notice */}
              <div className="bg-[#1A2A3A] border-l-2 border-[#2D9C8E] p-3 rounded-r mb-4">
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#2D9C8E] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <div className="text-[11px] text-[#FDFBF7]/70 leading-relaxed">
                    <strong className="text-[#FDFBF7]">After sending:</strong> Click the button below to verify your payment on Telegram. Include your transaction hash/ID for instant access.
                  </div>
                </div>
              </div>

              {/* Verify Button */}
              <button
                onClick={handleVerifyPayment}
                className="w-full py-4 bg-[#2D9C8E] hover:bg-[#2D9C8E]/90 text-white font-bold uppercase tracking-wider rounded transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(45,156,142,0.3)]"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                </svg>
                Verify Payment on Telegram
              </button>

              <p className="text-center text-[10px] text-[#FDFBF7]/30 mt-3">
                You'll receive instant access after verification
              </p>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-[#1A2A3A] to-[#0F1923] border-t border-[#2D9C8E]/20 p-4">
          <div className="flex items-center justify-center gap-6 text-[11px] text-[#FDFBF7]/60">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#2D9C8E]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span>SSL Secured</span>
            </div>
            <div className="w-[1px] h-4 bg-[#2D9C8E]/30"></div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#2D9C8E]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No Hidden Fees</span>
            </div>
            <div className="w-[1px] h-4 bg-[#2D9C8E]/30"></div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#2D9C8E]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Instant Access</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export a hook to manage the modal state
export const useCryptoPayment = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const openPayment = () => setIsOpen(true);
  const closePayment = () => setIsOpen(false);
  
  return { isOpen, openPayment, closePayment };
};
