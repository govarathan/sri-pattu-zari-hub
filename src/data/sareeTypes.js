import { getImageUrl } from '../utils/imageUtils';

export const sareeTypesCatalog = [
  {
    id: "kanchipuram",
    titleKey: "kanchipuramTitle",
    descKey: "kanchipuramDesc",
    image: getImageUrl("images/kanchipuram_hero.png"),
    badge: "Most Valuable (தூய ஜரிகை)",
    estimatedPriceRange: "₹ 5,000 - ₹ 85,000+",
    purityInfo: "Contains 40% - 60% Silver & Gold Zari Thread",
    category: "kanchipuram",
    features: [
      "Pure Mulberry Silk Weave",
      "Authentic Heavy Silver & Gold Thread Borders",
      "Traditional Temple, Annapakshi & Peacock Motifs",
      "High Resale Valuation at Direct Mill Price"
    ]
  },
  {
    id: "kanchipuram_soft_silk",
    titleKey: "Kanchipuram Soft Silk (மென் பட்டு)",
    descKey: "Lightweight pure silk with tested silver zari weave",
    image: getImageUrl("images/kanchipuram.png"),
    badge: "Soft Silk (லேசான பட்டு)",
    estimatedPriceRange: "₹ 4,000 - ₹ 35,000",
    purityInfo: "Pure Mulberry Silk with Lightweight Zari",
    category: "kanchipuram",
    features: [
      "Lightweight Designer Soft Silk Weave",
      "Tested Silver Zari Border & Pallu",
      "Contemporary Color Combinations",
      "Instant Doorstep Valuation"
    ]
  },
  {
    id: "dharmavaram_arani",
    titleKey: "araniTitle",
    descKey: "araniDesc",
    image: getImageUrl("images/arani_saree.png"),
    badge: "High Demand (ஆரணி & தர்மவரம்)",
    estimatedPriceRange: "₹ 3,500 - ₹ 45,000",
    purityInfo: "Tested Silver / Combination Zari",
    category: "arani",
    features: [
      "Double Side Zari Borders",
      "Broad Rich Pallu Weave",
      "High Silk Density & Silver Thread Weight",
      "Same-Day Spot Cash Payment"
    ]
  },
  {
    id: "banarasi_silk",
    titleKey: "Banarasi Pure Silk & Zari (பனாரஸ் பட்டு)",
    descKey: "Heavy pure silk Banarasi brocade sarees with silver and gold zari jacquard weaves",
    image: getImageUrl("images/dharmavaram.png"),
    badge: "Brocade & Zari (ஜரிகை பனாரஸ்)",
    estimatedPriceRange: "₹ 6,000 - ₹ 75,000",
    purityInfo: "Real Silver Zari Jacquard Weave",
    category: "other_silk",
    features: [
      "Kadhwa & Tanchoi Weaving Technique",
      "Heavy Gold Plated Silver Wire Zari",
      "Royal Floral & Paisley Motifs",
      "High Payout by Metal Weight"
    ]
  },
  {
    id: "tissue_silk",
    titleKey: "Tissue Silk Saree (டிஷ்யூ பட்டு)",
    descKey: "Ultra-rich woven gold and silver tissue silk sarees crafted with pure metallic threads",
    image: getImageUrl("images/kanchipuram_hero.png"),
    badge: "Pure Zari Weave (டிஷ்யூ)",
    estimatedPriceRange: "₹ 8,000 - ₹ 90,000",
    purityInfo: "High Metal Ratio Tissue Warp & Weft",
    category: "kanchipuram",
    features: [
      "Full Metallic Zari Thread Surface",
      "Extreme Silver & Gold Content",
      "Highest Mill Market Payout per Saree",
      "Immediate Doorstep Cash"
    ]
  },
  {
    id: "bridal_heavy_silk",
    titleKey: "Bridal Heirloom Silk Saree (முகூர்த்த பட்டு)",
    descKey: "Heavy wedding Kanchipuram sarees weighing 800g to 1.5kg with rich pure gold zari",
    image: getImageUrl("images/kanchipuram_hero.png"),
    badge: "Mugurtha Pattu (முகூர்த்த பட்டு)",
    estimatedPriceRange: "₹ 12,000 - ₹ 1,20,000+",
    purityInfo: "60% Pure Silver + 24k Gold Dip Zari",
    category: "kanchipuram",
    features: [
      "Heavy Vintage Border & Grand Rich Pallu",
      "Double Warped 3-ply Pure Silk",
      "Highest Valuation Guarantee",
      "Free Doorstep Inspection"
    ]
  },
  {
    id: "gadwal_uppada",
    titleKey: "Gadwal & Uppada Jamdani (கட்வால் & உப்படா)",
    descKey: "Traditional Andhra handloom silk sarees woven with pure silver and gold zari motifs",
    image: getImageUrl("images/arani_saree.png"),
    badge: "Handloom Jamdani (கட்வால்)",
    estimatedPriceRange: "₹ 3,500 - ₹ 40,000",
    purityInfo: "Handloom Pure Silk & Pure Zari Motifs",
    category: "other_silk",
    features: [
      "Lightweight Body with Heavy Zari Border",
      "Jamdani Intricate Weaving Technique",
      "Tested Silver Thread Density",
      "Fast Doorstep Payment"
    ]
  },
  {
    id: "mysore_pure_silk",
    titleKey: "Mysore Crepe Silk (மைசூர் பட்டு)",
    descKey: "Authentic KSIC Mysore pure crepe silk sarees featuring 100% pure gold zari borders",
    image: getImageUrl("images/kanchipuram.png"),
    badge: "KSIC Quality (மைசூர் பட்டு)",
    estimatedPriceRange: "₹ 4,000 - ₹ 50,000",
    purityInfo: "Pure 0.65% Gold Plated Silver Zari",
    category: "other_silk",
    features: [
      "Smooth Crepe Silk Fabric",
      "Guaranteed Pure Gold Zari Edging",
      "High Resale Payout Value",
      "Same-Day Spot Cash"
    ]
  },
  {
    id: "veshti_angavastram",
    titleKey: "veshtiTitle",
    descKey: "veshtiDesc",
    image: getImageUrl("images/pattu_veshti.png"),
    badge: "Spot Cash (பட்டு வேஷ்டி)",
    estimatedPriceRange: "₹ 2,000 - ₹ 25,000",
    purityInfo: "Pure Gold & Silver Zari Borders",
    category: "veshti",
    features: [
      "Traditional Mayilkan / Korvai Silk Borders",
      "Wedding & Ceremonial Pure Silk Dhotis",
      "Angavastram / Silk Shawls",
      "Heavy Zari Border Weight Payout"
    ]
  },
  {
    id: "damaged_torn",
    titleKey: "damagedTitle",
    descKey: "damagedDesc",
    image: getImageUrl("images/torn_vintage.png"),
    badge: "Any Condition (கிழிந்த பட்டு)",
    estimatedPriceRange: "₹ 1,500 - ₹ 35,000",
    purityInfo: "Valued solely by Zari Silver/Gold Weight",
    category: "damaged",
    features: [
      "Stained, Strained, or Torn Sarees Accepted",
      "Burn-test or Touchstone Zari Silver Purity Check",
      "No Deductions for Fabric Wear & Tear",
      "Immediate Doorstep Valuation"
    ]
  },
  {
    id: "pattu_pavadai",
    titleKey: "pavadaiTitle",
    descKey: "pavadaiDesc",
    image: getImageUrl("images/pavadai_set.png"),
    badge: "Kids & Half Sarees (பட்டு பாவாடை)",
    estimatedPriceRange: "₹ 1,000 - ₹ 15,000",
    purityInfo: "Silk & Zari Blend Valuation",
    category: "pavadai",
    features: [
      "Kids Vintage Pattu Pavadai Sets",
      "Langa Voni / Half Saree Collections",
      "Pure Zari Border Strips",
      "Quick Doorstep Cash"
    ]
  },
  {
    id: "zari_extracted",
    titleKey: "zariThreadTitle",
    descKey: "zariThreadDesc",
    image: getImageUrl("images/zari_thread.png"),
    badge: "Raw Material (உருகிய ஜரிகை)",
    estimatedPriceRange: "₹ 4,000 - ₹ 1,20,000 / kg",
    purityInfo: "925 Pure Silver & Gold Plated Threads",
    category: "zari",
    features: [
      "Unstitched or Melted Zari Threads",
      "Silver Wire Coils & Metallic Thread",
      "Precision Digital Weight Scale Assessment",
      "Highest Mill Market Payout Guarantee"
    ]
  },
  {
    id: "raw_tussar_silk",
    titleKey: "Raw & Tussar Silk Saree (ரா பட்டு & டஸர்)",
    descKey: "Organic raw silk and wild Tussar sarees woven with silver or zari borders",
    image: getImageUrl("images/arani_saree.png"),
    badge: "Tussar & Raw Silk (டஸர்)",
    estimatedPriceRange: "₹ 2,500 - ₹ 20,000",
    purityInfo: "Natural Silk Density & Silver Zari",
    category: "other_silk",
    features: [
      "Textured Natural Silk Threads",
      "Temple & Tribal Motif Zari Borders",
      "Fair Market Price Assessment",
      "Doorstep Pickup"
    ]
  },
  {
    id: "organza_zari_silk",
    titleKey: "Organza Zari Silk (ஆர்கன்ஸா பட்டு)",
    descKey: "Sheer organza pure silk sarees accented with heavy zari pallus and borders",
    image: getImageUrl("images/kanchipuram.png"),
    badge: "Sheer Zari (ஆர்கன்ஸா)",
    estimatedPriceRange: "₹ 3,000 - ₹ 30,000",
    purityInfo: "Organza Silk with Real Zari Trims",
    category: "other_silk",
    features: [
      "Lightweight Designer Drape",
      "Cutwork & Embroidered Zari Pallu",
      "Instant Metal Test & Cash",
      "Fast Service"
    ]
  },
  {
    id: "vintage_old_border",
    titleKey: "Vintage Heavy Zari Pallu Cut Strips (பழைய ஜரிகை பார்டர்)",
    descKey: "Extracted or unstitched heavy zari borders and pallu cut pieces saved from old sarees",
    image: getImageUrl("images/zari_thread.png"),
    badge: "Border Strips (ஜரிகை கரை)",
    estimatedPriceRange: "₹ 2,000 - ₹ 45,000",
    purityInfo: "Pure Silver Weight Payout per Gram",
    category: "zari",
    features: [
      "Korvai Heavy Border Cutouts",
      "Melted & Unstitched Zari Ribbons",
      "Digital Scale Valuation",
      "Spot Cash Handover"
    ]
  }
];
