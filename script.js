// Project data for modal
const projectsData = {
    1: {
        title: "NKG Habitation Building & Park, Dwarka, Delhi",
        category: "Residential Construction & Urban Development",
        description: `The NKG Habitation Building & Park project in Dwarka, Delhi, stands as one of our flagship residential developments, reflecting our commitment to quality construction, sustainable planning, and community-focused infrastructure. Designed with modern architecture and superior engineering standards, the project provides residents with a safe, comfortable, and environmentally friendly living experience. Every aspect of the development was carefully planned to ensure structural durability while creating aesthetically pleasing surroundings that enhance everyday life.

The integrated landscaped park serves as the heart of the community, featuring beautifully maintained gardens, jogging tracks, children's play areas, outdoor seating spaces, and recreational zones for families and senior citizens. By combining premium residential spaces with green open areas, the project promotes healthier lifestyles and encourages social interaction among residents. Advanced drainage systems, efficient utility planning, and high-quality construction materials ensure long-term sustainability and low maintenance requirements.`,
        features: [
            "Premium residential apartments",
            "Landscaped gardens",
            "Children's play area",
            "Walking & jogging tracks",
            "Community recreation spaces",
            "Sustainable infrastructure",
            "Modern architectural design",
            "Long-term structural durability"
        ]
    },
    2: {
        title: "Railway Neer Drinking Water Bottles",
        category: "Manufacturing & Railway Supply Chain",
        description: `JeevanCure successfully entered the packaged drinking water sector through the manufacturing and large-scale supply of premium Railway Neer drinking water bottles. Produced under strict hygiene protocols and advanced quality-control procedures, every bottle undergoes multiple purification stages including filtration, reverse osmosis, ultraviolet treatment, and ozonization before packaging. Our production facilities follow modern food safety standards to ensure safe drinking water for millions of railway passengers.

The project demonstrates our expertise in managing high-volume manufacturing operations while maintaining consistent quality and reliable logistics. By supplying packaged drinking water across railway stations, we contribute to public health, passenger convenience, and dependable infrastructure support. Continuous monitoring, automated production systems, and efficient distribution networks allow us to meet large-scale demand without compromising product quality.`,
        features: [
            "Advanced purification technology",
            "Hygienic automated bottling",
            "Railway station supply",
            "Quality assurance testing",
            "Safe drinking water",
            "Efficient distribution network",
            "Large-scale manufacturing",
            "Food-grade packaging"
        ]
    },
    3: {
        title: "Railway Bridge Project, Delhi",
        category: "Infrastructure Development",
        description: `The Railway Bridge Project represents JeevanCure's capabilities in executing large-scale infrastructure developments that improve urban mobility and public transportation. The bridge was engineered using modern structural design principles, ensuring maximum safety, durability, and long-term operational efficiency. Every construction phase was carefully planned to minimize disruption while maintaining the highest engineering and safety standards.

The project significantly improved traffic movement by reducing congestion at railway crossings and enhancing connectivity between surrounding regions. Built using premium-grade construction materials and advanced engineering techniques, the bridge is designed to withstand heavy traffic loads and varying environmental conditions. This project reflects our expertise in delivering technically complex infrastructure with precision, quality, and timely execution.`,
        features: [
            "Advanced structural engineering",
            "Improved traffic connectivity",
            "High-strength construction materials",
            "Railway infrastructure expertise",
            "Enhanced public safety",
            "Long operational lifespan",
            "Modern construction techniques",
            "Quality-controlled execution"
        ]
    },
    4: {
        title: "Rainwater Harvesting Projects",
        category: "Environmental Sustainability",
        description: `JeevanCure has successfully designed and installed multiple rainwater harvesting systems across Delhi NCR to support sustainable water management and groundwater recharge initiatives. These systems are engineered to collect, filter, store, and recharge rainwater efficiently, helping reduce dependence on municipal water supplies while conserving one of the country's most valuable natural resources.

Each installation is customized according to site conditions, rainfall patterns, and water consumption requirements. By integrating advanced filtration systems and scientifically designed recharge pits, these projects help prevent water wastage, reduce urban flooding, and improve groundwater levels. Our commitment to environmental sustainability ensures that every project contributes to a greener and more resilient future.`,
        features: [
            "Groundwater recharge",
            "Water conservation",
            "Sustainable infrastructure",
            "Eco-friendly engineering",
            "Customized water solutions",
            "Reduced water wastage",
            "Environmental protection",
            "Long-term resource management"
        ]
    },
    5: {
        title: "Commercial Office Building",
        category: "Commercial Construction",
        description: `Our Commercial Office Building project showcases JeevanCure's expertise in delivering high-performance business infrastructure that combines architectural excellence with operational functionality. Designed for modern organizations, the building incorporates spacious office layouts, energy-efficient systems, premium finishing materials, and flexible workspaces that support productivity and collaboration.

The project includes advanced electrical systems, centralized air conditioning, fire safety infrastructure, parking facilities, high-speed elevators, and modern security systems. By focusing on quality craftsmanship and efficient project management, JeevanCure delivered a workspace that meets the evolving needs of businesses while maintaining superior construction standards and long-term operational value.`,
        features: [
            "Modern office spaces",
            "Premium architecture",
            "Corporate infrastructure",
            "Energy-efficient systems",
            "Parking facilities",
            "Fire safety compliance",
            "High-quality interiors",
            "Business-friendly environment"
        ]
    },
    6: {
        title: "Luxury House Interior Design",
        category: "Interior Design & Turnkey Solutions",
        description: `JeevanCure specializes in designing luxurious residential interiors that combine elegance, comfort, and functionality. Our interior design team works closely with homeowners to create personalized living spaces that reflect individual lifestyles while maximizing comfort and visual appeal. Every project incorporates premium materials, modern aesthetics, intelligent space planning, and meticulous craftsmanship.

From modular kitchens and designer living rooms to luxury bedrooms, false ceilings, customized furniture, lighting solutions, and decorative finishes, our turnkey interior services ensure seamless execution from concept to completion. Attention to detail, innovative design concepts, and uncompromising quality have made us a trusted partner for premium residential interiors across Delhi NCR.`,
        features: [
            "Luxury interior design",
            "Customized furniture",
            "Modular kitchens",
            "Designer lighting",
            "Premium finishes",
            "Smart space planning",
            "Turnkey execution",
            "Elegant modern aesthetics"
        ]
    },
    7: {
        title: "Bollywood Film Production",
        category: "Entertainment & Media",
        description: `JeevanCure has actively participated in India's entertainment industry by collaborating on multiple successful Bollywood productions between 2019 and 2025. Our involvement spans production support, project coordination, logistics management, infrastructure setup, and execution assistance for large-scale film projects featuring renowned actors, directors, and production houses.

Working within the fast-paced film industry requires precise planning, efficient coordination, and reliable execution under demanding schedules. Our experience in managing production logistics has enabled us to contribute to several commercially successful films while maintaining the highest professional standards. This diversified portfolio demonstrates our adaptability across industries beyond traditional infrastructure and construction.`,
        features: [
            "Batla House",
            "Kahaani 2",
            "Bhola",
            "Villain 2",
            "Honsla Rakh",
            "Bhool Bhulaiyaa 2",
            "Other major productions",
            "Full production logistics support"
        ]
    },
    8: {
        title: "Pacific Mall Store Development",
        category: "Retail Development",
        description: `JeevanCure successfully executed complete retail store development at Pacific Mall, delivering an attractive commercial environment that enhances customer engagement and brand visibility. The project included architectural planning, interior fit-outs, lighting design, branding elements, display systems, flooring, ceiling works, and optimized customer circulation layouts.

The store was designed to create an inviting shopping experience while maximizing operational efficiency and product presentation. By integrating premium materials, innovative retail concepts, and modern construction techniques, we delivered a commercial space that aligns with international retail standards and supports long-term business growth.`,
        features: [
            "Complete store setup",
            "Retail interior design",
            "Brand-focused layouts",
            "Premium display systems",
            "Modern lighting",
            "High-quality finishes",
            "Customer-friendly planning",
            "Turnkey project execution"
        ]
    },
    9: {
        title: "Outdoor Advertising & Hoardings",
        category: "Outdoor Advertising (OOH)",
        description: `JeevanCure has successfully planned and executed high-impact outdoor advertising campaigns across some of India's busiest commercial and transportation hubs. Our portfolio includes premium hoarding installations, airport advertising, mall branding, highway billboards, and city-wide outdoor promotional campaigns designed to maximize brand visibility and audience engagement.

With strategic placements at Connaught Place (Delhi), Pacific Mall, Lucknow Airport, Visakhapatnam Airport, and other high-footfall locations, our advertising solutions help businesses reach millions of consumers every month. From design and fabrication to installation, maintenance, and campaign management, we deliver complete outdoor media solutions that combine creativity, engineering excellence, and marketing effectiveness.`,
        features: [
            "Airport advertising",
            "Premium hoardings",
            "Mall branding",
            "Highway billboards",
            "Digital advertising displays",
            "Campaign management",
            "Strategic media placement",
            "Nationwide branding solutions"
        ]
    }
};

// DOM Elements
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

// Navbar scroll effect (only if transparent hero exists)
if (navbar) {
    const isHome = document.body.classList.contains('home-page') || document.querySelector('.hero');
    if (isHome) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    } else {
        // Inner pages always have solid nav
        navbar.classList.add('solid');
    }
}

// Mobile nav toggle
if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile nav on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

// Project filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

if (filterBtns.length) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            projectCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

// Open project modal
const viewMoreBtns = document.querySelectorAll('.btn-view-more');
const modal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');

if (viewMoreBtns.length && modal) {
    viewMoreBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const projectId = btn.dataset.project;
            const project = projectsData[projectId];

            if (project) {
                modalBody.innerHTML = `
                    <span class="modal-category">${project.category}</span>
                    <h2>${project.title}</h2>
                    ${project.description.split('\n\n').map(p => `<p>${p}</p>`).join('')}
                    <h4>Key Features</h4>
                    <ul>
                        ${project.features.map(f => `<li>${f}</li>`).join('')}
                    </ul>
                `;
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (modalClose) modalClose.addEventListener('click', closeModal);
    const overlay = modal.querySelector('.modal-overlay');
    if (overlay) overlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Contact form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        setTimeout(() => {
            submitBtn.textContent = 'Message Sent! ✓';
            submitBtn.style.background = '#10b981';
            
            setTimeout(() => {
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
                alert(`Thank you, ${name}! Your message has been received. Our team will get back to you shortly.`);
            }, 1500);
        }, 1000);
    });
}

// Smooth reveal on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.about-card, .service-card, .project-card, .why-item, .value-card, .process-step, .testimonial-card, .service-detail').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Active nav link highlighting based on current page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html') || (currentPage === 'index.html' && href === 'index.html')) {
        link.classList.add('active');
    }
});
