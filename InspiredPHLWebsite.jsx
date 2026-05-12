export default function InspiredPHLWebsite() {
  const products = [
    {
      title: 'Ventilators',
      desc: 'Portable and hospital-grade respiratory support systems for critical care and emergency use.',
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Patient Monitors',
      desc: 'Reliable multi-parameter monitoring systems with real-time patient insights.',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'CPAP / BIPAP Machines',
      desc: 'Advanced sleep apnea and respiratory therapy devices for home and clinical use.',
      image: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Oxygen Concentrators',
      desc: 'Efficient oxygen therapy equipment designed for reliability and continuous performance.',
      image: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?q=80&w=1200&auto=format&fit=crop'
    }
  ]

  const services = [
    'Maintenance and Technical Support',
    'Training Programs for Healthcare Professionals',
    'Respiratory Care Consultation',
    'Equipment Setup and Demonstration',
    'After-sales Customer Support',
    'Medical Supplies Distribution'
  ]

  const industries = [
    'Hospitals and Clinics',
    'Long-term Care Facilities',
    'Sleep and Pulmonary Centers',
    'Home Healthcare Providers'
  ]

  const isleepImage = 'https://scontent.fmnl9-1.fna.fbcdn.net/v/t39.30808-1/567476081_25033815519575919_8072632497561626104_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=2d3e12&_nc_eui2=AeGMZuKvuxVR0jVIM_mQ5S_AJIih86FcggskiKHzoVyCC69mucSF5yDQp-S-dof1z0KI0smg26mXuetcJgxANaBv&_nc_ohc=RuY1AvaWWMAQ7kNvwETPhCC&_nc_oc=Adrfg_2nSjdp-KiVBA7NQzyhHtHDsiPsUwdz4DNbbG1P3zDTGTs8HijWLz99B9aIgaY&_nc_zt=24&_nc_ht=scontent.fmnl9-1.fna&_nc_gid=H5OWR7ZSay_rifZEv5CpMA&_nc_ss=7b2a8&oh=00_Af76JhildWvsiBqhDE4f5x8nS93iDfPVyGWy2R21K1YWGA&oe=6A0872E4'

  const brands = [
    {
      name: 'Northern Meditech',
      logo: 'https://arh.ae/storage/78/b74341fd57a23ffdb5389e0f61996bb1.png',
      url: 'https://en.northernmeditec.com/'
    },
    {
      name: 'EM-Med',
      logo: 'https://em-med.com/wp-content/uploads/2024/06/logo_emmed_210px_en.svg',
      url: 'https://em-med.com/'
    },
    {
      name: 'Somnomedics',
      logo: 'https://homecare-medical.com/wp-content/uploads/2017/01/somno-logo.jpg',
      url: 'https://somnomedics.de/en/solutions/sleep_diagnostics/'
    },
    {
      name: 'Esumedics',
      logo: 'https://esumedics.com/wp-content/uploads/sites/2/2023/11/Logo_esumedics_2023-05_RGB_BlueR-500x124.png',
      url: 'https://esumedics.com/en/welcome/'
    },
    {
      name: 'Lily Medical',
      logo: 'https://www.lily-medical.com/images/theme-b67/logo.svg',
      url: 'https://www.lily-medical.com/'
    },
    {
      name: 'Yuwell',
      logo: 'https://www.healthcaredepot.ph/cdn/shop/collections/Yuwell_and_HCD.jpg?v=1743666620',
      url: 'https://www.yuwell.com/'
    },
    {
      name: 'iSleep',
      logo: isleepImage,
      url: 'https://www.facebook.com/profile.php?id=61582408052473'
    }
  ]

  return (
    <div className="bg-white text-slate-800 min-h-screen font-sans">
      {/* TOP NAVIGATION */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center text-white font-black text-xl shadow-lg">
              I
            </div>
            <div>
              <h1 className="text-xl font-black text-slate-900 leading-none">Inspired PHL</h1>
              <p className="text-xs text-slate-500">Respiratory Care Solutions</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 font-semibold text-slate-600">
            <a href="#about" className="hover:text-cyan-600 transition">About</a>
            <a href="#products" className="hover:text-cyan-600 transition">Products</a>
            <a href="#brands" className="hover:text-cyan-600 transition">Brands</a>
            <a href="#services" className="hover:text-cyan-600 transition">Services</a>
            <a href="#industries" className="hover:text-cyan-600 transition">Industries</a>
            <a href="#contact" className="hover:text-cyan-600 transition">Contact</a>
          </nav>

          <button className="bg-cyan-500 hover:bg-cyan-400 transition text-white px-5 py-3 rounded-2xl font-bold shadow-lg">
            Get Started
          </button>
        </div>
      </header>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-36 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <span className="text-sm tracking-wide">INSPIRED PHL CORPORATION</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
              Breathe Better,
              <span className="block text-cyan-300">Live Inspired.</span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-200 max-w-2xl leading-relaxed mb-8">
              Delivering innovative respiratory care equipment, patient monitoring systems,
              and healthcare solutions for hospitals, clinics, and home care providers.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-cyan-400 hover:bg-cyan-300 transition px-6 py-3 rounded-2xl font-semibold text-slate-900 shadow-xl">
                Explore Products
              </button>
              <button className="border border-white/30 hover:bg-white/10 transition px-6 py-3 rounded-2xl font-semibold backdrop-blur-sm">
                Contact Us
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-cyan-400/20 blur-3xl rounded-full"></div>
            <img
              src="https://images.unsplash.com/photo-1581594549595-35f6edc7b762?q=80&w=1400&auto=format&fit=crop"
              alt="Respiratory Equipment"
              className="relative rounded-3xl shadow-2xl border border-white/10 object-cover w-full h-[520px]"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-7xl mx-auto px-6 lg:px-12 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1400&auto=format&fit=crop"
            alt="Healthcare Team"
            className="rounded-3xl shadow-2xl object-cover h-[500px] w-full"
          />
        </div>

        <div>
          <p className="text-cyan-600 font-semibold uppercase tracking-[0.25em] mb-4">
            About the Company
          </p>

          <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
            Innovative Respiratory Care Solutions
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Established in 2024, Inspired PHL Corporation is committed to improving respiratory health
            and enhancing patient care through reliable medical equipment and healthcare support services.
          </p>

          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            We provide solutions for both clinical and home-based respiratory care, supporting healthcare
            providers with high-quality equipment, supplies, and technical expertise.
          </p>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-slate-100 rounded-3xl p-6">
              <h3 className="font-bold text-xl mb-3">Our Mission</h3>
              <p className="text-slate-600">
                To provide high-quality respiratory care equipment and supplies that enhance patient outcomes.
              </p>
            </div>

            <div className="bg-cyan-50 rounded-3xl p-6 border border-cyan-100">
              <h3 className="font-bold text-xl mb-3">Our Vision</h3>
              <p className="text-slate-600">
                To be a trusted partner in respiratory care through innovative and accessible solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-cyan-600 font-semibold uppercase tracking-[0.25em] mb-4">
              Products & Services
            </p>
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              Medical Equipment We Offer
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Trusted respiratory care systems and patient monitoring solutions designed for healthcare excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border border-slate-100"
              >
                <div className="overflow-hidden h-64">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{product.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div id="brands" className="flex flex-wrap justify-center gap-8 mt-20">
            {brands.map((brand, index) => (
              <a
                key={index}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-slate-50 hover:bg-white border border-slate-200 rounded-3xl p-8 flex items-center justify-center min-h-[220px] w-[260px] shadow-sm hover:shadow-2xl transition duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className={brand.name === 'Yuwell'
                    ? 'max-h-40 object-contain group-hover:scale-105 transition'
                    : 'max-h-24 object-contain group-hover:scale-105 transition'}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-7xl mx-auto px-6 lg:px-12 py-24 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-cyan-600 font-semibold uppercase tracking-[0.25em] mb-4">
            Support & Consultation
          </p>

          <h2 className="text-4xl lg:text-5xl font-black leading-tight mb-8">
            Technical Expertise You Can Trust
          </h2>

          <div className="space-y-5">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm"
              >
                <div className="w-3 h-3 rounded-full bg-cyan-500 mt-2"></div>
                <p className="text-lg text-slate-700 font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1400&auto=format&fit=crop"
            alt="Medical Support"
            className="rounded-3xl shadow-2xl object-cover h-[600px] w-full"
          />
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-cyan-300 font-semibold uppercase tracking-[0.25em] mb-4">
            Industries We Serve
          </p>

          <h2 className="text-4xl lg:text-5xl font-black mb-14">
            Supporting Healthcare Across Multiple Sectors
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white/10 border border-white/10 rounded-3xl p-10 backdrop-blur-sm hover:bg-white/15 transition"
              >
                <div className="text-5xl mb-5">🏥</div>
                <h3 className="text-2xl font-bold leading-snug">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="text-center mb-16">
          <p className="text-cyan-600 font-semibold uppercase tracking-[0.25em] mb-4">
            Why Choose Us
          </p>

          <h2 className="text-4xl lg:text-5xl font-black">
            A Fresh Perspective in Healthcare
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {[
            {
              title: 'Fresh Perspective',
              desc: 'A modern company driven by innovation and healthcare excellence.'
            },
            {
              title: 'Quality Products',
              desc: 'Reliable respiratory equipment and medical supplies you can trust.'
            },
            {
              title: 'Customer Commitment',
              desc: 'Personalized service focused on your operational and patient needs.'
            },
            {
              title: 'Growth-Oriented',
              desc: 'Dedicated to continuous improvement and long-term partnerships.'
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition"
            >
              <div className="w-16 h-16 rounded-2xl bg-cyan-100 flex items-center justify-center text-3xl mb-6">
                ✨
              </div>

              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative overflow-hidden bg-slate-950 text-white py-24">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <p className="text-cyan-300 font-semibold uppercase tracking-[0.25em] mb-4">
            Connect With Us
          </p>

          <h2 className="text-5xl font-black mb-6">
            Let’s Build Better Healthcare Together
          </h2>

          <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed mb-14">
            Reach out to Inspired PHL Corporation for respiratory care equipment, healthcare solutions,
            and medical supply inquiries.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white/10 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="text-2xl font-bold mb-2">Email</h3>
              <p className="text-slate-300">inspiredphsales@gmail.com</p>
            </div>

            <div className="bg-white/10 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="text-2xl font-bold mb-2">Phone</h3>
              <p className="text-slate-300">0947 864 6630</p>
              <p className="text-slate-300">0994 285 9306</p>
            </div>

            <div className="bg-white/10 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="text-2xl font-bold mb-2">Address</h3>
              <p className="text-slate-300 leading-relaxed">
                Nile Drive, Golden River Village,
                Brgy. Taculing, Bacolod City,
                Negros Occidental
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
