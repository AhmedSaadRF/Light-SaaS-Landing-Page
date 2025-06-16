import ArrowIcon from '@/assets/arrow-right.svg'
import cogImage from '@/assets/cog.png'
import cylinderImage from '@/assets/cylinder.png'
import noodleImage from '@/assets/noodle.png'
import Image from 'next/image'

export const Hero = () => {
  return (
    <section>
      <div>
        <div>
          <div>
            <div>Version 2.0 is here</div>
            <h1>Pathway to productivity</h1>
            <p>Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.</p>
            <div>
              <button >Get for free</button>
              <button>
                <span>Learn more</span>
                <ArrowIcon />
              </button>
            </div>
          </div>
          <div>
            <Image src={cogImage} alt='Cog image' />
            <Image src={cylinderImage} width={220} height={220} alt='Cylinder image' />
            <Image src={noodleImage} width={220} alt='Noodle image' />
          </div>
        </div>
      </div>
    </section>
  );
};
