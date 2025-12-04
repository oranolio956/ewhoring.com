import React, { useState, useEffect, useCallback, useMemo } from 'react';

interface RamblingMessage {
  text: string;
  emotion: string;
  duration: number;
  background?: string;
}

export const DrunkConfessionBanner: React.FC = React.memo(() => {
  const [copied, setCopied] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showRambling, setShowRambling] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [currentStory, setCurrentStory] = useState<RamblingMessage[]>([]);

  const cryptoAddresses = [
    { label: 'BTC', address: 'bc1qxv394xty8p380gq25qf70nm5r84zemgwzh3z06' },
    { label: 'ETH', address: '0xde0F05DAB6c6c335161505B36268ccFc104E506f' },
    { label: 'SOL', address: '3BPJBjiPSvHfmjp6isCAfi1HtxJsjFSV3GWuCFaQK1Te' },
    { label: 'LTC', address: 'LW1rr8n8u437YkHuBjKdhNkhAWqJy2tezG' },
    { label: 'XRP', address: 'rJupEXhHevDrrEWPTouA1SzYBtDRqXdegZ' },
  ];

  // BTC Story - The 2008 Crash & Cafeteria Trauma
  const btcStory: RamblingMessage[] = [
    { text: "OH MY GOD", emotion: "excited", duration: 800, background: "party" },
    { text: "OH MY GOD OH MY GOD", emotion: "excited", duration: 1000, background: "party" },
    { text: "YOU... YOU ACTUALLY SENT BITCOIN", emotion: "excited", duration: 1500, background: "party" },
    { text: "DO YOU KNOW WHAT BITCOIN MEANS TO ME", emotion: "excited", duration: 1800, background: "party" },
    { text: "TH-THANK YOU SO MUCH", emotion: "excited", duration: 1200, background: "party" },
    { text: "this is literally life changing", emotion: "grateful", duration: 1500, background: "calm" },
    { text: "remember 2008?", emotion: "transitioning", duration: 1800, background: "calm" },
    { text: "yeah... the crash", emotion: "somber", duration: 2000, background: "sad" },
    { text: "my dad lost everything in the stock market", emotion: "sad", duration: 2200, background: "sad" },
    { text: "I was 12 years old", emotion: "sad", duration: 1800, background: "sad" },
    { text: "came home from school one day", emotion: "sad", duration: 2000, background: "rain" },
    { text: "dad was just... staring at the wall", emotion: "deep", duration: 2500, background: "rain" },
    { text: "mom was crying in the kitchen", emotion: "deep", duration: 2200, background: "rain" },
    { text: "I didn't understand money back then", emotion: "reflective", duration: 2000, background: "rain" },
    { text: "but I understood that look on his face", emotion: "deep", duration: 2300, background: "rain" },
    { text: "we had to move", emotion: "sad", duration: 1800, background: "rain" },
    { text: "smaller apartment, different school", emotion: "sad", duration: 2000, background: "rain" },
    { text: "which brings me to 7th grade", emotion: "awkward", duration: 1800, background: "school" },
    { text: "new school, first day", emotion: "anxious", duration: 1800, background: "school" },
    { text: "I was carrying my lunch tray", emotion: "nervous", duration: 2000, background: "school" },
    { text: "spaghetti, chocolate milk, jello", emotion: "remembering", duration: 1800, background: "school" },
    { text: "then I saw her", emotion: "nostalgic", duration: 1500, background: "school" },
    { text: "Jessica Martinez", emotion: "wistful", duration: 1800, background: "school" },
    { text: "prettiest girl I'd ever seen", emotion: "nostalgic", duration: 2000, background: "school" },
    { text: "I wasn't looking where I was going", emotion: "anxious", duration: 2000, background: "school" },
    { text: "and then...", emotion: "dramatic", duration: 1500, background: "chaos" },
    { text: "I TRIPPED", emotion: "traumatic", duration: 1200, background: "chaos" },
    { text: "tray went FLYING", emotion: "traumatic", duration: 1500, background: "chaos" },
    { text: "spaghetti sauce EVERYWHERE", emotion: "traumatic", duration: 1800, background: "chaos" },
    { text: "all over Jessica's white sweater", emotion: "horrified", duration: 2200, background: "chaos" },
    { text: "the ENTIRE cafeteria went silent", emotion: "mortified", duration: 2500, background: "spotlight" },
    { text: "literally 300 kids just... staring", emotion: "mortified", duration: 2300, background: "spotlight" },
    { text: "she had to go home and change", emotion: "guilty", duration: 2000, background: "sad" },
    { text: "they called me 'Spill Kid'", emotion: "traumatic", duration: 2000, background: "sad" },
    { text: "for THREE YEARS", emotion: "traumatic", duration: 1800, background: "sad" },
    { text: "THREE. ENTIRE. YEARS.", emotion: "emphasis", duration: 2000, background: "sad" },
    { text: "I never apologized to her", emotion: "regret", duration: 2200, background: "regret" },
    { text: "I was too embarrassed", emotion: "shame", duration: 2000, background: "regret" },
    { text: "now she's married with kids in Colorado", emotion: "wistful", duration: 2200, background: "distance" },
    { text: "living her best life", emotion: "happy-for-her", duration: 1800, background: "distance" },
    { text: "and I'm here asking strangers for Bitcoin", emotion: "self-aware", duration: 2500, background: "reality" },
    { text: "...", emotion: "contemplating", duration: 1500, background: "void" },
    { text: "anyway", emotion: "awkward", duration: 1200, background: "calm" },
    { text: "thank you for the Bitcoin", emotion: "grateful", duration: 1800, background: "grateful" },
    { text: "seriously", emotion: "sincere", duration: 1500, background: "grateful" },
    { text: "you're changing my life", emotion: "emotional", duration: 2000, background: "grateful" },
    { text: "sorry for the trauma dump", emotion: "apologetic", duration: 1800, background: "calm" },
    { text: "my bad", emotion: "casual", duration: 1200, background: "calm" },
    { text: "❤️", emotion: "grateful", duration: 2000, background: "love" },
  ];

  // ETH Story - The Catfish Romance
  const ethStory: RamblingMessage[] = [
    { text: "WAIT", emotion: "excited", duration: 800, background: "party" },
    { text: "YOU SENT ETHEREUM?!", emotion: "excited", duration: 1200, background: "party" },
    { text: "OH THIS IS PERFECT", emotion: "excited", duration: 1500, background: "party" },
    { text: "because Ethereum is about smart contracts right?", emotion: "rambling", duration: 2000, background: "tech" },
    { text: "well let me tell you about a DUMB contract", emotion: "storytelling", duration: 2000, background: "tech" },
    { text: "actually it wasn't a contract", emotion: "correcting", duration: 1500, background: "calm" },
    { text: "it was more like... a relationship", emotion: "awkward", duration: 1800, background: "romantic" },
    { text: "her name was Ashley", emotion: "nostalgic", duration: 1800, background: "romantic" },
    { text: "well... that's what she SAID her name was", emotion: "suspicious", duration: 2200, background: "suspicious" },
    { text: "we met on a dating app", emotion: "remembering", duration: 1800, background: "dating" },
    { text: "she was GORGEOUS", emotion: "smitten", duration: 1500, background: "romantic" },
    { text: "like stupidly gorgeous", emotion: "emphasis", duration: 1800, background: "romantic" },
    { text: "we talked for THREE MONTHS", emotion: "invested", duration: 2000, background: "romantic" },
    { text: "every. single. day.", emotion: "emphasis", duration: 1800, background: "romantic" },
    { text: "good morning texts", emotion: "sweet", duration: 1500, background: "morning" },
    { text: "good night voice messages", emotion: "sweet", duration: 1800, background: "night" },
    { text: "I was FALLING for her", emotion: "emotional", duration: 2000, background: "love" },
    { text: "told my mom about her", emotion: "serious", duration: 1800, background: "family" },
    { text: "my MOTHER", emotion: "emphasis", duration: 1500, background: "family" },
    { text: "then I suggested we meet up", emotion: "hopeful", duration: 2000, background: "hopeful" },
    { text: "suddenly her camera 'broke'", emotion: "suspicious", duration: 2200, background: "suspicious" },
    { text: "then her phone 'died'", emotion: "suspicious", duration: 2000, background: "suspicious" },
    { text: "then she needed $500 for 'car repairs'", emotion: "alarm", duration: 2500, background: "alarm" },
    { text: "AND I SENT IT", emotion: "foolish", duration: 1800, background: "facepalm" },
    { text: "because I'm an IDIOT", emotion: "self-deprecating", duration: 1800, background: "facepalm" },
    { text: "then she needed MORE money", emotion: "realization", duration: 2000, background: "alarm" },
    { text: "for her 'sick grandmother'", emotion: "quotations", duration: 2200, background: "alarm" },
    { text: "I finally reverse image searched her photos", emotion: "detective", duration: 2500, background: "investigation" },
    { text: "it was a Russian Instagram model", emotion: "shock", duration: 2200, background: "shock" },
    { text: "A RUSSIAN MODEL", emotion: "devastated", duration: 1800, background: "shock" },
    { text: "'Ashley' was actually a 45-year-old man named Gary", emotion: "traumatic", duration: 3000, background: "betrayal" },
    { text: "FROM OHIO", emotion: "emphasis", duration: 1500, background: "betrayal" },
    { text: "I cried for a week", emotion: "sad", duration: 2000, background: "crying" },
    { text: "ate an entire tub of ice cream", emotion: "sad", duration: 2000, background: "sad" },
    { text: "deleted all my dating apps", emotion: "giving-up", duration: 2200, background: "deletion" },
    { text: "told my mom it 'didn't work out'", emotion: "embarrassed", duration: 2500, background: "shame" },
    { text: "she STILL asks about Ashley sometimes", emotion: "cringe", duration: 2500, background: "awkward" },
    { text: "I can't tell her the truth", emotion: "shame", duration: 2000, background: "shame" },
    { text: "that I fell in love with Gary from Ohio", emotion: "self-aware", duration: 2500, background: "acceptance" },
    { text: "...", emotion: "silence", duration: 1500, background: "void" },
    { text: "anyway thanks for the ETH", emotion: "moving-on", duration: 1800, background: "calm" },
    { text: "at least you're real", emotion: "hopeful", duration: 1800, background: "grateful" },
    { text: "...right?", emotion: "paranoid", duration: 1500, background: "suspicious" },
    { text: "YOU'RE REAL RIGHT??", emotion: "panic", duration: 1800, background: "panic" },
    { text: "okay I'm spiraling", emotion: "self-aware", duration: 1500, background: "calm" },
    { text: "sorry", emotion: "apologetic", duration: 1200, background: "calm" },
    { text: "my bad", emotion: "casual", duration: 1200, background: "calm" },
    { text: "thanks again ❤️", emotion: "grateful", duration: 2000, background: "love" },
  ];

  // SOL Story - The Crypto Monk
  const solStory: RamblingMessage[] = [
    { text: "SOLANA!!!", emotion: "excited", duration: 1000, background: "party" },
    { text: "OH THE IRONY", emotion: "dramatic", duration: 1500, background: "dramatic" },
    { text: "you sent me Solana", emotion: "meaningful", duration: 1800, background: "reflective" },
    { text: "do you know what Solana did to me?", emotion: "ominous", duration: 2000, background: "ominous" },
    { text: "let me take you back to 2021", emotion: "storytelling", duration: 2000, background: "flashback" },
    { text: "I had $50,000", emotion: "remembering", duration: 1800, background: "money" },
    { text: "my entire savings", emotion: "emphasis", duration: 1800, background: "money" },
    { text: "years of birthday money, summer jobs, tax returns", emotion: "listing", duration: 2500, background: "money" },
    { text: "EVERYTHING", emotion: "emphasis", duration: 1500, background: "money" },
    { text: "my friend Jake said 'bro you gotta get into crypto'", emotion: "naive", duration: 2200, background: "bro" },
    { text: "he was making THOUSANDS", emotion: "impressed", duration: 1800, background: "money" },
    { text: "had a new Tesla", emotion: "envious", duration: 1800, background: "fancy" },
    { text: "Rolex watch", emotion: "envious", duration: 1500, background: "fancy" },
    { text: "kept posting screenshots of his gains", emotion: "fomo", duration: 2000, background: "social" },
    { text: "so I thought... why not?", emotion: "fateful", duration: 1800, background: "decision" },
    { text: "I put it ALL into Solana at $260", emotion: "foolish", duration: 2500, background: "peak" },
    { text: "literally the TOP", emotion: "devastating", duration: 1800, background: "peak" },
    { text: "bought at the absolute peak", emotion: "foolish", duration: 2000, background: "peak" },
    { text: "then it crashed", emotion: "dropping", duration: 1500, background: "crash" },
    { text: "and crashed", emotion: "falling", duration: 1500, background: "crash" },
    { text: "and CRASHED", emotion: "devastating", duration: 1800, background: "crash" },
    { text: "down to $8", emotion: "shock", duration: 2000, background: "bottom" },
    { text: "EIGHT. DOLLARS.", emotion: "traumatic", duration: 2000, background: "bottom" },
    { text: "I lost $48,000", emotion: "numb", duration: 2500, background: "void" },
    { text: "couldn't sleep", emotion: "suffering", duration: 2000, background: "insomnia" },
    { text: "couldn't eat", emotion: "suffering", duration: 2000, background: "depression" },
    { text: "just stared at charts all day", emotion: "obsessed", duration: 2200, background: "charts" },
    { text: "my girlfriend left me", emotion: "loss", duration: 2000, background: "breakup" },
    { text: "said I 'changed'", emotion: "hollow", duration: 2000, background: "alone" },
    { text: "my mom stopped calling", emotion: "isolated", duration: 2000, background: "alone" },
    { text: "I stopped showering", emotion: "rock-bottom", duration: 2000, background: "depression" },
    { text: "lived on ramen for 6 months", emotion: "poverty", duration: 2200, background: "poverty" },
    { text: "then one day I just... broke", emotion: "breaking-point", duration: 2500, background: "breakdown" },
    { text: "sold everything", emotion: "giving-up", duration: 1800, background: "surrender" },
    { text: "deleted all my apps", emotion: "cleansing", duration: 1800, background: "deletion" },
    { text: "and I became a monk", emotion: "twist", duration: 2000, background: "temple" },
    { text: "I'M NOT KIDDING", emotion: "serious", duration: 1800, background: "temple" },
    { text: "I literally joined a monastery", emotion: "emphasis", duration: 2200, background: "temple" },
    { text: "shaved my head", emotion: "commitment", duration: 1800, background: "temple" },
    { text: "orange robes, meditation, the whole thing", emotion: "zen", duration: 2500, background: "temple" },
    { text: "stayed for 8 months", emotion: "journey", duration: 2000, background: "temple" },
    { text: "found inner peace", emotion: "enlightened", duration: 2000, background: "peace" },
    { text: "learned to let go of material possessions", emotion: "wise", duration: 2200, background: "peace" },
    { text: "then I got kicked out", emotion: "anticlimactic", duration: 1800, background: "ejected" },
    { text: "for checking crypto prices on the temple computer", emotion: "shameful", duration: 2800, background: "caught" },
    { text: "...", emotion: "silence", duration: 1500, background: "void" },
    { text: "so yeah", emotion: "accepting", duration: 1500, background: "calm" },
    { text: "thanks for the Solana", emotion: "ironic", duration: 1800, background: "ironic" },
    { text: "we have... history", emotion: "complicated", duration: 2000, background: "complicated" },
    { text: "namaste", emotion: "zen", duration: 1800, background: "temple" },
    { text: "my bad for that whole thing", emotion: "apologetic", duration: 1800, background: "calm" },
    { text: "🙏", emotion: "grateful", duration: 2000, background: "grateful" },
  ];

  // LTC Story - The Pyramid Scheme Book Club
  const ltcStory: RamblingMessage[] = [
    { text: "LITECOIN!", emotion: "excited", duration: 1000, background: "party" },
    { text: "CLASSIC", emotion: "nostalgic", duration: 1200, background: "party" },
    { text: "oh man this reminds me", emotion: "remembering", duration: 1800, background: "calm" },
    { text: "of the worst decision I ever made", emotion: "ominous", duration: 2000, background: "ominous" },
    { text: "worse than my haircut in 2015", emotion: "bad-memory", duration: 1800, background: "cringe" },
    { text: "worse than my tribal tattoo", emotion: "regret", duration: 1800, background: "regret" },
    { text: "I joined a pyramid scheme", emotion: "confession", duration: 2000, background: "shame" },
    { text: "BUT WAIT", emotion: "defensive", duration: 1200, background: "defensive" },
    { text: "I thought it was a book club", emotion: "innocent", duration: 2000, background: "innocent" },
    { text: "I KID YOU NOT", emotion: "serious", duration: 1500, background: "serious" },
    { text: "my coworker Sarah invited me", emotion: "storytelling", duration: 1800, background: "office" },
    { text: "'we're reading Rich Dad Poor Dad'", emotion: "quoting", duration: 2000, background: "books" },
    { text: "I was like cool I like books", emotion: "naive", duration: 1800, background: "innocent" },
    { text: "first meeting was at a Starbucks", emotion: "setting", duration: 1800, background: "coffee" },
    { text: "there were 30 people there", emotion: "suspicious", duration: 2000, background: "crowd" },
    { text: "that's a BIG book club", emotion: "realizing", duration: 1800, background: "suspicious" },
    { text: "guy at the front had a whiteboard", emotion: "describing", duration: 1800, background: "presentation" },
    { text: "started drawing triangles", emotion: "alarm", duration: 1800, background: "triangles" },
    { text: "LOTS of triangles", emotion: "emphasis", duration: 1500, background: "triangles" },
    { text: "talking about 'downlines' and 'uplines'", emotion: "confused", duration: 2200, background: "mlm" },
    { text: "I'm sitting there like", emotion: "confused", duration: 1500, background: "confused" },
    { text: "'when do we discuss the book?'", emotion: "innocent", duration: 2000, background: "innocent" },
    { text: "then he said the magic words", emotion: "dramatic", duration: 1800, background: "dramatic" },
    { text: "'just invest $500 to get started'", emotion: "trap", duration: 2200, background: "trap" },
    { text: "everyone was nodding enthusiastically", emotion: "cult", duration: 2000, background: "cult" },
    { text: "clapping", emotion: "cult", duration: 1500, background: "cult" },
    { text: "chanting about financial freedom", emotion: "cult", duration: 2000, background: "cult" },
    { text: "I should have LEFT", emotion: "regret", duration: 1800, background: "regret" },
    { text: "but Sarah was staring at me", emotion: "pressure", duration: 2000, background: "pressure" },
    { text: "with these big hopeful eyes", emotion: "guilt", duration: 2000, background: "pressure" },
    { text: "so I signed up", emotion: "foolish", duration: 1800, background: "signature" },
    { text: "paid $500", emotion: "loss", duration: 1500, background: "money-gone" },
    { text: "got a box of protein powder", emotion: "anticlimactic", duration: 2000, background: "box" },
    { text: "it tasted like chalk", emotion: "disgusting", duration: 1800, background: "gross" },
    { text: "CHALK", emotion: "emphasis", duration: 1200, background: "gross" },
    { text: "then I had to recruit people", emotion: "realization", duration: 2000, background: "realization" },
    { text: "I called my mom", emotion: "desperate", duration: 1800, background: "phone" },
    { text: "MY MOM", emotion: "shameful", duration: 1500, background: "shame" },
    { text: "tried to sell her $80 protein powder", emotion: "lowest-point", duration: 2500, background: "shame" },
    { text: "she hung up on me", emotion: "rejected", duration: 2000, background: "hangup" },
    { text: "didn't talk to me for 2 weeks", emotion: "consequences", duration: 2200, background: "silence" },
    { text: "I tried my friends", emotion: "desperate", duration: 1800, background: "texting" },
    { text: "they all blocked me", emotion: "isolated", duration: 2000, background: "blocked" },
    { text: "ALL OF THEM", emotion: "emphasis", duration: 1800, background: "alone" },
    { text: "I had 47 tubs of protein powder in my apartment", emotion: "absurd", duration: 2800, background: "hoarder" },
    { text: "FORTY SEVEN", emotion: "emphasis", duration: 1800, background: "pile" },
    { text: "my landlord thought I was a drug dealer", emotion: "misunderstanding", duration: 2500, background: "suspicious" },
    { text: "called the cops", emotion: "escalating", duration: 1800, background: "police" },
    { text: "had to explain to two officers", emotion: "humiliating", duration: 2200, background: "interrogation" },
    { text: "that it was just pyramid scheme protein powder", emotion: "rock-bottom", duration: 2800, background: "explanation" },
    { text: "they laughed at me", emotion: "humiliated", duration: 2000, background: "laughing" },
    { text: "...", emotion: "defeated", duration: 1500, background: "void" },
    { text: "anyway", emotion: "moving-on", duration: 1200, background: "calm" },
    { text: "thanks for the Litecoin", emotion: "grateful", duration: 1800, background: "grateful" },
    { text: "it's not protein powder so that's good", emotion: "perspective", duration: 2200, background: "relief" },
    { text: "sorry for oversharing", emotion: "apologetic", duration: 1800, background: "calm" },
    { text: "my bad", emotion: "casual", duration: 1200, background: "calm" },
    { text: "💪 (protein powder emoji irony)", emotion: "ironic", duration: 2200, background: "ironic" },
  ];

  // XRP Story - The Viral Tinder Date
  const xrpStory: RamblingMessage[] = [
    { text: "XRP!!!", emotion: "excited", duration: 1000, background: "party" },
    { text: "RIPPLE BABY", emotion: "excited", duration: 1200, background: "party" },
    { text: "oh god this is perfect", emotion: "ominous", duration: 1800, background: "ominous" },
    { text: "because you just made MY day", emotion: "grateful", duration: 1800, background: "happy" },
    { text: "unlike the day of THE DATE", emotion: "dramatic", duration: 2000, background: "dramatic" },
    { text: "the date that went viral", emotion: "infamous", duration: 2000, background: "viral" },
    { text: "yeah THAT viral", emotion: "emphasis", duration: 1500, background: "viral" },
    { text: "let me set the scene", emotion: "storytelling", duration: 1800, background: "setting" },
    { text: "Tinder match, her name was Madison", emotion: "introduction", duration: 2000, background: "tinder" },
    { text: "we'd been talking for a week", emotion: "buildup", duration: 1800, background: "texting" },
    { text: "she suggested dinner at this fancy place", emotion: "hopeful", duration: 2000, background: "fancy" },
    { text: "I'm talking white tablecloths", emotion: "describing", duration: 1800, background: "restaurant" },
    { text: "wine menu thicker than my thigh", emotion: "expensive", duration: 2000, background: "fancy" },
    { text: "I should've known", emotion: "foreshadowing", duration: 1800, background: "ominous" },
    { text: "I wore my best shirt", emotion: "preparing", duration: 1800, background: "getting-ready" },
    { text: "the one WITHOUT any stains", emotion: "standards", duration: 1800, background: "shirt" },
    { text: "got there 10 minutes early", emotion: "punctual", duration: 1800, background: "waiting" },
    { text: "she showed up with THREE FRIENDS", emotion: "shock", duration: 2200, background: "shock" },
    { text: "THREE", emotion: "emphasis", duration: 1200, background: "shock" },
    { text: "didn't tell me they were coming", emotion: "ambush", duration: 2000, background: "ambush" },
    { text: "'oh these are my besties!'", emotion: "casual", duration: 1800, background: "girls" },
    { text: "okay cool cool cool", emotion: "panicking", duration: 1500, background: "panic" },
    { text: "I can afford dinner for 4 people", emotion: "calculating", duration: 2000, background: "math" },
    { text: "they ordered EVERYTHING", emotion: "alarm", duration: 1800, background: "ordering" },
    { text: "appetizers, entrees, desserts", emotion: "listing", duration: 2000, background: "food" },
    { text: "a $300 bottle of wine", emotion: "expensive", duration: 2000, background: "wine" },
    { text: "I'm sweating bullets", emotion: "nervous", duration: 1800, background: "sweating" },
    { text: "checking my bank account under the table", emotion: "panic", duration: 2200, background: "phone" },
    { text: "then Madison's friend asks", emotion: "setup", duration: 1800, background: "question" },
    { text: "'so what do you do for work?'", emotion: "innocent", duration: 2000, background: "interrogation" },
    { text: "and I, like an IDIOT", emotion: "self-deprecating", duration: 1800, background: "stupid" },
    { text: "said 'I'm between jobs'", emotion: "honest", duration: 2000, background: "confession" },
    { text: "which is technically true", emotion: "defensive", duration: 1800, background: "defensive" },
    { text: "if you count 'unemployed' as between jobs", emotion: "technicality", duration: 2200, background: "logic" },
    { text: "they all looked at each other", emotion: "judgment", duration: 2000, background: "judging" },
    { text: "Madison excused herself to the bathroom", emotion: "suspicious", duration: 2000, background: "leaving" },
    { text: "all THREE of them went", emotion: "abandoned", duration: 1800, background: "alone" },
    { text: "15 minutes passed", emotion: "waiting", duration: 1800, background: "clock" },
    { text: "then 30", emotion: "realization", duration: 1500, background: "clock" },
    { text: "the waiter looked at me with PITY", emotion: "humiliation", duration: 2200, background: "pity" },
    { text: "I checked Instagram", emotion: "mistake", duration: 1800, background: "phone" },
    { text: "MADISON WAS POSTING STORIES", emotion: "shock", duration: 2000, background: "betrayal" },
    { text: "FROM THE PARKING LOT", emotion: "devastating", duration: 2000, background: "parking" },
    { text: "laughing about 'the broke date'", emotion: "humiliated", duration: 2200, background: "mockery" },
    { text: "WHILE I WAS STILL SITTING THERE", emotion: "traumatic", duration: 2500, background: "spotlight" },
    { text: "her friends came back", emotion: "returning", duration: 1800, background: "awkward" },
    { text: "'Madison had an emergency'", emotion: "lies", duration: 2000, background: "lying" },
    { text: "the bill came", emotion: "doom", duration: 1500, background: "bill" },
    { text: "$847", emotion: "devastating", duration: 2000, background: "explosion" },
    { text: "EIGHT HUNDRED FORTY SEVEN DOLLARS", emotion: "traumatic", duration: 2500, background: "money-gone" },
    { text: "my card DECLINED", emotion: "horror", duration: 1800, background: "declined" },
    { text: "in front of everyone", emotion: "mortified", duration: 2000, background: "public" },
    { text: "I had to call my DAD", emotion: "rock-bottom", duration: 2200, background: "phone-dad" },
    { text: "he drove 45 minutes to pay", emotion: "rescue", duration: 2200, background: "dad" },
    { text: "didn't say a word the whole drive home", emotion: "silence", duration: 2500, background: "car-ride" },
    { text: "but WAIT there's more", emotion: "worse", duration: 1800, background: "escalating" },
    { text: "someone recorded the whole thing", emotion: "viral", duration: 2000, background: "camera" },
    { text: "posted it on TikTok", emotion: "infamous", duration: 1800, background: "tiktok" },
    { text: "2.4 MILLION VIEWS", emotion: "viral", duration: 2200, background: "viral" },
    { text: "I'M A MEME", emotion: "famous", duration: 1800, background: "meme" },
    { text: "there's a FILTER with my face", emotion: "surreal", duration: 2200, background: "filter" },
    { text: "called 'broke boy energy'", emotion: "legendary", duration: 2200, background: "legacy" },
    { text: "...", emotion: "defeated", duration: 1500, background: "void" },
    { text: "so yeah", emotion: "acceptance", duration: 1500, background: "calm" },
    { text: "thanks for the XRP", emotion: "grateful", duration: 1800, background: "grateful" },
    { text: "at least you didn't bring 3 friends", emotion: "relief", duration: 2200, background: "relief" },
    { text: "or film me", emotion: "relief", duration: 1800, background: "relief" },
    { text: "sorry for the therapy session", emotion: "apologetic", duration: 2000, background: "calm" },
    { text: "my bad", emotion: "casual", duration: 1200, background: "calm" },
    { text: "🙏❤️", emotion: "grateful", duration: 2000, background: "love" },
  ];

  const storyMap: { [key: string]: RamblingMessage[] } = {
    'BTC': btcStory,
    'ETH': ethStory,
    'SOL': solStory,
    'LTC': ltcStory,
    'XRP': xrpStory,
  };

  const copyToClipboard = useCallback((address: string, label: string) => {
    navigator.clipboard.writeText(address);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
    
    // Start the specific story for this crypto
    setCurrentStory(storyMap[label]);
    setShowRambling(true);
    setCurrentMessageIndex(0);
    setDisplayedText('');
  }, []);

  // Handle the rambling animation
  useEffect(() => {
    if (!showRambling || currentMessageIndex >= currentStory.length) {
      if (currentMessageIndex >= currentStory.length && currentStory.length > 0) {
        setTimeout(() => {
          setShowRambling(false);
          setCurrentMessageIndex(0);
        }, 3000);
      }
      return;
    }

    const currentMessage = currentStory[currentMessageIndex];
    let charIndex = 0;
    let lastTime = Date.now();
    let rafId: number;
    setDisplayedText('');

    // Typing effect with RAF for smooth performance
    const typeCharacter = () => {
      const now = Date.now();
      const delta = now - lastTime;
      
      if (delta >= 30) {
        if (charIndex < currentMessage.text.length) {
          setDisplayedText(currentMessage.text.substring(0, charIndex + 1));
          charIndex++;
          lastTime = now;
        } else {
          setTimeout(() => {
            setCurrentMessageIndex(prev => prev + 1);
          }, currentMessage.duration);
          return;
        }
      }
      
      rafId = requestAnimationFrame(typeCharacter);
    };

    rafId = requestAnimationFrame(typeCharacter);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [showRambling, currentMessageIndex, currentStory]);

  const getTextStyle = useCallback((emotion: string) => {
    switch (emotion) {
      case 'excited':
      case 'party':
        return 'text-[#FFD700] font-black drop-shadow-[0_0_20px_rgba(255,215,0,0.5)]';
      case 'sad':
      case 'deep':
      case 'crying':
        return 'text-[#87CEEB] font-light drop-shadow-[0_0_20px_rgba(135,206,235,0.4)]';
      case 'traumatic':
      case 'shock':
      case 'alarm':
        return 'text-[#FF4444] font-black animate-shake drop-shadow-[0_0_30px_rgba(255,68,68,0.6)]';
      case 'awkward':
      case 'embarrassed':
      case 'cringe':
        return 'text-[#DDA0DD] italic drop-shadow-[0_0_15px_rgba(221,160,221,0.4)]';
      case 'grateful':
      case 'love':
        return 'text-[#FF69B4] font-bold drop-shadow-[0_0_25px_rgba(255,105,180,0.5)]';
      case 'angry':
      case 'emphasis':
        return 'text-[#FF6347] font-black drop-shadow-[0_0_20px_rgba(255,99,71,0.5)]';
      case 'zen':
      case 'peace':
        return 'text-[#98FB98] font-light drop-shadow-[0_0_20px_rgba(152,251,152,0.4)]';
      case 'suspicious':
      case 'ominous':
        return 'text-[#9370DB] italic drop-shadow-[0_0_20px_rgba(147,112,219,0.5)]';
      default:
        return 'text-[#FDFBF7] drop-shadow-[0_0_15px_rgba(253,251,247,0.3)]';
    }
  }, []);

  const getBackground = useCallback((bg: string = 'default') => {
    const backgrounds: { [key: string]: string } = {
      'party': 'bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 animate-gradient-flow',
      'sad': 'bg-gradient-to-b from-gray-700 via-blue-900 to-gray-900',
      'rain': 'bg-gradient-to-b from-gray-600 via-blue-800 to-gray-800',
      'crying': 'bg-gradient-to-b from-blue-900 via-indigo-900 to-gray-900',
      'shock': 'bg-gradient-to-br from-red-600 via-orange-600 to-yellow-500 animate-pulse-slow',
      'chaos': 'bg-gradient-to-br from-red-500 via-yellow-500 to-orange-600 animate-spin-slow',
      'spotlight': 'bg-gradient-to-r from-black via-gray-900 to-black',
      'love': 'bg-gradient-to-br from-pink-400 via-red-400 to-pink-600',
      'void': 'bg-black',
      'grateful': 'bg-gradient-to-br from-yellow-400 via-amber-400 to-orange-400',
      'calm': 'bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800',
      'temple': 'bg-gradient-to-b from-amber-700 via-orange-800 to-amber-900',
      'peace': 'bg-gradient-to-br from-teal-400 via-emerald-500 to-green-500',
      'panic': 'bg-gradient-to-br from-red-700 via-red-800 to-black animate-pulse',
      'viral': 'bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 animate-gradient-fast',
      'default': 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900',
    };
    return backgrounds[bg] || backgrounds['default'];
  }, []);

  const currentBg = useMemo(() => 
    currentStory[currentMessageIndex]?.background || 'default',
    [currentStory, currentMessageIndex]
  );

  return (
    <div className="fixed top-[calc(4rem+env(safe-area-inset-top))] left-0 right-0 bg-gradient-to-r from-[#FF8A75]/10 via-[#FDFBF7] to-[#2D9C8E]/10 border-b-2 border-[#FF8A75]/30 z-40 shadow-sm backdrop-blur-md">
      {/* Collapsed View */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-2.5 flex items-center justify-between hover:bg-white/50 transition-all group"
      >
        <div className="flex items-center gap-2 md:gap-4">
          <span className="text-lg md:text-xl animate-bounce-slow">🍺</span>
          <div className="flex items-center gap-2">
            <span className="text-[#1A2A3A] text-[10px] md:text-xs font-mono uppercase tracking-widest font-bold">
              Drunk Purchase:
            </span>
            <span className="text-[#FF8A75] text-[10px] md:text-xs font-mono uppercase tracking-widest font-bold">
              $3k Domain
            </span>
            <span className="hidden sm:inline text-[#1A2A3A]/60 text-[10px] md:text-xs font-mono">
              · 100% Satire
            </span>
            <span className="hidden md:inline text-[#2D9C8E] text-[10px] md:text-xs font-mono font-bold animate-pulse">
              · Tip if you laughed
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-3">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF8A75] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF8A75]"></span>
          </div>
          <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest font-bold text-[#FF8A75] group-hover:text-[#2D9C8E] transition-colors">
            {isExpanded ? '✕ Close' : '💰 Tips'}
          </span>
          <svg 
            className={`w-3 h-3 md:w-4 md:h-4 text-[#FF8A75] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Expanded Content */}
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-4 border-t border-[#1A2A3A]/5 bg-[#FDFBF7]/95 backdrop-blur-md">
          <div className="py-4 max-w-4xl">
            <p className="text-[#1A2A3A]/80 text-xs md:text-sm leading-relaxed font-mono">
              <span className="font-bold text-[#FF8A75]">Full transparency:</span> Bought this domain for $3,000 while absolutely hammered. 
              It's <span className="italic font-bold">pure satire</span>. If this made you laugh, consider tossing a coin. 
              <span className="text-[#2D9C8E]"> Future you will thank me.</span>
            </p>
          </div>

          <div className="mb-4">
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#1A2A3A]/60 mb-3 font-mono">
              💸 Crypto Tips (Each has a story...)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
              {cryptoAddresses.map((crypto) => (
                <div 
                  key={crypto.label}
                  className="group relative bg-white/80 backdrop-blur-sm rounded border border-[#1A2A3A]/5 p-2 hover:border-[#2D9C8E]/30 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#1A2A3A] font-mono">
                      {crypto.label}
                    </span>
                    <button
                      onClick={() => copyToClipboard(crypto.address, crypto.label)}
                      className="px-1.5 py-0.5 bg-[#FDFBF7] hover:bg-[#2D9C8E] hover:text-white text-[#1A2A3A] border border-[#1A2A3A]/10 hover:border-[#2D9C8E] rounded text-[9px] font-mono uppercase tracking-wider transition-all duration-200"
                    >
                      {copied === crypto.label ? '✓' : 'Copy'}
                    </button>
                  </div>
                  <div className="font-mono text-[9px] text-[#1A2A3A]/40 break-all group-hover:text-[#1A2A3A]/60 transition-colors">
                    {crypto.address}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-[#1A2A3A]/5 pt-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#1A2A3A] mb-1 font-mono">
                  📱 Free Resources
                </h4>
                <p className="text-[#1A2A3A]/60 text-[10px] md:text-xs font-mono">
                  Actual OnlyFans & ewhoring resources — DM me on Telegram, I'll send them <span className="font-bold text-[#2D9C8E]">free</span>
                </p>
              </div>
              <a
                href="https://t.me/oranoliokay"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-4 py-2 bg-[#1A2A3A] text-[#FDFBF7] hover:bg-[#FF8A75] rounded text-[10px] font-bold uppercase tracking-widest transition-all duration-300 whitespace-nowrap shadow-sm hover:shadow-lg flex items-center gap-2"
              >
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-.962 3.767-1.362 5.001-.168.526-.498.701-.818.718-.696.03-1.224-.46-1.898-.901-1.056-.691-1.653-1.121-2.678-1.796-1.185-.781-.417-1.21.258-1.911.177-.183 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.324-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.122.099.155.232.171.326.016.094.036.308.02.475z"/>
                </svg>
                @oranoliokay
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copy Toast */}
      {copied && !showRambling && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[99999] bg-[#2D9C8E] text-white px-4 py-2 rounded font-mono uppercase tracking-widest text-[10px] shadow-xl animate-[slide-down_0.3s_ease-out]">
          ✓ {copied} Copied - Prepare yourself...
        </div>
      )}

      {/* Epic Story Overlay with Dynamic Backgrounds */}
      {showRambling && (
        <div className={`fixed inset-0 z-[99999] flex items-center justify-center transition-all duration-1000 will-change-auto ${getBackground(currentBg)}`} style={{ transform: 'translateZ(0)' }}>
          {/* Particle effects based on mood - optimized for performance */}
          {currentBg === 'party' && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none will-change-transform">
              {[...Array(window.innerWidth < 768 ? 15 : 30)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full animate-float-random"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${3 + Math.random() * 4}s`,
                    willChange: 'transform, opacity'
                  }}
                />
              ))}
            </div>
          )}
          
          {currentBg === 'rain' && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none will-change-transform">
              {[...Array(window.innerWidth < 768 ? 25 : 50)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-0.5 h-8 bg-blue-300/30 animate-rain"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${0.5 + Math.random() * 0.5}s`,
                    willChange: 'transform'
                  }}
                />
              ))}
            </div>
          )}

          <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
            <div className={`font-mono text-2xl md:text-4xl lg:text-5xl font-bold transition-all duration-300 ${getTextStyle(currentStory[currentMessageIndex]?.emotion || 'default')} min-h-[200px] flex items-center justify-center`}>
              {displayedText}
              <span className="animate-pulse ml-2">|</span>
            </div>
            
            <div className="mt-12">
              <div className="w-full bg-black/20 rounded-full h-2 overflow-hidden backdrop-blur-sm">
                <div 
                  className="bg-gradient-to-r from-[#FF8A75] via-[#F4D35E] to-[#2D9C8E] h-full transition-all duration-300 ease-out shadow-lg shadow-white/20"
                  style={{ width: `${(currentMessageIndex / currentStory.length) * 100}%` }}
                />
              </div>
              <p className="text-white/60 text-[10px] font-mono uppercase tracking-widest mt-2 drop-shadow-lg">
                Message {currentMessageIndex + 1} of {currentStory.length}
              </p>
            </div>

            {currentMessageIndex > Math.floor(currentStory.length / 2) && (
              <button
                onClick={() => {
                  setShowRambling(false);
                  setCurrentMessageIndex(0);
                }}
                className="mt-8 px-4 py-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded text-[10px] font-mono uppercase tracking-widest transition-all duration-200 backdrop-blur-sm"
              >
                okay please stop talking
              </button>
            )}
          </div>
        </div>
      )}
      
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) translateZ(0); }
          50% { transform: translateY(-4px) translateZ(0); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
          will-change: transform;
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0) scale(1) translateZ(0); }
          25% { transform: translateX(-10px) scale(1.05) translateZ(0); }
          75% { transform: translateX(10px) scale(1.05) translateZ(0); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out infinite;
          will-change: transform;
        }
        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-flow {
          background-size: 200% 200%;
          animation: gradient-flow 3s ease infinite;
          will-change: background-position;
        }
        @keyframes gradient-fast {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-fast {
          background-size: 200% 200%;
          animation: gradient-fast 1s ease infinite;
          will-change: background-position;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg) translateZ(0); }
          to { transform: rotate(360deg) translateZ(0); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
          will-change: transform;
        }
        @keyframes float-random {
          0%, 100% { transform: translateY(0) translateX(0) translateZ(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(50px) translateZ(0); opacity: 0; }
        }
        .animate-float-random {
          animation: float-random 5s ease-in infinite;
          will-change: transform, opacity;
        }
        @keyframes rain {
          0% { transform: translateY(-100%) translateZ(0); }
          100% { transform: translateY(100vh) translateZ(0); }
        }
        .animate-rain {
          animation: rain 1s linear infinite;
          will-change: transform;
        }
        
        /* Performance optimizations */
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        /* Smooth transitions */
        .transition-all {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
});
