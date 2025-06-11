import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    title: 'Innovative Environment',
    description: 'Work on groundbreaking projects that shape industries and create lasting change.',
    icon: '/brain.png',
  },
  {
    title: 'Growth & Development',
    description: 'Gain access to mentorship, training, and career advancement opportunities.',
    icon: '/growth.png',
  },
  {
    title: 'Collaborative Culture',
    description: 'Be part of a diverse, dynamic team that values new ideas and different perspectives.',
    icon: '/teamwork.png',
  },
  {
    title: 'Collaborative Culture',
    description: 'Be part of a diverse, dynamic team that values new ideas and different perspectives.',
    icon: '/gear.png',
  },
];

const WhyJoin = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Left Side: Intro Text */}
      <div>
        <div className="flex items-center space-x-2 border border-gray-300 rounded-[11px] px-4 py-2 w-fit">
            <span className="h-2 w-2 bg-black rounded-full"></span>
            <p className="text-sm font-medium">Careers at Digital Guardians</p>
          </div>
          <div className='p-4'></div>
        <h2 className="text-4xl font-bold mb-4">Shape the future with us.</h2>
        
    <div className='p-2'></div>
        <p className="text-gray-700 leading-relaxed">
          At Digital Guardians, we believe in the power of people to drive meaningful change. We are a team of thinkers,
          innovators, and problem-solvers committed to transforming businesses, industries, and communities. If you're
          passionate about making an impact, this is the place for you.
        </p>
      </div>

      {/* Right Side: Features */}
      <div>
        <h3 className="text-2xl font-semibold mb-6">Why Join Digital Guardians?</h3>
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="p-2 rounded-lg bg-[#ffeaea] flex-shrink-0">
                <Image src={feature.icon} alt={feature.title} width={40} height={40} />
              </div>
              <div>
                <h4 className="text-[#d12323] font-semibold">{feature.title}</h4>
                <p className="text-gray-700 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
