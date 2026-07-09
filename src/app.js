const pages = [
  'Home',
  'About',
  'Statement of Faith',
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

const aboutPages = ['About', 'Vision & Mission'];
const schoolPages = ['Northern Discipleship School', 'Central Discipleship School', 'Western Discipleship School'];

const pageRoutes = {
  'Home': '/',
  'About': '/about',
  'Vision & Mission': '/vision-mission',
  'Statement of Faith': '/statement-of-faith',
  'Ministries': '/ministries',
  'Discipleship Ministry': '/discipleship-ministry',
  'Northern Discipleship School': '/discipleship/northern',
  'Central Discipleship School': '/discipleship/central',
  'Western Discipleship School': '/discipleship/western',
  'Healing Ministry': '/healing-ministry',
  "Married's Ministry": '/marrieds-ministry',
  'Youth Ministry': '/youth-ministry',
  "Children's Ministry": '/childrens-ministry',
  'Programs': '/programs',
  'Sermons': '/sermons',
  'Giving': '/giving',
  'Contact': '/contact',
  'Admin': '/admin'
};

const routePages = Object.fromEntries(Object.entries(pageRoutes).map(([page, path]) => [path, page]));

const mandate = '&ldquo;Making Disciples of All Nations&rdquo; &ndash; Matthew 28:19-20';
const homeVideoClips = [
  { id: 'aiJDQACrfhs', start: 16, title: 'Teaching on the new man in Christ' },
  { id: '5gNDjQX4VSI', start: 18, title: 'God frustrating evil plans' },
  { id: '72Lg3OHen2U', start: 12, title: 'Benefits of being born again' },
  { id: 'ccJIY7ANWLI', start: 20, title: 'Position in Christ sermon' }
];

const ministryImages = {
  'Discipleship Ministry': '/images/schools/central-cover.webp',
  'Healing Ministry': '/images/healing-ministry.png',
  "Married's Ministry": '/images/marrieds/couple-embrace-celebration.webp',
  'Youth Ministry': '/images/youth/youth-worship-team.webp',
  "Children's Ministry": '/images/children/children-choir-wide.webp',
  'Healing School': '/images/healing-ministry.png'
};

const schoolData = {
  'Northern Discipleship School': {
    region: 'Northern',
    cardImage: '/images/schools/northern-cover.webp',
    image: '/images/schools/northern-cover.webp',
    intro: 'The Northern Discipleship School raises and equips believers for Kingdom impact in Northern Uganda through structured biblical teaching, prayer formation, mentoring and practical ministry preparation.',
    pageIntro: 'Through classroom teaching, prayer, pastoral guidance and practical ministry engagement, the Northern Discipleship School equips believers to become grounded, mature and effective servants of Christ in their churches, homes and communities.',
    focus: ['Biblical foundations', 'Prayer and character formation', 'Evangelism and community witness'],
    photos: [
      ['/images/schools/northern-director-speaking.webp', 'Teaching and encouragement during the Northern Discipleship School session'],
      ['/images/schools/northern-cover.webp', 'Northern Discipleship School graduation and celebration moment'],
      ['/images/schools/northern-classroom-session.webp', 'Students gathered and listening during discipleship training'],
      ['/images/schools/northern-participants.webp', 'Participants attentive during a Northern school learning session'],
      ['/images/schools/northern-graduates.webp', 'Northern discipleship graduates standing together'],
      ['/images/schools/northern-word-session.webp', 'A Word-based discipleship session in the Northern school']
    ]
  },
  'Central Discipleship School': {
    region: 'Central',
    cardImage: '/images/schools/central-cover.webp',
    image: '/images/schools/central-cover.webp',
    intro: 'The Central Discipleship School strengthens believers through teaching, prayer and practical discipleship, serving as a central training point for believers who desire to grow deeper in the Word.',
    pageIntro: 'The Central Discipleship School is a place of structured spiritual formation where students are taught, mentored, celebrated and released to serve. It highlights the fruit of commitment, completion and readiness for ministry service.',
    focus: ['Word-based discipleship', 'Fivefold ministry equipping', 'Service and leadership growth'],
    photos: [
      ['/images/schools/central-cover.webp', 'Central Discipleship School graduates and leaders celebrating completion'],
      ['/images/schools/central-graduation-group-one.webp', 'Central school graduation group photo with Director'],
      ['/images/schools/central-graduation-group-two.webp', 'Central school graduates and ministry leaders'],
      ['/images/schools/central-graduation-group-three.webp', 'Central school celebration and commissioning moment']
    ]
  },
  'Western Discipleship School': {
    region: 'Western',
    cardImage: '/images/schools/western-cover.webp',
    image: '/images/schools/western-cover.webp',
    intro: 'The Western Discipleship School builds mature disciples who serve Christ faithfully in their families, churches and communities across the Western region.',
    pageIntro: 'The Western Discipleship School reflects discipleship in community: teaching, fellowship, prayer, mentorship and practical equipping. It brings believers together to grow in the Word and become effective witnesses of Christ.',
    focus: ['Spiritual maturity', 'Family and community witness', 'Practical ministry service'],
    photos: [
      ['/images/schools/western-teaching-session.webp', 'Western school teaching and facilitation moment'],
      ['/images/schools/western-community-group.webp', 'Western Discipleship School leaders and community representatives'],
      ['/images/schools/western-prayer-gathering.webp', 'Prayer and worship gathering at the Western school'],
      ['/images/schools/western-classroom.webp', 'Western classroom discipleship and group learning session']
    ]
  }
};

const leadPastorPhoto = '/images/about/founders-and-senior-pastors.webp';
const leadPastorPhotoThumb = '/images/about/founders-and-senior-pastors.webp';
const discipleshipDirectorPhoto = '/images/discipleship/director-name-placeholder.webp';
const discipleshipCelebrationPhotos = [
  { src: '/images/discipleship/discipleship-graduation-one.webp', title: 'Discipleship school graduation and commissioning moment' },
  { src: '/images/discipleship/discipleship-graduation-two.webp', title: 'Celebrating disciples equipped for ministry service' }
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
let heroVideoTimer = null;

const root = document.getElementById('root');

function pageFromPath() {
  const path = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/';
  return routePages[path] || 'Home';
}

currentPage = pageFromPath();

function goToPage(page) {
  currentPage = page;
  faithPaused = false;
  if (window.location.protocol !== 'file:') {
    window.history.pushState({}, '', pageRoutes[page] || '/');
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
          <span class="logoMark"><img src="/images/send-his-word-logo-original.png" alt="Send His Word Ministries logo" /></span>
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
          ${button('Statement of Faith')}
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
    <section class="hero videoHero">
      <div class="heroMedia">
        ${homeVideoBlend()}
      </div>
      <div class="heroContent">
        <p class="scriptLine">Welcome</p>
        <h1>Send His Word Ministries</h1>
        <h2>${mandate}</h2>
        <p>Equipping and maturing believers through the fivefold ministry to build up the Body of Christ into His fullness.</p>
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

function youtubeBackgroundUrl(clip) {
  return `https://www.youtube-nocookie.com/embed/${clip.id}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1&loop=1&playlist=${clip.id}&start=${clip.start}`;
}

function homeVideoBlend() {
  return `
    <div class="heroVideoBlend" aria-hidden="true">
      ${homeVideoClips.map((clip, index) => `
        <iframe
          class="heroVideoFrame ${index === 0 ? 'active' : ''}"
          data-hero-video="${index}"
          src="${youtubeBackgroundUrl(clip)}"
          title="${clip.title}"
          frameborder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowfullscreen
        ></iframe>
      `).join('')}
    </div>
    <div class="heroVideoTexture"></div>
    <div class="heroVideoShade"></div>
  `;
}

function ministryImageFor(title, target = title) {
  return ministryImages[target] || ministryImages[title] || '/images/healing-ministry.png';
}

function quickCard(title, text, target) {
  const image = ministryImageFor(title, target);
  return `
    <button class="quickCard quickCardPhoto" data-page="${target}">
      <img src="${image}" alt="${title}" />
      <span class="quickOverlay"></span>
      <div>
        <h3>${title}</h3>
        <p>${text}</p>
        <strong>Open page</strong>
      </div>
    </button>
  `;
}

function ministryTile(title) {
  const image = ministryImageFor(title);
  return `
    <button class="ministryTile ministryTilePhoto" data-page="${title}" style="--tile-image: url('${image}')">
      <span class="ministryTileImage"><img src="${image}" alt="${title}" /></span>
      <span class="ministryTileOverlay"></span>
      <span class="ministryTileContent"><h3>${title}</h3><em>Learn more</em></span>
    </button>
  `;
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
      <p>The statements below present the core beliefs of Send His Word Ministries. The first three appear together, then the remaining statements continue in a gentle repeating flow.</p>
      <button class="primaryBtn small" data-pause-faith aria-pressed="${faithPaused ? 'true' : 'false'}">${faithPaused ? 'Play' : 'Pause'}</button>
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
    <section class="introText discipleshipIntro">
      <p>The Discipleship Ministry provides structured biblical teaching, prayer formation, mentoring and ministry preparation for believers who desire to grow deeper and serve faithfully. It exists to equip saints for ministry, raise servant leaders and strengthen the Body of Christ across Uganda and beyond.</p>
    </section>

    ${discipleshipDirectorSection()}

    <section class="discipleshipCelebration">
      <div class="galleryHead">
        <div>
          <p class="eyebrow">Discipleship Milestones</p>
          <h2>Celebrating growth, completion and commissioning</h2>
          <p>These moments represent the fruit of discipleship: believers completing training, being encouraged in the faith, and preparing to serve Christ with greater commitment and maturity.</p>
        </div>
      </div>
      <div class="discipleshipPhotoPair">
        ${discipleshipCelebrationPhotos.map((photo) => `
          <figure>
            <img src="${photo.src}" alt="${photo.title}" />
            <figcaption>${photo.title}</figcaption>
          </figure>
        `).join('')}
      </div>
    </section>

    <div class="threeCol">
      ${schoolCard('Northern Discipleship School', 'Raising and equipping believers for Kingdom impact in Northern Uganda.', '', 'northern')}
      ${schoolCard('Central Discipleship School', 'Strengthening believers through teaching, prayer and practical discipleship.', '', 'central')}
      ${schoolCard('Western Discipleship School', 'Building mature disciples who serve Christ faithfully in their communities.', '', 'western')}
    </div>
  `);
}

function discipleshipDirectorSection() {
  return `
    <section class="leadPastor featuredLeadership discipleshipDirector">
      <div class="pastorPhotoCard directorPhotoCard">
        <img src="${discipleshipDirectorPhoto}" alt="Director of the Discipleship Ministry" />
      </div>
      <div>
        <p class="eyebrow">Director</p>
        <h2>Dr. OLIVE CHIFEFE KOBUSINGYE</h2>
        <p>The Director provides spiritual and administrative oversight to the Discipleship Ministry, ensuring that every school remains grounded in the Word of God, prayer, character formation and practical ministry service. This leadership role supports the coordination of the Northern, Central and Western Discipleship Schools, guiding students toward maturity, service and obedience to the Great Commission.</p>
        <div class="directorHighlights">
          <span>Word-based training</span>
          <span>Prayer formation</span>
          <span>Ministry preparation</span>
        </div>
      </div>
    </section>
  `;
}


function schoolCard(title, text, link, region) {
  const school = schoolData[title];
  const image = school?.cardImage || school?.image || '/images/youth-ministry.png';
  return `
    <article class="card schoolPhotoCard redesignedSchoolCard">
      <div class="schoolCardImage">
        <img src="${image}" alt="${title} cover photo" />
        <span>${region} School</span>
      </div>
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
  const galleryPhotos = school.photos || [[school.image, `${title} pictorial`]];
  return pageShell('Discipleship Ministry', title, `
    <section class="schoolHero redesignedSchoolHero">
      <div class="schoolHeroImage">
        <img src="${school.image}" alt="${title} cover photo" />
      </div>
      <div class="schoolHeroContent">
        <p class="eyebrow">${school.region} Discipleship School</p>
        <h2>${title}</h2>
        <p>${school.pageIntro || school.intro}</p>
        <div class="schoolHeroActions">
          <button class="primaryBtn" data-page="Discipleship Ministry">Back to Discipleship</button>        </div>
      </div>
    </section>

    <section class="schoolFormation">
      <div>
        <p class="eyebrow">Formation Pathway</p>
        <h2>Grounded in the Word. Formed through prayer. Released for service.</h2>
        <p>${school.intro}</p>
      </div>
      <div class="schoolFormationGrid">
        ${school.focus.map((item, index) => `
          <article>
            <span>${String(index + 1).padStart(2, '0')}</span>
            <h3>${item}</h3>
            <p>A core area of spiritual formation, character building and ministry preparation in the ${school.region} school.</p>
          </article>
        `).join('')}
      </div>
    </section>

    <section class="schoolGallery redesignedSchoolGallery">
      <div class="galleryHead simple">
        <div>
          <p class="eyebrow">Pictorial</p>
          <h2>${school.region} Discipleship School in pictures</h2>
        </div>
        <p>Moments of teaching, fellowship, completion and commissioning from the ${school.region} Discipleship School.</p>
      </div>
      ${photoCarousel(galleryPhotos, `${school.region} Discipleship School pictorial`, `schoolPhotoCarousel ${school.region.toLowerCase()}SchoolCarousel`)}
    </section>

    <section class="schoolCallout">
      <p class="eyebrow light">Making disciples of all nations</p>
      <h2>Every trained disciple becomes a vessel for the Word, prayer, service and transformation.</h2>
      <p>The aim of each school is not only completion, but transformation: believers who are grounded in truth, strengthened in faith and ready to serve the Body of Christ.</p>
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
          <img src="/images/send-his-word-logo-original.png" alt="Send His Word Ministries logo" />
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


function setupHeroVideoBlend() {
  if (heroVideoTimer) {
    clearInterval(heroVideoTimer);
    heroVideoTimer = null;
  }

  const frames = Array.from(document.querySelectorAll('[data-hero-video]'));
  if (!frames.length) return;

  let current = 0;
  frames.forEach((frame, index) => frame.classList.toggle('active', index === 0));

  heroVideoTimer = setInterval(() => {
    const next = (current + 1) % frames.length;
    frames[current].classList.remove('active');
    frames[next].classList.add('active');
    current = next;
  }, 14500);
}

function render() {
  carouselTimers.forEach((timer) => clearInterval(timer));
  carouselTimers = [];
  if (heroVideoTimer) {
    clearInterval(heroVideoTimer);
    heroVideoTimer = null;
  }
  root.innerHTML = `${header()}<main>${route()}</main>${footer()}`;
  bindEvents();
}


function setFaithPauseState(paused) {
  faithPaused = paused;

  const carousel = document.querySelector('[data-faith-carousel]');
  const button = document.querySelector('[data-pause-faith]');

  if (carousel) {
    carousel.classList.toggle('paused', faithPaused);
    carousel.setAttribute('aria-live', faithPaused ? 'polite' : 'off');
  }

  if (button) {
    button.textContent = faithPaused ? 'Play' : 'Pause';
    button.setAttribute('aria-pressed', faithPaused ? 'true' : 'false');
    button.setAttribute('title', faithPaused ? 'Continue from this exact card position' : 'Pause at this exact card position');
  }
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
  setupHeroVideoBlend();

  const faithPauseButton = document.querySelector('[data-pause-faith]');
  const faithCarousel = document.querySelector('[data-faith-carousel]');

  if (faithPauseButton) {
    faithPauseButton.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      setFaithPauseState(!faithPaused);
    });
  }

  if (faithCarousel) {
    faithCarousel.addEventListener('click', (event) => {
      if (event.target.closest('[data-pause-faith]')) return;
      setFaithPauseState(!faithPaused);
    });
  }

  setFaithPauseState(faithPaused);

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
