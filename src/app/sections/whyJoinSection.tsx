import Image from "next/image";

const features = [
  {
    title: "Innovative Environment",
    description:
      "Work on groundbreaking projects that shape industries and create lasting change.",
    icon: "/brain.png",
  },
  {
    title: "Growth & Development",
    description:
      "Gain access to mentorship, training, and career advancement opportunities.",
    icon: "/growth.png",
  },
  {
    title: "Collaborative Culture",
    description:
      "Be part of a diverse, dynamic team that values new ideas and different perspectives.",
    icon: "/teamwork.png",
  },
  {
    title: "Collaborative Culture",
    description:
      "Be part of a diverse, dynamic team that values new ideas and different perspectives.",
    icon: "/gear.png",
  },
];

const WhyJoin = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 relative">
      {/* Left Side: Intro Text */}
      <div className="  m-auto">
        <div className="flex flex-col ">
            <div className="flex items-center space-x-2 border border-gray-300 rounded-[11px] px-4 py-2 w-fit">
          <span className="h-2 w-2 bg-black rounded-full"></span>
          <p className="text-sm font-medium">Careers at Digital Guardians</p>
        </div>
        <div className="p-4"></div>
        <h2 className="text-4xl font-light mb-4">Shape the future with us.</h2>

        <div className="p-2"></div>
        <p className="text-gray-700 leading-relaxed font-light tracking-wider">
          At Digital Guardians, we believe in the power of people to drive
          meaningful change. We are a team of thinkers, innovators, and
          problem-solvers committed to transforming businesses, industries, and
          communities. If you&#39;re passionate about making an impact, this is the
          place for you.
        </p>
        </div>
      </div>

      {/* Right Side: Features */}
      <div className=" flex flex-col md:items-center" >
        <h3 className="text-2xl font-light mb-6">
          Why Join Digital Guardians?
        </h3>
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="p-2 rounded-lg bg-[#ffeaea] flex-shrink-0">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <p className="text-[#A20000] font-light  ">
                  {feature.title}
                </p>
                <div className="p-1" ></div>
                <p className="text-gray-800 text-sm w-[200px] md:w-[250px] font-light leading-relaxed tracking-wider">{feature.description}</p>
                <div className="p-3" ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Image
                    src="/paper-texture-two.svg"
                    alt="Foreground texture"
                    fill
                    className="pointer-events-none z-50 object-center h-full object-cover opacity-25"
                  />
    </section>
  );
};

export default WhyJoin;
