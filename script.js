// Tailwind Configuration
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#faf5ff', 100: '#f3e8ff', 200: '#e9d5ff', 300: '#d8b4fe',
                    400: '#c084fc', 500: '#a855f7', 600: '#9333ea', 700: '#7e22ce',
                    800: '#6b21a8', 900: '#581c87',
                },
                dark: '#0a0a0a',
            }
        }
    }
}

// ========== DATA LAYER ==========
const navigationItems = [
    { label: "Home", href: "#hero", icon: "fas fa-home" },
    { label: "Our Story", href: "#story", icon: "fas fa-users" },
    { label: "Courses", href: "#pricing", icon: "fas fa-graduation-cap" }
];

const founders = [
    {
        name: "Ian Janzic",
        role: "Brand Strategist",
        image: "https://picsum.photos/400/400?random=10",
        alt: "Ian Janzic, co-founder",
        bio: "Scaled a solo design studio to a 7-figure agency before turning 25. Believes in data-driven personal branding."
    },
    {
        name: "Mohamed Ahmed",
        role: "Growth Hacker",
        image: "https://picsum.photos/400/400?random=11",
        alt: "Mohamed Ahmed, co-founder",
        bio: "Built an online community of 500k+ freelancers. Expert in viral content systems and audience monetization."
    }
];

const pricingCourses = [
    { title: "Basic", price: "$25", description: "Foundations of visibility.", features: ["Core branding workbook", "5 video lessons"], highlighted: false, ctaText: "Start Basic", colorClass: "border-gray-700" },
    { title: "Extra", price: "$37.50", originalPrice: "$75", description: "Accelerated growth toolkit.", features: ["Everything in Basic", "+15 advanced modules"], highlighted: true, ctaText: "Get Extra (50% OFF)", colorClass: "border-primary-500" },
    { title: "Premium", price: "$100", description: "Mastery & delegation.", features: ["Everything in Extra", "1-on-1 strategy call"], highlighted: false, ctaText: "Go Premium", colorClass: "border-purple-400" }
];

const features = [
    { title: "Video Lessons", icon: "fas fa-play-circle", desc: "Bite-sized, actionable videos." },
    { title: "Workbooks", icon: "fas fa-file-alt", desc: "Downloadable resources." },
    { title: "Community", icon: "fas fa-comments", desc: "Network with peers." },
    { title: "Support", icon: "fas fa-headset", desc: "Get questions answered." }
];

// ========== RENDER FUNCTIONS ==========
function init() {
    document.getElementById('nav-list').innerHTML = navigationItems.map(item => `
        <li><a href="${item.href}" class="text-gray-300 hover:text-primary-400 transition-colors flex items-center gap-2">
        <i class="${item.icon} text-sm"></i><span>${item.label}</span></a></li>`).join('');

    document.getElementById('founders-container').innerHTML = founders.map(f => `
        <div class="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 text-center hover:border-primary-500/50 transition-all">
            <img src="${f.image}" alt="${f.alt}" class="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-primary-500/30">
            <h3 class="text-2xl font-bold text-white">${f.name}</h3>
            <p class="text-primary-400 font-medium mb-4">${f.role}</p>
            <p class="text-gray-400">${f.bio}</p>
        </div>`).join('');

    document.getElementById('pricing-cards-container').innerHTML = pricingCourses.map(card => `
        <div class="bg-gradient-to-b from-gray-900 to-black border ${card.colorClass} rounded-2xl p-8 flex flex-col h-full ${card.highlighted ? 'scale-105 shadow-2xl shadow-primary-500/20' : ''}">
            <h3 class="text-2xl font-bold text-white">${card.title}</h3>
            <div class="mt-4 flex items-baseline"><span class="text-5xl font-bold text-white">${card.price}</span></div>
            <ul class="space-y-3 mb-8 mt-6 flex-grow">${card.features.map(feat => `<li class="flex items-start"><i class="fas fa-check text-primary-500 mt-1 mr-3"></i><span class="text-gray-300">${feat}</span></li>`).join('')}</ul>
            <button class="w-full py-3 font-semibold rounded-lg ${card.highlighted ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white' : 'bg-gray-800 text-gray-300'}">${card.ctaText}</button>
        </div>`).join('');

    document.getElementById('features-grid').innerHTML = features.map(feat => `
        <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-6 text-center">
            <i class="${feat.icon} text-4xl text-primary-500 mb-4"></i>
            <h4 class="text-xl font-semibold text-white mb-2">${feat.title}</h4>
            <p class="text-gray-400">${feat.desc}</p>
        </div>`).join('');

    document.getElementById('current-year').textContent = new Date().getFullYear();
}

init();

// Mobile Menu Toggle
const btn = document.getElementById('mobile-menu-button');
const menu = document.getElementById('mobile-menu');
btn.addEventListener('click', () => menu.classList.toggle('hidden'));