import React, { useState } from 'react';

// ============================================
// CRYPTO PAYMENT MODAL
// Configure your wallet addresses below
// ============================================

const TELEGRAM_SUCCESS_URL = "https://t.me/oranolio"; // Change to your Telegram
const PRODUCT_PRICE = 150; // USD price

const CRYPTO_OPTIONS = [
  {
    id: 'btc',
    name: 'Bitcoin',
    symbol: 'BTC',
    icon: '₿',
    color: '#F7931A',
    address: 'YOUR_BTC_ADDRESS_HERE', // Replace with your BTC address
    network: 'Bitcoin Network'
  },
  {
    id: 'eth',
    name: 'Ethereum',
    symbol: 'ETH',
    icon: 'Ξ',
    color: '#627EEA',
    address: 'YOUR_ETH_ADDRESS_HERE', // Replace with your ETH address
    network: 'Ethereum Network (ERC-20)'
  },
  {
    id: 'usdt',
    name: 'Tether',
    symbol: 'USDT',
    icon: '₮',
    color: '#26A17B',
    address: 'YOUR_USDT_ADDRESS_HERE', // Replace with your USDT address (ERC-20 or TRC-20)
    network: 'TRC-20 (Tron Network)'
  },
  {
    id: 'ltc',
    name: 'Litecoin',
    symbol: 'LTC',
    icon: 'Ł',
    color: '#BFBBBB',
    address: 'YOUR_LTC_ADDRESS_HERE', // Replace with your LTC address
    network: 'Litecoin Network'
  },
  {
    id: 'sol',
    name: 'Solana',
    symbol: 'SOL',
    icon: '◎',
    color: '#9945FF',
    address: 'YOUR_SOL_ADDRESS_HERE', // Replace with your SOL address
    network: 'Solana Network'
  }
];

interface CryptoPaymentProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CryptoPayment: React.FC<CryptoPaymentProps> = ({ isOpen, onClose }) => {
  const [selectedCrypto, setSelectedCrypto] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [step, setStep] = useState<'select' | 'pay' | 'verify'>('select');

  const handleCryptoSelect = (cryptoId: string) => {
    setSelectedCrypto(cryptoId);
    setStep('pay');
  };

  const handleCopyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleVerifyPayment = () => {
    // Redirect to Telegram for verification
    window.open(TELEGRAM_SUCCESS_URL, '_blank');
    onClose();
  };

  const handleBack = () => {
    if (step === 'pay') {
      setStep('select');
      setSelectedCrypto(null);
    }
  };

  const selectedCryptoData = CRYPTO_OPTIONS.find(c => c.id === selectedCrypto);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0F1923]/95 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-[#1A2A3A] border border-[#2D9C8E]/30 w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl">
        
        {/* Header */}
        <div className="sticky top-0 bg-[#1A2A3A] border-b border-[#FDFBF7]/10 p-6 flex justify-between items-center z-10">
          <div>
            <h2 className="text-2xl font-bold text-[#FDFBF7] font-['Space_Grotesk']">
              {step === 'select' ? 'SELECT CRYPTO' : 'SEND PAYMENT'}
            </h2>
            <p className="text-xs text-[#FDFBF7]/50 font-mono mt-1">
              ORANOLIO PROTOCOL • ${PRODUCT_PRICE} USD
            </p>
          </div>
          <button 
            onClick={onClose}
            className="text-[#FDFBF7]/50 hover:text-[#FF8A75] transition-colors text-2xl"
          >
            ×
          </button>
        </div>

        <div className="p-6">
          
          {/* Step 1: Select Crypto */}
          {step === 'select' && (
            <div className="space-y-3">
              <p className="text-[#FDFBF7]/60 text-sm mb-6">
                Choose your preferred cryptocurrency. All payments are final. No refunds. You know what you're buying.
              </p>
              
              {CRYPTO_OPTIONS.map((crypto) => (
                <button
                  key={crypto.id}
                  onClick={() => handleCryptoSelect(crypto.id)}
                  className="w-full p-4 border border-[#FDFBF7]/10 hover:border-[#2D9C8E] transition-all flex items-center gap-4 group text-left"
                >
                  <div 
                    className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded"
                    style={{ backgroundColor: `${crypto.color}20`, color: crypto.color }}
                  >
                    {crypto.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-[#FDFBF7] group-hover:text-[#2D9C8E] transition-colors">
                      {crypto.name}
                    </div>
                    <div className="text-xs text-[#FDFBF7]/50 font-mono">
                      {crypto.symbol} • {crypto.network}
                    </div>
                  </div>
                  <div className="text-[#FDFBF7]/30 group-hover:text-[#2D9C8E] transition-colors">
                    →
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Step 2: Payment Details */}
          {step === 'pay' && selectedCryptoData && (
            <div className="space-y-6">
              
              {/* Back Button */}
              <button 
                onClick={handleBack}
                className="text-[#FDFBF7]/50 hover:text-[#FDFBF7] text-sm font-mono flex items-center gap-2"
              >
                ← Back to crypto selection
              </button>

              {/* Selected Crypto */}
              <div className="flex items-center gap-4 p-4 border border-[#FDFBF7]/10">
                <div 
                  className="w-12 h-12 flex items-center justify-center text-2xl font-bold rounded"
                  style={{ backgroundColor: `${selectedCryptoData.color}20`, color: selectedCryptoData.color }}
                >
                  {selectedCryptoData.icon}
                </div>
                <div>
                  <div className="font-bold text-[#FDFBF7]">{selectedCryptoData.name}</div>
                  <div className="text-xs text-[#FDFBF7]/50">{selectedCryptoData.network}</div>
                </div>
              </div>

              {/* Amount */}
              <div className="bg-[#0F1923] p-4 border border-[#2D9C8E]/30">
                <div className="text-xs text-[#FDFBF7]/50 font-mono mb-1">AMOUNT TO SEND</div>
                <div className="text-3xl font-bold text-[#2D9C8E] font-['Space_Grotesk']">
                  ${PRODUCT_PRICE} USD
                </div>
                <div className="text-xs text-[#FDFBF7]/40 mt-1">
                  in {selectedCryptoData.symbol} equivalent (check current rate)
                </div>
              </div>

              {/* Address */}
              <div>
                <div className="text-xs text-[#FDFBF7]/50 font-mono mb-2">
                  SEND {selectedCryptoData.symbol} TO THIS ADDRESS
                </div>
                <div className="bg-[#0F1923] p-4 border border-[#FDFBF7]/10 break-all font-mono text-sm text-[#FDFBF7]">
                  {selectedCryptoData.address}
                </div>
                <button
                  onClick={() => handleCopyAddress(selectedCryptoData.address)}
                  className="w-full mt-2 py-2 border border-[#2D9C8E] text-[#2D9C8E] hover:bg-[#2D9C8E] hover:text-[#1A2A3A] transition-all text-sm font-bold uppercase tracking-widest"
                >
                  {copied ? '✓ COPIED!' : 'COPY ADDRESS'}
                </button>
              </div>

              {/* QR Code Placeholder */}
              <div className="text-center p-6 border border-dashed border-[#FDFBF7]/20">
                <div className="w-32 h-32 mx-auto bg-white p-2 mb-4">
                  {/* QR Code - you can generate these at qr-code-generator.com */}
                  <div className="w-full h-full bg-[#1A2A3A] flex items-center justify-center text-xs text-[#FDFBF7]/50">
                    QR CODE
                  </div>
                </div>
                <p className="text-xs text-[#FDFBF7]/40">
                  Scan to send from mobile wallet
                </p>
              </div>

              {/* Warning */}
              <div className="p-4 bg-[#FF8A75]/10 border-l-2 border-[#FF8A75]">
                <p className="text-xs text-[#FDFBF7]/80">
                  <strong className="text-[#FF8A75]">⚠ IMPORTANT:</strong> Send exactly ${PRODUCT_PRICE} USD worth of {selectedCryptoData.symbol}. 
                  Sending less = no access. Sending more = that's on you. 
                  All sales are final. Double-check the address.
                </p>
              </div>

              {/* Verify Button */}
              <button
                onClick={handleVerifyPayment}
                className="w-full py-4 bg-[#2D9C8E] text-[#FDFBF7] font-bold uppercase tracking-widest hover:bg-[#FF8A75] transition-all text-lg"
              >
                I'VE SENT THE PAYMENT →
              </button>
              
              <p className="text-center text-xs text-[#FDFBF7]/40">
                Clicking above opens Telegram for verification.<br/>
                Send your transaction ID/hash for instant access.
              </p>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="border-t border-[#FDFBF7]/10 p-4 text-center">
          <p className="text-[10px] text-[#FDFBF7]/30 font-mono">
            PAYMENTS PROCESSED MANUALLY • VERIFICATION VIA TELEGRAM • EST. 2014
          </p>
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

