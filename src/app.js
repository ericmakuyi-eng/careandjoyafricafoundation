const pages = [
  'Home',
  'About',
  'Ministries',
  'Programs',
  'Sermons',
  'Giving',
  'Contact'
];

const ministryPages = [
  'Discipleship Ministry',
  'Healing Ministry',
  "Married's Ministry",
  'Youth Ministry',
  "Children's Ministry"
];

const aboutPages = ['About', 'Vision & Mission', 'Statement of Faith'];
const schoolPages = ['Northern Discipleship School', 'Central Discipleship School', 'Western Discipleship School'];
const mandate = '&ldquo;Making Disciples of All Nations&rdquo; &ndash; Matthew 28:19-20';

const schoolPhotoFolders = {
  Northern: 'https://drive.google.com/drive/folders/1xhEARlki4QTIn-kusVSXogPVHkxguXIt?usp=drive_link',
  Central: 'https://drive.google.com/drive/folders/1NVfebPLwDzhKGnLvX2to-LfEX8i2i2DU?usp=drive_link',
  Western: 'https://drive.google.com/drive/folders/1IenP9vkNIdrmg5EGx1J6vX1wD-r5WomI?usp=drive_link'
};

const schoolFolderIds = {
  Northern: '1xhEARlki4QTIn-kusVSXogPVHkxguXIt',
  Central: '1NVfebPLwDzhKGnLvX2to-LfEX8i2i2DU',
  Western: '1IenP9vkNIdrmg5EGx1J6vX1wD-r5WomI'
};

const schoolData = {
  'Northern Discipleship School': {
    region: 'Northern',
    cover: '/images/discipleship/northern/dn-cover.webp',
    intro: 'The Northern Uganda Discipleship Center was launched on February 20, 2026, at Chegere Assembly Headquarters to equip pastors and church leaders within the West Lango Pastorate under the Pentecostal Assemblies of God (PAG) umbrella. The center is committed to strengthening church leadership, promoting sound biblical doctrine, and empowering ministers to effectively serve their congregations and communities through discipleship and ministry training.',
    focus: ['Biblical foundations', 'Prayer and character formation', 'Evangelism and community witness'],
    photos: [
      ['/images/discipleship/northern/dn-cover.webp', 'Northern Discipleship School cover photo'],
      ['/images/discipleship/northern/dn1.webp', 'Northern Discipleship School classroom teaching session'],
      ['/images/discipleship/northern/dn2.webp', 'Northern Discipleship School leadership and community engagement'],
      ['/images/discipleship/northern/dn3.webp', 'Northern Discipleship School learners in class'],
      ['/images/discipleship/northern/dn4.webp', 'Northern Discipleship School group discussion and teaching']
    ]
  },
  'Central Discipleship School': {
    region: 'Central',
    cover: '/images/discipleship/central/dc-cover.webp',
    intro: 'Kampala Discipleship Center was launched in July 03, 2017 in Namuwongo, Kampala Region, with a mission to equip pastors, church leaders, and believers for effective Christian ministry and discipleship. As the ministry expanded, the center was relocated to its current premises at Send His Word Church on Rubaga Road, Kampala, next to Furniture house where it continues to serve students from Kampala and neighboring districts.',
    focus: ['Word-based discipleship', 'Fivefold ministry equipping', 'Service and leadership growth'],
    photos: [
      ['/images/discipleship/central/dc-cover.webp', 'Central Discipleship School cover photo'],
      ['/images/discipleship/central/dc1.webp', 'Central Discipleship School certificate and graduands moment'],
      ['/images/discipleship/central/dc2.webp', 'Central Discipleship School graduands and leadership group photo'],
      ['/images/discipleship/central/dc3.webp', 'Central Discipleship School full group celebration']
    ]
  },
  'Western Discipleship School': {
    region: 'Western',
    cover: '/images/discipleship/western/dw-cover.webp',
    intro: 'The Western Uganda Discipleship Center was launched in 2023 and is hosted at Yesu Taremwa Churches in Rukungiri District. The center serves pastors, church leaders, and believers from churches across Western Uganda, providing biblical discipleship, leadership development, and ministry training aimed at strengthening the Church and advancing the Gospel throughout the region.',
    focus: ['Spiritual maturity', 'Family and community witness', 'Practical ministry service'],
    photos: [
      ['/images/discipleship/western/dw-cover.webp', 'Western Discipleship School cover photo'],
      ['/images/discipleship/western/dw1.webp', 'Western Discipleship School group photo outside the training venue'],
      ['/images/discipleship/western/dw2.webp', 'Western Discipleship School learners receiving teaching'],
      ['/images/discipleship/western/dw3.webp', 'Western Discipleship School classroom and discipleship training'],
      ['/images/discipleship/western/dw4.webp', 'Western Discipleship School fellowship and teaching moment']
    ]
  }
};

const leadPastorPhoto = 'https://drive.google.com/file/d/1m3cFJMbdA7n2gGTDLARiTBTNNSmMXOEW/view?usp=drive_link';
const leadPastorPhotoThumb = 'https://drive.google.com/thumbnail?id=1m3cFJMbdA7n2gGTDLARiTBTNNSmMXOEW&sz=w1000';


const discipleshipDirector = {
  title: 'Director',
  name: 'Dr. Olive Kobusingye',
  image: '/images/discipleship/director-olive-kifefe.webp',
  text: 'The Discipleship Ministry is directed by Dr. Olive Kobusingye, who provides leadership, guidance and spiritual oversight for the discipleship schools. Through this work, believers are equipped in biblical foundations, prayer, character formation and practical ministry service for Kingdom impact.'
};

const discipleshipHighlightPhotos = [
  {
    image: '/images/discipleship/discipleship-graduates-group-one.webp',
    title: 'Discipleship School Graduands',
    text: 'A moment celebrating learners who have gone through training, fellowship and spiritual formation.'
  },
  {
    image: '/images/discipleship/discipleship-graduates-group-two.webp',
    title: 'Training and Commissioning',
    text: 'The schools continue to raise disciples who can serve Christ faithfully in their churches, families and communities.'
  }
];

const faithStatements = [
  ['1. The Holy Scriptures', 'We believe that the Bible is the inspired, infallible, and authoritative Word of God. It is the supreme guide for faith, doctrine, and Christian living.', '2 Timothy 3:16-17; 2 Peter 1:20-21'],
  ['2. The One True God', 'We believe in one eternal God, revealed in three persons: the Father, the Son, and the Holy Spirit. These three are co-equal and co-eternal.', 'Matthew 28:19; 2 Corinthians 13:14'],
  ['3. The Lord Jesus Christ', 'We believe that Jesus Christ is the Son of God, conceived by the Holy Spirit, born of the virgin Mary, fully God and fully man. He lived a sinless life, died for our sins, rose bodily from the dead, ascended into heaven, and will return again in power and glory.', 'John 1:1-14; 1 Corinthians 15:3-4; Acts 1:11'],
  ['4. Salvation', "We believe that salvation is a gift of God's grace received through faith in Jesus Christ. Through His death and resurrection, mankind is redeemed from sin and reconciled to God.", 'Ephesians 2:8-9; Romans 10:9-10; John 3:16'],
  ['5. The Holy Spirit', 'We believe in the present ministry of the Holy Spirit, who convicts, regenerates, indwells, sanctifies, empowers, and equips believers for Christian living and ministry.', 'John 14:16-17; Acts 1:8; Galatians 5:22-23'],
  ['6. The Church', 'We believe that the Church is the Body of Christ, composed of all believers who have received Jesus Christ as Lord and Savior. The Church exists to worship God, make disciples, fellowship, and proclaim the Gospel to all nations.', 'Ephesians 1:22-23; Matthew 28:19-20'],
  ['7. The Fivefold Ministry', 'We believe that Christ has given apostles, prophets, evangelists, pastors, and teachers to equip the saints for the work of ministry and to build up the Body of Christ until believers attain spiritual maturity and unity in the faith.', 'Ephesians 4:11-13'],
  ['8. Divine Healing', 'We believe that healing was provided through the redemptive work of Jesus Christ and that God continues to heal today according to His Word and through faith in His promises.', 'Isaiah 53:5; Matthew 8:16-17; James 5:14-16'],
  ['9. The Resurrection and Eternal Life', 'We believe in the bodily resurrection of both the saved and the lost. Those who have trusted in Christ will enjoy eternal life with God, while those who reject Him will face eternal separation from God.', 'John 5:28-29; Revelation 20:11-15'],
  ['10. The Second Coming of Christ', "We believe in the personal, visible, and glorious return of the Lord Jesus Christ to establish His Kingdom and fulfill God's eternal purposes.", 'Acts 1:11; Titus 2:13; Revelation 22:12']
];

let currentPage = 'Home';
let faithPaused = false;
let adminOk = false;
let carouselTimers = [];

const root = document.getElementById('root');

function pageFromPath() {
  const path = window.location.pathname.toLowerCase();
  if (path === '/admin') return 'Admin';
  return 'Home';
}

currentPage = pageFromPath();

function goToPage(page) {
  currentPage = page;
  faithPaused = false;
  if (window.location.protocol !== 'file:') {
    window.history.pushState({}, '', page === 'Admin' ? '/admin' : '/');
  }
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function button(page, label = page) {
  const active = currentPage === page ? 'active' : '';
  return `<button class="${active}" data-page="${page}">${label}</button>`;
}

function header() {
  const aboutActive = aboutPages.includes(currentPage) ? 'active' : '';
  const ministriesActive = ministryPages.includes(currentPage) || currentPage === 'Ministries' ? 'active' : '';
  return `
    <header class="siteHeader">
      <div class="serviceBar">
        <span>Sunday Service: 9:00 AM</span>
        <span>Rubaga Road near Furniture House</span>
        <span>Prayer Line: 0773 272 195 / 0705 272 195</span>
      </div>
      <div class="navWrap">
        <button class="brand" data-page="Home" aria-label="Go to home page">
          <span class="logoMark"><img src="/images/shw-logo.png" alt="Send His Word Ministries logo" /></span>
          <span class="brandText">Send His Word Ministries</span>
        </button>
        <nav class="desktopNav">
          ${button('Home')}
          <div class="navGroup">
            <button class="${aboutActive}" data-page="About">About</button>
            <div class="dropdownMenu">
              ${aboutPages.map((item) => button(item)).join('')}
            </div>
          </div>
          <div class="navGroup">
            <button class="${ministriesActive}" data-page="Ministries">Ministries</button>
            <div class="dropdownMenu">
              ${ministryPages.map((item) => button(item)).join('')}
            </div>
          </div>
          ${['Programs', 'Sermons', 'Contact'].map((item) => button(item)).join('')}
        </nav>
        <button class="giveHeart" data-page="Giving"><span>Give</span></button>
        <button class="menuButton" data-toggle-menu>Menu</button>
      </div>
      <nav class="mobileNav" id="mobileNav">
        ${[...pages, ...aboutPages.filter((item) => item !== 'About'), ...ministryPages, ...schoolPages].map((item) => button(item)).join('')}
      </nav>
    </header>
  `;
}

function pageShell(eyebrow, title, children) {
  return `<section class="page"><p class="eyebrow">${eyebrow}</p><h1>${title}</h1>${children}</section>`;
}

function visionMissionStrip() {
  return `
    <section class="visionStrip">
      <article>
        <p class="eyebrow">Vision</p>
        <h2>Making Disciples of All Nations</h2>
        <b>Matthew 28:19-20</b>
      </article>
      <article>
        <p class="eyebrow">Mission</p>
        <h2>Equipping and maturing believers through the fivefold ministry to build up the Body of Christ into His fullness.</h2>
        <b>Ephesians 4:11-13</b>
      </article>
    </section>
  `;
}

function card(title, text) {
  return `<article class="card"><h3>${title}</h3><p>${text}</p></article>`;
}

function homePage() {
  return `
    <section class="hero">
      <div class="heroMedia"><video class="heroVideo" src="/images/homepage-highlight.mp4" autoplay muted loop playsinline poster="/images/discipleship/central/dc-cover.webp"></video></div>
      <div class="heroContent">
        <p class="scriptLine">Welcome</p>
        <h1>Send His Word Ministries</h1>
        <h2>${mandate}</h2>
        <p>A Christ-centered ministry equipping and maturing believers through the Word, prayer, fellowship and the fivefold ministry.</p>
        <div class="heroButtons">
          <button class="primaryBtn" data-page="Vision & Mission">Vision & Mission</button>
          <button class="lightBtn" data-page="Ministries">Explore Ministries</button>
        </div>
      </div>
    </section>
    ${visionMissionStrip()}
    <section class="quickGrid">
      ${quickCard('Healing School', 'Conducted twice every year in May and August.', 'Healing Ministry')}
      ${quickCard("Married's Ministry", "Strengthening marriages and families through God's Word.", "Married's Ministry")}
      ${quickCard('Youth Ministry', 'Raising young people who love God and influence their world.', 'Youth Ministry')}
      ${quickCard("Children's Ministry", 'Nurturing children in the knowledge and love of Christ.', "Children's Ministry")}
    </section>
    <section class="section">
      <p class="eyebrow">Ministries</p>
      <h1>Grow, serve and be equipped</h1>
      <div class="ministryGrid">
        ${ministryPages.map((item) => ministryTile(item)).join('')}
      </div>
    </section>
  `;
}

function quickCard(title, text, target) {
  return `<button class="quickCard" data-page="${target}"><h3>${title}</h3><p>${text}</p><span>Open page</span></button>`;
}

function ministryTile(title) {
  return `<button class="ministryTile" data-page="${title}"><h3>${title}</h3><span>Learn more</span></button>`;
}

function aboutPage() {
  return pageShell('About Us', 'A church family built on the Word, prayer and discipleship', `
    <section class="leadPastor featuredLeadership">
      <div class="pastorPhotoCard">
        <img src="${leadPastorPhotoThumb}" alt="Pastor Godwin Tumusiime and Pastor Cissy Tumusiime" />
        <a href="${leadPastorPhoto}" target="_blank" rel="noreferrer">Open founders photo</a>
      </div>
      <div>
        <p class="eyebrow">Founders &amp; Senior Pastors</p>
        <h2>Pastor Godwin Tumusiime &amp; Pastor Cissy Tumusiime</h2>
        <p>Send His Word Ministries was founded under the grace and calling of God upon Pastor Godwin Tumusiime and Pastor Cissy Tumusiime to equip the saints, preach the gospel, and make disciples of all nations. Together they serve with a shared passion for discipleship, healing, and strengthening families for the Kingdom of God. Through obedience to the Great Commission, the ministry continues to grow across Uganda, raising leaders and building the body of Christ.</p>
      </div>
    </section>

    ${visionMissionStrip()}

    <section class="faithPreview">
      <div>
        <p class="eyebrow">Our Faith</p>
        <h2>Read Our Faith</h2>
        <p>Discover the biblical convictions that guide Send His Word Ministries in worship, discipleship, healing, family strengthening and the preaching of the Gospel.</p>
      </div>
      <button class="primaryBtn" data-page="Statement of Faith">Read Our Faith</button>
    </section>
  `);
}

function visionMissionPage() {
  return pageShell('Vision & Mission', 'Our mandate and direction', `
    ${visionMissionStrip()}
    <div class="twoCol">
      ${card('How We Pursue the Vision', 'Through discipleship, biblical teaching, prayer, fellowship, evangelism and practical ministry that helps believers grow into maturity.')}
      ${card('Our Ministry Foundation', 'The fivefold ministry equips the saints for the work of ministry and builds the Body of Christ into unity, fullness and maturity.')}
    </div>
  `);
}

function statementPage() {
  const pausedClass = faithPaused ? ' paused' : '';
  const repeated = [...faithStatements, ...faithStatements].map(([title, text, scripture], index) => `
    <article class="faithCard">
      <h3>${title}</h3>
      <p>${text}</p>
      <b>${scripture}</b>
    </article>
  `).join('');

  return pageShell('Statement of Faith', 'What we believe', `
    <section class="faithIntro">
      <p>The statements below present the core beliefs of Send His Word Ministries.</p>
      <button class="primaryBtn small" data-pause-faith>${faithPaused ? 'Resume' : 'Pause'}</button>
    </section>
    <section class="faithCarousel${pausedClass}" data-faith-carousel>
      <div class="faithTrack">${repeated}</div>
    </section>
  `);
}

function ministriesPage() {
  return pageShell('Ministries', 'Find your place to grow and serve', `
    <section class="introText">
      <p>The ministry areas have been arranged around discipleship, healing, marriages, youth and children so that every believer and family can find a clear place to grow and serve.</p>
    </section>
    <div class="ministryGrid full">
      ${ministryPages.map((item) => ministryTile(item)).join('')}
    </div>
    <div class="threeCol ministryChanges">
      ${card("Married's Ministry", 'Strengthening marriages and families through biblical teaching, fellowship, counseling and prayer.')}
      ${card('Youth Ministry', 'Raising young people who love God, live by His Word and positively influence their communities.')}
      ${card("Children's Ministry", 'Nurturing children in the knowledge, love and fear of the Lord Jesus Christ from an early age.')}
    </div>
  `);
}

function discipleshipPage() {
  return pageShell('Discipleship Ministry', 'Three centres. One mission: making disciples of all nations', `
    <section class="leadPastor featuredLeadership discipleshipDirector">
      <div class="pastorPhotoCard directorPhotoCard">
        <img src="${discipleshipDirector.image}" alt="${discipleshipDirector.name}" />
      </div>
      <div>
        <p class="eyebrow">${discipleshipDirector.title}</p>
        <h2>${discipleshipDirector.name}</h2>
        <p>${discipleshipDirector.text}</p>
      </div>
    </section>

    <section class="discipleshipHighlights">
      <div class="discipleshipHighlightsText">
        <p class="eyebrow">Discipleship School</p>
        <h3>Training believers for spiritual maturity and practical ministry service</h3>
        <p>Send His Word Ministries Discipleship School is a Christ-centered training ministry dedicated to equipping pastors, church leaders, and believers for effective Christian service and spiritual growth. Through biblical teaching, practical ministry training, leadership development, and discipleship, the school seeks to raise mature disciples who can impact their communities with the Gospel of Jesus Christ.</p>
      </div>
      <div class="discipleshipImageGrid">
        ${discipleshipHighlightPhotos.map((photo) => `
          <article class="discipleshipImageCard">
            <img src="${photo.image}" alt="${photo.title}" />
            <div>
              <h3>${photo.title}</h3>
              <p>${photo.text}</p>
            </div>
          </article>
        `).join('')}
      </div>
    </section>

    <div class="threeCol">
      ${schoolCard('Northern Discipleship School', 'The Northern Uganda Discipleship Center was launched on February 20, 2026, at Chegere Assembly Headquarters to equip pastors and church leaders within the West Lango Pastorate under....')}
      ${schoolCard('Central Discipleship School', 'Kampala Discipleship Center was launched in July 03, 2017 in Namuwongo, Kampala Region, with a mission to equip pastors, church leaders, and believers for effective Christian ministry and discipleship.....')}
      ${schoolCard('Western Discipleship School', 'The Western Uganda Discipleship Center was launched in 2023 and is hosted at Yesu Taremwa Churches in Rukungiri District....')}
    </div>
  `);
}

function schoolCard(title, text) {
  const school = schoolData[title];
  return `
    <article class="card schoolPhotoCard">
      <div class="schoolPhotoPreview"><img src="${school.cover}" alt="${title} cover photo" /></div>
      <h3>${title}</h3>
      <p>${text}</p>
      <div class="schoolActions">
        <button class="secondaryBtn small" data-page="${title}">Open full page</button>
      </div>
    </article>
  `;
}

function schoolPage(title) {
  const school = schoolData[title];
  const folder = schoolPhotoFolders[school.region];
  return pageShell('Discipleship Ministry', title, `
    <section class="schoolHero">
      <img src="${school.cover}" alt="${title} cover photo" />
      <div>
        <p class="eyebrow">${school.region} Region</p>
        <h2>${title}</h2>
        <p>${school.intro}</p>
        <button class="primaryBtn" data-page="Discipleship Ministry">Back to Discipleship Ministry</button>
      </div>
    </section>
    <div class="threeCol schoolFocusGrid">
      ${school.focus.map((item) => card(item, 'A core area of training and spiritual formation within this discipleship school.')).join('')}
    </div>
    <section class="schoolGallery localSchoolGallery">
      <div class="galleryHead">
        <div>
          <p class="eyebrow">Pictorials</p>
          <h2>Photos from the ${school.region} school</h2>
        </div>
        <a href="${folder}" target="_blank" rel="noreferrer">Open original photo folder</a>
      </div>
      <div class="schoolGallerySummary">
        <p>These photos highlight classroom teaching, discipleship training, graduations, fellowship and commissioning moments from the ${school.region} Discipleship School.</p>
      </div>
      ${photoCarousel(school.photos, `${school.region} Discipleship School photos`, 'schoolPhotoCarousel')}
    </section>
  `);
}

function healingPage() {
  return pageShell('Healing Ministry', 'Healing School', `
    <section class="featureHero">
      <img src="/images/healing-ministry.png" alt="Healing School teaching session" />
      <div>
        <p class="scriptLine">Beloved</p>
        <h2>Equipping believers to receive divine healing and walk in divine health.</h2>
        <p>The Healing School is a special ministry program of Send His Word Ministries conducted twice every year, in May and August. The program equips believers with biblical knowledge and practical understanding of how to receive divine healing and walk in divine health by raising their faith in the Word of God.</p>
        <blockquote>Beloved, I wish above all things that thou mayest prosper and be in health, even as thy soul prospereth. <span>3 John 1:2</span></blockquote>
      </div>
    </section>
    <div class="threeCol">
      ${card('Kampala Region', 'Hosted at Send His Word Church premises on Rubaga Road near Furniture House.')}
      ${card('Western Region', 'Hosted in partnership with Yesu Taremwa Churches.')}
      ${card('Northern Uganda Region', 'Hosted through 90.0 Kioga FM.')}
    </div>
    <div class="twoCol">
      ${card('How the Ministry Reaches Believers', 'Healing sessions run for two weeks through physical teaching sessions, radio ministry, YouTube broadcasts, TikTok outreach and other social media platforms.')}
      ${card('Objective', "The Healing School helps believers understand God's provision for healing through the atoning sacrifice of Jesus Christ, strengthen their faith in God's Word, and live under divine health while ministering healing to others also.")}
    </div>
  `);
}

function ministryArticle(eyebrow, title, image, alt, text, second) {
  return pageShell(eyebrow, title, `
    <section class="articleHero">
      <img src="${image}" alt="${alt}" />
      <div class="articleText">
        <p>${text}</p>
        <p>${second}</p>
      </div>
    </section>
    <div class="threeCol">
      ${card('Biblical Teaching', 'Grounded in the Word of God and practical Christian living.')}
      ${card('Fellowship', 'A warm environment for encouragement, friendship and growth.')}
      ${card('Prayer & Care', 'Pastoral care, prayer support and spiritual strengthening.')}
    </div>
  `);
}


function chunkPhotos(photos, size = 4) {
  const chunks = [];
  for (let index = 0; index < photos.length; index += size) {
    chunks.push(photos.slice(index, index + size));
  }
  return chunks;
}

function photoCarousel(photos, label, variant = '') {
  const unique = [];
  const seen = new Set();
  photos.forEach(([src, alt]) => {
    if (!seen.has(src)) {
      seen.add(src);
      unique.push([src, alt]);
    }
  });
  const groups = chunkPhotos(unique, 4);
  const dots = groups.map((_, index) => `<button type="button" class="carouselDot${index === 0 ? ' active' : ''}" data-carousel-dot="${index}" aria-label="Show photo group ${index + 1}"></button>`).join('');
  return `
    <div class="photoCarousel ${variant}" data-photo-carousel data-current="0" data-total="${groups.length}" aria-label="${label}">
      <div class="photoViewport">
        <div class="photoTrack">
          ${groups.map((group, groupIndex) => `
            <div class="photoSlide" aria-label="${label} group ${groupIndex + 1}">
              ${group.map(([src, alt], photoIndex) => `<figure class="carouselPhoto"><img src="${src}" alt="${alt}" /><figcaption>${String(groupIndex * 4 + photoIndex + 1).padStart(2, '0')}</figcaption></figure>`).join('')}
            </div>
          `).join('')}
        </div>
      </div>
      <div class="carouselControls">
        <button type="button" data-carousel-prev aria-label="Previous photo group">‹</button>
        <div class="carouselDots">${dots}</div>
        <button type="button" data-carousel-next aria-label="Next photo group">›</button>
      </div>
    </div>
  `;
}

function marriedsPage() {
  const heroPhotos = [
    '/images/marrieds/couple-joyful-applause.webp',
    '/images/marrieds/couple-hug-joy.webp',
    '/images/marrieds/pastor-couple-ministry.webp'
  ];
  const galleryPhotos = [
    ['/images/marrieds/couple-smiling-close.webp', 'A joyful married couple during the ministry session', 'wide'],
    ['/images/marrieds/couple-embrace-blessing.webp', 'A couple embracing during a ministry moment', 'tall'],
    ['/images/marrieds/married-couple-smile.webp', 'A couple smiling during Married’s Ministry fellowship', 'wide'],
    ['/images/marrieds/marriage-panel-sharing.webp', 'A married couple sharing during a discussion session', 'wide'],
    ['/images/marrieds/marriage-panel-discussion.webp', 'A couple participating in an interactive marriage conversation', 'wide'],
    ['/images/marrieds/couple-speaking-microphone.webp', 'A couple speaking and encouraging others', 'tall'],
    ['/images/marrieds/couple-ministry-embrace.webp', 'A couple celebrating and embracing', 'tall'],
    ['/images/marrieds/couple-ministry-joy.webp', 'A couple filled with joy during ministry', 'tall'],
    ['/images/marrieds/family-love-smile.webp', 'Family love and warmth in the ministry community', 'wide'],
    ['/images/marrieds/marriage-teaching-smile.webp', 'A happy couple during a teaching session', 'wide'],
    ['/images/marrieds/couple-prayer-moment.webp', 'A reflective couple during fellowship', 'tall'],
    ['/images/marrieds/pastor-couple-ministry.webp', 'Pastoral guidance and encouragement for couples', 'tall']
  ];

  return pageShell("Married's Ministry", 'Building Christ-centered marriages and strong families', `
    <section class="marriedsHero">
      <div class="marriedsHeroText">
        <p class="scriptLine">Two are better than one</p>
        <h2>Strengthening homes through the Word, love, prayer and practical fellowship.</h2>
        <p>The Married’s Ministry at Send His Word Ministries exists to help husbands and wives build marriages that honour God, strengthen families and become a testimony of Christ’s love to the church and community.</p>
        <div class="childrenHeroActions">
          <button class="primaryBtn" data-page="Contact">Join the Married’s Fellowship</button>
          <button class="secondaryBtn" data-page="Programs">View Ministry Programs</button>
        </div>
      </div>
      <div class="marriedsMosaic" aria-label="Married's ministry photo highlights">
        <img class="mosaicLarge" src="${heroPhotos[0]}" alt="Joyful couple during Married’s Ministry fellowship" />
        <img src="${heroPhotos[1]}" alt="Couple embracing during ministry" />
        <img src="${heroPhotos[2]}" alt="Pastoral encouragement during Married’s Ministry" />
      </div>
    </section>

    <section class="marriedsScriptureBand">
      <blockquote>
        “Though one may be overpowered, two can defend themselves. A cord of three strands is not quickly broken.”
        <span>Ecclesiastes 4:12</span>
      </blockquote>
    </section>

    <section class="marriedsIntroPanel">
      <div>
        <p class="eyebrow">Purpose</p>
        <h2>Helping couples grow together, heal together and serve together.</h2>
      </div>
      <p>Marriage is a covenant, not merely a ceremony. This ministry creates a safe and faith-filled space where couples can learn biblical principles, receive encouragement, ask practical questions, pray together and strengthen their homes. It also supports engaged and young couples with wisdom for building healthy foundations before and after marriage.</p>
    </section>

    <section class="marriedsStats">
      <article><strong>Word</strong><span>Biblical teaching for marriage, family life and spiritual maturity.</span></article>
      <article><strong>Prayer</strong><span>Couples are encouraged to build homes anchored in prayer and forgiveness.</span></article>
      <article><strong>Fellowship</strong><span>Meaningful conversations, testimony sharing and mutual encouragement.</span></article>
      <article><strong>Care</strong><span>Pastoral guidance, mentoring and support for couples in different seasons.</span></article>
    </section>

    <section class="childrenSectionIntro">
      <p class="eyebrow">What the ministry offers</p>
      <h2>An inspiring space for marriages to be taught, refreshed and strengthened.</h2>
      <p>The Married’s Ministry speaks to real family life with biblical depth and practical wisdom. It encourages couples to communicate better, forgive quickly, pray consistently, serve together and model godly love to their children and community.</p>
    </section>

    <div class="marriedsFeatureGrid">
      ${card('Biblical Marriage Teaching', 'Practical teaching from Scripture on love, honour, submission, leadership, faithfulness, forgiveness and family order.')}
      ${card('Couples Fellowship', 'Warm gatherings where couples share experiences, laugh together, encourage one another and build godly friendships.')}
      ${card('Prayer & Spiritual Covering', 'Prayer support for homes, children, family needs, healing, reconciliation and spiritual growth as couples.')}
      ${card('Communication & Conflict Wisdom', 'Guidance that helps couples listen better, resolve misunderstandings peacefully and protect unity in the home.')}
      ${card('Mentorship & Counselling', 'Pastoral care and mature-couple support for couples needing guidance, encouragement or restoration.')}
      ${card('Family Discipleship', 'Helping couples raise children in the fear of the Lord and build homes that reflect Christ daily.')}
    </div>

    <section class="marriedsJourney">
      <div class="journeyText">
        <p class="eyebrow light">Marriage journey</p>
        <h2>From covenant to companionship, every season of marriage can be fruitful in God.</h2>
        <p>Whether newly married, raising children, rebuilding trust, preparing for marriage or mentoring others, the Married’s Ministry provides encouragement for couples to keep growing together in Christ.</p>
      </div>
      <div class="journeySteps">
        <article><span>01</span><h3>Foundation</h3><p>Understanding marriage as a covenant before God.</p></article>
        <article><span>02</span><h3>Formation</h3><p>Learning godly habits of prayer, communication and service.</p></article>
        <article><span>03</span><h3>Flourishing</h3><p>Building a home that blesses children, church and community.</p></article>
      </div>
    </section>

    <section class="childrenGallery marriedsGallery">
      <div class="galleryHead simple">
        <div>
          <p class="eyebrow">Pictorial</p>
          <h2>Married’s Ministry in pictures</h2>
        </div>
        <p>Moments of teaching, joy, prayer, sharing and celebration from the Married’s Ministry.</p>
      </div>
      ${photoCarousel(galleryPhotos, 'Married’s Ministry pictorial', 'marriedsPhotoCarousel')}
    </section>

    <section class="marriedsCallout">
      <div>
        <p class="eyebrow light">Stronger together</p>
        <h2>A healthy marriage becomes a pulpit in the home.</h2>
        <p>When couples are strengthened in Christ, children are nurtured, homes are protected, the church is encouraged and communities are impacted.</p>
      </div>
      <button class="lightBtn" data-page="Contact">Contact the Ministry</button>
    </section>
  `);
}

function youthPage() {
  const heroPhotos = [
    '/images/youth/youth-worship-team.webp',
    '/images/youth/youth-students-laptop.webp',
    '/images/youth/youth-group-photo.webp'
  ];

  const galleryPhotos = [
    ['/images/youth/youth-singer-orange.webp', 'Youth worship leader ministering with passion', 'tall'],
    ['/images/youth/youth-singer-hat.webp', 'Young man leading worship in reverence', 'tall'],
    ['/images/youth/youth-worship-yellow.webp', 'A youth worship moment during ministry service', 'tall'],
    ['/images/youth/youth-school-session.webp', 'Young people gathered for learning and ministry', 'wide'],
    ['/images/youth/youth-students-laptop.webp', 'Students listening attentively during a youth session', 'wide'],
    ['/images/youth/youth-students-listening.webp', 'Young people engaged during teaching and note-taking', 'wide'],
    ['/images/youth/youth-prayer-ministration.webp', 'Prayer and ministration to a young person', 'tall'],
    ['/images/youth/youth-worship-team.webp', 'Youth worship team ministering on stage', 'wide'],
    ['/images/youth/youth-choir.webp', 'Youth choir presenting together in ministry', 'wide'],
    ['/images/youth/youth-speaker-podium.webp', 'A youth speaker sharing at the podium', 'tall'],
    ['/images/youth/youth-group-photo.webp', 'A joyful youth ministry group photo', 'wide']
  ];

  return pageShell('Youth Ministry', 'Raising a generation rooted in Christ, bold in faith and ready to influence the world', `
    <section class="childrenHero youthHero">
      <div class="childrenHeroText">
        <p class="scriptLine">Let no one despise your youth</p>
        <h2>Young people are being equipped to know God deeply, live purely, serve faithfully and shine brightly for Jesus Christ.</h2>
        <p>The Youth Ministry of Send His Word Ministries exists to disciple young people into mature believers who are grounded in the Word of God, full of worship, active in prayer and confident in their God-given purpose. It creates a vibrant and safe environment where youth can encounter God, build genuine fellowship and grow into responsible Christian leaders.</p>
        <div class="childrenHeroActions">
          <button class="primaryBtn" data-page="Contact">Join the Youth Ministry</button>
          <button class="secondaryBtn" data-page="Programs">See Ministry Programs</button>
        </div>
      </div>
      <div class="childrenMosaic youthMosaic" aria-label="Youth ministry photo highlights">
        <img class="mosaicLarge" src="${heroPhotos[0]}" alt="Youth worship team ministering together" />
        <img src="${heroPhotos[1]}" alt="Young people listening during a youth meeting" />
        <img src="${heroPhotos[2]}" alt="Youth ministry group photo" />
      </div>
    </section>

    <section class="childrenStats youthStats">
      <article><strong>Word</strong><span>Biblical teaching that helps young people understand truth, identity, purpose and holy living.</span></article>
      <article><strong>Worship</strong><span>A vibrant atmosphere of praise, prayer and heartfelt ministry where young people encounter God.</span></article>
      <article><strong>Fellowship</strong><span>Meaningful friendships, mutual encouragement and a supportive Christ-centered community.</span></article>
    </section>

    <section class="childrenSectionIntro youthSectionIntro">
      <p class="eyebrow">What the ministry is building</p>
      <h2>Inspiring young people to love God, walk in holiness and become leaders of godly influence</h2>
      <p>The Youth Ministry helps young people navigate life with biblical wisdom and spiritual confidence. Through teaching, worship, prayer, mentorship and active participation in ministry, they are strengthened to stand for Christ in school, at home, in relationships and in the wider community.</p>
    </section>

    <div class="childrenFeatureGrid youthFeatureGrid">
      ${card('Biblical Discipleship', 'Teaching that grounds young people in Scripture, Christian character, obedience, identity in Christ and spiritual maturity.')}
      ${card('Prayer & Worship', 'A space where youth grow in personal devotion, corporate prayer and passionate worship before the Lord.')}
      ${card('Leadership Development', 'Helping young people discover their gifts, serve with excellence and grow into dependable kingdom leaders.')}
      ${card('Mentorship & Guidance', 'Pastoral care, counsel and mentorship that help youth handle life’s questions, pressures and decisions in a godly way.')}
      ${card('Creative Ministry Expression', 'Opportunities for singing, speaking, worship leading, testimony sharing, drama and other forms of meaningful ministry participation.')}
      ${card('Community & Fellowship', 'Building healthy friendships and a family atmosphere where every young person is valued, encouraged and strengthened.')}
    </div>

    <section class="childrenProgramBand youthProgramBand">
      <div>
        <p class="eyebrow light">How youth grow here</p>
        <h2>The ministry forms young believers through teaching, worship, fellowship, service and personal transformation.</h2>
      </div>
      <div class="childrenProgramList youthProgramList">
        <span>Word Sessions</span>
        <span>Youth Worship</span>
        <span>Prayer Moments</span>
        <span>Leadership Training</span>
        <span>Mentorship</span>
        <span>Fellowship & Outreach</span>
      </div>
    </section>

    <section class="childrenGallery youthGallery">
      <div class="galleryHead simple">
        <div>
          <p class="eyebrow">Pictorial</p>
          <h2>Youth Ministry in pictures</h2>
        </div>
        <p>Moments of worship, teaching, fellowship, prayer and joyful youth expression in ministry.</p>
      </div>
      ${photoCarousel(galleryPhotos, 'Youth Ministry pictorial', 'youthPhotoCarousel')}
    </section>

    <section class="childrenScripture youthScripture">
      <blockquote>
        “Let no man despise thy youth; but be thou an example of the believers, in word, in conversation, in charity, in spirit, in faith, in purity.”
        <span>1 Timothy 4:12</span>
      </blockquote>
    </section>
  `);
}

function childrenPage() {
  const heroPhotos = [
    '/images/children/children-group-stage.webp',
    '/images/children/child-scripture-recital.webp',
    '/images/children/child-preaching-blue.webp'
  ];
  const galleryPhotos = [
    ['/images/children/children-group-wide.webp', 'Children presenting together during ministry service', 'wide'],
    ['/images/children/child-reading-microphone.webp', 'Child reading scripture with microphone', 'tall'],
    ['/images/children/child-bible-drama.webp', 'Child participating in Bible drama presentation', 'tall'],
    ['/images/children/children-choir-wide.webp', 'Children choir ministering on stage', 'wide'],
    ['/images/children/children-family-care.webp', 'Children fellowship and care moment', 'tall'],
    ['/images/children/child-prayer.webp', 'Child in prayerful worship moment', 'tall'],
    ['/images/children/children-choir-action.webp', 'Children worship action presentation', 'wide'],
    ['/images/children/child-preaching-pink.webp', 'Child speaking confidently with microphone', 'tall']
  ];

  return pageShell("Children's Ministry", 'Raising children to know Jesus, love the Word and serve with joy', `
    <section class="childrenHero">
      <div class="childrenHeroText">
        <p class="scriptLine">Let the little children come to Me</p>
        <h2>Children are not only the church of tomorrow; they are part of God’s work today.</h2>
        <p>The Children’s Ministry at Send His Word Ministries nurtures children in the knowledge, love and fear of the Lord Jesus Christ through Bible teaching, worship, prayer, scripture recitals, creative presentations and caring fellowship.</p>
        <div class="childrenHeroActions">
          <button class="primaryBtn" data-page="Contact">Enquire About Children’s Ministry</button>
          <button class="secondaryBtn" data-page="Programs">View Weekly Programs</button>
        </div>
      </div>
      <div class="childrenMosaic" aria-label="Children ministry photo highlights">
        <img class="mosaicLarge" src="${heroPhotos[0]}" alt="Children ministering together on stage" />
        <img src="${heroPhotos[1]}" alt="Child ministering with microphone" />
        <img src="${heroPhotos[2]}" alt="Child sharing during children ministry" />
      </div>
    </section>

    <section class="childrenStats">
      <article><strong>Bible</strong><span>Teaching children the Word of God in a simple and memorable way.</span></article>
      <article><strong>Worship</strong><span>Helping children express praise through songs, presentations and scripture.</span></article>
      <article><strong>Care</strong><span>Creating a loving, safe and joyful environment for spiritual growth.</span></article>
    </section>

    <section class="childrenSectionIntro">
      <p class="eyebrow">What children experience</p>
      <h2>Faith formation through learning, worship and creative ministry</h2>
      <p>Our children are encouraged to participate, speak, sing, pray and grow confidently in the presence of God. The ministry is designed to build strong foundations of faith while allowing children to enjoy serving the Lord.</p>
    </section>

    <div class="childrenFeatureGrid">
      ${card('Bible Learning', 'Age-appropriate lessons that help children understand Scripture, prayer, obedience, love, and Christian character.')}
      ${card('Worship & Presentations', 'Children are trained and encouraged to participate in songs, scripture recitals, drama and special presentations.')}
      ${card('Prayer & Spiritual Care', 'Children are taught to pray, trust God, and grow in a caring environment where they feel seen and valued.')}
      ${card('Confidence & Expression', 'The ministry creates opportunities for children to speak, read, sing and serve before the congregation with confidence.')}
      ${card('Family Partnership', 'Parents and guardians are encouraged to support the children as they grow in faith and Christian discipline.')}
      ${card('Safe Fellowship', 'A friendly ministry environment where children can learn, interact and enjoy meaningful Christian fellowship.')}
    </div>

    <section class="childrenGallery">
      <div class="galleryHead simple">
        <div>
          <p class="eyebrow">Pictorial</p>
          <h2>Children’s Ministry in pictures</h2>
        </div>
        <p>Moments from children’s presentations, worship, Bible reading and fellowship.</p>
      </div>
      ${photoCarousel(galleryPhotos, 'Children’s Ministry pictorial', 'childrenPhotoCarousel')}
    </section>

    <section class="childrenProgramBand">
      <div>
        <p class="eyebrow light">Training young hearts</p>
        <h2>Our focus is to help every child know Jesus personally and grow with confidence in God’s Word.</h2>
      </div>
      <div class="childrenProgramList">
        <span>Sunday Bible Lessons</span>
        <span>Children’s Worship</span>
        <span>Scripture Recitals</span>
        <span>Creative Bible Drama</span>
        <span>Prayer Support</span>
        <span>Family Encouragement</span>
      </div>
    </section>

    <section class="childrenScripture">
      <blockquote>
        “Train up a child in the way he should go; and when he is old, he will not depart from it.”
        <span>Proverbs 22:6</span>
      </blockquote>
    </section>
  `);
}

function programsPage() {
  return pageShell('Programs', 'Daily, weekly and seasonal ministry programs', `
    <div class="threeCol">
      ${card('Daily', 'Prayer, devotion, counseling support and WhatsApp encouragement.')}
      ${card('Weekly', 'Sunday celebration service, Bible teaching, youth fellowship and worship practice.')}
      ${card('Seasonal', 'Healing School in May and August, conferences, discipleship intensives and outreach ministry.')}
    </div>
  `);
}

function sermonsPage() {
  return pageShell('Sermons', 'Watch, listen and grow through the Word', `
    <div class="threeCol">
      ${card('Growing Through the Word', 'Matthew 28:19-20. Send His Word Ministries.')}
      ${card('Equipped for the Work of Ministry', 'Ephesians 4:11-13. Fivefold ministry teaching.')}
      ${card('Faith for Divine Health', '3 John 1:2. Healing School teaching.')}
    </div>
  `);
}

function givingPage() {
  return pageShell('Giving', 'Partner with Send His Word Ministries', `
    <div class="twoCol">
      ${card('Local Giving', 'Connect MTN Mobile Money and Airtel Money collection details for tithes, offerings, missions and discipleship support.')}
      ${card('International Giving', 'Provide card, PayPal, bank transfer or other international giving options for partners outside Uganda.')}
    </div>
  `);
}

function contactPage() {
  return pageShell('Contact', 'Visit, call or send a prayer request', `
    <div class="twoCol">
      <section class="darkPanel">
        <h2>Send His Word Ministries</h2>
        <p>Rubaga Road near Furniture House, Kampala Region</p>
        <p>Prayer Lines: 0773 272 195 / 0705 272 195</p>
        <p>YouTube, TikTok, radio ministry and social media outreach.</p>
      </section>
      <form class="formCard">
        <label>Full Name<input required /></label>
        <label>Phone or Email<input required /></label>
        <label>Message<textarea required></textarea></label>
        <button class="primaryBtn">Submit</button>
      </form>
    </div>
  `);
}

function adminPage() {
  if (!adminOk) {
    return `
      <section class="adminLogin">
        <form data-admin-login>
          <img src="/images/shw-logo.png" alt="Send His Word Ministries logo" />
          <h1>Admin Login</h1>
          <p>This hidden page is reserved for Send His Word Ministries content management.</p>
          <label>Password<input type="password" name="password" required placeholder="Enter password" /></label>
          <button class="primaryBtn">Login</button>
          <p class="adminError" data-admin-error></p>
        </form>
      </section>
    `;
  }

  return pageShell('Admin', 'Content management dashboard', `
    <section class="adminBox">
      <div class="threeCol">
        ${card('Sermons', 'Upload sermon videos, audio teachings and YouTube links in the production version.')}
        ${card('Events', 'Add services, conferences, healing school sessions and ministry activities.')}
        ${card('Testimonies', 'Review written, audio and video testimonies before publishing.')}
      </div>
      <div class="introText topSpace">
        <p>This preview dashboard confirms the hidden admin route is available at <b>/admin</b>. Connect a backend or CMS when moving from preview into production content management.</p>
      </div>
    </section>
  `);
}

function footer() {
  return `
    <footer>
      <div>
        <h2>Send His Word Ministries</h2>
        <p>${mandate}</p>
      </div>
      <div class="footerActions">
        <button data-page="Statement of Faith">Statement of Faith</button>
        <button data-page="Giving">Give Online</button>
        <button data-page="Contact">Contact</button>
      </div>
    </footer>
  `;
}

function route() {
  if (currentPage === 'Home') return homePage();
  if (currentPage === 'About') return aboutPage();
  if (currentPage === 'Vision & Mission') return visionMissionPage();
  if (currentPage === 'Statement of Faith') return statementPage();
  if (currentPage === 'Ministries') return ministriesPage();
  if (currentPage === 'Discipleship Ministry') return discipleshipPage();
  if (schoolPages.includes(currentPage)) return schoolPage(currentPage);
  if (currentPage === 'Healing Ministry') return healingPage();
  if (currentPage === "Married's Ministry") return marriedsPage();
  if (currentPage === 'Youth Ministry') return youthPage();
  if (currentPage === "Children's Ministry") return childrenPage();
  if (currentPage === 'Programs') return programsPage();
  if (currentPage === 'Sermons') return sermonsPage();
  if (currentPage === 'Giving') return givingPage();
  if (currentPage === 'Contact') return contactPage();
  if (currentPage === 'Admin') return adminPage();
  return homePage();
}


function setupPhotoCarousels() {
  document.querySelectorAll('[data-photo-carousel]').forEach((carousel) => {
    const total = Number(carousel.dataset.total || 1);
    const track = carousel.querySelector('.photoTrack');
    const dots = Array.from(carousel.querySelectorAll('[data-carousel-dot]'));
    if (!track || total <= 1) return;

    function setSlide(index) {
      const next = (index + total) % total;
      carousel.dataset.current = String(next);
      track.style.transform = `translateX(-${next * 100}%)`;
      dots.forEach((dot, dotIndex) => dot.classList.toggle('active', dotIndex === next));
    }

    carousel.querySelector('[data-carousel-prev]')?.addEventListener('click', () => {
      setSlide(Number(carousel.dataset.current || 0) - 1);
    });
    carousel.querySelector('[data-carousel-next]')?.addEventListener('click', () => {
      setSlide(Number(carousel.dataset.current || 0) + 1);
    });
    dots.forEach((dot) => {
      dot.addEventListener('click', () => setSlide(Number(dot.dataset.carouselDot || 0)));
    });

    const timer = setInterval(() => setSlide(Number(carousel.dataset.current || 0) + 1), 5200);
    carouselTimers.push(timer);
  });
}

function render() {
  carouselTimers.forEach((timer) => clearInterval(timer));
  carouselTimers = [];
  root.innerHTML = `${header()}<main>${route()}</main>${footer()}`;
  bindEvents();
}

function bindEvents() {
  document.querySelectorAll('[data-page]').forEach((element) => {
    element.addEventListener('click', (event) => {
      event.preventDefault();
      goToPage(element.dataset.page);
    });
  });

  const menuButton = document.querySelector('[data-toggle-menu]');
  const mobileNav = document.getElementById('mobileNav');
  if (menuButton && mobileNav) {
    menuButton.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      menuButton.textContent = mobileNav.classList.contains('open') ? 'Close' : 'Menu';
    });
  }

  setupPhotoCarousels();

  document.querySelectorAll('[data-pause-faith], [data-faith-carousel]').forEach((element) => {
    element.addEventListener('click', (event) => {
      event.stopPropagation();
      faithPaused = !faithPaused;
      render();
    });
  });

  const adminForm = document.querySelector('[data-admin-login]');
  if (adminForm) {
    adminForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const password = new FormData(adminForm).get('password');
      if (password === 'sendhisword2026') {
        adminOk = true;
        render();
      } else {
        const error = adminForm.querySelector('[data-admin-error]');
        if (error) error.textContent = 'Incorrect password. Please try again.';
      }
    });
  }
}

window.addEventListener('popstate', () => {
  currentPage = pageFromPath();
  render();
});

render();
