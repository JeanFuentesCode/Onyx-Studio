/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="antialiased">
      {/* BEGIN: TopNavBar */}
      <nav className="w-full bg-transparent absolute top-0 left-0 z-50 py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a className="font-display text-primary text-2xl font-semibold leading-tight flex flex-col" href="#">
            <span>ONYX</span>
            <span>STUDIO</span>
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <a className="text-on-background hover:text-primary transition-colors text-sm font-semibold tracking-wider uppercase" href="#">SERVICES</a>
            <a className="text-on-background hover:text-primary transition-colors text-sm font-semibold tracking-wider uppercase" href="#">WORK</a>
            <a className="text-on-background hover:text-primary transition-colors text-sm font-semibold tracking-wider uppercase" href="#">ABOUT</a>
            <a className="text-on-background hover:text-primary transition-colors text-sm font-semibold tracking-wider uppercase" href="#">CONTACT</a>
            <button className="text-on-background hover:text-primary transition-colors ml-4">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {/* END: TopNavBar */}

      <main>
        {/* BEGIN: Hero Section */}
        <section className="relative pt-48 pb-32 px-6 md:px-12 hero-bg overflow-hidden min-h-screen flex items-center">
          <div className="gold-wave-overlay"></div>
          <div className="max-w-7xl mx-auto w-full hero-content">
            <h1 className="text-display-lg font-display text-primary mb-6 max-w-4xl">
              DISEÑO DIGITAL <br /> PREMIUM PARA TU ÉXITO.
            </h1>
            <p className="text-body-lg text-on-background mb-10 max-w-2xl text-2xl">
              PARA EL FUTURO DE TU NEGOCIO.
            </p>
            <button className="bg-primary text-on-primary px-8 py-4 font-bold tracking-wider uppercase hover:bg-opacity-90 transition-opacity">
              EXPLORE OUR WORK
            </button>
          </div>
        </section>
        {/* END: Hero Section */}

        {/* BEGIN: Services Section */}
        <section className="py-24 px-6 md:px-12 bg-background">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-headline-lg font-display text-primary mb-12 uppercase tracking-wide">SERVICES</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Service Card 1 */}
              <div className="service-card p-10 flex flex-col items-center text-center">
                <div className="text-primary mb-6">
                  <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                  </svg>
                </div>
                <h3 className="text-title-lg font-bold text-on-background mb-4 uppercase">ESTRATEGIA <br /> DE MARCA</h3>
                <p className="text-sm text-outline">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
              </div>
              {/* Service Card 2 */}
              <div className="service-card p-10 flex flex-col items-center text-center">
                <div className="text-primary mb-6">
                  <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                  </svg>
                </div>
                <h3 className="text-title-lg font-bold text-on-background mb-4 uppercase">DESARROLLO <br /> WEB</h3>
                <p className="text-sm text-outline">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
              </div>
              {/* Service Card 3 */}
              <div className="service-card p-10 flex flex-col items-center text-center">
                <div className="text-primary mb-6">
                  <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                  </svg>
                </div>
                <h3 className="text-title-lg font-bold text-on-background mb-4 uppercase">E-COMMERCE</h3>
                <p className="text-sm text-outline mt-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
              </div>
              {/* Service Card 4 */}
              <div className="service-card p-10 flex flex-col items-center text-center">
                <div className="text-primary mb-6">
                  <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                  </svg>
                </div>
                <h3 className="text-title-lg font-bold text-on-background mb-4 uppercase">API INTEGRATION</h3>
                <p className="text-sm text-outline mt-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
              </div>
            </div>
          </div>
        </section>
        {/* END: Services Section */}

        {/* BEGIN: Projects Section */}
        <section className="py-12 px-6 md:px-12 bg-background pb-32">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-headline-lg font-display text-primary mb-12 uppercase tracking-wide">PROJECTS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Project Card 1 */}
              <a className="project-card block aspect-video bg-surface-container relative" href="#">
                <img alt="Clínica Dental Architecture" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIxRHxC55Gf9NP4QjqI0eu179ZxfGBFmsclSSySjA1Sa7vnt4KvB77eHCMVEUZEa2sUlJYon4JTYiuuvKmhO_KVAKC7kiHbHhP5pzkBfHsGHNrLYsuKeUVDf6SKsNlpNNTQp1IiGfGqI4550Kdez99M2ygYq7McT0f2dgRr6thPv-1Q93py0lLPRkW1jwFvZPBglvVG2PFh_9OmAk8pJ5JM36OMR0Xb_kJn72YQtJcRa0EHTVq1oqK5D__qWVMqtBFM79RnRgWYQ" />
                <div className="absolute inset-0 project-overlay flex flex-col justify-end p-8">
                  <h3 className="text-title-lg font-bold text-on-background mb-2">CLÍNICA DENTAL</h3>
                  <p className="text-primary font-semibold tracking-wider text-sm">VER CASE</p>
                </div>
              </a>
              {/* Project Card 2 */}
              <a className="project-card block aspect-video bg-surface-container relative" href="#">
                <img alt="Clínica Dental Branding" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZug_2L8mg_DIGyrXhpsA5KgXC5rZJItj_wVdJ5LOuXfH03zDlV2KvElQ11MEHfrR6r3rvNYh_FNHySDdBrmkHDy79ak4lawdDXw9i897SWK2kHSCrBJCuBBuulY0SgCQcEAxMGIWSF9v4pDXqoRFYejiKbT9jzPFIUsWTWV3r7OLlvg6n3JMNdcaiyB0ob1XvInrlSU1jlaP36pDfPsptMkX471lBuXzjv4fP-sY4ag6q48FGdcUs7RihsoW3vGuuuu5PJiDBnA" />
                <div className="absolute inset-0 project-overlay flex flex-col justify-end p-8">
                  <h3 className="text-title-lg font-bold text-on-background mb-2">CLÍNICA DENTAL</h3>
                  <p className="text-primary font-semibold tracking-wider text-sm">VER CASE</p>
                </div>
              </a>
            </div>
          </div>
        </section>
        {/* END: Projects Section */}
      </main>

      {/* BEGIN: Footer */}
      <footer className="bg-[#0e0e0e] border-t border-outline-variant py-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-outline tracking-wider">
            © 2024 ONYX STUDIO. ALL RIGHTS RESERVED.
          </div>
          <div className="flex space-x-6 text-sm text-outline tracking-wider font-semibold">
            <a className="hover:text-primary transition-colors" href="#">PRIVACY POLICY</a>
            <a className="hover:text-primary transition-colors" href="#">TERMS OF SERVICE</a>
            <a className="hover:text-primary transition-colors" href="#">INSTAGRAM</a>
            <a className="hover:text-primary transition-colors" href="#">LINKEDIN</a>
          </div>
        </div>
      </footer>
      {/* END: Footer */}
    </div>
  );
}
