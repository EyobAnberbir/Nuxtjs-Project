import{_ as v,r as y,o as D,t as e,v as o,x as s,B as p,y as h,J as r,K as S,L as k,M as P,N as u,O as m,z as f,P as G,Q as $,e as T,R as A}from"./D1Enxy30.js";const B=window.setInterval,H={class:"top"},E={class:"content"},V={class:"textPart"},W={class:"timer"},q={__name:"Top",setup(c){const a=y({hours:5,minutes:0,seconds:0});function l(){const i=B(()=>{a.value.seconds>0?a.value.seconds--:a.value.minutes>0?(a.value.seconds=59,a.value.minutes--):a.value.hours>0?(a.value.minutes=59,a.value.seconds=59,a.value.hours--):clearInterval(i)},1e3)}D(()=>{l()});function d(){alert("Offer redeemed!")}return(i,t)=>(e(),o("div",H,[s("div",E,[s("div",V,[t[0]||(t[0]=s("span",{class:"highlight"},"New-learner offer |",-1)),t[1]||(t[1]=p(" Courses from $10.99. Click the button to see savings. ")),s("span",W,"Ends in "+h(a.value.hours)+"h "+h(a.value.minutes)+"m "+h(a.value.seconds)+"s",1)]),s("div",{class:"button"},[s("button",{onClick:d},"Click to Redeem")])])]))}},j=v(q,[["__scopeId","data-v-53f3515c"]]),O={},U={class:"navbar"};function Y(c,a){return e(),o("div",U,a[0]||(a[0]=[r('<div class="logo" data-v-8bf844e6><img src="https://logowik.com/content/uploads/images/udemy-new-20212512.jpg" alt="logo" data-v-8bf844e6></div><div class="nav-item dropdown" data-v-8bf844e6><span data-v-8bf844e6>Categories</span><div class="dropdown-content" data-v-8bf844e6><a href="#" data-v-8bf844e6>Development</a><a href="#" data-v-8bf844e6>Business</a><a href="#" data-v-8bf844e6>Finance &amp; Accounting</a><a href="#" data-v-8bf844e6>IT &amp; Software</a><a href="#" data-v-8bf844e6>Personal Development</a></div></div><div class="search" data-v-8bf844e6><input type="text" placeholder="🔍 Search" data-v-8bf844e6></div><div class="nav-item" data-v-8bf844e6><span data-v-8bf844e6>Udemy Business</span><div class="card" data-v-8bf844e6><p data-v-8bf844e6> Get your team access to over 27,000 top Udemy courses, anytime, anywhere. </p><button class="try-now-btn" data-v-8bf844e6>Try Now</button></div></div><div class="nav-item" data-v-8bf844e6><span data-v-8bf844e6>Teach on Udemy</span><div class="card" data-v-8bf844e6><p data-v-8bf844e6> Turn what you know into an opportunity and reach millions around the world. </p><button class="learn-more-btn" data-v-8bf844e6>Learn More</button></div></div><div class="cart" data-v-8bf844e6><span data-v-8bf844e6>🛒 Cart</span><div class="card" data-v-8bf844e6><p data-v-8bf844e6>Your cart is empty.<br data-v-8bf844e6>Keep shopping.</p></div></div><div class="auth-buttons" data-v-8bf844e6><button class="login" data-v-8bf844e6>Log In</button><button class="signup" data-v-8bf844e6>Sign Up</button></div>',7)]))}const F=v(O,[["render",Y],["__scopeId","data-v-8bf844e6"]]),N={},R={class:"course-container"};function z(c,a){return e(),o("div",R,a[0]||(a[0]=[r('<span class="course-title" data-v-8e1ac2c7> Google Cloud Professional Cloud Architect: GCP Certification </span><div class="course-details" data-v-8e1ac2c7><div class="best-seller" data-v-8e1ac2c7><span data-v-8e1ac2c7>Best Seller</span></div><span class="rating" data-v-8e1ac2c7> 4.4 star icon <span data-v-8e1ac2c7>(431 ratings)</span></span><span class="students-count" data-v-8e1ac2c7>17,694 students</span></div>',2)]))}const K=v(N,[["render",z],["__scopeId","data-v-8e1ac2c7"]]),J={name:"CourseDetails"},Q={class:"container"};function X(c,a,l,d,i,t){return e(),o("div",Q,a[0]||(a[0]=[r('<div class="left-side" data-v-db8f1dda><span class="category" data-v-db8f1dda> Development &gt; Software Engineering &gt; Google Cloud Professional Cloud Architect </span><h1 class="course-title" data-v-db8f1dda> Google Cloud Professional Cloud Architect: GCP Certification </h1><h3 class="course-description" data-v-db8f1dda> Google Cloud Professional Cloud Architect Certification. Become a GCP Cloud Architect, Latest GCP Exam and Case Studies. </h3><div class="course-details" data-v-db8f1dda><div class="best-seller" data-v-db8f1dda>Best seller</div><div class="rating" data-v-db8f1dda><span class="rating-text" data-v-db8f1dda>4.4</span><span class="star-icon" data-v-db8f1dda> ⭐⭐⭐⭐ </span><span class="ratings-info" data-v-db8f1dda>(431 ratings)</span><span class="students-count" data-v-db8f1dda>17,694 students</span></div></div><div class="creator-info" data-v-db8f1dda><span data-v-db8f1dda> Created By <span class="creator-name" data-v-db8f1dda>Tech Link Sileniyume</span></span><span class="updated-info" data-v-db8f1dda>Last updated 4/2023</span><span class="language-info" data-v-db8f1dda><i class="fas fa-language" data-v-db8f1dda></i> English </span></div></div><div class="right-side" data-v-db8f1dda></div>',2)]))}const Z=v(J,[["render",X],["__scopeId","data-v-db8f1dda"]]),aa={data(){return{showMore:!1,courses:[{id:1,title:"Professional Cloud Architect",provider:"Issued by Google Cloud",image:"https://images.unsplash.com/photo-1730461749751-657b4af6deb5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{id:2,title:"AWS Solutions Architect",provider:"Issued by Amazon Web Services",image:"https://images.unsplash.com/photo-1602085883813-4fd38ac7e4e4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3"},{id:3,title:"Microsoft Azure Architect",provider:"Issued by Microsoft",image:"https://images.unsplash.com/photo-1511200363701-33b2a5679cf6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3"},{id:4,title:"Certified Kubernetes Administrator",provider:"Issued by Cloud Native Computing Foundation",image:"https://images.unsplash.com/photo-1581091012769-d9f5dba19c62?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3"}]}},computed:{visibleCourses(){return this.showMore?this.courses:this.courses.slice(0,2)}},methods:{toggleShowMore(){this.showMore=!this.showMore}}},sa={class:"container"},ta={class:"content"},ea={class:"image-container"},ia=["src"],da={class:"text-content"},oa={class:"course-title"},na={class:"course-provider"};function ca(c,a,l,d,i,t){return e(),o("div",sa,[a[1]||(a[1]=s("div",{class:"header"},[s("span",null,[p(" Prepare for your certifications with these courses. "),s("span",{class:"learn-more"}," Learn more ")])],-1)),s("div",ta,[(e(!0),o(S,null,k(t.visibleCourses,(n,g)=>(e(),o("div",{key:n.id,class:"course-info"},[s("div",ea,[s("img",{class:"course-image",src:n.image,alt:"Course Image"},null,8,ia)]),s("div",da,[s("div",oa,h(n.title),1),s("div",na,h(n.provider),1)])]))),128))]),s("div",{class:"show-more",onClick:a[0]||(a[0]=(...n)=>t.toggleShowMore&&t.toggleShowMore(...n))},h(i.showMore?"Show less":"Show more"),1)])}const la=v(aa,[["render",ca],["__scopeId","data-v-dab72c17"]]),b=P("/images-removebg-preview.png"),ra={},va={class:"course-content"};function fa(c,a){return e(),o("div",va,a[0]||(a[0]=[r('<section class="learning-section" data-v-70c0dab5><h1 class="section-title" data-v-70c0dab5>What you&#39;ll learn</h1><div class="learning-lists" data-v-70c0dab5><ul class="learning-list left" data-v-70c0dab5><li data-v-70c0dab5> Start your journey to become a Google Cloud Certified Professional Cloud Architect </li><li data-v-70c0dab5> Students will learn about data storage options like Persistent disk, Local Disk, Cloud SQL, Cloud DataStore, BigQuery </li><li data-v-70c0dab5> Understand the best practices for building available, scalable, resilient, and secure applications on the Google Cloud Platform </li></ul><ul class="learning-list right" data-v-70c0dab5><li data-v-70c0dab5> Get hands-on with compute, networking, storage, and database services in Google Cloud Platform </li><li data-v-70c0dab5> Understand how to architect and deploy secure and robust applications on Google Cloud Platform </li></ul></div></section><section class="course-includes" data-v-70c0dab5><h1 class="section-title" data-v-70c0dab5>This course includes:</h1><div class="includes-lists" data-v-70c0dab5><ul class="includes-list left" data-v-70c0dab5><li data-v-70c0dab5>22 hours on-demand video</li><li data-v-70c0dab5>16 articles</li><li data-v-70c0dab5>81 downloadable resources</li></ul><ul class="includes-list right" data-v-70c0dab5><li data-v-70c0dab5>Access on mobile and TV</li><li data-v-70c0dab5>Certificate of completion</li></ul></div></section><section class="companies-offer" data-v-70c0dab5><h3 class="section-title" data-v-70c0dab5> Top companies offer this course to their employees </h3><p class="description" data-v-70c0dab5> This course was selected for our collection of top-rated courses trusted by businesses worldwide. <span class="learn-more" data-v-70c0dab5>Learn more</span></p><ul class="companies-logos" data-v-70c0dab5><li data-v-70c0dab5><img src="'+b+'" alt="Company Logo" class="company-logo" data-v-70c0dab5></li><li data-v-70c0dab5><img src="'+b+'" alt="Company Logo" class="company-logo" data-v-70c0dab5></li><li data-v-70c0dab5><img src="'+b+'" alt="Company Logo" class="company-logo" data-v-70c0dab5></li><li data-v-70c0dab5><img src="'+b+'" alt="Company Logo" class="company-logo" data-v-70c0dab5></li></ul></section>',3)]))}const pa=v(ra,[["render",fa],["__scopeId","data-v-70c0dab5"]]),ua={class:"course-content"},ba={class:"sections-placeholder"},ma={key:0,class:"section-dropdown"},ha={key:1,class:"section-dropdown"},ga={key:2,class:"section-dropdown"},_a={key:3,class:"section-dropdown"},wa={__name:"CourseContetents",setup(c){const a=y([!1,!1,!1,!1]);function l(i){a.value[i]=!a.value[i]}function d(i){return a.value[i]}return(i,t)=>(e(),o("div",ua,[t[16]||(t[16]=r('<div class="course-header" data-v-29fb009a><h3 class="course-title" data-v-29fb009a>Course Content</h3></div><div class="course-stats" data-v-29fb009a><div class="stats" data-v-29fb009a><span class="section-details" data-v-29fb009a> 25 Sections • 139 Lectures • 22h 20m Total Length </span></div><div class="expand-section" data-v-29fb009a><span class="expand-all" data-v-29fb009a>Expand All Sections</span></div></div>',2)),s("div",ba,[s("div",{class:"section-item",onClick:t[0]||(t[0]=n=>l(0))},[s("span",{class:u(["icon",{expanded:d(0)}])},[s("i",{class:u(d(0)?"fas fa-chevron-down":"fas fa-chevron-up")},null,2)],2),t[4]||(t[4]=p(" GCP Professional Cloud Architect: Course Introduction ")),t[5]||(t[5]=s("span",{class:"lecture-info"},"5 Lectures • 19min",-1))]),d(0)?(e(),o("div",ma,t[6]||(t[6]=[r("<ul data-v-29fb009a><li data-v-29fb009a>Lecture 1: Introduction to GCP <span data-v-29fb009a>05:26</span></li><li data-v-29fb009a>Lecture 2: Setting up GCP Account <span data-v-29fb009a>05:26</span></li><li data-v-29fb009a>Lecture 3: Exploring GCP Services <span data-v-29fb009a>05:26</span></li><li data-v-29fb009a>Lecture 4: GCP Networking <span data-v-29fb009a>05:26</span></li><li data-v-29fb009a>Lecture 5: Exam Preparation <span data-v-29fb009a>05:26</span></li></ul>",1)]))):m("",!0),s("div",{class:"section-item",onClick:t[1]||(t[1]=n=>l(1))},[s("span",{class:u(["icon",{expanded:d(1)}])},[s("i",{class:u(d(1)?"fas fa-chevron-down":"fas fa-chevron-up")},null,2)],2),t[7]||(t[7]=p(" GCP Infrastructure: Virtual Machines and Networking ")),t[8]||(t[8]=s("span",{class:"lecture-info"},"7 Lectures • 45min",-1))]),d(1)?(e(),o("div",ha,t[9]||(t[9]=[r("<ul data-v-29fb009a><li data-v-29fb009a>Lecture 1: Virtual Machines in GCP <span data-v-29fb009a>06:15</span></li><li data-v-29fb009a>Lecture 2: Networking in GCP <span data-v-29fb009a>05:20</span></li><li data-v-29fb009a>Lecture 3: Configuring Firewalls <span data-v-29fb009a>07:30</span></li><li data-v-29fb009a>Lecture 4: VPCs and Subnets <span data-v-29fb009a>05:50</span></li><li data-v-29fb009a>Lecture 5: Load Balancing in GCP <span data-v-29fb009a>05:40</span></li><li data-v-29fb009a>Lecture 6: GCP Security Best Practices <span data-v-29fb009a>06:00</span></li><li data-v-29fb009a> Lecture 7: Preparing for the Networking Exam <span data-v-29fb009a>07:10</span></li></ul>",1)]))):m("",!0),s("div",{class:"section-item",onClick:t[2]||(t[2]=n=>l(2))},[s("span",{class:u(["icon",{expanded:d(2)}])},[s("i",{class:u(d(2)?"fas fa-chevron-down":"fas fa-chevron-up")},null,2)],2),t[10]||(t[10]=p(" GCP Storage Solutions and Management ")),t[11]||(t[11]=s("span",{class:"lecture-info"},"4 Lectures • 30min",-1))]),d(2)?(e(),o("div",ga,t[12]||(t[12]=[s("ul",null,[s("li",null,[p("Lecture 1: Introduction to GCP Storage "),s("span",null,"08:10")]),s("li",null,[p("Lecture 2: Cloud Storage Buckets "),s("span",null,"06:20")]),s("li",null,[p("Lecture 3: Databases in GCP "),s("span",null,"07:50")]),s("li",null,[p(" Lecture 4: GCP Storage Security and Best Practices "),s("span",null,"08:10")])],-1)]))):m("",!0),s("div",{class:"section-item",onClick:t[3]||(t[3]=n=>l(3))},[s("span",{class:u(["icon",{expanded:d(3)}])},[s("i",{class:u(d(3)?"fas fa-chevron-down":"fas fa-chevron-up")},null,2)],2),t[13]||(t[13]=p(" GCP Security: Best Practices and Tools ")),t[14]||(t[14]=s("span",{class:"lecture-info"},"6 Lectures • 40min",-1))]),d(3)?(e(),o("div",_a,t[15]||(t[15]=[r('<ul data-v-29fb009a><li data-v-29fb009a> Lecture 1: GCP Security Overview <span class="lecture-time" data-v-29fb009a>07:30</span></li><li data-v-29fb009a>Lecture 2: IAM in GCP <span class="lecture-time" data-v-29fb009a>06:50</span></li><li data-v-29fb009a> Lecture 3: Cloud Security Tools <span class="lecture-time" data-v-29fb009a>07:10</span></li><li data-v-29fb009a> Lecture 4: Secure Access and Identity <span class="lecture-time" data-v-29fb009a>06:00</span></li><li data-v-29fb009a> Lecture 5: Monitoring and Auditing in GCP <span class="lecture-time" data-v-29fb009a>06:30</span></li><li data-v-29fb009a> Lecture 6: Preparing for the Security Exam <span class="lecture-time" data-v-29fb009a>06:10</span></li></ul>',1)]))):m("",!0)]),t[17]||(t[17]=s("div",{class:"more-sections"},"15 more sections",-1))]))}},xa=v(wa,[["__scopeId","data-v-29fb009a"]]),Ca={name:"GoogleCloudCertificationCourse",data(){return{isExpanded:!1}},methods:{toggleExpand(){this.isExpanded=!this.isExpanded}}},ya={class:"course-container"},Ga={key:0,class:"additional-content"};function $a(c,a,l,d,i,t){return e(),o("div",ya,[a[2]||(a[2]=s("h1",null," Google Cloud Platform (GCP) Professional Cloud Architect Certification ",-1)),a[3]||(a[3]=s("section",{class:"description"},[s("h2",null,"Description"),s("p",null," Google Cloud Platform is one of the fastest-growing cloud service platforms offered today that lets you run your applications and data workflows at a 'Google-sized' scale. "),s("p",null," The Google Cloud Certified Professional Cloud Architect certification is one of the most highly desired IT certifications out today. It is also one of the most challenging exams offered by any cloud vendor today. Passing this exam will take many hours of study, hands-on experience, and an understanding of a very wide range of GCP topics. "),s("p",null," Luckily, we're here to help you out! This course is designed to be your best single resource to prepare for and pass the exam to become a certified Google Cloud Architect. ")],-1)),i.isExpanded?(e(),o("div",Ga,a[1]||(a[1]=[r('<section class="why-google-certification" data-v-4c9c2b95><h2 data-v-4c9c2b95>Why should you do a Google Cloud Certification?</h2><ul data-v-4c9c2b95><li data-v-4c9c2b95> 89% of Google Cloud certified individuals are more confident about their cloud skills. </li><li data-v-4c9c2b95> GCP Cloud Architect was the highest paying certification of 2020 and 2019. </li><li data-v-4c9c2b95> More than 1 in 4 of Google Cloud certified individuals took on more responsibility or leadership roles at work. </li></ul></section><section class="why-cloud-architect-certification" data-v-4c9c2b95><h2 data-v-4c9c2b95> Why should you aim for Google Cloud - GCP Cloud Architect Certification? </h2><ul data-v-4c9c2b95><li data-v-4c9c2b95> Google Cloud Professional Cloud Architect certification helps you gain an understanding of cloud architecture and Google Cloud Platform. </li><li data-v-4c9c2b95> As a Cloud Architect, you will learn to design, develop, and manage robust, secure, scalable, highly available, and dynamic solutions to drive business objectives. </li></ul></section><section class="exam-details" data-v-4c9c2b95><h2 data-v-4c9c2b95>The Google Cloud Certified - Professional Cloud Architect Exam</h2><p data-v-4c9c2b95>The exam assesses your ability to:</p><ul data-v-4c9c2b95><li data-v-4c9c2b95>Design and architect a GCP solution architecture.</li><li data-v-4c9c2b95>Manage and provision the GCP solution infrastructure.</li><li data-v-4c9c2b95>Design for security and compliance.</li><li data-v-4c9c2b95>Analyze and optimize technical and business processes.</li><li data-v-4c9c2b95>Manage implementations of Google Cloud architecture.</li><li data-v-4c9c2b95>Ensure solution and operations reliability.</li></ul></section><section class="for-whom" data-v-4c9c2b95><h2 data-v-4c9c2b95>Who this course is for:</h2><ul data-v-4c9c2b95><li data-v-4c9c2b95> You want to start your Cloud Journey with Google Cloud Platform. </li><li data-v-4c9c2b95> You want to become a Google Cloud Certified Professional Cloud Architect. </li></ul></section>',4)]))):m("",!0),s("p",{onClick:a[0]||(a[0]=(...n)=>t.toggleExpand&&t.toggleExpand(...n)),class:"show-more-link"},h(i.isExpanded?"Show Less":"Show More"),1)])}const Aa=v(Ca,[["render",$a],["__scopeId","data-v-4c9c2b95"]]),Da={name:"StudentAlsoBought"},Sa={class:"student-container"},ka={class:"course-cards-list"};function Pa(c,a,l,d,i,t){return e(),o("div",Sa,[a[1]||(a[1]=s("div",{class:"title-section"},[s("h3",null,"Students Also Bought")],-1)),s("div",ka,[(e(),o(S,null,k(4,n=>s("div",{class:"course-card",key:n},a[0]||(a[0]=[r('<div class="image-container" data-v-d31ea020><img src="https://images.unsplash.com/photo-1719937050792-a6a15d899281?q=80&amp;w=1374&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Google Cloud Certification Course" data-v-d31ea020></div><div class="content-container" data-v-d31ea020><h3 class="course-title" data-v-d31ea020> Ultimate Google Certified Cloud Architect 2024 </h3><span class="course-details" data-v-d31ea020>29.5 Total Hours · Updated 9/2019</span><div class="rating-price" data-v-d31ea020><span class="rating" data-v-d31ea020>⭐⭐⭐⭐ 4.3</span><span class="students-enrolled" data-v-d31ea020>69,966 students</span><span class="price" data-v-d31ea020>$19.99</span></div></div><div class="favorite-container" data-v-d31ea020><div class="favorite-icon" data-v-d31ea020>❤</div></div>',3)]))),64))]),a[2]||(a[2]=s("div",{class:"show-more-container"},"Show More",-1))])}const Ma=v(Da,[["render",Pa],["__scopeId","data-v-d31ea020"]]),La={},Ia={class:"frequently-bought-container"};function Ta(c,a){return e(),o("div",Ia,a[0]||(a[0]=[r('<div class="header" data-v-2e72c25e><h2 data-v-2e72c25e>Frequently Bought Together</h2></div><div class="product-card" data-v-2e72c25e><div class="product-image" data-v-2e72c25e><img src="https://images.unsplash.com/photo-1719937050792-a6a15d899281?q=80&amp;w=1374&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" data-v-2e72c25e></div><div class="product-details" data-v-2e72c25e><h3 data-v-2e72c25e>Google Cloud Professional Cloud Architect: GCP Certification</h3><span class="instructor" data-v-2e72c25e>TechLink Silanium | DevOps | GenAI</span><span class="rating" data-v-2e72c25e>⭐⭐⭐⭐ 4.3 <span data-v-2e72c25e>(431)</span></span><div class="best-seller" data-v-2e72c25e>Best Seller</div></div><div class="price" data-v-2e72c25e>$49.99</div></div><div class="product-card" data-v-2e72c25e><div class="product-image" data-v-2e72c25e><img src="https://images.unsplash.com/photo-1719937050792-a6a15d899281?q=80&amp;w=1374&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" data-v-2e72c25e></div><div class="product-details" data-v-2e72c25e><h3 data-v-2e72c25e>Google Cloud Professional Cloud Architect: GCP Certification</h3><span class="instructor" data-v-2e72c25e>TechLink Silanium | DevOps | GenAI</span><span class="rating" data-v-2e72c25e>⭐⭐⭐⭐ 4.3 <span data-v-2e72c25e>(431)</span></span><div class="best-seller" data-v-2e72c25e>Best Seller</div></div><div class="price" data-v-2e72c25e>$49.99</div></div><div class="product-card" data-v-2e72c25e><div class="product-image" data-v-2e72c25e><img src="https://images.unsplash.com/photo-1719937050792-a6a15d899281?q=80&amp;w=1374&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" data-v-2e72c25e></div><div class="product-details" data-v-2e72c25e><h3 data-v-2e72c25e>Google Cloud Professional Cloud Architect: GCP Certification</h3><span class="instructor" data-v-2e72c25e>TechLink Silanium | DevOps | GenAI</span><span class="rating" data-v-2e72c25e>⭐⭐⭐⭐ 4.3 <span data-v-2e72c25e>(431)</span></span><div class="best-seller" data-v-2e72c25e>Best Seller</div></div><div class="price" data-v-2e72c25e>$49.99</div></div><div class="product-card" data-v-2e72c25e><div class="product-image" data-v-2e72c25e><img src="https://images.unsplash.com/photo-1719937050792-a6a15d899281?q=80&amp;w=1374&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" data-v-2e72c25e></div><div class="product-details" data-v-2e72c25e><h3 data-v-2e72c25e>Google Cloud Professional Cloud Architect: GCP Certification</h3><span class="instructor" data-v-2e72c25e>TechLink Silanium | DevOps | GenAI</span><span class="rating" data-v-2e72c25e>⭐⭐⭐⭐ 4.3 <span data-v-2e72c25e>(431)</span></span><div class="best-seller" data-v-2e72c25e>Best Seller</div></div><div class="price" data-v-2e72c25e>$49.99</div></div><div class="total-section" data-v-2e72c25e><span class="total-label" data-v-2e72c25e>Total: <span class="total-price" data-v-2e72c25e>$144.97</span></span><button class="add-to-cart-btn" data-v-2e72c25e>Add All To Cart</button></div>',6)]))}const Ba=v(La,[["render",Ta],["__scopeId","data-v-2e72c25e"]]),Ha={},Ea={class:"instructor-container"};function Va(c,a){return e(),o("div",Ea,a[0]||(a[0]=[r('<div class="header" data-v-b9d60675><h3 data-v-b9d60675>Instructor</h3></div><div class="instructor-info" data-v-b9d60675><div class="instructor-details" data-v-b9d60675><span class="instructor-name" data-v-b9d60675>TechLink Selenium | DevOps | GenAI</span><span class="instructor-title" data-v-b9d60675>Software Architect</span></div><div class="instructor-profile" data-v-b9d60675><div class="profile-image" data-v-b9d60675><img src="https://images.unsplash.com/photo-1730956473717-b1bb69fc595e?q=80&amp;w=1414&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Instructor Image" data-v-b9d60675></div><ul class="instructor-stats" data-v-b9d60675><li data-v-b9d60675><span class="icon" data-v-b9d60675>⭐</span>4.5 Instructor Rating</li><li data-v-b9d60675><span class="icon" data-v-b9d60675>💬</span>22,955 Reviews</li><li data-v-b9d60675><span class="icon" data-v-b9d60675>👥</span>300,548 Students</li><li data-v-b9d60675><span class="icon" data-v-b9d60675>📚</span>23 Courses</li></ul></div></div><div class="instructor-philosophy" data-v-b9d60675><p data-v-b9d60675> Sometimes, reaching out and taking someone&#39;s hand is the beginning of a journey. We often need someone to help us take the first few steps before we get a master&#39;s in that move. </p><p data-v-b9d60675> This is the vision we have behind all of our courses: &#39;Step by Step&#39; </p><ul data-v-b9d60675><li data-v-b9d60675>Start from scratch</li><li data-v-b9d60675>Break down the topic</li><li data-v-b9d60675>Simplify things</li><li data-v-b9d60675>Go step by step</li></ul><p data-v-b9d60675> Teaching is our passion, and we design every course so you can start from scratch, knowing nothing about a topic and become an expert after the course, ready to work on enterprise projects. </p><p data-v-b9d60675> Do not worry if you do not have any existing knowledge of the subject. We will go very basic, step by step. </p><p class="start-text" data-v-b9d60675>Let&#39;s Get Started...</p><p class="signature" data-v-b9d60675>FutureTech9</p><div class="support-note" data-v-b9d60675> ********************************************************************<br data-v-b9d60675> All courses under our banner come with lifetime support, and you can ask questions whenever you face issues, want to discuss anything, or need my suggestions. <br data-v-b9d60675>******************************************************************** </div></div>',3)]))}const Wa=v(Ha,[["render",Va],["__scopeId","data-v-b9d60675"]]),qa={},ja={class:"reviews-container"};function Oa(c,a,l,d,i,t){return e(),o("div",ja,a[0]||(a[0]=[r('<div class="course-rating" data-v-353ff84e><div class="rating-info" data-v-353ff84e><i class="icon-star" data-v-353ff84e></i><span class="rating-value" data-v-353ff84e>4.4 course rating</span><span class="rating-count" data-v-353ff84e>431 ratings</span></div></div><div class="reviews-grid" data-v-353ff84e><div class="review-card" data-v-353ff84e><div class="review-header" data-v-353ff84e><div class="review-avatar" data-v-353ff84e><img src="https://images.unsplash.com/photo-1730956473717-b1bb69fc595e?q=80&amp;w=1414&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Reviewer Avatar" class="avatar" data-v-353ff84e></div><div class="review-info" data-v-353ff84e><span class="reviewer-name" data-v-353ff84e>Mayank T.</span><div class="review-meta" data-v-353ff84e><span class="review-rating" data-v-353ff84e><i class="icon-star" data-v-353ff84e></i> 4 stars </span><span class="review-date" data-v-353ff84e>a week ago</span></div></div></div><div class="review-text" data-v-353ff84e><span data-v-353ff84e> The way of presenting the topic with theory and practical examples makes the course easy to understand. Great course! </span></div><div class="helpful-section" data-v-353ff84e><span data-v-353ff84e>Helpful?</span><div class="thumbs" data-v-353ff84e><button class="thumb-up" data-v-353ff84e><i class="icon-thumbs-up" data-v-353ff84e></i></button><button class="thumb-down" data-v-353ff84e><i class="icon-thumbs-down" data-v-353ff84e></i></button></div></div></div><div class="review-card" data-v-353ff84e><div class="review-header" data-v-353ff84e><div class="review-avatar" data-v-353ff84e><img src="https://plus.unsplash.com/premium_photo-1664541336692-e931d407ba88?q=80&amp;w=1374&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Reviewer Avatar" class="avatar" data-v-353ff84e></div><div class="review-info" data-v-353ff84e><span class="reviewer-name" data-v-353ff84e>John D.</span><div class="review-meta" data-v-353ff84e><span class="review-rating" data-v-353ff84e><i class="icon-star" data-v-353ff84e></i> 5 stars </span><span class="review-date" data-v-353ff84e>2 weeks ago</span></div></div></div><div class="review-text" data-v-353ff84e><span data-v-353ff84e> Excellent content and teaching style. I was able to grasp difficult concepts with ease. Highly recommend! </span></div><div class="helpful-section" data-v-353ff84e><span data-v-353ff84e>Helpful?</span><div class="thumbs" data-v-353ff84e><button class="thumb-up" data-v-353ff84e><i class="icon-thumbs-up" data-v-353ff84e></i></button><button class="thumb-down" data-v-353ff84e><i class="icon-thumbs-down" data-v-353ff84e></i></button></div></div></div><div class="review-card" data-v-353ff84e><div class="review-header" data-v-353ff84e><div class="review-avatar" data-v-353ff84e><img src="https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&amp;w=1374&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Reviewer Avatar" class="avatar" data-v-353ff84e></div><div class="review-info" data-v-353ff84e><span class="reviewer-name" data-v-353ff84e>Sarah L.</span><div class="review-meta" data-v-353ff84e><span class="review-rating" data-v-353ff84e><i class="icon-star" data-v-353ff84e></i> 3 stars </span><span class="review-date" data-v-353ff84e>3 weeks ago</span></div></div></div><div class="review-text" data-v-353ff84e><span data-v-353ff84e> The course was okay, but I feel some areas could be explained in more depth. Overall, good value for money. </span></div><div class="helpful-section" data-v-353ff84e><span data-v-353ff84e>Helpful?</span><div class="thumbs" data-v-353ff84e><button class="thumb-up" data-v-353ff84e><i class="icon-thumbs-up" data-v-353ff84e></i></button><button class="thumb-down" data-v-353ff84e><i class="icon-thumbs-down" data-v-353ff84e></i></button></div></div></div><div class="review-card" data-v-353ff84e><div class="review-header" data-v-353ff84e><div class="review-avatar" data-v-353ff84e><img src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&amp;w=1374&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Reviewer Avatar" class="avatar" data-v-353ff84e></div><div class="review-info" data-v-353ff84e><span class="reviewer-name" data-v-353ff84e>David K.</span><div class="review-meta" data-v-353ff84e><span class="review-rating" data-v-353ff84e><i class="icon-star" data-v-353ff84e></i> 4.5 stars </span><span class="review-date" data-v-353ff84e>1 month ago</span></div></div></div><div class="review-text" data-v-353ff84e><span data-v-353ff84e> Good course overall. The instructor explains each step clearly and the examples are relevant to real-world applications. </span></div><div class="helpful-section" data-v-353ff84e><span data-v-353ff84e>Helpful?</span><div class="thumbs" data-v-353ff84e><button class="thumb-up" data-v-353ff84e><i class="icon-thumbs-up" data-v-353ff84e></i></button><button class="thumb-down" data-v-353ff84e><i class="icon-thumbs-down" data-v-353ff84e></i></button></div></div></div></div><div class="show-all-reviews" data-v-353ff84e><span data-v-353ff84e>Show all reviews</span></div>',3)]))}const Ua=v(qa,[["render",Oa],["__scopeId","data-v-353ff84e"]]),Ya={};function Fa(c,a,l,d,i,t){return a[0]||(a[0]=r('<div class="course-header" data-v-c2d1b1b1><h3 data-v-c2d1b1b1> More Courses by <span class="course-provider" data-v-c2d1b1b1>TechLink Selenium | DevOps | GenAI</span></h3></div><div class="course-cards-container" data-v-c2d1b1b1><div class="course-card" data-v-c2d1b1b1><div class="course-image" data-v-c2d1b1b1><img src="https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&amp;w=1471&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Course Image" data-v-c2d1b1b1></div><div class="course-details" data-v-c2d1b1b1><span class="course-title" data-v-c2d1b1b1>DevOps MasterClass 2024: Terraform Kubernetes ...</span><span class="course-provider-info" data-v-c2d1b1b1>TechLink Selenium | DevOps | GenAI</span><span class="course-rating" data-v-c2d1b1b1><i class="fas fa-star" data-v-c2d1b1b1></i> 4.5 <span data-v-c2d1b1b1>(6,311)</span></span><div class="course-meta" data-v-c2d1b1b1><ul data-v-c2d1b1b1><li data-v-c2d1b1b1><i class="fas fa-clock" data-v-c2d1b1b1></i> 76.5 Total Hours</li><li data-v-c2d1b1b1><i class="fas fa-chalkboard-teacher" data-v-c2d1b1b1></i> 548 Lectures</li><li data-v-c2d1b1b1><i class="fas fa-level-up-alt" data-v-c2d1b1b1></i> All Levels</li></ul></div><span class="course-price" data-v-c2d1b1b1>$69.99</span></div></div><div class="course-card" data-v-c2d1b1b1><div class="course-image" data-v-c2d1b1b1><img src="https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&amp;w=1471&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Course Image" data-v-c2d1b1b1></div><div class="course-details" data-v-c2d1b1b1><span class="course-title" data-v-c2d1b1b1>DevOps MasterClass 2024: Terraform Kubernetes ...</span><span class="course-provider-info" data-v-c2d1b1b1>TechLink Selenium | DevOps | GenAI</span><span class="course-rating" data-v-c2d1b1b1><i class="fas fa-star" data-v-c2d1b1b1></i> 4.5 <span data-v-c2d1b1b1>(6,311)</span></span><div class="course-meta" data-v-c2d1b1b1><ul data-v-c2d1b1b1><li data-v-c2d1b1b1><i class="fas fa-clock" data-v-c2d1b1b1></i> 76.5 Total Hours</li><li data-v-c2d1b1b1><i class="fas fa-chalkboard-teacher" data-v-c2d1b1b1></i> 548 Lectures</li><li data-v-c2d1b1b1><i class="fas fa-level-up-alt" data-v-c2d1b1b1></i> All Levels</li></ul></div><span class="course-price" data-v-c2d1b1b1>$69.99</span></div></div><div class="course-card" data-v-c2d1b1b1><div class="course-image" data-v-c2d1b1b1><img src="https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&amp;w=1471&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Course Image" data-v-c2d1b1b1></div><div class="course-details" data-v-c2d1b1b1><span class="course-title" data-v-c2d1b1b1>DevOps MasterClass 2024: Terraform Kubernetes ...</span><span class="course-provider-info" data-v-c2d1b1b1>TechLink Selenium | DevOps | GenAI</span><span class="course-rating" data-v-c2d1b1b1><i class="fas fa-star" data-v-c2d1b1b1></i> 4.5 <span data-v-c2d1b1b1>(6,311)</span></span><div class="course-meta" data-v-c2d1b1b1><ul data-v-c2d1b1b1><li data-v-c2d1b1b1><i class="fas fa-clock" data-v-c2d1b1b1></i> 76.5 Total Hours</li><li data-v-c2d1b1b1><i class="fas fa-chalkboard-teacher" data-v-c2d1b1b1></i> 548 Lectures</li><li data-v-c2d1b1b1><i class="fas fa-level-up-alt" data-v-c2d1b1b1></i> All Levels</li></ul></div><span class="course-price" data-v-c2d1b1b1>$69.99</span></div></div></div><div class="report-abuse" data-v-c2d1b1b1><span data-v-c2d1b1b1>Report abuse</span></div>',3))}const Na=v(Ya,[["render",Fa],["__scopeId","data-v-c2d1b1b1"]]),Ra={},za={class:"flex-container"};function Ka(c,a,l,d,i,t){const n=la,g=pa,_=xa,w=Aa,x=Ma,C=Ba,M=Wa,L=Ua,I=Na;return e(),o("div",za,[f(n),f(g),f(_),f(w),f(x),f(C),f(M),f(L),f(I)])}const Ja=v(Ra,[["render",Ka],["__scopeId","data-v-c0ec810e"]]),Qa={data(){return{activeTab:"personal"}},methods:{setActiveTab(c){this.activeTab=c}}},Xa={class:"container"},Za={class:"sidebar"},as={class:"tabs"},ss={class:"content personal sticky-content"},ts={class:"content teams sticky-content"};function es(c,a,l,d,i,t){return e(),o("div",Xa,[s("div",Za,[a[4]||(a[4]=s("img",{src:"https://images.unsplash.com/photo-1557804483-ef3ae78eca57?q=80&w=1488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:""},null,-1)),s("div",as,[s("div",{class:u(["tab",{active:i.activeTab==="personal"}]),onClick:a[0]||(a[0]=n=>t.setActiveTab("personal"))}," Personal ",2),s("div",{class:u(["tab",{active:i.activeTab==="teams"}]),onClick:a[1]||(a[1]=n=>t.setActiveTab("teams"))}," Teams ",2)]),G(s("div",ss,a[2]||(a[2]=[r('<h2 data-v-9b26bf2f>Subscribe to Udemy’s top courses</h2><p data-v-9b26bf2f> Get this course, plus 12,000+ of our top-rated courses, with Personal Plan. <span data-v-9b26bf2f> Learn more</span></p><div class="personal-plan" data-v-9b26bf2f><button data-v-9b26bf2f>Try Personal Plan For Free</button><span class="pricing" data-v-9b26bf2f> Starting at $10.00 per month after trial. Cancel anytime </span></div><span class="or-divider" data-v-9b26bf2f><hr class="left-line" data-v-9b26bf2f><span data-v-9b26bf2f>or</span><hr class="right-line" data-v-9b26bf2f></span><h3 data-v-9b26bf2f>$49.99</h3><div class="add-to-cart" data-v-9b26bf2f>Add To Cart</div><span class="guarantee" data-v-9b26bf2f> 30-Day Money-Back Guarantee | <span data-v-9b26bf2f> Full Lifetime Access</span></span><div class="additional-options" data-v-9b26bf2f><span data-v-9b26bf2f>Share</span><span data-v-9b26bf2f>Gift this course</span><span data-v-9b26bf2f>Apply coupon</span></div>',8)]),512),[[$,i.activeTab==="personal"]]),G(s("div",ts,a[3]||(a[3]=[r('<h1 data-v-9b26bf2f>Udemy <span data-v-9b26bf2f>Business</span></h1><p data-v-9b26bf2f> Subscribe to this course and 27,000+ top‑rated Udemy courses for your organization. </p><button data-v-9b26bf2f>Try Udemy Business</button><ul data-v-9b26bf2f><li data-v-9b26bf2f><i class="fas fa-users" data-v-9b26bf2f></i> For teams of 2 or more users</li><li data-v-9b26bf2f><i class="fas fa-cogs" data-v-9b26bf2f></i> 27,000+ fresh &amp; in-demand courses</li><li data-v-9b26bf2f><i class="fas fa-chalkboard-teacher" data-v-9b26bf2f></i> Learning Engagement tools </li><li data-v-9b26bf2f><i class="fas fa-key" data-v-9b26bf2f></i> SSO and LMS Integrations</li></ul>',4)]),512),[[$,i.activeTab==="teams"]])])])}const is=v(Qa,[["render",es],["__scopeId","data-v-9b26bf2f"]]),ds=P("/OIP-removebg-preview.png"),os={},ns={class:"footer-container"};function cs(c,a,l,d,i,t){return e(),o("div",ns,a[0]||(a[0]=[r('<div class="footer-top" data-v-91b43b79><div class="footer-description" data-v-91b43b79><span data-v-91b43b79> Top companies choose Udemy Business to build in-demand career skills. </span></div><div class="footer-images" data-v-91b43b79><img src="'+b+'" alt="Company Image 1" class="footer-image" data-v-91b43b79><img src="'+b+'" alt="Company Image 2" class="footer-image" data-v-91b43b79><img src="'+b+'" alt="Company Image 3" class="footer-image" data-v-91b43b79><img src="'+b+'" alt="Company Image 4" class="footer-image" data-v-91b43b79></div></div><div class="footer-links" data-v-91b43b79><div class="footer-column" data-v-91b43b79><ul data-v-91b43b79><li data-v-91b43b79><a href="#" data-v-91b43b79>Udemy Business</a></li><li data-v-91b43b79><a href="#" data-v-91b43b79>Teach on Udemy</a></li><li data-v-91b43b79><a href="#" data-v-91b43b79>Get the app</a></li><li data-v-91b43b79><a href="#" data-v-91b43b79>About us</a></li><li data-v-91b43b79><a href="#" data-v-91b43b79>Contact us</a></li></ul></div><div class="footer-column" data-v-91b43b79><ul data-v-91b43b79><li data-v-91b43b79><a href="#" data-v-91b43b79>Careers</a></li><li data-v-91b43b79><a href="#" data-v-91b43b79>Blog</a></li><li data-v-91b43b79><a href="#" data-v-91b43b79>Help and Support</a></li><li data-v-91b43b79><a href="#" data-v-91b43b79>Affiliate</a></li><li data-v-91b43b79><a href="#" data-v-91b43b79>Investors</a></li></ul></div><div class="footer-column" data-v-91b43b79><ul data-v-91b43b79><li data-v-91b43b79><a href="#" data-v-91b43b79>Terms</a></li><li data-v-91b43b79><a href="#" data-v-91b43b79>Privacy policy</a></li><li data-v-91b43b79><a href="#" data-v-91b43b79>Cookie Settings</a></li><li data-v-91b43b79><a href="#" data-v-91b43b79>Sitemap</a></li><li data-v-91b43b79><a href="#" data-v-91b43b79>Accessibility statement</a></li></ul></div></div><div class="footer-bottom" data-v-91b43b79><div class="language-selector" data-v-91b43b79><span data-v-91b43b79>English</span></div><div class="footer-info" data-v-91b43b79><img src="'+ds+'" alt="Udemy Logo" class="footer-logo" data-v-91b43b79><span data-v-91b43b79>© 2024 Udemy, Inc</span></div></div>',3)]))}const ls=v(os,[["render",cs],["__scopeId","data-v-91b43b79"]]),rs={class:"main-content"},vs={__name:"index",setup(c){const a=y(!1),l=()=>{a.value=window.scrollY>100};return D(()=>{window.addEventListener("scroll",l)}),T(()=>{window.removeEventListener("scroll",l)}),(d,i)=>{const t=j,n=F,g=K,_=Z,w=Ja,x=is,C=ls;return e(),o("div",null,[f(t),a.value?m("",!0):(e(),A(n,{key:0})),a.value?(e(),A(g,{key:1})):m("",!0),f(_),s("div",rs,[f(w),f(x)]),f(C)])}}},ps=v(vs,[["__scopeId","data-v-07d7c1a3"]]);export{ps as default};
