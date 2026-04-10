const programs = {
    mba: {
        slug: 'mba',
        icon: 'fas fa-chart-line',
        fullName: 'Online MBA',
        title: 'Online MBA Programs: Fees, Admission, Syllabus & Eligibility',
        level: 'Postgraduate',
        duration: '2 Years',
        feesRange: '₹1,00,000 - ₹4,00,000',
        eligibility: "Bachelor's Degree (10+2+3/4)",
        heroTitle: 'Advance Your Career with an Online MBA',
        heroDesc: 'An Online MBA is the most sought-after postgraduate degree for working professionals. Our affiliated universities offer flexible, industry-aligned MBA programs with specialisations that match today\'s job market demands.',
        about: 'An Online MBA (Master of Business Administration) is an accredited, highly flexible graduate degree in business administration delivered primarily through digital platforms, mirroring the rigour of on-campus programs. It\'s defined by its hybrid/flexible formats, a strong focus on data analytics, AI, and ESG integration across the curriculum, and the development of human skills like emotional intelligence and leadership. These programs cater to working professionals globally, allowing them to advance their careers immediately while earning a respected qualification and building a diverse, international professional network.',
        benefits: [
            { icon: 'fas fa-laptop', title: '100% Online Learning', desc: 'Study from anywhere with flexible schedules designed for working professionals.' },
            { icon: 'fas fa-rupee-sign', title: 'Affordable Fees', desc: 'Save on relocation, travel, and hostel expenses compared to regular MBA programs.' },
            { icon: 'fas fa-briefcase', title: 'Career Growth', desc: 'Accelerate promotions and transition into leadership roles without leaving your job.' },
            { icon: 'fas fa-users', title: 'Global Network', desc: 'Connect with professionals from diverse industries and backgrounds worldwide.' },
            { icon: 'fas fa-certificate', title: 'UGC Recognised', desc: 'Earn a degree that holds the same value as a regular on-campus MBA.' },
            { icon: 'fas fa-chart-bar', title: 'Industry-Relevant', desc: 'Curriculum updated regularly to match current business trends and demands.' },
            { icon: 'fas fa-chalkboard-teacher', title: 'Expert Faculty', desc: 'Learn from experienced professors and industry practitioners.' },
            { icon: 'fas fa-project-diagram', title: 'Practical Learning', desc: 'Real-world case studies, business simulations, and live projects.' },
            { icon: 'fas fa-handshake', title: 'Placement Support', desc: 'Dedicated career services and placement assistance from universities.' }
        ],
        whoShould: [
            { title: 'Working Professionals', desc: 'Anyone aiming for promotions, leadership roles, or skill upgrades without leaving their job.' },
            { title: 'Career Switchers', desc: 'Ideal for people planning to shift into management, marketing, HR, finance, analytics, or tech roles.' },
            { title: 'Entrepreneurs', desc: 'Perfect for those looking to launch their own business or startup in the digital economy.' },
            { title: 'Fresh Graduates', desc: 'Students seeking a flexible MBA to start their management career with strong foundations.' },
            { title: 'Tech-Savvy Learners', desc: 'Students comfortable with online platforms, virtual classes, and digital collaboration.' },
            { title: 'Budget-Conscious Students', desc: 'Those who want an affordable MBA without relocation, travel, or hostel expenses.' }
        ],
        eligibilityCriteria: [
            'Bachelor\'s degree (10+2+3/4) from a UGC-recognised university',
            'Minimum 50% aggregate score in qualifying degree (45% for reserved categories)',
            '1-3 years of work experience preferred for Executive MBA programs',
            'Valid entrance exam scores (CAT/MAT/XAT/CMAT) preferred by some universities',
            'Some universities offer direct admission based on academic merit'
        ],
        specializations: [
            { name: 'Finance', desc: 'Financial planning, investment management, budgeting, and corporate finance.', icon: 'fas fa-coins' },
            { name: 'Marketing', desc: 'Branding, consumer behaviour, digital marketing strategies, and market research.', icon: 'fas fa-bullhorn' },
            { name: 'Human Resource', desc: 'Talent acquisition, training, employee engagement, and organisational development.', icon: 'fas fa-user-tie' },
            { name: 'Business Analytics', desc: 'Data analysis, predictive modelling, and dashboard-based decision-making.', icon: 'fas fa-chart-line' },
            { name: 'Operations', desc: 'Process optimisation, production planning, supply chain efficiency, and quality control.', icon: 'fas fa-cogs' },
            { name: 'International Business', desc: 'Global trade, cross-border marketing, international finance, and multicultural management.', icon: 'fas fa-globe' },
            { name: 'IT Management', desc: 'IT strategy, tech project management, cybersecurity, and digital transformation.', icon: 'fas fa-laptop-code' },
            { name: 'Entrepreneurship', desc: 'Business planning, innovation, fundraising, and startup management.', icon: 'fas fa-lightbulb' },
            { name: 'Healthcare Management', desc: 'Hospital administration, healthcare policy, medical operations, and quality systems.', icon: 'fas fa-heartbeat' },
            { name: 'Supply Chain', desc: 'Logistics, procurement, inventory management, and end-to-end supply chain.', icon: 'fas fa-truck' },
            { name: 'Project Management', desc: 'Planning, execution, risk management, and delivering projects on time.', icon: 'fas fa-tasks' },
            { name: 'Digital Marketing', desc: 'SEO, social media, analytics, online advertising, and content strategies.', icon: 'fas fa-ad' },
            { name: 'Banking & Finance', desc: 'Risk management, banking operations, insurance, and financial regulations.', icon: 'fas fa-university' },
            { name: 'Retail Management', desc: 'Store operations, merchandising, customer experience, and retail analytics.', icon: 'fas fa-store' },
            { name: 'Data Science', desc: 'Statistics, machine learning, and data tools for business problem-solving.', icon: 'fas fa-database' }
        ],
        syllabus: [
            { semester: 'Semester 1', title: 'Foundation', subjects: ['Managerial Economics', 'Accounting for Managers', 'Statistics for Management', 'Marketing Management', 'Professional Communication'] },
            { semester: 'Semester 2', title: 'Core Management', subjects: ['Conflict Resolution & Management', 'Financial Management', 'Legal Aspects of Business', 'Business Research Methods', 'Human Resource Management'] },
            { semester: 'Semester 3', title: 'Advanced + Specialisation', subjects: ['Strategic Management', 'Minor Project', 'Specialisation Elective 1', 'Specialisation Elective 2', 'Specialisation Elective 3'] },
            { semester: 'Semester 4', title: 'Capstone', subjects: ['Digital Marketing Management', 'Major Project: Social, Economic & Ethical Issues', 'Specialisation Elective 1', 'Specialisation Elective 2'] }
        ],
        skills: ['Strategic Thinking', 'Leadership & Management', 'Financial Analysis', 'Marketing Strategy', 'Data-Driven Decision Making', 'Team Collaboration', 'Communication Skills', 'Problem Solving', 'Project Management', 'Business Analytics', 'Negotiation Skills', 'Emotional Intelligence'],
        fees: [
            { university: 'Amity University Online', fee: '₹1,99,000' },
            { university: 'Manipal University', fee: '₹1,75,000' },
            { university: 'NMIMS Global', fee: '₹1,96,000' },
            { university: 'Shoolini University', fee: '₹2,00,000' },
            { university: 'LPU Online', fee: '₹2,00,000' },
            { university: 'DY Patil University', fee: '₹1,89,400' },
            { university: 'Sharda University', fee: '₹1,00,000' },
            { university: 'Uttaranchal University', fee: '₹98,000' },
            { university: 'Jain University', fee: '₹1,96,000' },
            { university: 'Symbiosis University', fee: '₹2,10,000' },
            { university: 'OP Jindal University', fee: '₹3,50,000' },
            { university: 'Chandigarh University', fee: '₹1,20,000' }
        ],
        universities: [
            { name: 'Amity University Online', badge: 'AU', accreditation: 'NAAC A+', specializations: 'Marketing, HR, Finance, IT, Operations & more' },
            { name: 'Manipal University Jaipur', badge: 'MU', accreditation: 'NAAC A+', specializations: 'HR, Finance, Marketing, Operations, Analytics' },
            { name: 'DY Patil University', badge: 'DP', accreditation: 'NAAC A++', specializations: 'Marketing, HR, Finance, IT, Healthcare' },
            { name: 'Shoolini University', badge: 'SH', accreditation: 'NAAC A+', specializations: 'Marketing, HR, Finance, Biotech, IT' },
            { name: 'Sharda University', badge: 'SHA', accreditation: 'NAAC A+', specializations: 'Marketing, Finance, HR Management' },
            { name: 'Uttaranchal University', badge: 'UU', accreditation: 'NAAC A+', specializations: 'Marketing, Finance, HR Management' },
            { name: 'Jain University', badge: 'JU', accreditation: 'NAAC A++', specializations: 'HR, Finance, Marketing, Systems, IB' },
            { name: 'LPU Online', badge: 'LPU', accreditation: 'NAAC A++', specializations: 'Finance, HR, Marketing, IT, Operations' },
            { name: 'Symbiosis University', badge: 'SU', accreditation: 'NAAC A++', specializations: 'Banking, IT, Business Administration' },
            { name: 'OP Jindal University', badge: 'OP', accreditation: 'NAAC A', specializations: 'Operations, Strategy, Marketing, Finance' },
            { name: 'NMIMS University', badge: 'NM', accreditation: 'NAAC A+', specializations: 'Finance, Marketing, Operations, HR' },
            { name: 'Chandigarh University', badge: 'CU', accreditation: 'NAAC A+', specializations: 'Marketing, Finance, HR, Operations' }
        ],
        admissionSteps: [
            { title: 'Online Registration', desc: 'Fill the application form on the university\'s official website with your basic details.', icon: 'fas fa-file-signature' },
            { title: 'Upload Documents', desc: 'Submit required documents including academic transcripts, ID proof, and photographs.', icon: 'fas fa-cloud-upload-alt' },
            { title: 'Pay Application Fee', desc: 'Complete the payment process through online banking, credit/debit card, or UPI.', icon: 'fas fa-credit-card' },
            { title: 'Assessment & Confirmation', desc: 'The admissions committee reviews your application and sends confirmation via email/SMS.', icon: 'fas fa-check-circle' }
        ],
        jobs: [
            { role: 'Business Analyst', salary: '₹7,00,000' },
            { role: 'Digital Marketing Manager', salary: '₹8,75,000' },
            { role: 'Strategy Manager', salary: '₹25,00,000' },
            { role: 'HR Manager', salary: '₹9,50,000' },
            { role: 'Project Manager', salary: '₹18,50,000' },
            { role: 'AI & Automation Lead', salary: '₹7,00,000' },
            { role: 'Growth Manager', salary: '₹16,00,000' },
            { role: 'Management Consultant', salary: '₹27,67,500' },
            { role: 'Data Analyst', salary: '₹7,00,000' },
            { role: 'Product Manager', salary: '₹20,00,000' }
        ],
        recruiters: ['Google', 'Microsoft', 'Amazon', 'Deloitte', 'TCS', 'Infosys', 'Wipro', 'Flipkart', 'HCL', 'Accenture', 'Citi', 'KPMG'],
        faqs: [
            { q: 'Is an online MBA really worth it?', a: 'Yes, an online MBA can be worth it for career advancement and salary increases, especially when pursued from a reputable and accredited institution. The flexibility allows you to continue working while studying.' },
            { q: 'Is an online MBA equal to a regular MBA?', a: 'Yes, an online MBA is generally considered equal to a traditional MBA in terms of degree value, credibility, and career impact, provided it\'s from a reputable and accredited university recognised by UGC.' },
            { q: 'Do we get a job after an online MBA?', a: 'Yes, an online MBA can get you a job, especially if you choose an accredited program from a reputable university and focus on a high-demand specialisation. Many universities also offer placement assistance.' },
            { q: 'Which university is best for an online MBA?', a: 'Some of the best universities for online MBA are NMIMS, Amity, Symbiosis, Manipal, and DY Patil. The choice depends on your budget, specialisation preference, and career goals.' },
            { q: 'What is the online MBA fees in India?', a: 'The online MBA fees in India range between ₹50,000 to ₹4,00,000 depending on the university, specialisation, and program duration. Most universities offer EMI options.' },
            { q: 'Can I pursue an online MBA while working?', a: 'Absolutely. Online MBA programs are specifically designed for working professionals. Classes are scheduled during evenings and weekends, and all study materials are accessible online.' }
        ]
    },
    mca: {
        slug: 'mca',
        icon: 'fas fa-laptop-code',
        fullName: 'Online MCA',
        title: 'Online MCA Programs: Fees, Admission, Syllabus & Eligibility',
        level: 'Postgraduate',
        duration: '2 Years',
        feesRange: '₹1,00,000 - ₹3,00,000',
        eligibility: "Bachelor's Degree (BCA/BSc IT/BSc CS)",
        heroTitle: 'Master Computer Applications with an Online MCA',
        heroDesc: 'An Online MCA equips you with advanced skills in software development, data science, and cloud computing. Our affiliated universities offer industry-aligned MCA programs designed for the digital age.',
        about: 'An Online MCA (Master of Computer Applications) is a postgraduate degree that provides advanced knowledge in computer science, software development, and information technology. The program covers programming languages, database management, cloud computing, artificial intelligence, and cybersecurity. It\'s designed for students who want to build a career in the IT industry without interrupting their current job or commitments.',
        benefits: [
            { icon: 'fas fa-code', title: 'Industry-Relevant Skills', desc: 'Learn the latest technologies including AI, cloud computing, and cybersecurity.' },
            { icon: 'fas fa-laptop', title: 'Flexible Learning', desc: 'Study at your own pace with recorded lectures and live sessions.' },
            { icon: 'fas fa-rupee-sign', title: 'Cost-Effective', desc: 'Significantly cheaper than regular MCA programs with the same degree value.' },
            { icon: 'fas fa-briefcase', title: 'Career Advancement', desc: 'Transition into senior IT roles with an advanced degree.' },
            { icon: 'fas fa-certificate', title: 'UGC Recognised', desc: 'Degree recognised by UGC and accepted by employers nationwide.' },
            { icon: 'fas fa-project-diagram', title: 'Hands-On Projects', desc: 'Work on real-world projects and build a strong portfolio.' },
            { icon: 'fas fa-chalkboard-teacher', title: 'Expert Faculty', desc: 'Learn from experienced IT professionals and academics.' },
            { icon: 'fas fa-users', title: 'Peer Network', desc: 'Connect with fellow IT professionals and expand your network.' },
            { icon: 'fas fa-chart-line', title: 'High Demand', desc: 'IT professionals with MCA degrees are in high demand across industries.' }
        ],
        whoShould: [
            { title: 'BCA Graduates', desc: 'Students who have completed BCA and want to advance their IT career.' },
            { title: 'IT Professionals', desc: 'Working professionals looking to upskill and move into senior roles.' },
            { title: 'Career Switchers', desc: 'Anyone from a non-IT background wanting to enter the technology sector.' },
            { title: 'Software Developers', desc: 'Developers seeking advanced knowledge in emerging technologies.' },
            { title: 'Data Enthusiasts', desc: 'Those interested in data science, analytics, and machine learning.' },
            { title: 'Budget-Conscious Students', desc: 'Students seeking an affordable postgraduate IT degree.' }
        ],
        eligibilityCriteria: [
            'Bachelor\'s degree in any discipline with Mathematics at 10+2 or graduation level',
            'Minimum 50% aggregate score (45% for reserved categories)',
            'BCA/BSc IT/BSc Computer Science preferred by most universities',
            'Some universities accept graduates from any stream with Mathematics',
            'Work experience in IT is preferred but not mandatory'
        ],
        specializations: [
            { name: 'Software Development', desc: 'Advanced programming, software engineering, and application development.', icon: 'fas fa-code' },
            { name: 'Data Science', desc: 'Machine learning, data analytics, and statistical modelling.', icon: 'fas fa-database' },
            { name: 'Cloud Computing', desc: 'AWS, Azure, Google Cloud, and cloud architecture.', icon: 'fas fa-cloud' },
            { name: 'Cybersecurity', desc: 'Network security, ethical hacking, and information security.', icon: 'fas fa-shield-alt' },
            { name: 'AI & ML', desc: 'Artificial intelligence, deep learning, and neural networks.', icon: 'fas fa-robot' },
            { name: 'Web Development', desc: 'Full-stack development, frameworks, and modern web technologies.', icon: 'fas fa-globe' },
            { name: 'Mobile App Development', desc: 'Android, iOS, and cross-platform application development.', icon: 'fas fa-mobile-alt' },
            { name: 'Database Management', desc: 'SQL, NoSQL, data warehousing, and database administration.', icon: 'fas fa-server' }
        ],
        syllabus: [
            { semester: 'Semester 1', title: 'Foundation', subjects: ['Programming in C & C++', 'Data Structures & Algorithms', 'Computer Organisation', 'Discrete Mathematics', 'Digital Electronics'] },
            { semester: 'Semester 2', title: 'Core Concepts', subjects: ['Operating Systems', 'Database Management Systems', 'Computer Networks', 'Software Engineering', 'Object-Oriented Programming (Java)'] },
            { semester: 'Semester 3', title: 'Advanced Topics', subjects: ['Web Technologies', 'Cloud Computing', 'Artificial Intelligence', 'Minor Project', 'Specialisation Elective'] },
            { semester: 'Semester 4', title: 'Capstone', subjects: ['Machine Learning', 'Cybersecurity', 'Major Project', 'Seminar & Presentation', 'Specialisation Elective'] }
        ],
        skills: ['Programming (C, C++, Java, Python)', 'Database Management', 'Web Development', 'Cloud Computing', 'Data Structures & Algorithms', 'Software Engineering', 'Cybersecurity', 'Machine Learning', 'Problem Solving', 'System Design', 'Project Management', 'Team Collaboration'],
        fees: [
            { university: 'Amity University Online', fee: '₹1,50,000' },
            { university: 'Manipal University', fee: '₹1,40,000' },
            { university: 'LPU Online', fee: '₹1,20,000' },
            { university: 'DY Patil University', fee: '₹1,30,000' },
            { university: 'Jain University', fee: '₹1,50,000' },
            { university: 'Shoolini University', fee: '₹1,10,000' },
            { university: 'Chandigarh University', fee: '₹1,00,000' },
            { university: 'Uttaranchal University', fee: '₹90,000' }
        ],
        universities: [
            { name: 'Amity University Online', badge: 'AU', accreditation: 'NAAC A+', specializations: 'Software Development, Data Science, Cloud Computing' },
            { name: 'Manipal University Jaipur', badge: 'MU', accreditation: 'NAAC A+', specializations: 'Software Engineering, AI, Cybersecurity' },
            { name: 'LPU Online', badge: 'LPU', accreditation: 'NAAC A++', specializations: 'Full Stack, Cloud, Data Science' },
            { name: 'DY Patil University', badge: 'DP', accreditation: 'NAAC A++', specializations: 'Software Development, Web Technologies' },
            { name: 'Jain University', badge: 'JU', accreditation: 'NAAC A++', specializations: 'AI, ML, Data Science' },
            { name: 'Shoolini University', badge: 'SH', accreditation: 'NAAC A+', specializations: 'Cloud Computing, Cybersecurity' },
            { name: 'Chandigarh University', badge: 'CU', accreditation: 'NAAC A+', specializations: 'Software Development, Web Development' },
            { name: 'Uttaranchal University', badge: 'UU', accreditation: 'NAAC A+', specializations: 'IT, Software Engineering' }
        ],
        admissionSteps: [
            { title: 'Online Registration', desc: 'Fill the application form with your personal and academic details.', icon: 'fas fa-file-signature' },
            { title: 'Upload Documents', desc: 'Submit mark sheets, degree certificates, and identity proof.', icon: 'fas fa-cloud-upload-alt' },
            { title: 'Pay Application Fee', desc: 'Complete the fee payment through online methods.', icon: 'fas fa-credit-card' },
            { title: 'Get Admission Confirmation', desc: 'Receive your admission confirmation and access the learning portal.', icon: 'fas fa-check-circle' }
        ],
        jobs: [
            { role: 'Software Developer', salary: '₹6,00,000' },
            { role: 'Full Stack Developer', salary: '₹8,00,000' },
            { role: 'Data Scientist', salary: '₹10,00,000' },
            { role: 'Cloud Architect', salary: '₹15,00,000' },
            { role: 'DevOps Engineer', salary: '₹9,00,000' },
            { role: 'System Analyst', salary: '₹7,50,000' },
            { role: 'Database Administrator', salary: '₹6,50,000' },
            { role: 'Cybersecurity Analyst', salary: '₹8,50,000' },
            { role: 'AI/ML Engineer', salary: '₹12,00,000' },
            { role: 'IT Project Manager', salary: '₹14,00,000' }
        ],
        recruiters: ['TCS', 'Infosys', 'Wipro', 'HCL', 'Tech Mahindra', 'Accenture', 'Cognizant', 'Capgemini', 'IBM', 'Google', 'Microsoft', 'Amazon'],
        faqs: [
            { q: 'Is online MCA valid for government jobs?', a: 'Yes, an online MCA from a UGC-recognised university is valid for government jobs and is considered equivalent to a regular MCA degree.' },
            { q: 'Can I pursue MCA without Mathematics?', a: 'Most universities require Mathematics at 10+2 or graduation level. However, some universities offer bridge courses for students without Mathematics background.' },
            { q: 'What is the scope after online MCA?', a: 'MCA graduates can work as software developers, data scientists, system analysts, cloud architects, and IT project managers. The IT industry offers excellent growth opportunities.' },
            { q: 'Is online MCA easier than regular MCA?', a: 'The curriculum and examination standards are the same. The difference lies in the mode of delivery. Online MCA requires self-discipline and time management.' }
        ]
    },
    mcom: {
        slug: 'mcom',
        icon: 'fas fa-file-invoice-dollar',
        fullName: 'Online MCom',
        title: 'Online MCom Programs: Fees, Admission, Syllabus & Eligibility',
        level: 'Postgraduate',
        duration: '2 Years',
        feesRange: '₹30,000 - ₹1,50,000',
        eligibility: "Bachelor's Degree (BCom/BA/BBA)",
        heroTitle: 'Master Commerce with an Online MCom',
        heroDesc: 'An Online MCom deepens your understanding of finance, accounting, taxation, and business analysis. Perfect for commerce graduates looking to advance their careers in finance and accounting.',
        about: 'An Online MCom (Master of Commerce) is a postgraduate degree that provides advanced knowledge in commerce, accounting, finance, taxation, and business management. The program is designed for commerce graduates who want to specialise in financial management, auditing, taxation, or banking while continuing their current employment. It opens doors to careers in accounting firms, banks, financial institutions, and corporate finance departments.',
        benefits: [
            { icon: 'fas fa-rupee-sign', title: 'Most Affordable PG Degree', desc: 'One of the most cost-effective postgraduate programs available.' },
            { icon: 'fas fa-chart-pie', title: 'Finance Expertise', desc: 'Gain deep knowledge in accounting, taxation, and financial management.' },
            { icon: 'fas fa-laptop', title: 'Study While Working', desc: 'Continue your job while pursuing advanced commerce education.' },
            { icon: 'fas fa-certificate', title: 'UGC Recognised', desc: 'Degree recognised by UGC and accepted across all sectors.' },
            { icon: 'fas fa-briefcase', title: 'Career Growth', desc: 'Qualify for senior roles in accounting, auditing, and finance.' },
            { icon: 'fas fa-chart-line', title: 'CA/CS Preparation', desc: 'Strong foundation for pursuing CA, CS, or CMA qualifications.' },
            { icon: 'fas fa-university', title: 'Banking Careers', desc: 'Ideal preparation for careers in banking and financial services.' },
            { icon: 'fas fa-file-alt', title: 'Taxation Skills', desc: 'Master direct and indirect taxation for professional practice.' },
            { icon: 'fas fa-users', title: 'Networking', desc: 'Connect with commerce professionals and industry experts.' }
        ],
        whoShould: [
            { title: 'BCom Graduates', desc: 'Students who want to deepen their commerce and accounting knowledge.' },
            { title: 'Accounting Professionals', desc: 'Working accountants seeking advanced qualifications for promotions.' },
            { title: 'Banking Professionals', desc: 'Bank employees looking to advance into managerial roles.' },
            { title: 'CA/CS Aspirants', desc: 'Students preparing for professional commerce qualifications.' },
            { title: 'Business Owners', desc: 'Entrepreneurs who want better financial management skills.' },
            { title: 'Career Switchers', desc: 'Anyone looking to enter the finance and accounting sector.' }
        ],
        eligibilityCriteria: [
            'Bachelor\'s degree in Commerce (BCom) or related field from a recognised university',
            'Minimum 45-50% aggregate score in qualifying degree',
            'Some universities accept BA/BBA graduates with Commerce as a subject',
            '5% relaxation for SC/ST/OBC candidates',
            'Work experience in finance/accounting is preferred but not mandatory'
        ],
        specializations: [
            { name: 'Accounting & Finance', desc: 'Advanced accounting, financial analysis, and corporate finance.', icon: 'fas fa-coins' },
            { name: 'Taxation', desc: 'Direct and indirect taxation, GST, and tax planning.', icon: 'fas fa-file-invoice' },
            { name: 'Banking & Insurance', desc: 'Banking operations, insurance principles, and risk management.', icon: 'fas fa-university' },
            { name: 'Auditing', desc: 'Internal audit, statutory audit, and forensic accounting.', icon: 'fas fa-search-dollar' },
            { name: 'Financial Management', desc: 'Investment analysis, portfolio management, and corporate finance.', icon: 'fas fa-chart-line' },
            { name: 'E-Commerce', desc: 'Digital commerce, online payment systems, and e-business.', icon: 'fas fa-shopping-cart' }
        ],
        syllabus: [
            { semester: 'Semester 1', title: 'Core Commerce', subjects: ['Advanced Financial Accounting', 'Business Statistics', 'Economic Analysis', 'Business Law', 'Research Methodology'] },
            { semester: 'Semester 2', title: 'Advanced Topics', subjects: ['Corporate Accounting', 'Income Tax Law & Practice', 'Cost Accounting', 'Business Management', 'Computer Applications in Business'] },
            { semester: 'Semester 3', title: 'Specialisation', subjects: ['Financial Management', 'Auditing & Assurance', 'GST & Indirect Taxes', 'Specialisation Paper 1', 'Specialisation Paper 2'] },
            { semester: 'Semester 4', title: 'Capstone', subjects: ['International Business', 'Strategic Financial Management', 'Dissertation/Project', 'Specialisation Paper 3', 'Viva Voce'] }
        ],
        skills: ['Financial Accounting', 'Taxation & GST', 'Auditing', 'Financial Analysis', 'Cost Accounting', 'Banking Operations', 'Business Law', 'Corporate Finance', 'Data Analysis', 'Communication Skills', 'Problem Solving', 'Ethical Practices'],
        fees: [
            { university: 'Amity University Online', fee: '₹80,000' },
            { university: 'Manipal University', fee: '₹70,000' },
            { university: 'LPU Online', fee: '₹60,000' },
            { university: 'DY Patil University', fee: '₹65,000' },
            { university: 'Jain University', fee: '₹75,000' },
            { university: 'Chandigarh University', fee: '₹45,000' },
            { university: 'Shoolini University', fee: '₹50,000' },
            { university: 'Uttaranchal University', fee: '₹30,000' }
        ],
        universities: [
            { name: 'Amity University Online', badge: 'AU', accreditation: 'NAAC A+', specializations: 'Accounting, Taxation, Banking' },
            { name: 'Manipal University Jaipur', badge: 'MU', accreditation: 'NAAC A+', specializations: 'Finance, Accounting, Auditing' },
            { name: 'LPU Online', badge: 'LPU', accreditation: 'NAAC A++', specializations: 'Accounting, Finance, Taxation' },
            { name: 'DY Patil University', badge: 'DP', accreditation: 'NAAC A++', specializations: 'Accounting, Banking, Finance' },
            { name: 'Jain University', badge: 'JU', accreditation: 'NAAC A++', specializations: 'Finance, Taxation, Auditing' },
            { name: 'Chandigarh University', badge: 'CU', accreditation: 'NAAC A+', specializations: 'Accounting, Finance' },
            { name: 'Shoolini University', badge: 'SH', accreditation: 'NAAC A+', specializations: 'Commerce, Finance' },
            { name: 'Uttaranchal University', badge: 'UU', accreditation: 'NAAC A+', specializations: 'Accounting, Banking' }
        ],
        admissionSteps: [
            { title: 'Online Registration', desc: 'Fill the application form with your personal and academic details.', icon: 'fas fa-file-signature' },
            { title: 'Upload Documents', desc: 'Submit mark sheets, degree certificates, and identity proof.', icon: 'fas fa-cloud-upload-alt' },
            { title: 'Pay Application Fee', desc: 'Complete the fee payment through online methods.', icon: 'fas fa-credit-card' },
            { title: 'Get Admission Confirmation', desc: 'Receive your admission confirmation and access the learning portal.', icon: 'fas fa-check-circle' }
        ],
        jobs: [
            { role: 'Senior Accountant', salary: '₹5,00,000' },
            { role: 'Financial Analyst', salary: '₹6,50,000' },
            { role: 'Tax Consultant', salary: '₹5,50,000' },
            { role: 'Audit Manager', salary: '₹8,00,000' },
            { role: 'Bank Manager', salary: '₹7,00,000' },
            { role: 'Finance Manager', salary: '₹9,00,000' },
            { role: 'Cost Accountant', salary: '₹6,00,000' },
            { role: 'Investment Analyst', salary: '₹7,50,000' }
        ],
        recruiters: ['Deloitte', 'KPMG', 'EY', 'PwC', 'HDFC Bank', 'ICICI Bank', 'SBI', 'Axis Bank', 'TCS', 'Wipro', 'Reliance', 'Tata Group'],
        faqs: [
            { q: 'Is online MCom valid for government jobs?', a: 'Yes, an online MCom from a UGC-recognised university is valid for government jobs including banking, railways, and other public sector positions.' },
            { q: 'Can I pursue CA after online MCom?', a: 'Yes, MCom graduates are eligible to pursue CA, CS, and CMA qualifications. The MCom syllabus overlaps significantly with these professional courses.' },
            { q: 'What is the salary after online MCom?', a: 'MCom graduates can expect salaries ranging from ₹3,00,000 to ₹9,00,000 per annum depending on the role, experience, and organisation.' },
            { q: 'Is MCom better than MBA?', a: 'Both have different focuses. MCom is specialised in commerce and finance, while MBA covers broader business management. Choose based on your career goals.' }
        ]
    },
    pgdm: {
        slug: 'pgdm',
        icon: 'fas fa-award',
        fullName: 'Online PGDM',
        title: 'Online PGDM Programs: Fees, Admission, Syllabus & Eligibility',
        level: 'Postgraduate',
        duration: '2 Years',
        feesRange: '₹2,00,000 - ₹5,00,000',
        eligibility: "Bachelor's Degree (10+2+3/4)",
        heroTitle: 'Advance Your Management Career with Online PGDM',
        heroDesc: 'An Online PGDM (Post Graduate Diploma in Management) offers industry-aligned management education with a practical approach. Perfect for professionals seeking management skills without leaving their job.',
        about: 'An Online PGDM is a postgraduate diploma in management that focuses on practical, industry-oriented management education. Unlike an MBA which is more theoretical, PGDM programs are designed by autonomous institutions that can quickly update their curriculum to match industry needs. The program covers core management subjects along with industry-specific specialisations, making graduates immediately ready for leadership roles.',
        benefits: [
            { icon: 'fas fa-industry', title: 'Industry-Focused', desc: 'Curriculum designed by industry experts for immediate workplace application.' },
            { icon: 'fas fa-sync-alt', title: 'Updated Curriculum', desc: 'Autonomous institutions can update syllabus faster than universities.' },
            { icon: 'fas fa-laptop', title: 'Flexible Learning', desc: 'Study while working with flexible schedules and online delivery.' },
            { icon: 'fas fa-briefcase', title: 'Career Acceleration', desc: 'Fast-track your transition into management and leadership roles.' },
            { icon: 'fas fa-certificate', title: 'AICTE Approved', desc: 'Programs approved by AICTE and recognised by industry.' },
            { icon: 'fas fa-project-diagram', title: 'Practical Projects', desc: 'Industry projects and live case studies as part of the curriculum.' },
            { icon: 'fas fa-chalkboard-teacher', title: 'Expert Faculty', desc: 'Learn from industry practitioners and experienced academics.' },
            { icon: 'fas fa-handshake', title: 'Industry Connect', desc: 'Strong industry partnerships for internships and placements.' },
            { icon: 'fas fa-globe', title: 'Global Exposure', desc: 'International case studies and global business perspectives.' }
        ],
        whoShould: [
            { title: 'Working Professionals', desc: 'Those seeking management qualifications without career breaks.' },
            { title: 'Team Leaders', desc: 'Professionals ready to move into senior management positions.' },
            { title: 'Entrepreneurs', desc: 'Business owners who need formal management education.' },
            { title: 'Career Switchers', desc: 'Professionals transitioning into management roles.' },
            { title: 'Fresh Graduates', desc: 'Students seeking industry-ready management education.' },
            { title: 'Mid-Level Managers', desc: 'Managers looking to formalise their management education.' }
        ],
        eligibilityCriteria: [
            'Bachelor\'s degree (10+2+3/4) from a recognised university',
            'Minimum 50% aggregate score (45% for reserved categories)',
            '1-2 years of work experience preferred by top institutions',
            'Valid entrance exam scores (CAT/MAT/XAT/CMAT/GMAT)',
            'Some institutions conduct their own entrance tests'
        ],
        specializations: [
            { name: 'General Management', desc: 'Comprehensive management education covering all business functions.', icon: 'fas fa-briefcase' },
            { name: 'Marketing Management', desc: 'Brand management, digital marketing, and consumer behaviour.', icon: 'fas fa-bullhorn' },
            { name: 'Financial Management', desc: 'Corporate finance, investment analysis, and financial planning.', icon: 'fas fa-coins' },
            { name: 'Human Resource', desc: 'Talent management, organisational behaviour, and HR analytics.', icon: 'fas fa-user-tie' },
            { name: 'Operations Management', desc: 'Supply chain, logistics, and process optimisation.', icon: 'fas fa-cogs' },
            { name: 'International Business', desc: 'Global trade, cross-cultural management, and international finance.', icon: 'fas fa-globe' },
            { name: 'Business Analytics', desc: 'Data-driven decision making, predictive analytics, and BI tools.', icon: 'fas fa-chart-bar' },
            { name: 'Digital Marketing', desc: 'SEO, social media, content marketing, and digital strategy.', icon: 'fas fa-ad' }
        ],
        syllabus: [
            { semester: 'Semester 1', title: 'Management Foundation', subjects: ['Principles of Management', 'Organisational Behaviour', 'Managerial Economics', 'Business Statistics', 'Financial Accounting'] },
            { semester: 'Semester 2', title: 'Core Management', subjects: ['Marketing Management', 'Financial Management', 'HRM', 'Operations Management', 'Business Research Methods'] },
            { semester: 'Semester 3', title: 'Strategic Management', subjects: ['Strategic Management', 'Business Law', 'Specialisation Paper 1', 'Specialisation Paper 2', 'Industry Project'] },
            { semester: 'Semester 4', title: 'Leadership', subjects: ['Leadership Development', 'Entrepreneurship', 'Specialisation Paper 3', 'Capstone Project', 'Industry Internship'] }
        ],
        skills: ['Strategic Planning', 'Leadership', 'Financial Analysis', 'Marketing Strategy', 'Operations Management', 'Team Building', 'Decision Making', 'Communication', 'Problem Solving', 'Data Analytics', 'Negotiation', 'Project Management'],
        fees: [
            { university: 'Symbiosis University', fee: '₹3,00,000' },
            { university: 'NMIMS University', fee: '₹3,50,000' },
            { university: 'Amity University', fee: '₹2,50,000' },
            { university: 'LPU Online', fee: '₹2,00,000' },
            { university: 'DY Patil University', fee: '₹2,80,000' },
            { university: 'Chandigarh University', fee: '₹2,00,000' }
        ],
        universities: [
            { name: 'Symbiosis University', badge: 'SU', accreditation: 'NAAC A++', specializations: 'Marketing, Finance, HR, Operations' },
            { name: 'NMIMS University', badge: 'NM', accreditation: 'NAAC A+', specializations: 'Finance, Marketing, Operations, Analytics' },
            { name: 'Amity University Online', badge: 'AU', accreditation: 'NAAC A+', specializations: 'General Management, Marketing, Finance' },
            { name: 'LPU Online', badge: 'LPU', accreditation: 'NAAC A++', specializations: 'Marketing, Finance, HR, Operations' },
            { name: 'DY Patil University', badge: 'DP', accreditation: 'NAAC A++', specializations: 'Management, Marketing, Finance' },
            { name: 'Chandigarh University', badge: 'CU', accreditation: 'NAAC A+', specializations: 'Marketing, Finance, HR' }
        ],
        admissionSteps: [
            { title: 'Online Registration', desc: 'Fill the application form with your personal and academic details.', icon: 'fas fa-file-signature' },
            { title: 'Entrance Test', desc: 'Appear for the institution\'s entrance test or submit valid scores.', icon: 'fas fa-pen-alt' },
            { title: 'Pay Application Fee', desc: 'Complete the fee payment through online methods.', icon: 'fas fa-credit-card' },
            { title: 'Get Admission Confirmation', desc: 'Receive your admission confirmation and access the learning portal.', icon: 'fas fa-check-circle' }
        ],
        jobs: [
            { role: 'Business Manager', salary: '₹8,00,000' },
            { role: 'Marketing Manager', salary: '₹9,00,000' },
            { role: 'Financial Analyst', salary: '₹7,50,000' },
            { role: 'HR Manager', salary: '₹8,50,000' },
            { role: 'Operations Manager', salary: '₹9,50,000' },
            { role: 'Management Consultant', salary: '₹15,00,000' },
            { role: 'Product Manager', salary: '₹12,00,000' },
            { role: 'Business Analyst', salary: '₹7,00,000' }
        ],
        recruiters: ['Deloitte', 'KPMG', 'Accenture', 'TCS', 'Infosys', 'HDFC Bank', 'ICICI Bank', 'Amazon', 'Flipkart', 'Reliance', 'Tata Group', 'Aditya Birla Group'],
        faqs: [
            { q: 'Is PGDM equivalent to MBA?', a: 'Yes, PGDM from AICTE-approved institutions is considered equivalent to MBA. Both hold similar value in the job market.' },
            { q: 'Which is better: MBA or PGDM?', a: 'PGDM is more industry-focused with a flexible curriculum, while MBA is more theoretical. Choose based on your learning preference and career goals.' },
            { q: 'Is online PGDM valid?', a: 'Yes, online PGDM from AICTE-approved institutions is valid and recognised by employers across India.' },
            { q: 'What is the salary after PGDM?', a: 'PGDM graduates can expect salaries ranging from ₹5,00,000 to ₹15,00,000 per annum depending on the specialisation and institution.' }
        ]
    },
    ma: {
        slug: 'ma',
        icon: 'fas fa-palette',
        fullName: 'Online MA',
        title: 'Online MA Programs: Fees, Admission, Syllabus & Eligibility',
        level: 'Postgraduate',
        duration: '2 Years',
        feesRange: '₹30,000 - ₹1,00,000',
        eligibility: "Bachelor's Degree (Any Stream)",
        heroTitle: 'Explore Arts & Humanities with an Online MA',
        heroDesc: 'An Online MA offers advanced study in arts, humanities, psychology, and social sciences. Perfect for those seeking flexible postgraduate education in their field of interest.',
        about: 'An Online MA (Master of Arts) is a postgraduate degree that provides advanced knowledge in arts, humanities, social sciences, and related fields. The program covers subjects like English, Psychology, Sociology, Political Science, Economics, and more. It\'s designed for students who want to deepen their understanding of their chosen field while maintaining their current professional or personal commitments.',
        benefits: [
            { icon: 'fas fa-book', title: 'Diverse Subjects', desc: 'Choose from English, Psychology, Sociology, Political Science, and more.' },
            { icon: 'fas fa-laptop', title: 'Flexible Learning', desc: 'Study at your own pace with recorded lectures and online resources.' },
            { icon: 'fas fa-rupee-sign', title: 'Affordable', desc: 'One of the most affordable postgraduate programs available.' },
            { icon: 'fas fa-certificate', title: 'UGC Recognised', desc: 'Degree recognised by UGC and accepted across all sectors.' },
            { icon: 'fas fa-chalkboard-teacher', title: 'Expert Faculty', desc: 'Learn from experienced academics and subject matter experts.' },
            { icon: 'fas fa-briefcase', title: 'Career Growth', desc: 'Qualify for teaching, research, and administrative roles.' },
            { icon: 'fas fa-pen-fancy', title: 'Research Skills', desc: 'Develop strong research and analytical capabilities.' },
            { icon: 'fas fa-users', title: 'Networking', desc: 'Connect with fellow students and professionals in your field.' },
            { icon: 'fas fa-graduation-cap', title: 'PhD Pathway', desc: 'Strong foundation for pursuing doctoral studies.' }
        ],
        whoShould: [
            { title: 'BA Graduates', desc: 'Students who want to deepen their knowledge in arts and humanities.' },
            { title: 'Teachers', desc: 'Educators seeking advanced qualifications for career advancement.' },
            { title: 'Content Writers', desc: 'Writers and journalists looking to strengthen their subject expertise.' },
            { title: 'Social Workers', desc: 'Professionals in social work seeking advanced education.' },
            { title: 'Civil Services Aspirants', desc: 'Students preparing for competitive examinations.' },
            { title: 'Lifelong Learners', desc: 'Anyone passionate about arts, humanities, and social sciences.' }
        ],
        eligibilityCriteria: [
            'Bachelor\'s degree in any discipline from a recognised university',
            'Minimum 45-50% aggregate score in qualifying degree',
            'BA in the relevant subject preferred for some specialisations',
            '5% relaxation for SC/ST/OBC candidates',
            'Some universities conduct entrance tests for specific subjects'
        ],
        specializations: [
            { name: 'English', desc: 'Literature, linguistics, creative writing, and communication.', icon: 'fas fa-book' },
            { name: 'Psychology', desc: 'Clinical psychology, organisational behaviour, and counselling.', icon: 'fas fa-brain' },
            { name: 'Sociology', desc: 'Social structures, community development, and social research.', icon: 'fas fa-users' },
            { name: 'Political Science', desc: 'Governance, international relations, and public policy.', icon: 'fas fa-landmark' },
            { name: 'Economics', desc: 'Micro and macroeconomics, development economics, and econometrics.', icon: 'fas fa-chart-line' },
            { name: 'History', desc: 'Indian and world history, archaeology, and heritage studies.', icon: 'fas fa-monument' }
        ],
        syllabus: [
            { semester: 'Semester 1', title: 'Foundation', subjects: ['Core Subject Paper 1', 'Core Subject Paper 2', 'Research Methodology', 'Communication Skills', 'IT Applications'] },
            { semester: 'Semester 2', title: 'Advanced Study', subjects: ['Core Subject Paper 3', 'Core Subject Paper 4', 'Elective Paper 1', 'Elective Paper 2', 'Practical/Field Work'] },
            { semester: 'Semester 3', title: 'Specialisation', subjects: ['Core Subject Paper 5', 'Elective Paper 3', 'Elective Paper 4', 'Dissertation Part 1', 'Seminar'] },
            { semester: 'Semester 4', title: 'Research', subjects: ['Core Subject Paper 6', 'Elective Paper 5', 'Dissertation Part 2', 'Viva Voce', 'Comprehensive Exam'] }
        ],
        skills: ['Critical Thinking', 'Research & Analysis', 'Communication', 'Writing Skills', 'Cultural Awareness', 'Problem Solving', 'Interpersonal Skills', 'Data Interpretation', 'Presentation Skills', 'Time Management', 'Creative Thinking', 'Ethical Reasoning'],
        fees: [
            { university: 'Amity University Online', fee: '₹60,000' },
            { university: 'Manipal University', fee: '₹50,000' },
            { university: 'LPU Online', fee: '₹40,000' },
            { university: 'Jain University', fee: '₹55,000' },
            { university: 'Chandigarh University', fee: '₹35,000' },
            { university: 'Shoolini University', fee: '₹30,000' }
        ],
        universities: [
            { name: 'Amity University Online', badge: 'AU', accreditation: 'NAAC A+', specializations: 'English, Psychology, Sociology' },
            { name: 'Manipal University Jaipur', badge: 'MU', accreditation: 'NAAC A+', specializations: 'English, Economics, Political Science' },
            { name: 'LPU Online', badge: 'LPU', accreditation: 'NAAC A++', specializations: 'English, Psychology, Sociology' },
            { name: 'Jain University', badge: 'JU', accreditation: 'NAAC A++', specializations: 'Psychology, Economics, English' },
            { name: 'Chandigarh University', badge: 'CU', accreditation: 'NAAC A+', specializations: 'English, Psychology' },
            { name: 'Shoolini University', badge: 'SH', accreditation: 'NAAC A+', specializations: 'English, Sociology' }
        ],
        admissionSteps: [
            { title: 'Online Registration', desc: 'Fill the application form with your personal and academic details.', icon: 'fas fa-file-signature' },
            { title: 'Upload Documents', desc: 'Submit mark sheets, degree certificates, and identity proof.', icon: 'fas fa-cloud-upload-alt' },
            { title: 'Pay Application Fee', desc: 'Complete the fee payment through online methods.', icon: 'fas fa-credit-card' },
            { title: 'Get Admission Confirmation', desc: 'Receive your admission confirmation and access the learning portal.', icon: 'fas fa-check-circle' }
        ],
        jobs: [
            { role: 'Teacher/Professor', salary: '₹4,00,000' },
            { role: 'Content Writer', salary: '₹4,50,000' },
            { role: 'Social Worker', salary: '₹3,50,000' },
            { role: 'Research Analyst', salary: '₹5,00,000' },
            { role: 'Journalist', salary: '₹4,00,000' },
            { role: 'Counsellor', salary: '₹4,50,000' },
            { role: 'Public Relations', salary: '₹5,50,000' },
            { role: 'Civil Services', salary: '₹6,00,000' }
        ],
        recruiters: ['Schools & Colleges', 'NGOs', 'Media Houses', 'Publishing Houses', 'Government Departments', 'Research Institutes', 'Corporate Training', 'Content Agencies'],
        faqs: [
            { q: 'Is online MA valid for teaching jobs?', a: 'Yes, an online MA from a UGC-recognised university is valid for teaching positions in schools and colleges, subject to clearing NET/SET where required.' },
            { q: 'Can I pursue PhD after online MA?', a: 'Yes, you can pursue a PhD after completing an online MA from a UGC-recognised university. You may need to clear NET/JRF for fellowships.' },
            { q: 'What subjects can I study in online MA?', a: 'Common subjects include English, Psychology, Sociology, Political Science, Economics, History, Hindi, and more depending on the university.' },
            { q: 'Is online MA easier than regular MA?', a: 'The curriculum and examination standards are the same. The difference is in the mode of delivery. Online MA requires self-discipline.' }
        ]
    },
    bba: {
        slug: 'bba',
        icon: 'fas fa-briefcase',
        fullName: 'Online BBA',
        title: 'Online BBA Programs: Fees, Admission, Syllabus & Eligibility',
        level: 'Undergraduate',
        duration: '3 Years',
        feesRange: '₹50,000 - ₹2,00,000',
        eligibility: '10+2 (Any Stream)',
        heroTitle: 'Start Your Business Career with an Online BBA',
        heroDesc: 'An Online BBA builds essential business skills and leadership qualities from the ground up. Perfect for students who want a flexible undergraduate business education.',
        about: 'An Online BBA (Bachelor of Business Administration) is an undergraduate degree that provides foundational knowledge in business management, marketing, finance, and human resources. The program is designed for students who want to start their business education early while having the flexibility to work, pursue other interests, or manage personal commitments alongside their studies.',
        benefits: [
            { icon: 'fas fa-graduation-cap', title: 'Early Start', desc: 'Begin your business education right after 12th grade.' },
            { icon: 'fas fa-laptop', title: 'Flexible Study', desc: 'Balance your BBA with work, internships, or other commitments.' },
            { icon: 'fas fa-rupee-sign', title: 'Affordable', desc: 'Cost-effective alternative to regular BBA programs.' },
            { icon: 'fas fa-certificate', title: 'UGC Recognised', desc: 'Degree recognised by UGC and accepted by employers.' },
            { icon: 'fas fa-briefcase', title: 'Career Ready', desc: 'Gain practical business skills from day one.' },
            { icon: 'fas fa-chart-line', title: 'MBA Pathway', desc: 'Strong foundation for pursuing an MBA after graduation.' },
            { icon: 'fas fa-users', title: 'Networking', desc: 'Connect with fellow students and industry professionals.' },
            { icon: 'fas fa-project-diagram', title: 'Practical Learning', desc: 'Case studies, projects, and industry exposure.' },
            { icon: 'fas fa-lightbulb', title: 'Entrepreneurship', desc: 'Learn the fundamentals of starting and running a business.' }
        ],
        whoShould: [
            { title: '12th Pass Students', desc: 'Students who want to pursue business education after school.' },
            { title: 'Working Students', desc: 'Those who need to work while completing their undergraduate degree.' },
            { title: 'Aspiring Entrepreneurs', desc: 'Students who want to start their own business.' },
            { title: 'Career Switchers', desc: 'Anyone looking to enter the business world.' },
            { title: 'MBA Aspirants', desc: 'Students planning to pursue an MBA after graduation.' },
            { title: 'Remote Learners', desc: 'Students in areas without access to good BBA colleges.' }
        ],
        eligibilityCriteria: [
            '10+2 or equivalent from a recognised board',
            'Minimum 45-50% aggregate score in 12th grade',
            'Any stream (Science, Commerce, or Arts) accepted',
            '5% relaxation for SC/ST/OBC candidates',
            'Some universities conduct entrance tests'
        ],
        specializations: [
            { name: 'General Management', desc: 'Comprehensive business education covering all functions.', icon: 'fas fa-briefcase' },
            { name: 'Marketing', desc: 'Brand management, digital marketing, and consumer behaviour.', icon: 'fas fa-bullhorn' },
            { name: 'Finance', desc: 'Accounting, financial management, and investment analysis.', icon: 'fas fa-coins' },
            { name: 'Human Resource', desc: 'Recruitment, training, and organisational behaviour.', icon: 'fas fa-user-tie' },
            { name: 'IT Management', desc: 'Technology management and digital business.', icon: 'fas fa-laptop-code' },
            { name: 'Entrepreneurship', desc: 'Business planning, innovation, and startup management.', icon: 'fas fa-lightbulb' }
        ],
        syllabus: [
            { semester: 'Semester 1', title: 'Foundation', subjects: ['Principles of Management', 'Business Communication', 'Financial Accounting', 'Business Mathematics', 'Computer Applications'] },
            { semester: 'Semester 2', title: 'Core Business', subjects: ['Organisational Behaviour', 'Business Economics', 'Cost Accounting', 'Business Law', 'Environmental Studies'] },
            { semester: 'Semester 3', title: 'Advanced', subjects: ['Marketing Management', 'Financial Management', 'HRM', 'Business Statistics', 'Entrepreneurship'] },
            { semester: 'Semester 4', title: 'Specialisation', subjects: ['Operations Management', 'Business Research', 'Specialisation Paper 1', 'Specialisation Paper 2', 'Soft Skills'] },
            { semester: 'Semester 5', title: 'Advanced Topics', subjects: ['Strategic Management', 'International Business', 'Specialisation Paper 3', 'Specialisation Paper 4', 'Project Work'] },
            { semester: 'Semester 6', title: 'Capstone', subjects: ['Business Ethics', 'E-Commerce', 'Specialisation Paper 5', 'Major Project', 'Industrial Training'] }
        ],
        skills: ['Business Communication', 'Financial Literacy', 'Marketing Basics', 'Team Management', 'Problem Solving', 'Leadership', 'Analytical Thinking', 'Time Management', 'Presentation Skills', 'Entrepreneurship', 'Digital Literacy', 'Critical Thinking'],
        fees: [
            { university: 'Amity University Online', fee: '₹1,20,000' },
            { university: 'Manipal University', fee: '₹1,00,000' },
            { university: 'LPU Online', fee: '₹90,000' },
            { university: 'DY Patil University', fee: '₹1,10,000' },
            { university: 'Jain University', fee: '₹1,20,000' },
            { university: 'Chandigarh University', fee: '₹75,000' },
            { university: 'Shoolini University', fee: '₹60,000' },
            { university: 'Uttaranchal University', fee: '₹50,000' }
        ],
        universities: [
            { name: 'Amity University Online', badge: 'AU', accreditation: 'NAAC A+', specializations: 'Marketing, Finance, HR, IT' },
            { name: 'Manipal University Jaipur', badge: 'MU', accreditation: 'NAAC A+', specializations: 'Marketing, Finance, General' },
            { name: 'LPU Online', badge: 'LPU', accreditation: 'NAAC A++', specializations: 'Marketing, Finance, HR' },
            { name: 'DY Patil University', badge: 'DP', accreditation: 'NAAC A++', specializations: 'Marketing, Finance, IT' },
            { name: 'Jain University', badge: 'JU', accreditation: 'NAAC A++', specializations: 'Finance, Marketing, General' },
            { name: 'Chandigarh University', badge: 'CU', accreditation: 'NAAC A+', specializations: 'Marketing, Finance' },
            { name: 'Shoolini University', badge: 'SH', accreditation: 'NAAC A+', specializations: 'General Management' },
            { name: 'Uttaranchal University', badge: 'UU', accreditation: 'NAAC A+', specializations: 'Marketing, Finance' }
        ],
        admissionSteps: [
            { title: 'Online Registration', desc: 'Fill the application form with your personal and 12th-grade details.', icon: 'fas fa-file-signature' },
            { title: 'Upload Documents', desc: 'Submit 12th mark sheet, identity proof, and photographs.', icon: 'fas fa-cloud-upload-alt' },
            { title: 'Pay Application Fee', desc: 'Complete the fee payment through online methods.', icon: 'fas fa-credit-card' },
            { title: 'Get Admission Confirmation', desc: 'Receive your admission confirmation and access the learning portal.', icon: 'fas fa-check-circle' }
        ],
        jobs: [
            { role: 'Business Executive', salary: '₹3,00,000' },
            { role: 'Sales Executive', salary: '₹3,50,000' },
            { role: 'Marketing Coordinator', salary: '₹3,50,000' },
            { role: 'HR Coordinator', salary: '₹3,00,000' },
            { role: 'Bank PO', salary: '₹4,00,000' },
            { role: 'Operations Executive', salary: '₹3,50,000' },
            { role: 'Startup Founder', salary: 'Variable' },
            { role: 'Management Trainee', salary: '₹4,00,000' }
        ],
        recruiters: ['HDFC Bank', 'ICICI Bank', 'Reliance', 'Tata Group', 'Aditya Birla Group', 'Amazon', 'Flipkart', 'Wipro', 'Tech Mahindra', 'Kotak Bank'],
        faqs: [
            { q: 'Is online BBA valid?', a: 'Yes, an online BBA from a UGC-recognised university is valid and accepted by employers and for higher education.' },
            { q: 'Can I pursue MBA after online BBA?', a: 'Yes, you can pursue an MBA after completing an online BBA. The degree is equivalent to a regular BBA for MBA admissions.' },
            { q: 'What is the salary after BBA?', a: 'BBA graduates can expect starting salaries ranging from ₹2,50,000 to ₹4,50,000 per annum depending on the role and organisation.' },
            { q: 'Is BBA better than BA?', a: 'BBA is more focused on business and management, while BA covers arts and humanities. Choose based on your career interests.' }
        ]
    },
    bca: {
        slug: 'bca',
        icon: 'fas fa-code',
        fullName: 'Online BCA',
        title: 'Online BCA Programs: Fees, Admission, Syllabus & Eligibility',
        level: 'Undergraduate',
        duration: '3 Years',
        feesRange: '₹50,000 - ₹1,50,000',
        eligibility: '10+2 (Any Stream)',
        heroTitle: 'Enter the IT World with an Online BCA',
        heroDesc: 'An Online BCA opens doors to the IT field with fundamentals in computer applications, programming, and software development. Perfect for students passionate about technology.',
        about: 'An Online BCA (Bachelor of Computer Applications) is an undergraduate degree that provides foundational knowledge in computer science, programming, database management, and software development. The program is designed for students who want to build a career in the IT industry while having the flexibility to work, pursue certifications, or manage personal commitments alongside their studies.',
        benefits: [
            { icon: 'fas fa-code', title: 'IT Foundation', desc: 'Build strong programming and computer science fundamentals.' },
            { icon: 'fas fa-laptop', title: 'Flexible Study', desc: 'Learn IT skills while managing other commitments.' },
            { icon: 'fas fa-rupee-sign', title: 'Affordable', desc: 'Cost-effective pathway into the high-paying IT industry.' },
            { icon: 'fas fa-certificate', title: 'UGC Recognised', desc: 'Degree recognised by UGC and accepted by IT employers.' },
            { icon: 'fas fa-briefcase', title: 'High Demand', desc: 'IT professionals are in high demand across all industries.' },
            { icon: 'fas fa-graduation-cap', title: 'MCA Pathway', desc: 'Strong foundation for pursuing an MCA after graduation.' },
            { icon: 'fas fa-project-diagram', title: 'Hands-On Projects', desc: 'Build a portfolio of projects and applications.' },
            { icon: 'fas fa-chart-line', title: 'Career Growth', desc: 'Excellent growth opportunities in the technology sector.' },
            { icon: 'fas fa-users', title: 'Networking', desc: 'Connect with IT professionals and fellow students.' }
        ],
        whoShould: [
            { title: '12th Pass Students', desc: 'Students who want to pursue IT education after school.' },
            { title: 'Tech Enthusiasts', desc: 'Anyone passionate about computers and technology.' },
            { title: 'Career Switchers', desc: 'Those looking to enter the IT industry from another field.' },
            { title: 'MCA Aspirants', desc: 'Students planning to pursue an MCA after graduation.' },
            { title: 'Working Students', desc: 'Those who need to work while completing their degree.' },
            { title: 'Remote Learners', desc: 'Students in areas without access to good BCA colleges.' }
        ],
        eligibilityCriteria: [
            '10+2 or equivalent from a recognised board',
            'Minimum 45-50% aggregate score in 12th grade',
            'Mathematics at 10+2 level preferred by some universities',
            'Any stream (Science, Commerce, or Arts) accepted',
            '5% relaxation for SC/ST/OBC candidates'
        ],
        specializations: [
            { name: 'Software Development', desc: 'Programming, software engineering, and application development.', icon: 'fas fa-code' },
            { name: 'Web Development', desc: 'HTML, CSS, JavaScript, and modern web frameworks.', icon: 'fas fa-globe' },
            { name: 'Data Science', desc: 'Data analytics, statistics, and machine learning basics.', icon: 'fas fa-database' },
            { name: 'Cybersecurity', desc: 'Network security, ethical hacking, and information security.', icon: 'fas fa-shield-alt' },
            { name: 'Cloud Computing', desc: 'Cloud platforms, deployment, and infrastructure management.', icon: 'fas fa-cloud' },
            { name: 'Mobile Development', desc: 'Android, iOS, and cross-platform app development.', icon: 'fas fa-mobile-alt' }
        ],
        syllabus: [
            { semester: 'Semester 1', title: 'Foundation', subjects: ['Computer Fundamentals', 'Programming in C', 'Digital Logic', 'Mathematics for Computing', 'English Communication'] },
            { semester: 'Semester 2', title: 'Core Programming', subjects: ['Data Structures', 'Object-Oriented Programming (C++)', 'Operating Systems', 'Discrete Mathematics', 'Environmental Studies'] },
            { semester: 'Semester 3', title: 'Advanced Topics', subjects: ['Database Management Systems', 'Computer Networks', 'Web Technologies', 'Software Engineering', 'Numerical Methods'] },
            { semester: 'Semester 4', title: 'Specialisation', subjects: ['Java Programming', 'Python Programming', 'Specialisation Paper 1', 'Specialisation Paper 2', 'Mini Project'] },
            { semester: 'Semester 5', title: 'Emerging Tech', subjects: ['Cloud Computing', 'Artificial Intelligence Basics', 'Specialisation Paper 3', 'Specialisation Paper 4', 'Project Work'] },
            { semester: 'Semester 6', title: 'Capstone', subjects: ['Cybersecurity', 'E-Commerce', 'Specialisation Paper 5', 'Major Project', 'Industrial Training'] }
        ],
        skills: ['Programming (C, C++, Java, Python)', 'Web Development', 'Database Management', 'Software Engineering', 'Problem Solving', 'Data Structures', 'Computer Networks', 'Operating Systems', 'Project Management', 'Team Collaboration', 'Analytical Thinking', 'Digital Literacy'],
        fees: [
            { university: 'Amity University Online', fee: '₹1,00,000' },
            { university: 'Manipal University', fee: '₹90,000' },
            { university: 'LPU Online', fee: '₹80,000' },
            { university: 'DY Patil University', fee: '₹85,000' },
            { university: 'Jain University', fee: '₹1,00,000' },
            { university: 'Chandigarh University', fee: '₹60,000' },
            { university: 'Shoolini University', fee: '₹55,000' },
            { university: 'Uttaranchal University', fee: '₹50,000' }
        ],
        universities: [
            { name: 'Amity University Online', badge: 'AU', accreditation: 'NAAC A+', specializations: 'Software Development, Web Development' },
            { name: 'Manipal University Jaipur', badge: 'MU', accreditation: 'NAAC A+', specializations: 'Software Engineering, Data Science' },
            { name: 'LPU Online', badge: 'LPU', accreditation: 'NAAC A++', specializations: 'Web Development, Cloud Computing' },
            { name: 'DY Patil University', badge: 'DP', accreditation: 'NAAC A++', specializations: 'Software Development, Web Technologies' },
            { name: 'Jain University', badge: 'JU', accreditation: 'NAAC A++', specializations: 'Data Science, Cybersecurity' },
            { name: 'Chandigarh University', badge: 'CU', accreditation: 'NAAC A+', specializations: 'Software Development' },
            { name: 'Shoolini University', badge: 'SH', accreditation: 'NAAC A+', specializations: 'Cloud Computing, Cybersecurity' },
            { name: 'Uttaranchal University', badge: 'UU', accreditation: 'NAAC A+', specializations: 'IT, Software Development' }
        ],
        admissionSteps: [
            { title: 'Online Registration', desc: 'Fill the application form with your personal and 12th-grade details.', icon: 'fas fa-file-signature' },
            { title: 'Upload Documents', desc: 'Submit 12th mark sheet, identity proof, and photographs.', icon: 'fas fa-cloud-upload-alt' },
            { title: 'Pay Application Fee', desc: 'Complete the fee payment through online methods.', icon: 'fas fa-credit-card' },
            { title: 'Get Admission Confirmation', desc: 'Receive your admission confirmation and access the learning portal.', icon: 'fas fa-check-circle' }
        ],
        jobs: [
            { role: 'Junior Developer', salary: '₹3,00,000' },
            { role: 'Web Developer', salary: '₹3,50,000' },
            { role: 'Software Tester', salary: '₹3,00,000' },
            { role: 'System Administrator', salary: '₹3,50,000' },
            { role: 'Database Administrator', salary: '₹4,00,000' },
            { role: 'IT Support', salary: '₹2,50,000' },
            { role: 'Technical Analyst', salary: '₹3,50,000' },
            { role: 'App Developer', salary: '₹4,00,000' }
        ],
        recruiters: ['TCS', 'Infosys', 'Wipro', 'HCL', 'Tech Mahindra', 'Cognizant', 'Capgemini', 'Accenture', 'IBM', 'Zoho'],
        faqs: [
            { q: 'Is online BCA valid?', a: 'Yes, an online BCA from a UGC-recognised university is valid and accepted by IT employers and for higher education.' },
            { q: 'Can I pursue MCA after online BCA?', a: 'Yes, you can pursue an MCA after completing an online BCA. The degree is equivalent to a regular BCA for MCA admissions.' },
            { q: 'What is the salary after BCA?', a: 'BCA graduates can expect starting salaries ranging from ₹2,50,000 to ₹4,50,000 per annum depending on the role and organisation.' },
            { q: 'Is BCA better than BSc IT?', a: 'Both are similar. BCA is more application-focused while BSc IT is more theoretical. Choose based on your learning preference.' }
        ]
    },
    bcom: {
        slug: 'bcom',
        icon: 'fas fa-calculator',
        fullName: 'Online BCom',
        title: 'Online BCom Programs: Fees, Admission, Syllabus & Eligibility',
        level: 'Undergraduate',
        duration: '3 Years',
        feesRange: '₹30,000 - ₹1,00,000',
        eligibility: '10+2 (Any Stream)',
        heroTitle: 'Build Your Commerce Foundation with an Online BCom',
        heroDesc: 'An Online BCom provides comprehensive knowledge in commerce, finance, and accounting. Perfect for students who want a flexible commerce education.',
        about: 'An Online BCom (Bachelor of Commerce) is an undergraduate degree that provides foundational knowledge in commerce, accounting, finance, taxation, and business management. The program is designed for students who want to build a career in commerce, banking, or finance while having the flexibility to work, pursue professional courses like CA/CS, or manage personal commitments alongside their studies.',
        benefits: [
            { icon: 'fas fa-graduation-cap', title: 'Commerce Foundation', desc: 'Build strong fundamentals in accounting, finance, and business.' },
            { icon: 'fas fa-laptop', title: 'Flexible Study', desc: 'Study while pursuing CA, CS, or working part-time.' },
            { icon: 'fas fa-rupee-sign', title: 'Most Affordable', desc: 'One of the most affordable undergraduate programs.' },
            { icon: 'fas fa-certificate', title: 'UGC Recognised', desc: 'Degree recognised by UGC and accepted across all sectors.' },
            { icon: 'fas fa-briefcase', title: 'Career Ready', desc: 'Qualify for entry-level roles in accounting, banking, and finance.' },
            { icon: 'fas fa-chart-line', title: 'MCom/MBA Pathway', desc: 'Strong foundation for postgraduate commerce or management studies.' },
            { icon: 'fas fa-file-invoice', title: 'CA/CS Preparation', desc: 'Overlaps with CA and CS syllabus for efficient preparation.' },
            { icon: 'fas fa-university', title: 'Banking Careers', desc: 'Ideal preparation for banking and financial services careers.' },
            { icon: 'fas fa-users', title: 'Networking', desc: 'Connect with commerce professionals and fellow students.' }
        ],
        whoShould: [
            { title: '12th Pass Students', desc: 'Students who want to pursue commerce education after school.' },
            { title: 'CA/CS Aspirants', desc: 'Students preparing for professional commerce qualifications.' },
            { title: 'Working Students', desc: 'Those who need to work while completing their degree.' },
            { title: 'Banking Aspirants', desc: 'Students targeting careers in banking and financial services.' },
            { title: 'Entrepreneurs', desc: 'Those who want to understand business and finance.' },
            { title: 'Remote Learners', desc: 'Students in areas without access to good commerce colleges.' }
        ],
        eligibilityCriteria: [
            '10+2 or equivalent from a recognised board',
            'Minimum 45-50% aggregate score in 12th grade',
            'Any stream accepted (Commerce preferred)',
            '5% relaxation for SC/ST/OBC candidates',
            'Some universities conduct entrance tests'
        ],
        specializations: [
            { name: 'Accounting', desc: 'Financial accounting, cost accounting, and management accounting.', icon: 'fas fa-coins' },
            { name: 'Finance', desc: 'Financial management, investment analysis, and banking.', icon: 'fas fa-chart-line' },
            { name: 'Taxation', desc: 'Income tax, GST, and tax planning.', icon: 'fas fa-file-invoice' },
            { name: 'Banking', desc: 'Banking operations, insurance, and financial services.', icon: 'fas fa-university' },
            { name: 'E-Commerce', desc: 'Digital commerce, online business, and e-payment systems.', icon: 'fas fa-shopping-cart' },
            { name: 'Computer Applications', desc: 'Accounting software, Tally, and business applications.', icon: 'fas fa-laptop-code' }
        ],
        syllabus: [
            { semester: 'Semester 1', title: 'Foundation', subjects: ['Financial Accounting', 'Business Economics', 'Business Organisation', 'Business Mathematics', 'Environmental Studies'] },
            { semester: 'Semester 2', title: 'Core Commerce', subjects: ['Advanced Accounting', 'Business Law', 'Principles of Management', 'Business Statistics', 'Computer Applications'] },
            { semester: 'Semester 3', title: 'Advanced', subjects: ['Corporate Accounting', 'Income Tax', 'Cost Accounting', 'Business Communication', 'E-Commerce'] },
            { semester: 'Semester 4', title: 'Specialisation', subjects: ['Auditing', 'GST', 'Financial Management', 'Specialisation Paper 1', 'Specialisation Paper 2'] },
            { semester: 'Semester 5', title: 'Advanced Topics', subjects: ['Management Accounting', 'Company Law', 'Specialisation Paper 3', 'Specialisation Paper 4', 'Project Work'] },
            { semester: 'Semester 6', title: 'Capstone', subjects: ['International Business', 'Business Ethics', 'Specialisation Paper 5', 'Major Project', 'Industrial Training'] }
        ],
        skills: ['Financial Accounting', 'Taxation', 'Cost Accounting', 'Business Law', 'Banking Operations', 'Financial Analysis', 'Communication Skills', 'Computer Applications', 'Problem Solving', 'Analytical Thinking', 'Time Management', 'Ethical Practices'],
        fees: [
            { university: 'Amity University Online', fee: '₹60,000' },
            { university: 'Manipal University', fee: '₹50,000' },
            { university: 'LPU Online', fee: '₹45,000' },
            { university: 'DY Patil University', fee: '₹50,000' },
            { university: 'Jain University', fee: '₹55,000' },
            { university: 'Chandigarh University', fee: '₹35,000' },
            { university: 'Shoolini University', fee: '₹30,000' },
            { university: 'Uttaranchal University', fee: '₹30,000' }
        ],
        universities: [
            { name: 'Amity University Online', badge: 'AU', accreditation: 'NAAC A+', specializations: 'Accounting, Finance, Taxation' },
            { name: 'Manipal University Jaipur', badge: 'MU', accreditation: 'NAAC A+', specializations: 'Accounting, Finance, Banking' },
            { name: 'LPU Online', badge: 'LPU', accreditation: 'NAAC A++', specializations: 'Accounting, Finance, E-Commerce' },
            { name: 'DY Patil University', badge: 'DP', accreditation: 'NAAC A++', specializations: 'Accounting, Finance' },
            { name: 'Jain University', badge: 'JU', accreditation: 'NAAC A++', specializations: 'Finance, Accounting, Banking' },
            { name: 'Chandigarh University', badge: 'CU', accreditation: 'NAAC A+', specializations: 'Accounting, Finance' },
            { name: 'Shoolini University', badge: 'SH', accreditation: 'NAAC A+', specializations: 'Commerce, Accounting' },
            { name: 'Uttaranchal University', badge: 'UU', accreditation: 'NAAC A+', specializations: 'Accounting, Banking' }
        ],
        admissionSteps: [
            { title: 'Online Registration', desc: 'Fill the application form with your personal and 12th-grade details.', icon: 'fas fa-file-signature' },
            { title: 'Upload Documents', desc: 'Submit 12th mark sheet, identity proof, and photographs.', icon: 'fas fa-cloud-upload-alt' },
            { title: 'Pay Application Fee', desc: 'Complete the fee payment through online methods.', icon: 'fas fa-credit-card' },
            { title: 'Get Admission Confirmation', desc: 'Receive your admission confirmation and access the learning portal.', icon: 'fas fa-check-circle' }
        ],
        jobs: [
            { role: 'Accountant', salary: '₹2,50,000' },
            { role: 'Bank Clerk', salary: '₹3,00,000' },
            { role: 'Tax Assistant', salary: '₹2,50,000' },
            { role: 'Accounts Executive', salary: '₹3,00,000' },
            { role: 'Finance Analyst', salary: '₹3,50,000' },
            { role: 'Audit Assistant', salary: '₹2,50,000' },
            { role: 'Data Entry Operator', salary: '₹2,00,000' },
            { role: 'Business Executive', salary: '₹3,00,000' }
        ],
        recruiters: ['HDFC Bank', 'ICICI Bank', 'SBI', 'Axis Bank', 'Deloitte', 'KPMG', 'TCS', 'Wipro', 'Reliance', 'Tata Group'],
        faqs: [
            { q: 'Is online BCom valid?', a: 'Yes, an online BCom from a UGC-recognised university is valid and accepted by employers and for higher education.' },
            { q: 'Can I pursue CA after online BCom?', a: 'Yes, you can pursue CA after completing an online BCom. Many BCom subjects overlap with the CA syllabus.' },
            { q: 'What is the salary after BCom?', a: 'BCom graduates can expect starting salaries ranging from ₹2,00,000 to ₹3,50,000 per annum depending on the role.' },
            { q: 'Is BCom better than BA?', a: 'BCom is focused on commerce and finance, while BA covers arts and humanities. Choose based on your career interests.' }
        ]
    },
    ba: {
        slug: 'ba',
        icon: 'fas fa-book-open',
        fullName: 'Online BA',
        title: 'Online BA Programs: Fees, Admission, Syllabus & Eligibility',
        level: 'Undergraduate',
        duration: '3 Years',
        feesRange: '₹20,000 - ₹80,000',
        eligibility: '10+2 (Any Stream)',
        heroTitle: 'Explore Arts & Humanities with an Online BA',
        heroDesc: 'An Online BA offers flexible undergraduate education in arts, humanities, and social sciences. Perfect for students who want to study their passion while maintaining flexibility.',
        about: 'An Online BA (Bachelor of Arts) is an undergraduate degree that provides foundational knowledge in arts, humanities, social sciences, and related fields. The program covers subjects like English, History, Political Science, Sociology, Psychology, and Economics. It\'s designed for students who want to pursue their passion for arts and humanities while having the flexibility to work, prepare for competitive exams, or manage personal commitments.',
        benefits: [
            { icon: 'fas fa-book', title: 'Diverse Subjects', desc: 'Choose from English, History, Political Science, Sociology, and more.' },
            { icon: 'fas fa-laptop', title: 'Flexible Study', desc: 'Study at your own pace while pursuing other interests.' },
            { icon: 'fas fa-rupee-sign', title: 'Most Affordable', desc: 'One of the most affordable undergraduate programs available.' },
            { icon: 'fas fa-certificate', title: 'UGC Recognised', desc: 'Degree recognised by UGC and accepted across all sectors.' },
            { icon: 'fas fa-graduation-cap', title: 'MA Pathway', desc: 'Strong foundation for pursuing a Master of Arts.' },
            { icon: 'fas fa-pen-fancy', title: 'Writing Skills', desc: 'Develop strong communication and writing capabilities.' },
            { icon: 'fas fa-users', title: 'Networking', desc: 'Connect with fellow students and professionals in your field.' },
            { icon: 'fas fa-brain', title: 'Critical Thinking', desc: 'Develop analytical and critical thinking abilities.' },
            { icon: 'fas fa-globe', title: 'Cultural Awareness', desc: 'Gain understanding of diverse cultures and societies.' }
        ],
        whoShould: [
            { title: '12th Pass Students', desc: 'Students who want to pursue arts and humanities education.' },
            { title: 'Civil Services Aspirants', desc: 'Students preparing for UPSC and state-level examinations.' },
            { title: 'Content Writers', desc: 'Those looking to build a career in writing and media.' },
            { title: 'Social Workers', desc: 'Students interested in social work and community development.' },
            { title: 'Working Students', desc: 'Those who need to work while completing their degree.' },
            { title: 'Lifelong Learners', desc: 'Anyone passionate about arts, humanities, and social sciences.' }
        ],
        eligibilityCriteria: [
            '10+2 or equivalent from a recognised board',
            'Minimum 45-50% aggregate score in 12th grade',
            'Any stream (Science, Commerce, or Arts) accepted',
            '5% relaxation for SC/ST/OBC candidates',
            'Some universities conduct entrance tests for specific subjects'
        ],
        specializations: [
            { name: 'English', desc: 'Literature, linguistics, creative writing, and communication.', icon: 'fas fa-book' },
            { name: 'Psychology', desc: 'Introduction to psychology, counselling, and behavioural science.', icon: 'fas fa-brain' },
            { name: 'Political Science', desc: 'Governance, public administration, and international relations.', icon: 'fas fa-landmark' },
            { name: 'Sociology', desc: 'Social structures, community development, and social research.', icon: 'fas fa-users' },
            { name: 'History', desc: 'Indian and world history, archaeology, and heritage studies.', icon: 'fas fa-monument' },
            { name: 'Economics', desc: 'Micro and macroeconomics, development, and statistics.', icon: 'fas fa-chart-line' }
        ],
        syllabus: [
            { semester: 'Semester 1', title: 'Foundation', subjects: ['Core Subject Paper 1', 'Core Subject Paper 2', 'English Communication', 'Environmental Studies', 'IT Applications'] },
            { semester: 'Semester 2', title: 'Core Study', subjects: ['Core Subject Paper 3', 'Core Subject Paper 4', 'Elective Paper 1', 'Elective Paper 2', 'Skill Enhancement'] },
            { semester: 'Semester 3', title: 'Advanced', subjects: ['Core Subject Paper 5', 'Core Subject Paper 6', 'Elective Paper 3', 'Elective Paper 4', 'Project Work'] },
            { semester: 'Semester 4', title: 'Specialisation', subjects: ['Core Subject Paper 7', 'Core Subject Paper 8', 'Elective Paper 5', 'Elective Paper 6', 'Field Work'] },
            { semester: 'Semester 5', title: 'Research', subjects: ['Core Subject Paper 9', 'Elective Paper 7', 'Elective Paper 8', 'Dissertation Part 1', 'Seminar'] },
            { semester: 'Semester 6', title: 'Capstone', subjects: ['Core Subject Paper 10', 'Elective Paper 9', 'Dissertation Part 2', 'Viva Voce', 'Comprehensive Exam'] }
        ],
        skills: ['Critical Thinking', 'Communication', 'Writing Skills', 'Research & Analysis', 'Cultural Awareness', 'Problem Solving', 'Interpersonal Skills', 'Presentation Skills', 'Time Management', 'Creative Thinking', 'Ethical Reasoning', 'Data Interpretation'],
        fees: [
            { university: 'Amity University Online', fee: '₹50,000' },
            { university: 'Manipal University', fee: '₹40,000' },
            { university: 'LPU Online', fee: '₹35,000' },
            { university: 'Jain University', fee: '₹45,000' },
            { university: 'Chandigarh University', fee: '₹30,000' },
            { university: 'Shoolini University', fee: '₹25,000' },
            { university: 'Uttaranchal University', fee: '₹20,000' }
        ],
        universities: [
            { name: 'Amity University Online', badge: 'AU', accreditation: 'NAAC A+', specializations: 'English, Psychology, Political Science' },
            { name: 'Manipal University Jaipur', badge: 'MU', accreditation: 'NAAC A+', specializations: 'English, Economics, Political Science' },
            { name: 'LPU Online', badge: 'LPU', accreditation: 'NAAC A++', specializations: 'English, Psychology, Sociology' },
            { name: 'Jain University', badge: 'JU', accreditation: 'NAAC A++', specializations: 'Psychology, Economics, English' },
            { name: 'Chandigarh University', badge: 'CU', accreditation: 'NAAC A+', specializations: 'English, Psychology' },
            { name: 'Shoolini University', badge: 'SH', accreditation: 'NAAC A+', specializations: 'English, Sociology' },
            { name: 'Uttaranchal University', badge: 'UU', accreditation: 'NAAC A+', specializations: 'English, Political Science' }
        ],
        admissionSteps: [
            { title: 'Online Registration', desc: 'Fill the application form with your personal and 12th-grade details.', icon: 'fas fa-file-signature' },
            { title: 'Upload Documents', desc: 'Submit 12th mark sheet, identity proof, and photographs.', icon: 'fas fa-cloud-upload-alt' },
            { title: 'Pay Application Fee', desc: 'Complete the fee payment through online methods.', icon: 'fas fa-credit-card' },
            { title: 'Get Admission Confirmation', desc: 'Receive your admission confirmation and access the learning portal.', icon: 'fas fa-check-circle' }
        ],
        jobs: [
            { role: 'Content Writer', salary: '₹2,50,000' },
            { role: 'Teacher', salary: '₹3,00,000' },
            { role: 'Social Worker', salary: '₹2,50,000' },
            { role: 'Journalist', salary: '₹3,00,000' },
            { role: 'Government Clerk', salary: '₹2,50,000' },
            { role: 'Public Relations', salary: '₹3,50,000' },
            { role: 'Translator', salary: '₹3,00,000' },
            { role: 'Civil Services', salary: '₹6,00,000' }
        ],
        recruiters: ['Schools & Colleges', 'NGOs', 'Media Houses', 'Publishing Houses', 'Government Departments', 'Content Agencies', 'PR Firms', 'Translation Services'],
        faqs: [
            { q: 'Is online BA valid?', a: 'Yes, an online BA from a UGC-recognised university is valid and accepted by employers and for higher education.' },
            { q: 'Can I pursue MA after online BA?', a: 'Yes, you can pursue an MA after completing an online BA. The degree is equivalent to a regular BA for MA admissions.' },
            { q: 'What is the salary after BA?', a: 'BA graduates can expect starting salaries ranging from ₹2,00,000 to ₹3,50,000 per annum depending on the role.' },
            { q: 'Is BA useful for government jobs?', a: 'Yes, a BA degree is eligible for most government examinations including UPSC, SSC, banking, and state-level exams.' }
        ]
    }
};

module.exports = programs;
