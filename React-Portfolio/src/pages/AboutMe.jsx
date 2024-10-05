import { defaultImg } from "../assets/data";

const AboutMe = () => {
  return (
    <section className="bg-sky-100">
      <div className="alignment-class flex flex-col gap-6">
        <h3 className="text-3xl text-sky-950 py-4 font-bold tracking-widest mr-auto border-2 border-slate-500 px-8 rounded-xl bg-white shadow-xl">
          About Me
        </h3>
        <article className="flex flex-row justify-between">
          <div className="bg-white border-2 border-slate-500 rounded-xl p-4 w-full shadow-xl">
            <p className="text-lg font-bold p-4">
              Hi, I&apos;m Greg Barker. I am a motivated and enthusiastic web
              designer, dedicated to delivering high-quality websites and
              development projects.
            </p>
            <p className="text-lg p-4">
              I am able to communicate effectively with clients and team
              members, ensuring a productive and consistent workflow.
            </p>
            <p className="text-lg p-4">
              I am eager to collaborate with skilled and dedicated professionals
              to further enhance technical skills and industry practices.
            </p>
            <p className="text-lg font-bold p-4">
              Coding has become a gateway that is helping me bridge the gap
              between my creative and technical skills.
            </p>
            <p className="text-lg p-4">
              I started coding in high school but did not pursue it as a career.
              Instead I followed a path that led me to becoming a Master
              Electrician and running projects. I have always enjoyed learning
              systems and how they work. I am a natural problem solver and as
              technology advanced I found myself drawn to learning to code
              again. I started independently by doing online tutorials in hopes
              that I would be able to create a game. I caught the coding bug and
              took on the challenge of designing a website for a friend to
              replace their Shopify page. When things started to click I decided
              to take the plunge and enroll in the EdX Full-Stack Developer
              Coding Bootcamp. I am excited to see where this journey takes me.
            </p>
            <p className="text-lg font-bold p-4">
              Creativity and Technology have always been a part of my life.
            </p>
            <p className="text-lg p-4">
              I am a musician and have played guitar for over 25 years now. I
              ran a recording studio for a few years and recorded songs for
              local artists and bands and live shows. I love recording and
              mixing music on old analog gear.
            </p>
            <p className="text-lg p-4">
              I am an amateur commercial photographer and have successfully
              created profitable Amazon listings with my photos. I enjoy using
              Abode Creative cloud programs to craft visually intriguing images
              and add them to my digital projects. I have created advertisements
              for social media and websites for local businesses.
            </p>
            <p className="text-lg p-4">
              I am an amateur writer and working on a novel that has slowly
              adapted itself into becoming a game instead. I call it Shadowtide
              Island and when I have extra time, or need a recharge, I work on
              it. I am eager to share it with people.
            </p>
            <p className="text-lg p-4">
              I have many ideas and interests, and I am always looking for new
              ways to learn and grow. I am excited for the journey ahead and all
              the advancements in technology that I will be able to harness. The
              future is now.
            </p>
          </div>
          <div className="w-full bg-sky-100 flex flex-col justify-around gap-16 p-16">
            <div className="bg-white px-8 py-4 rounded-xl border-2 border-slate-500">
              {" "}
              <img
                src={defaultImg.img}
                alt="Greg Barker"
                className="border-2 border-slate-500 rounded-xl shadow-xl"
              />
              <p className="text-lg font-bold p-4">Greg Barker</p>
            </div>

            <div className="bg-white px-8 py-4 rounded-xl border-2 border-slate-500">
              {" "}
              <img
                src={defaultImg.img}
                alt="Greg Barker"
                className="border-2 border-slate-500 rounded-xl shadow-xl"
              />
              <p className="text-lg font-bold p-4">Greg Barker</p>
            </div>
            <div className="bg-white px-8 py-4 rounded-xl border-2 border-slate-500">
              {" "}
              <img
                src={defaultImg.img}
                alt="Greg Barker"
                className="border-2 border-slate-500 rounded-xl shadow-xl"
              />
              <p className="text-lg font-bold p-4">Greg Barker</p>
            </div>
            <div className="bg-white px-8 py-4 rounded-xl border-2 border-slate-500">
              {" "}
              <img
                src={defaultImg.img}
                alt="Greg Barker"
                className="border-2 border-slate-500 rounded-xl shadow-xl"
              />
              <p className="text-lg font-bold p-4">Greg Barker</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
export default AboutMe;
