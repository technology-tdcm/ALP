require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const bcrypt = require('bcryptjs');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function seed() {
    console.log('Seeding Supabase database...');

    // Admin user
    const { data: existingUsers } = await supabase.from('users').select('id');
    if (!existingUsers || existingUsers.length === 0) {
        await supabase.from('users').insert([{
            username: 'admin',
            password: bcrypt.hashSync('admin123', 10)
        }]);
        console.log('✓ Admin user created');
    }

    // Programs
    const { data: existingPrograms } = await supabase.from('programs').select('id');
    if (!existingPrograms || existingPrograms.length === 0) {
        await supabase.from('programs').insert([
            { name: 'Online MBA', slug: 'online-mba', level: 'pg', duration: '2 Years', fees: '1.5L - 4L', eligibility: "Bachelor's Degree", description: 'Develop leadership skills.', icon: 'fas fa-chart-line', status: 'active' },
            { name: 'Online MCA', slug: 'online-mca', level: 'pg', duration: '2 Years', fees: '1L - 3L', eligibility: "Bachelor's Degree", description: 'Gain expertise in software development.', icon: 'fas fa-laptop-code', status: 'active' },
            { name: 'Online MCom', slug: 'online-mcom', level: 'pg', duration: '2 Years', fees: '50K - 1.5L', eligibility: "Bachelor's Degree", description: 'Deepen your understanding of finance.', icon: 'fas fa-file-invoice-dollar', status: 'active' },
            { name: 'Online PGDM', slug: 'online-pgdm', level: 'pg', duration: '2 Years', fees: '2L - 5L', eligibility: "Bachelor's Degree", description: 'Master essential management principles.', icon: 'fas fa-award', status: 'active' },
            { name: 'Online MA', slug: 'online-ma', level: 'pg', duration: '2 Years', fees: '30K - 1L', eligibility: "Bachelor's Degree", description: 'Explore arts and humanities.', icon: 'fas fa-palette', status: 'active' },
            { name: 'Online BBA', slug: 'online-bba', level: 'ug', duration: '3 Years', fees: '50K - 2L', eligibility: '10+2', description: 'Develop business skills.', icon: 'fas fa-briefcase', status: 'active' },
            { name: 'Online BCA', slug: 'online-bca', level: 'ug', duration: '3 Years', fees: '50K - 1.5L', eligibility: '10+2', description: 'Master computer applications.', icon: 'fas fa-code', status: 'active' },
            { name: 'Online BCom', slug: 'online-bcom', level: 'ug', duration: '3 Years', fees: '30K - 1L', eligibility: '10+2', description: 'Acquire commerce knowledge.', icon: 'fas fa-calculator', status: 'active' },
            { name: 'Online BA', slug: 'online-ba', level: 'ug', duration: '3 Years', fees: '20K - 80K', eligibility: '10+2', description: 'Explore arts and social sciences.', icon: 'fas fa-book-open', status: 'active' }
        ]);
        console.log('✓ Programs seeded');
    }

    // Universities
    const { data: existingUnis } = await supabase.from('universities').select('id');
    if (!existingUnis || existingUnis.length === 0) {
        await supabase.from('universities').insert([
            { name: 'Amity University Online', slug: 'amity-online', badge: 'AU', description: 'NAAC A+ accredited university.', programs: 'MBA,MCA,BBA,BCA' },
            { name: 'Symbiosis University Online', slug: 'symbiosis-online', badge: 'SU', description: 'Prestigious university with legacy of excellence.', programs: 'MBA,PGDM,BBA,BA' },
            { name: 'Manipal University Online', slug: 'manipal-online', badge: 'MU', description: 'Renowned for quality education.', programs: 'MBA,MCA,MCom,BCA' },
            { name: 'LPU Online', slug: 'lpu-online', badge: 'LPU', description: "India's largest university.", programs: 'MBA,MCA,BBA,BCom' },
            { name: 'Jain University Online', slug: 'jain-online', badge: 'JU', description: 'Known for innovative teaching.', programs: 'MBA,MCom,BBA,BCA' },
            { name: 'NMIMS University Online', slug: 'nmims-online', badge: 'NM', description: 'Premium business school.', programs: 'MBA,PGDM,BBA' },
            { name: 'DY Patil University Online', slug: 'dy-patil-online', badge: 'DP', description: 'Trusted institution with flexible learning.', programs: 'MBA,MCA,BBA,BCA' },
            { name: 'OP Jindal University Online', slug: 'op-jindal-online', badge: 'OP', description: 'Global university with world-class faculty.', programs: 'MBA,BBA,BA' }
        ]);
        console.log('✓ Universities seeded');
    }

    // Page content
    const { data: existingPC } = await supabase.from('page_content').select('id');
    if (!existingPC || existingPC.length === 0) {
        await supabase.from('page_content').insert([
            ['home','hero-badge','India\'s Trusted Education Partner'],
            ['home','hero-title','Transform Your Career with <span class="text-gradient">Online Degrees</span> from Top Universities'],
            ['home','hero-desc','Get personalised guidance from our education experts. Choose from 50+ programs across 15+ accredited universities — all 100% online.'],
            ['home','stat-1-num','50,000+'],
            ['home','stat-1-label','Students Enrolled'],
            ['home','stat-2-num','15+'],
            ['home','stat-2-label','Partner Universities'],
            ['home','stat-3-num','95%'],
            ['home','stat-3-label','Placement Rate'],
            ['home','hero-btn-1','Explore Programs'],
            ['home','hero-btn-2','View Universities'],
            ['home','usp-1-title','15+ Top Universities'],
            ['home','usp-1-desc','Accredited & UGC-recognised'],
            ['home','usp-2-title','Industry-Ready Curriculum'],
            ['home','usp-2-desc','Designed by experts'],
            ['home','usp-3-title','100% Flexible Learning'],
            ['home','usp-3-desc','Study at your own pace'],
            ['home','usp-4-title','Career Acceleration'],
            ['home','usp-4-desc','Dedicated placement support'],
            ['home','uni-section-badge','Our Network'],
            ['home','uni-section-title','Trusted University <span class="text-gradient">Partners</span>'],
            ['home','uni-section-desc','We collaborate with India\'s most reputed universities to bring you world-class online education.'],
            ['home','why-section-badge','Why Choose Us'],
            ['home','why-section-title','Why <span class="text-gradient">Advance Learning Path?</span>'],
            ['home','why-1-title','Learners Empowered'],
            ['home','why-2-title','University Partners'],
            ['home','why-3-title','Top-Rated Programs'],
            ['home','why-4-title','Expert Mentors'],
            ['home','process-section-badge','Simple Steps'],
            ['home','process-section-title','Your Admission <span class="text-gradient">Journey</span>'],
            ['home','process-section-desc','Four simple steps to begin your online learning journey with us.'],
            ['home','process-1-title','Choose & Register'],
            ['home','process-1-desc','Select your preferred program and university, then register with your basic details.'],
            ['home','process-2-title','Share Your Details'],
            ['home','process-2-desc','Provide your educational background and work experience for a tailored fit.'],
            ['home','process-3-title','Secure Your Seat'],
            ['home','process-3-desc','Pay the admission fee for the first semester or opt for the full program payment.'],
            ['home','process-4-title','Submit & Begin'],
            ['home','process-4-desc','Upload your documents, submit the application, and start your learning journey!'],
            ['home','spec-section-badge','Explore Specialisations'],
            ['home','spec-section-title','Courses for <span class="text-gradient">Every Professional</span>'],
            ['home','spec-section-desc','Discover executive-level specialisations designed to fit your busy schedule.'],
            ['home','spec-1-title','Human Resource Management'],
            ['home','spec-2-title','IT & Finance'],
            ['home','spec-3-title','Brand, Sales & Marketing'],
            ['home','spec-4-title','Strategy & Leadership'],
            ['home','spec-5-title','General Management'],
            ['home','spec-6-title','Project & Product Management'],
            ['home','spec-7-title','Business Management'],
            ['home','spec-8-title','Healthcare Management'],
            ['home','programs-section-badge','Our Programs'],
            ['home','programs-section-title','Flexible Online <span class="text-gradient">Programs</span>'],
            ['home','programs-section-desc','Choose from a wide range of postgraduate and undergraduate courses.'],
            ['home','pg-header-title','Master\'s Programs'],
            ['home','pg-header-desc','Advance your career with our comprehensive postgraduate programs.'],
            ['home','ug-header-title','Undergraduate Programs'],
            ['home','ug-header-desc','Kickstart your career with our industry-focused undergraduate degrees.'],
            ['home','cta-title','Ready to Discuss Your Career Opportunities?'],
            ['home','cta-desc','Our team of experienced counsellors is available to help you make the right choice.'],
            ['home','cta-btn-1','Schedule a Call'],
            ['home','cta-btn-2','Chat Now'],
            ['home','faq-section-badge','Got Questions?'],
            ['home','faq-section-title','Frequently Asked <span class="text-gradient">Questions</span>'],
            ['home','faq-1-q','What services does Advance Learning Path offer?'],
            ['home','faq-1-a','We offer personalised career counselling, detailed information on online universities, assistance with application processes, and support throughout your educational journey.'],
            ['home','faq-2-q','How can I contact Advance Learning Path?'],
            ['home','faq-2-a','You can reach us by phone at +91 98765 43210, email us at info@advancelearningpath.com, or fill out the counselling form on our contact page.'],
            ['home','faq-3-q','Are the online degrees recognised by employers?'],
            ['home','faq-3-a','Yes, absolutely. All our partner universities are UGC-recognised and their online degrees hold the same value as regular on-campus degrees.'],
            ['home','faq-4-q','What is the process for applying?'],
            ['home','faq-4-a','Choose a program, enter your basic information, provide employment details if applicable, upload documents, and get counselling from our experts.'],
            ['about','hero-title','About <span class="text-gradient">Advance Learning Path</span>'],
            ['about','hero-desc','Empowering learners across India with expert guidance and world-class online education.'],
            ['about','who-badge','Who We Are'],
            ['about','who-title','Your Trusted Partner in <span class="text-gradient">Online Education</span>'],
            ['about','who-p1','Advance Learning Path is India\'s pioneering online education platform, bringing together top universities and providing students with the best possible educational options. Since 2018, we\'ve been dedicated to simplifying the learning journey for working professionals and students alike.'],
            ['about','who-p2','Our team of 300+ education experts provides personalised career counselling, detailed information on online universities, and complete assistance throughout the admission process.'],
            ['about','feature-1','UGC-recognised university partnerships'],
            ['about','feature-2','50,000+ students successfully enrolled'],
            ['about','feature-3','95% placement assistance rate'],
            ['about','feature-4','Free expert career counselling'],
            ['about','mission-title','Our Mission'],
            ['about','mission-desc','To make quality education accessible to everyone through technology, expert guidance, and partnerships with India\'s top universities.'],
            ['about','vision-title','Our Vision'],
            ['about','vision-desc','To become India\'s most trusted platform for online education, empowering millions of learners to achieve their career goals.'],
            ['about','values-title','Our Values'],
            ['about','values-desc','Integrity, accessibility, personalised guidance, and a commitment to every student\'s success journey.'],
            ['about','stat-1-num','50,000+'],
            ['about','stat-1-title','Students Enrolled'],
            ['about','stat-2-num','15+'],
            ['about','stat-2-title','University Partners'],
            ['about','stat-3-num','50+'],
            ['about','stat-3-title','Programs Offered'],
            ['about','stat-4-num','300+'],
            ['about','stat-4-title','Expert Counsellors'],
            ['about','stat-5-num','95%'],
            ['about','stat-5-title','Placement Rate'],
            ['about','cta-title','Ready to Start Your Learning Journey?'],
            ['about','cta-desc','Connect with our education experts today and find the perfect program for your career goals.'],
            ['about','cta-btn','Get Free Counselling'],
            ['contact','hero-title','Get in <span class="text-gradient">Touch</span>'],
            ['contact','hero-desc','Have questions? Our education experts are here to help you.'],
            ['contact','info-title','Let\'s Start a <span class="text-gradient">Conversation</span>'],
            ['contact','info-desc','Select your role and fill out the form. Our education experts will get back to you within 24 hours.'],
            ['contact','phone-label','Call Us'],
            ['contact','phone-value','+91 98765 43210'],
            ['contact','email-label','Email Us'],
            ['contact','email-value','info@advancelearningpath.com'],
            ['contact','location-label','Visit Us'],
            ['contact','location-value','Gurugram, Haryana, India'],
            ['contact','hours-label','Working Hours'],
            ['contact','hours-value','Mon - Sat: 10:00 AM - 7:00 PM'],
            ['contact','form-title','Contact Us'],
            ['programs','hero-title','Our <span class="text-gradient">Programs</span>'],
            ['programs','hero-desc','Explore 50+ online programs from India\'s top universities.'],
            ['universities','hero-title','Our <span class="text-gradient">University Partners</span>'],
            ['universities','hero-desc','We collaborate with India\'s most reputed universities for world-class online education.'],
            ['blog','hero-title','Blog & <span class="text-gradient">Insights</span>'],
            ['blog','hero-desc','Expert articles on career growth, online education, and industry trends.'],
        ].map(([page, section, content]) => ({ page, section, content })));
        console.log('✓ Page content seeded');
    }

    console.log('\nSeeding complete!');
}

seed().catch(err => {
    console.error('Seed error:', err);
    process.exit(1);
});
