export const metadata = {
  title: "Privacy Notice | Jean-Luc Baroni Ltd",
  description: "Our privacy policy and data protection information in compliance with GDPR.",
};

export default function PrivacyPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-container max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
          Privacy Notice
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-sm text-muted-foreground mb-8">
            Last updated: October 26, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Introduction</h2>
            <p className="mb-4">
              Jean-Luc Baroni Ltd ("we", "our", or "us") is committed to protecting your privacy.
              This Privacy Notice explains how we collect, use, and protect your personal data in
              accordance with the UK General Data Protection Regulation (UK GDPR) and the Data
              Protection Act 2018.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Information We Collect</h2>
            <p className="mb-4">We may collect the following types of personal information:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Name and contact details (email address, phone number, postal address)</li>
              <li>Information you provide when making inquiries about artworks</li>
              <li>Records of correspondence and communications with us</li>
              <li>Information about your art collecting interests and preferences</li>
              <li>Website usage data through cookies and analytics</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">How We Use Your Information</h2>
            <p className="mb-4">We use your personal data for the following purposes:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>To respond to your inquiries about artworks and services</li>
              <li>To provide information about exhibitions, catalogues, and new acquisitions</li>
              <li>To maintain our business records and client relationships</li>
              <li>To comply with legal and regulatory obligations</li>
              <li>To improve our website and services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Legal Basis for Processing</h2>
            <p className="mb-4">
              We process your personal data based on the following legal grounds:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Legitimate interests:</strong> To operate our business and provide services to our clients</li>
              <li><strong>Consent:</strong> When you provide consent for specific communications or marketing</li>
              <li><strong>Contract:</strong> To fulfill our contractual obligations when you purchase artworks</li>
              <li><strong>Legal obligation:</strong> To comply with applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Data Retention</h2>
            <p className="mb-4">
              We retain your personal data only for as long as necessary to fulfill the purposes
              for which it was collected, including legal, accounting, or reporting requirements.
              Client records are typically retained for 7 years after the last interaction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Your Rights</h2>
            <p className="mb-4">Under UK GDPR, you have the following rights:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Right to access:</strong> Request copies of your personal data</li>
              <li><strong>Right to rectification:</strong> Request correction of inaccurate data</li>
              <li><strong>Right to erasure:</strong> Request deletion of your personal data</li>
              <li><strong>Right to restrict processing:</strong> Request limitation on how we use your data</li>
              <li><strong>Right to data portability:</strong> Request transfer of your data</li>
              <li><strong>Right to object:</strong> Object to processing of your personal data</li>
              <li><strong>Right to withdraw consent:</strong> Withdraw consent at any time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Data Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational measures to protect your
              personal data against unauthorized access, alteration, disclosure, or destruction.
              Our website uses SSL encryption, and we maintain regular security updates and backups.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Cookies</h2>
            <p className="mb-4">
              Our website uses cookies to enhance your browsing experience and analyze website
              traffic through Google Analytics. You can control cookie settings through your
              browser preferences.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Third-Party Services</h2>
            <p className="mb-4">
              We may share your data with trusted third-party service providers who assist us in
              operating our business, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Website hosting providers</li>
              <li>Email communication services</li>
              <li>Analytics services (Google Analytics)</li>
              <li>Payment processors (for transactions)</li>
            </ul>
            <p className="mb-4">
              These third parties are contractually obligated to protect your data and use it only
              for the specified purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">International Transfers</h2>
            <p className="mb-4">
              We may transfer your personal data outside the UK to service providers in countries
              with adequate data protection standards. All transfers are protected by appropriate
              safeguards.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Notice or wish to exercise your rights,
              please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded">
              <p className="mb-2"><strong>Jean-Luc Baroni Ltd</strong></p>
              <p className="mb-2">16 Mason's Yard, Duke Street, St. James's</p>
              <p className="mb-2">London SW1Y 6BU, United Kingdom</p>
              <p className="mb-2">Email: <a href="mailto:jwatson@jlbaroni.com" className="text-primary hover:underline">jwatson@jlbaroni.com</a></p>
              <p>Phone: <a href="tel:+442074841199" className="text-primary hover:underline">+44 (0)20 7484 1199</a></p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Complaints</h2>
            <p className="mb-4">
              If you are not satisfied with our response to your privacy concerns, you have the
              right to lodge a complaint with the Information Commissioner's Office (ICO):
            </p>
            <div className="bg-gray-50 p-6 rounded">
              <p className="mb-2"><strong>Information Commissioner's Office</strong></p>
              <p className="mb-2">Wycliffe House, Water Lane</p>
              <p className="mb-2">Wilmslow, Cheshire SK9 5AF</p>
              <p className="mb-2">Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.ico.org.uk</a></p>
              <p>Phone: 0303 123 1113</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">Changes to This Notice</h2>
            <p className="mb-4">
              We may update this Privacy Notice from time to time. Any changes will be posted on
              this page with an updated revision date. We encourage you to review this notice
              periodically.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
