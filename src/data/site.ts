export const company = {
  name: "Shaheen Services",
  legalName: "Shaheen Services Pvt Ltd",
  tagline: "Corporate Facility Management & Specialized Property Services",
  phone: "+92 326 7775000",
  phoneHref: "tel:+923267775000",
  whatsapp: "https://wa.me/923267775000",
  whatsappPrefilled:
    "https://wa.me/923267775000?text=Hello%20Shaheen%20Services,%20I%20would%20like%20to%20request%20a%20free%20quote%20and%20consultation.",
  email: "info@shaheen-services.com",
  address: "C-14, Block 5, Gulshan E Iqbal, Karachi, Pakistan",
  hours: "Monday – Saturday: 8:00 AM – 8:00 PM · Emergency Support 24/7",
  source: "https://shaheen-services.com",
};

export type ServiceIconType =
  | "building"
  | "hard-hat"
  | "bug"
  | "wrench"
  | "fan"
  | "wind"
  | "armchair"
  | "sparkles"
  | "sofa"
  | "droplet"
  | "zap"
  | "sun"
  | "users";

export type ServiceGroup = {
  slug: string;
  route: string;
  name: string;
  short: string;
  intro: string;
  image: string;
  icon: ServiceIconType;
  items: { title: string; text: string }[];
  benefits: string[];
};

export const services: ServiceGroup[] = [
  {
    slug: "building-management",
    route: "/facility-management",
    name: "Building Management",
    short: "Complete facility oversight, preventive maintenance planning, and tenant operations.",
    intro:
      "End-to-end building administration and mechanical, electrical, and plumbing (MEP) supervision designed to sustain asset longevity, reduce operational expenditure, and maintain high standards for residential towers, commercial plazas, and corporate campuses.",
    image: "/services/service-building-mgmt.jpg",
    icon: "building",
    items: [
      {
        title: "Planned Preventive Maintenance (PPM)",
        text: "Structured annual schedules covering common area utilities, elevators, pumps, and fire systems.",
      },
      {
        title: "BMS & Control Monitoring",
        text: "Supervision of Building Management Systems for energy efficiency and fault detection.",
      },
      {
        title: "Tenant & Occupant Helpdesk",
        text: "Centralised logging, tracking, and resolution of daily maintenance requests.",
      },
      {
        title: "Vendor & AMC Management",
        text: "Oversight of external lift, generator, and security sub-contractors with KPI tracking.",
      },
      {
        title: "Health, Safety & Compliance",
        text: "Regular safety audits, fire drill coordination, and building code adherence.",
      },
    ],
    benefits: [
      "Single accountable operational partner for your entire facility",
      "Digital ticketing and monthly asset maintenance reports",
      "Rapid on-site emergency fault isolation",
      "Standardised operating procedures for staff and contractors",
    ],
  },
  {
    slug: "construction-and-maintenance",
    route: "/services#construction-and-maintenance",
    name: "Construction and Maintenance",
    short: "Civil works, structural repair, waterproofing, painting, and interior fit-outs.",
    intro:
      "Skilled civil engineering and maintenance teams delivering precision renovations, structural rehabilitations, plastering, premium masonry, and waterproofing for residential, commercial, and industrial structures.",
    image: "/services/service-construction.jpg",
    icon: "hard-hat",
    items: [
      {
        title: "Civil Modifications & Masonry",
        text: "Partition walls, concrete repairs, floor screeding, and structural enhancements.",
      },
      {
        title: "Roof & Basement Waterproofing",
        text: "Membrane applications, elastomeric coatings, and chemical grouting against water ingress.",
      },
      {
        title: "Commercial Painting & Finishing",
        text: "Surface preparation, weather-shield coatings, and high-specification interior finishes.",
      },
      {
        title: "Tile & Marble Restoration",
        text: "Precision tile setting, diamond grinding, polishing, and grout sealing.",
      },
      {
        title: "Structural Snagging & Remediation",
        text: "Detailed structural inspections and remedial civil repairs before property handover.",
      },
    ],
    benefits: [
      "Experienced civil foremen supervising on-site work directly",
      "Strict material grade controls conforming to architectural specs",
      "Clean site containment minimising disruption to building occupants",
      "Written itemised estimates with clear milestone delivery",
    ],
  },
  {
    slug: "pest-control",
    route: "/pest-control",
    name: "Pest Control",
    short: "Municipality-approved treatments that eliminate infestations and prevent return.",
    intro:
      "Integrated Pest Management (IPM) deploying odourless, low-toxicity, and eco-certified formulations for homes, warehouses, restaurants, and corporate offices — targeting pests at their source while keeping occupants safe.",
    image: "/services/service-pest.jpg",
    icon: "bug",
    items: [
      {
        title: "Cockroach Gel Baiting & Spray",
        text: "Targeted insect growth regulators and gel baits applied directly to harbourage zones.",
      },
      {
        title: "Bed Bug Thermal & Chemical Treatment",
        text: "Multi-visit systematic elimination eradicating eggs, nymphs, and adult pests.",
      },
      {
        title: "Rodent Baiting & Entry Proofing",
        text: "Tamper-resistant bait stations and physical exclusion sealing structural gaps.",
      },
      {
        title: "Mosquito & Flying Insect Management",
        text: "Larviciding and thermal fogging targeting drains, gardens, and perimeter walls.",
      },
    ],
    benefits: [
      "Approved, low-odour chemicals safe for children and pets",
      "Documented treatment reports detailing active ingredients and locations",
      "Discrete appointment scheduling with minimal workplace disruption",
      "Scheduled follow-up inspections to verify total eradication",
    ],
  },
  {
    slug: "termite-control",
    route: "/pest-control",
    name: "Termite Control",
    short: "Pre & post-construction termite proofing, chemical barriers, and foundation drilling.",
    intro:
      "Specialised subterranean termite inspection and deep foundation chemical barrier proofing. Precision drilling, pressurized foundation injection, and moisture mapping without property damage.",
    image: "/services/service-termite.jpg",
    icon: "bug",
    items: [
      {
        title: "Pre-Construction Soil Treatment",
        text: "High-concentration chemical soil saturation prior to foundation pouring.",
      },
      {
        title: "Post-Construction Perimeter Injection",
        text: "Sub-slab drilling and high-pressure chemical barrier creation around structural perimeters.",
      },
      {
        title: "Wood & Joinery Treatment",
        text: "Direct injection of active termiticides into infested timber door frames and baseboards.",
      },
      {
        title: "Acoustic & Moisture Detection",
        text: "Non-destructive scanning pinpointing concealed termite colonies inside hollow walls.",
      },
    ],
    benefits: [
      "Multi-year documented service warranty against subterranean termites",
      "Safe, low-odour non-repellent termiticides that transfer through colonies",
      "Neat hole plugging with colour-matched epoxy leaving floors spotless",
      "Regular inspection audits to ensure zero structural recurrence",
    ],
  },
  {
    slug: "repair-and-maintenance",
    route: "/services#repair-and-maintenance",
    name: "Repair and Maintenance",
    short: "Multi-trade corrective maintenance, plumbing overhauls, and fixture restoration.",
    intro:
      "Prompt, multi-skilled technician dispatch for plumbing leaks, sanitary repairs, carpentry adjustments, metalwork, and electrical snagging — keeping properties functional, neat, and trouble-free.",
    image: "/services/service-repair.jpg",
    icon: "wrench",
    items: [
      {
        title: "Plumbing & Sanitary Overhauls",
        text: "Concealed leak detection, pipe replacements, water heaters, and mixer faucet repairs.",
      },
      {
        title: "Carpentry & Door Hardware",
        text: "Hinges, mortise locks, door closers, cabinetry realignments, and architectural hardware.",
      },
      {
        title: "Fixture & Appliance Mounting",
        text: "Heavy shelving, TV brackets, lighting suspensions, and bathroom accessories.",
      },
      {
        title: "General Corrective Maintenance",
        text: "Fast turnaround repairs for cracked glass, broken trim, loose tiles, and ceiling grilles.",
      },
    ],
    benefits: [
      "Multi-skilled mobile technicians equipped with professional power tooling",
      "Transparent diagnostic pricing before any replacement parts are purchased",
      "Workmanship warranty covering all replaced components and joints",
      "Thorough cleanup and debris removal following every service call",
    ],
  },
  {
    slug: "hvac-services",
    route: "/ac-services",
    name: "HVAC Services",
    short: "Industrial chillers, AHUs, FCUs, VRF systems, and central ventilation plants.",
    intro:
      "Specialised commercial heating, ventilation, and air-conditioning solutions engineered for corporate towers, shopping malls, healthcare centres, and industrial facilities requiring uninterrupted climate control.",
    image: "/services/service-hvac.jpg",
    icon: "fan",
    items: [
      {
        title: "Commercial Chiller Servicing",
        text: "Condenser descaling, compressor diagnostics, refrigerant balancing, and oil analysis.",
      },
      {
        title: "Air Handling Units (AHU) & FCUs",
        text: "Belt alignment, motor rewinds, damper calibration, and deep coil cleaning.",
      },
      {
        title: "VRF/VRV System Commissioning",
        text: "Variable refrigerant flow circuit tracing, branch controller testing, and electronic expansions.",
      },
      {
        title: "Air Duct Robotic Cleaning",
        text: "Rotary brush extraction and sanitisation to remove trapped dust, spores, and allergens.",
      },
    ],
    benefits: [
      "Up to 25% decrease in plant power consumption through efficiency tuning",
      "OEM-standard diagnostic instruments and digital refrigerant manifolds",
      "Emergency chiller standby response with rapid component procurement",
      "Scheduled preventive maintenance contracts tailored to facility duty cycles",
    ],
  },
  {
    slug: "ac-repair-and-servicing",
    route: "/ac-services",
    name: "AC Repair and Servicing",
    short: "Split and inverter AC repairs, master servicing, jet wash, and gas recharging.",
    intro:
      "Professional residential and light commercial air conditioning repair, deep jet-wash servicing, capacitor diagnostics, PCB fixes, and refrigerant charging that restore maximum cooling power and reduce electrical bills.",
    image: "/services/service-ac.jpg",
    icon: "wind",
    items: [
      {
        title: "Pressure Jet Master Servicing",
        text: "High-pressure washer cleaning of indoor coils, blower fan, and outdoor condenser.",
      },
      {
        title: "Compressor & PCB Troubleshooting",
        text: "Accurate electrical circuit fault detection and replacement of failing electronic components.",
      },
      {
        title: "Precision Gas Charging (R410A / R32 / R22)",
        text: "Nitrogen pressure leak testing, vacuum evacuation, and weight-based OEM gas charging.",
      },
      {
        title: "Drain Line Unclogging & Waterproofing",
        text: "Clearing internal slime, condensation tray realignment, and overflow prevention.",
      },
    ],
    benefits: [
      "Immediate noticeable temperature drop and whisper-quiet airflow",
      "No mess promise: protective covers and water collection bags used on walls",
      "Accurate refrigerant leak pinpointing before refilling gas",
      "Documented amperages and thermal delta readings provided post-service",
    ],
  },
  {
    slug: "office-chair-repair",
    route: "/services#office-chair-repair",
    name: "Office Chair Repair",
    short: "Ergonomic chair restoration, hydraulic gas lift replacement, mechanism fixes.",
    intro:
      "Cost-effective commercial furniture maintenance repairing high-end ergonomic desk chairs, executive seating, and task stools — extending asset lifecycles at a fraction of replacement costs.",
    image: "/services/service-chair.jpg",
    icon: "armchair",
    items: [
      {
        title: "Hydraulic Gas Lift Replacement",
        text: "Installation of heavy-duty Class-4 pneumatic cylinders solving sinking chairs.",
      },
      {
        title: "Tilt & Recline Mechanism Repairs",
        text: "Synchronous tilt mechanism recalibration, tension knob fixes, and locking pin repair.",
      },
      {
        title: "Castor Wheel & Base Upgrades",
        text: "Smooth PU nylon roller wheels, nylon five-star bases, and reinforced metal foundations.",
      },
      {
        title: "Armrest & Cushion Reupholstery",
        text: "Replacement 3D/4D armrest pads and high-density foam re-padding.",
      },
    ],
    benefits: [
      "Save up to 70% compared to purchasing brand-new corporate seating",
      "On-site repair service available for batches of 5+ chairs in commercial offices",
      "High-durability BIFMA-rated replacement hardware and pneumatic pistons",
      "Quick turnaround keeping staff comfortable and ergonomically supported",
    ],
  },
  {
    slug: "deep-cleaning",
    route: "/cleaning",
    name: "Deep Cleaning",
    short: "Intensive sanitisation for newly constructed, renovated, or occupied properties.",
    intro:
      "Comprehensive room-by-room detailing covering tile grout, window panes, false ceilings, cabinetry interiors, kitchen degreasing, and sanitary descaling with commercial extraction machinery.",
    image: "/services/service-cleaning.jpg",
    icon: "sparkles",
    items: [
      {
        title: "Post-Construction & Move-In Detailing",
        text: "Removal of cement splatter, paint flecks, fine silica dust, and adhesive residues.",
      },
      {
        title: "Kitchen Heavy Degreasing",
        text: "Disassembly and steam cleaning of exhaust hoods, filters, cooktops, and splashbacks.",
      },
      {
        title: "Bathroom Descaling & Sanitisation",
        text: "Hard-water scale removal from glass shower cubicles, sanitary fixtures, and tiles.",
      },
      {
        title: "Floor Buffing & Rotary Scrubbing",
        text: "Single-disc industrial scrubbers scrubbing tiled and polished floor surfaces.",
      },
    ],
    benefits: [
      "Trained, uniformed, and background-checked cleaning specialists",
      "Hospital-grade disinfectant solutions safe for human skin and pets",
      "Complete equipment brought to site: vacuums, steamers, ladders, and scrubbers",
      "Supervisor inspection sign-off checklist guaranteed before departure",
    ],
  },
  {
    slug: "sofa-and-carpet-cleaning",
    route: "/cleaning",
    name: "Sofa and Carpet Cleaning",
    short: "Hot water extraction and fabric shampooing for rugs, carpets, and upholstery.",
    intro:
      "Professional injection-extraction cleaning that dissolves embedded dirt, allergens, food stains, and pet odours from fabric lounges, dining chairs, imported carpets, and wall-to-wall office carpeting.",
    image: "/services/service-carpet.jpg",
    icon: "sofa",
    items: [
      {
        title: "Upholstery Deep Extraction",
        text: "Fabric-safe PH-neutral shampoo injection and vacuum extraction lifting trapped soils.",
      },
      {
        title: "Carpet Pile Revival & Stain Removal",
        text: "Pre-spot treatment for coffee, grease, and ink followed by deep rotary agitation.",
      },
      {
        title: "Leather Furniture Conditioning",
        text: "Gentle manual leather cleansing and moisturising balm restoring suppleness.",
      },
      {
        title: "Mattress Sanitisation",
        text: "High-temperature steam extraction eradicating dust mites and allergens.",
      },
    ],
    benefits: [
      "Rapid dry times within 2 to 4 hours with high-velocity air movers",
      "Zero colour fading or fabric shrinkage — tested on unobtrusive patch first",
      "Noticeable elimination of trapped stale smells and allergens",
      "On-site service in homes and corporate boardrooms",
    ],
  },
  {
    slug: "water-tank-cleaning",
    route: "/services#water-tank-cleaning",
    name: "Water Tank Cleaning",
    short: "Underground and overhead water storage tank chlorination and jet washing.",
    intro:
      "Hygienic municipal-standard water tank draining, high-pressure washing, sludge vacuuming, and chlorine sanitisation that guarantees pure, clean domestic and commercial water supplies.",
    image: "/services/service-tank.jpg",
    icon: "droplet",
    items: [
      {
        title: "Underground RCC Tank Cleaning",
        text: "Confined-space entry with safety ventilation, mud dewatering, and wall scrubbing.",
      },
      {
        title: "Overhead Polyethylene / Fibreglass Tanks",
        text: "Sediment removal, food-grade disinfectant scrubbing, and pressure rinse.",
      },
      {
        title: "Sediment & Sludge Vacuuming",
        text: "Submersible slurry pumps expelling dense accumulated mud and rust particles.",
      },
      {
        title: "UV / Chlorine Disinfection Protocol",
        text: "Systematic sanitisation eliminating algae, bacterial biofilms, and pathogens.",
      },
    ],
    benefits: [
      "Certified confined-space safety protocols and oxygen level monitoring",
      "Clear, odour-free water delivered across your plumbing network",
      "Before-and-after digital photographic report included",
      "Annual scheduled cleaning reminders so tanks never accumulate toxic sediment",
    ],
  },
  {
    slug: "electrical-services",
    route: "/electrical",
    name: "Electrical Services",
    short: "Licensed power distribution, DB dressing, load balancing, and emergency repairs.",
    intro:
      "Certified electrician services adhering to national safety standards — from troubleshooting tripped circuit breakers to complete distribution board dressing, grounding, and commercial power fit-outs.",
    image: "/services/service-electrical.jpg",
    icon: "zap",
    items: [
      {
        title: "Distribution Board (DB) Dressing",
        text: "Circuit breaker labelling, neat cable trunking, and phase load balancing.",
      },
      {
        title: "Short Circuit & Breaker Diagnostics",
        text: "Insulation resistance testing, megger readings, and rapid fault isolation.",
      },
      {
        title: "Commercial LED Lighting Design",
        text: "Energy-saving luminaire retrofits, track lights, emergency escape illumination.",
      },
      {
        title: "Earthing & Surge Protection Systems",
        text: "Earth pit testing, copper rod driving, and transient voltage protection.",
      },
    ],
    benefits: [
      "Fully certified electricians adhering strictly to IEEE wiring standards",
      "Infrared thermographic inspections identifying hot connections before fires",
      "24/7 emergency dispatch for power outages and burning smells",
      "Documented safety certificates provided upon major installations",
    ],
  },
  {
    slug: "solar-solutions",
    route: "/solar",
    name: "Solar Solutions",
    short: "On-grid and hybrid solar PV installations, inverter servicing, and panel wash.",
    intro:
      "Turnkey solar photovoltaic engineering for villas, corporate rooftops, and commercial warehouses — reducing reliance on the grid, securing power during outages, and maximizing generation yield.",
    image: "/services/service-solar.jpg",
    icon: "sun",
    items: [
      {
        title: "On-Grid & Hybrid Solar EPC",
        text: "Tier-1 solar panels, hybrid inverters, and lithium-ion battery storage integration.",
      },
      {
        title: "Rooftop Mounting & Galvanised Framing",
        text: "High-wind load-certified aluminium and galvanised steel structures.",
      },
      {
        title: "Net-Metering Documentation & Approvals",
        text: "Preparation of electrical single-line diagrams (SLD) and utility approvals.",
      },
      {
        title: "Automated & Manual Panel Washing",
        text: "Deionised water jet cleaning removing heavy atmospheric dust to recover 15-25% yield.",
      },
    ],
    benefits: [
      "Direct reduction of commercial and residential electricity expenditures",
      "Real-time mobile app energy monitoring showing daily kWh output",
      "Certified DC isolators and surge arrestors protecting property assets",
      "Annual preventative electrical audits of inverters and string connections",
    ],
  },
  {
    slug: "professional-hiring-services",
    route: "/services#professional-hiring-services",
    name: "Professional Hiring Services",
    short: "Vetted technical staffing, certified trade manpower, and facility staffing.",
    intro:
      "Contract and permanent placement of thoroughly vetted, trade-tested technicians, electricians, plumbers, HVAC supervisors, and facility cleaning personnel for enterprises requiring dependable workforce capacity.",
    image: "/services/service-staffing.jpg",
    icon: "users",
    items: [
      {
        title: "Dedicated On-Site Technicians",
        text: "Resident maintenance engineers stationed full-time at your corporate premises.",
      },
      {
        title: "Supervised Cleaning Crews",
        text: "Uniformed, managed housekeeping teams with shift managers and supplies included.",
      },
      {
        title: "Short-Term Project Manpower",
        text: "Certified MEP technicians and civil trades for shutdown or fit-out projects.",
      },
      {
        title: "Background & Police Verification",
        text: "Rigorous vetting, ID checks, and technical competence testing before deployment.",
      },
    ],
    benefits: [
      "Zero recruitment headaches, HR overheads, or payroll administration",
      "Immediate replacement guarantee in case of leave or technician illness",
      "Uniformed personnel with valid safety certifications and professional conduct",
      "Scalable contracts from a single resident handyman to a 50-person crew",
    ],
  },
];

export const stats = [
  { value: 13, suffix: " Divisions", label: "Specialist Capabilities" },
  { value: 100, suffix: "%", label: "In-House Vetted Staff" },
  { value: 24, suffix: "/7", label: "Dedicated Coordination" },
  { value: 4, suffix: "h", label: "Emergency Response SLA" },
];

export const whyChooseUs = [
  {
    title: "13 In-House Divisions",
    text: "From HVAC and solar to deep cleaning and pest control, all work is executed by our own trained crews — never outsourced to unaccountable middlemen.",
  },
  {
    title: "Itemised Written Estimates",
    text: "You receive transparent scopes with zero hidden surprises. Every job is scoped on-site and quoted in writing before work begins.",
  },
  {
    title: "24/7 Helpline & Dispatch",
    text: "Immediate response for critical emergencies. Dedicated coordination officers answer live calls around the clock.",
  },
  {
    title: "Commercial-Grade Equipment",
    text: "We equip our teams with modern tooling, pressure washers, digital refrigerant manifolds, and hospital-grade sanitising solutions.",
  },
  {
    title: "Eco-Safe & Certified Formulations",
    text: "Low-toxicity, approved pest management products and biodegradable cleaning formulations safe for children, pets, and food prep areas.",
  },
  {
    title: "Documented Sign-Off Quality",
    text: "Every service visit includes an on-site supervisor checklist and digital before-and-after photographic documentation.",
  },
];

export const operationalStandards = [
  {
    title: "Professional Service Delivery",
    code: "01",
    short:
      "Certified in-house technicians, calibrated commercial tooling, and standardized uniforms.",
    description:
      "All assignments are executed strictly by vetted Shaheen technicians in official uniform with commercial equipment. We never subcontract to unverified third parties.",
  },
  {
    title: "Safety & Responsibility",
    code: "02",
    short: "Strict PPE adherence, chemical safety compliance, and property containment protocols.",
    description:
      "Full adherence to MEP safety codes, insulated tooling, eco-certified low-toxicity pest formulations, and non-destructive inspection methodologies.",
  },
  {
    title: "Quality Control",
    code: "03",
    short:
      "Digital supervisor checklists and verified before-and-after photographic documentation.",
    description:
      "Multi-point quality sign-offs ensure every air conditioner, deep cleaning area, or electrical panel meets engineering specifications before client handover.",
  },
  {
    title: "Clear Communication",
    code: "04",
    short: "Itemised transparent written estimates and proactive milestone coordination.",
    description:
      "Transparent bill of materials with zero hidden costs. Clients receive written scopes, timeline estimates, and live job progress tracking.",
  },
  {
    title: "Reliable Scheduling",
    code: "05",
    short: "Punctual appointment windows with dedicated 24/7 coordination and rapid SLA response.",
    description:
      "Guaranteed arrival intervals for scheduled appointments, paired with a rapid 4-hour emergency attendance SLA across primary service hubs.",
  },
  {
    title: "Customer-Focused Support",
    code: "06",
    short: "Direct phone and WhatsApp helpline with comprehensive post-service follow-up.",
    description:
      "Direct communication channel (+92 326 7775000), workmanship warranties on completed jobs, and proactive post-service satisfaction reviews.",
  },
];

export const consultationProcessSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    short: "Direct Intake & Logging",
    text: "Contact our team via phone or WhatsApp (+92 326 7775000). A service coordinator logs your requirements and determines technical priorities within minutes.",
  },
  {
    step: "02",
    title: "Requirement Assessment",
    short: "On-Site Survey",
    text: "A technical supervisor inspects your premises, assesses root causes with digital testers, and scopes exact equipment and labor specifications.",
  },
  {
    step: "03",
    title: "Service Planning",
    short: "Written Estimate",
    text: "You receive a transparent, itemised proposal with detailed material grades, fixed pricing, and milestone schedules. Work begins only upon approval.",
  },
  {
    step: "04",
    title: "Professional Execution",
    short: "Certified Deployment",
    text: "Uniformed Shaheen technicians arrive with commercial machinery, safety PPE, and protective floor covers to execute the work cleanly and efficiently.",
  },
  {
    step: "05",
    title: "Quality Review",
    short: "Supervisor Sign-Off",
    text: "The supervisor conducts rigorous testing (thermal delta, pressure check, or hygiene audit) and captures high-resolution photographic proof of completion.",
  },
  {
    step: "06",
    title: "Customer Follow-Up",
    short: "Warranty & Support",
    text: "Handover is finalized with written documentation, component warranty activation, and proactive follow-up from our coordination desk.",
  },
];

export const galleryImages = [
  {
    id: 1,
    number: "01",
    title: "Precision Electrical & MEP Diagnostics",
    subtitle: "Switchboard & Distribution Calibration",
    description:
      "Certified Shaheen technician performing precision circuit calibration, neat conduit dressing, and safety switch testing with insulated instruments.",
    image: "/gallery/1.png",
    alt: "Shaheen Services technician in red polo shirt repairing electrical switchboard",
    tag: "MEP & Electrical",
  },
  {
    id: 2,
    number: "02",
    title: "Rapid Mobile Response & Tooling Fleet",
    subtitle: "24/7 Field Maintenance Readiness",
    description:
      "Rapid dispatch technician equipped with industrial heavy-duty tooling in front of the official Shaheen Services mobile maintenance fleet.",
    image: "/gallery/2.png",
    alt: "Shaheen Services technician with heavy-duty toolbox walking past company van",
    tag: "Field Operations",
  },
  {
    id: 3,
    number: "03",
    title: "Indoor AC Master Servicing & Commissioning",
    subtitle: "Digital Diagnostics & Deep Coil Jet Wash",
    description:
      "Multi-specialist Shaheen team conducting precision indoor split AC diagnostic inspection, tablet-assisted sensor logging, and electrical servicing.",
    image: "/gallery/3.png",
    alt: "Three Shaheen Services technicians servicing indoor split AC unit with digital tablet and screwdrivers",
    tag: "HVAC & AC Care",
  },
  {
    id: 4,
    number: "04",
    title: "Multi-Disciplinary Engineering Operations Fleet",
    subtitle: "100% In-House Uniformed Specialists",
    description:
      "Our full corps of certified HVAC engineers, deep cleaners, pest technicians, and electricians gathered in official Shaheen Services uniform.",
    image: "/gallery/4.png",
    alt: "Full team of Shaheen Services technicians in uniform kneeling and standing in front of company van and building",
    tag: "Enterprise Crew",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    text: "Contact us via phone, WhatsApp (+92 326 7775000), or our website enquiry form. A service coordinator reviews your exact requirement within minutes.",
  },
  {
    step: "02",
    title: "On-Site Survey",
    text: "A technical supervisor inspects your premises, assesses root causes, and defines the precise technical scope needed.",
  },
  {
    step: "03",
    title: "Written Quotation",
    text: "You receive a transparent, itemised proposal with detailed bill of materials and realistic timelines. Work begins only upon your sign-off.",
  },
  {
    step: "04",
    title: "Certified Execution",
    text: "Uniformed technicians execute the work cleanly and safely, followed by quality checklist sign-off and documented handover.",
  },
];

export const verifiedReviews = [
  {
    client: "Corporate Facility Manager",
    property: "Commercial Office Plaza",
    service: "HVAC & Electrical Maintenance AMC",
    feedback:
      "Shaheen Services handles our central HVAC and power distribution. Their preventive schedules cut our seasonal breakdowns to zero, and their reporting provides full transparency.",
    rating: 5,
    verified: true,
  },
  {
    client: "Property Owner",
    property: "Residential Villa",
    service: "Deep Cleaning & Water Tank Sanitisation",
    feedback:
      "Booked move-in cleaning and water tank sanitisation. The team brought industrial jet washers and vacuums. The before-and-after difference was remarkable and completed on schedule.",
    rating: 5,
    verified: true,
  },
  {
    client: "Operations Supervisor",
    property: "Logistics Warehouse",
    service: "Pest Management & Termite Barrier",
    feedback:
      "Low-odour pest control treatment carried out across our storage bays without halting logistics operations. Documented, thorough, and highly professional.",
    rating: 5,
    verified: true,
  },
  {
    client: "Branch Operations Head",
    property: "Commercial Bank Branch",
    service: "AC Servicing & Chair Repairs",
    feedback:
      "Repaired 28 ergonomic office task chairs on a Saturday and serviced split units. They saved our branch substantial capital compared to buying new furniture.",
    rating: 5,
    verified: true,
  },
];

export const projects = [
  {
    title: "Central VRF Air Conditioning Retrofit",
    category: "HVAC Services",
    location: "Corporate Plaza",
    text: "Multi-zone VRF system replacement with digital diagnostic balancing and smart thermostats.",
    image: "/services/service-hvac.jpg",
  },
  {
    title: "High-Rise Commercial Deep Detailing",
    category: "Deep Cleaning",
    location: "Financial District",
    text: "Post-renovation detailing covering 14,000 sq ft of marble floor buffing, glass, and ducting.",
    image: "/services/service-cleaning.jpg",
  },
  {
    title: "Preventative Soil Termite Barrier",
    category: "Pest Control",
    location: "Residential Complex",
    text: "Comprehensive sub-soil chemical perimeter barrier installed across 18 residential units.",
    image: "/services/service-pest.jpg",
  },
  {
    title: "Commercial Distribution Board Overhaul",
    category: "Electrical",
    location: "Manufacturing Unit",
    text: "Complete cable dressing, thermal imaging inspection, and dynamic load balancing.",
    image: "/services/service-electrical.jpg",
  },
  {
    title: "Commercial Rooftop Solar Array (75 kW)",
    category: "Solar Solutions",
    location: "Industrial Facility",
    text: "High-efficiency Tier-1 PV installation with net-metering synchronization and monitoring.",
    image: "/services/service-solar.jpg",
  },
  {
    title: "Underground RCC Water Tank Chlorination",
    category: "Water Tank Cleaning",
    location: "Corporate Tower",
    text: "Dual 40,000-gallon underground reservoir de-sludging, high-pressure jetting, and sanitisation.",
    image: "/services/service-tank.jpg",
  },
];

export const faqs = [
  {
    q: "How fast can your technicians respond to an emergency?",
    a: "Our emergency coordination desk is available 24/7 at +92 326 7775000. Critical electrical, water leakage, or cooling breakdowns are targeted for rapid technician attendance within 4 hours.",
  },
  {
    q: "Do you offer free on-site inspections?",
    a: "Yes. We offer free on-site surveys for corporate and residential inquiries to properly scope the work and provide an accurate, fixed written estimate before you commit.",
  },
  {
    q: "Are your pest control chemicals safe for families and food premises?",
    a: "We exclusively utilise approved, low-toxicity, low-odour formulations. Our supervisors brief occupants regarding safe re-entry windows and provide material data sheets upon request.",
  },
  {
    q: "What is included in an Annual Maintenance Contract (AMC)?",
    a: "AMCs provide scheduled preventive visits (AC, electrical, plumbing, pest checks), priority 24/7 breakdown call-outs, discounted spare parts, and dedicated account management under one agreement.",
  },
  {
    q: "How can I book a service right away?",
    a: "You can book directly by calling +92 326 7775000, messaging our WhatsApp line at https://wa.me/923267775000, or submitting our online request form.",
  },
  {
    q: "Do you provide corporate manpower and technical staffing?",
    a: "Yes. Our Professional Hiring division supplies verified, trade-tested resident maintenance technicians, MEP supervisors, and office cleaning crews on flexible monthly or annual contracts.",
  },
];

export const posts = [
  {
    slug: "ac-maintenance-checklist",
    title: "The Comprehensive AC Maintenance Checklist Every Property Needs",
    excerpt:
      "What a proper technical service visit should cover — and the common shortcuts that reduce cooling efficiency and inflate energy bills.",
    category: "HVAC & Cooling",
    date: "12 Oct 2026",
    read: "6 min read",
  },
  {
    slug: "water-tank-sanitisation",
    title: "Why Regular Water Tank Cleaning Is Essential for Public Health",
    excerpt:
      "Sediment buildup, bacterial biofilms, and municipal compliance standards for domestic and commercial water reservoirs.",
    category: "Water Hygiene",
    date: "28 Sep 2026",
    read: "5 min read",
  },
  {
    slug: "choosing-an-amc",
    title: "How to Choose an Annual Maintenance Contract That Delivers Real ROI",
    excerpt:
      "Response SLAs, preventative schedules, and transparent reporting: what separates an accountable AMC from basic call-out services.",
    category: "Facility Management",
    date: "15 Sep 2026",
    read: "7 min read",
  },
  {
    slug: "termite-prevention-guide",
    title: "Termite Prevention: A Practical Guide for Property Owners",
    excerpt:
      "Early warning signs, pre/post-construction chemical barriers, and how to verify eco-safe pesticide standards.",
    category: "Pest Management",
    date: "02 Sep 2026",
    read: "4 min read",
  },
  {
    slug: "solar-yield-desert",
    title: "Maximizing Solar PV Yield Through Scheduled Cleaning",
    excerpt:
      "Heavy dust soiling can decrease photovoltaic output by up to 25%. Here is the optimal cleaning cadence for regional conditions.",
    category: "Solar Solutions",
    date: "18 Aug 2026",
    read: "5 min read",
  },
  {
    slug: "office-chair-repair-economics",
    title: "The Financial Case for Commercial Office Chair Repair",
    excerpt:
      "Replacing pneumatic cylinders and mechanisms can restore high-end ergonomic chairs at a fraction of replacement expenditure.",
    category: "Maintenance",
    date: "05 Aug 2026",
    read: "4 min read",
  },
];
