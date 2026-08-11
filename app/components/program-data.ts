export type Program = {
  slug: string; name: string; navName: string; eyebrow: string; headline: string; intro: string; image: string; imageAlt: string;
  target: string; investment: string; investmentNote: string; sdg: string; focus: { title: string; copy: string }[];
  outcomes: string[]; delivery: string[]; evidence?: { title: string; copy: string; image: string; href: string };
};

export const programs: Program[] = [
  {
    slug: "women", name: "Women’s Empowerment", navName: "Women", eyebrow: "Economic agency and leadership", headline: "When women can earn, decide and lead, whole communities move forward.",
    intro: "We combine practical livelihood skills, savings groups, health advocacy and mentorship so women can build secure incomes and shape decisions that affect their lives.", image: "images/women.webp", imageAlt: "A woman outside her home in Uganda",
    target: "100 women", investment: "UGX 16.5M", investmentNote: "FY 2026/27 programme line", sdg: "SDG 5 · Gender Equality",
    focus: [
      { title: "Livelihood skills", copy: "Tailoring, soap-making and enterprise coaching linked to real local opportunities." },
      { title: "Savings and finance", copy: "Village Savings and Loan Associations that help women save, borrow and invest together." },
      { title: "Health and rights", copy: "Reproductive health information, psychosocial support and advocacy against gender-based violence." },
      { title: "Leadership", copy: "Mentorship and community participation that strengthen confidence and decision-making." },
    ],
    outcomes: ["Three VSLA groups established", "Women supported toward self-employment", "Stronger financial literacy and household resilience", "Safer access to health and rights information"],
    delivery: ["Listen to women and map local barriers", "Train in practical skills and financial literacy", "Form savings groups and connect mentors", "Track income, confidence and household outcomes"],
  },
  {
    slug: "wash", name: "Water, Sanitation & Hygiene", navName: "WASH", eyebrow: "Clean water changes everything", headline: "Safe water protects health, learning time and opportunity.",
    intro: "We pair boreholes and household water solutions with school hygiene education so clean water remains safe from the source to the family.", image: "images/itojo.webp", imageAlt: "A new borehole producing clean water at Itojo Primary School",
    target: "3 boreholes + 500 kits", investment: "UGX 114M", investmentNote: "FY 2026/27 programme line", sdg: "SDG 6 · Clean Water and Sanitation",
    focus: [
      { title: "Reliable infrastructure", copy: "Deep boreholes and community water points designed around local access needs." },
      { title: "Household water safety", copy: "Purification kits and safe storage guidance for vulnerable families." },
      { title: "School WASH", copy: "Handwashing stations, hygiene education and sanitation support in schools." },
      { title: "Community ownership", copy: "Local engagement, maintenance awareness and project monitoring beyond installation." },
    ],
    outcomes: ["Reduced reliance on contaminated open wells", "More classroom time for children", "Lower exposure to waterborne illness", "A shared water source for schools and neighbours"],
    delivery: ["Assess water need and site suitability", "Mobilise community and technical partners", "Construct and test the water solution", "Train users and monitor ongoing function"],
    evidence: { title: "Itojo Primary School", copy: "Care & Joy financed a deep borehole that now serves pupils, staff and surrounding families in Ntoroko District.", image: "images/itojo.webp", href: "https://careandjoyafrica.org/clean-water-bright-futures-monitoring-our-vital-borehole-project-at-itojo-primary-school/" },
  },
  {
    slug: "special-needs", name: "Special Needs & Inclusion", navName: "Special Needs", eyebrow: "Dignity, access and participation", headline: "Inclusion begins when barriers—not people—are treated as the problem.",
    intro: "We support persons with disabilities and their caregivers with mobility aids, therapy links, inclusive care, community awareness and pathways toward independent livelihoods.", image: "images/inclusion.webp", imageAlt: "A person with a disability in a Ugandan community",
    target: "25 mobility aids + 5 camps", investment: "UGX 17M", investmentNote: "FY 2026/27 programme line", sdg: "SDG 10 · Reduced Inequalities",
    focus: [
      { title: "Assistive devices", copy: "Wheelchairs, crutches and other aids that improve daily mobility and independence." },
      { title: "Care and therapy", copy: "Community care camps, assessment, therapy sessions and referrals for specialised support." },
      { title: "Caregiver wellbeing", copy: "Counselling, practical guidance and recognition of the demands carried by families." },
      { title: "Disability rights", copy: "Sensitisation that challenges stigma and promotes inclusion in education and community life." },
    ],
    outcomes: ["Improved mobility and participation", "Caregivers connected to support", "Communities better informed about disability rights", "Families linked to specialised care"],
    delivery: ["Identify needs with families", "Assess mobility and care requirements", "Deliver devices, camps and referrals", "Follow up with households and caregivers"],
    evidence: { title: "Kimooli Village outreach", copy: "Seven families received food, clothing, counselling and advocacy, including households caring for children with complex disabilities.", image: "images/kayunga.webp", href: "https://careandjoyafrica.org/beyond-kampala-delivering-hope-and-essential-relief-to-kayunga-district/" },
  },
  {
    slug: "elderly", name: "Elderly Care", navName: "Elderly", eyebrow: "Ageing with dignity", headline: "No older person should face hunger, illness or isolation alone.",
    intro: "We work with families and communities to provide older persons with safer shelter, food, clean water, companionship and connections to medical care.", image: "images/community.webp", imageAlt: "An older woman with children in her family",
    target: "3 two-room homes", investment: "UGX 45M", investmentNote: "FY 2026/27 programme line", sdg: "Dignified care across generations",
    focus: [
      { title: "Safe shelter", copy: "Construction of simple, secure two-room homes for older people in urgent need." },
      { title: "Essential relief", copy: "Food, water, clothing and household basics delivered through assessed outreach." },
      { title: "Health access", copy: "Support in reaching medical care, medication and continuing treatment." },
      { title: "Belonging", copy: "Family engagement, companionship and community networks that reduce isolation." },
    ],
    outcomes: ["Safer living conditions", "Improved access to food and basic care", "Older people connected to treatment", "Greater dignity and community inclusion"],
    delivery: ["Assess living and health conditions", "Agree priority support with the household", "Provide relief, shelter or referrals", "Follow up through local community networks"],
  },
  {
    slug: "children-education", name: "Children & Education", navName: "Children & Education", eyebrow: "Learning, safety and possibility", headline: "Education is more than a classroom—it is a route out of vulnerability.",
    intro: "We remove practical barriers to learning through school fees, scholastic materials, reusable sanitary pads, mentorship, nutrition support and child protection advocacy.", image: "images/children.webp", imageAlt: "Children gathered during a Care and Joy Africa community visit",
    target: "250 children", investment: "UGX 20M", investmentNote: "FY 2026/27 programme line", sdg: "SDG 4 · Quality Education",
    focus: [
      { title: "Stay in school", copy: "School fees, uniforms, learning materials and back-to-school kits for vulnerable children." },
      { title: "Health and nutrition", copy: "Basic health access, nutrition support, clean water and menstrual health supplies." },
      { title: "Safe childhoods", copy: "Protection advocacy, psychosocial support and spaces where children can learn without fear." },
      { title: "Mentorship", copy: "Encouragement, role models and practical guidance that help children imagine future careers." },
    ],
    outcomes: ["Improved school attendance and retention", "Children equipped with learning materials", "Stronger protection and wellbeing", "Young people connected to mentors"],
    delivery: ["Identify children with schools and communities", "Assess education and protection barriers", "Provide tailored school support", "Follow attendance, wellbeing and progress"],
    evidence: { title: "Veronica’s path to nursing", copy: "Care & Joy’s first education beneficiary is now in her second year of nursing studies at Mildmay Uganda.", image: "images/veronica.webp", href: "https://careandjoyafrica.org/from-maid-to-nurse-celebrating-veronica-nabunyas-inspiring-journey-with-care-joy-foundation/" },
  },
  {
    slug: "girl-child", name: "Girl Child Empowerment", navName: "Girl Child", eyebrow: "Keep her learning. Keep her choosing.", headline: "A girl’s future should be shaped by her potential—not poverty or early marriage.",
    intro: "This cross-cutting programme brings together education, menstrual health, mentorship, rights awareness and livelihood pathways to protect girls and expand their choices.", image: "images/equality.webp", imageAlt: "A young person holding a card reading We are equal",
    target: "Integrated across two programs", investment: "Cross-programme", investmentNote: "Children and women programme lines", sdg: "SDG 4 + SDG 5",
    focus: [
      { title: "Education continuity", copy: "School fees, supplies and case support that help girls remain enrolled." },
      { title: "Menstrual health", copy: "Reusable sanitary pads, hygiene information and facilities that protect attendance and dignity." },
      { title: "Protection and rights", copy: "Awareness, referral and advocacy addressing early marriage, exploitation and violence." },
      { title: "Mentorship and ambition", copy: "Women role models, career guidance and skills that build confidence and future options." },
    ],
    outcomes: ["Girls remain in school longer", "Reduced menstrual-health barriers", "Greater awareness of rights and protection services", "Stronger confidence and career aspiration"],
    delivery: ["Identify barriers with girls, families and schools", "Provide education and dignity support", "Connect girls with mentors and referrals", "Track attendance, safety and confidence"],
  },
];

export const getProgram = (slug: string) => programs.find(program => program.slug === slug)!;
