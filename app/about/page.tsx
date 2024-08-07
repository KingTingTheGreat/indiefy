import Link from 'next/link';

export default function AboutPage() {
  const team = [
    {
      name: 'Jeffrey Ting',
      picture: '/images/jeffrey.jpg',
      bio: 'I am a student at Boston University majoring in Computer Science and Philosophy.',
    },
    {
      name: 'Rida Naeem',
      picture: '/images/rida.jpg',
      bio: 'I am a student at Boston University majoring in Neuroscience and minoring in Computer Science.',
    },
  ];

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-4xl p-2 m-1">Meet the team!</h1>
      <p className=" text-xl m-1 max-w-[70%] text-center">
        We are a team of undergraduate developers passionate about analyzing and
        learning about our music listening habits. We&apos;re excited to share
        our project with you!
      </p>
      <Link
        href="https://github.com/KingTingTheGreat/indiefy"
        className="hover:text-yellow m-2 p-2 rounded-lg max-sm:text-lg text-xl underline hover:text-customGreen transition-all"
        target="_blank"
      >
        Check us out on GitHub!
      </Link>
      <div className="flex flex-row flex-wrap justify-center w-[80%] m-4 max-sm:w-full">
        {team.map((member) => {
          const { name, picture, bio } = member;
          return (
            <div
              key={name}
              className="flex flex-col items-center w-60 max-sm:w-52 m-6 max-sm:m-2 rounded-3xl p-4 max-sm:p-2 bg-nullGray"
            >
              <h2 className="text-2xl max-sm:text-xl text-customGreen">
                {name}
              </h2>
              <p className="text-md max-sm:text-sm pt-2 text-center">{bio}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
