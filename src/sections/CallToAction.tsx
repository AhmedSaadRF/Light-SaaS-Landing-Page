import ArrowRight from '@/assets/arrow-right.svg'
import starImage from '@/assets/star.png'
import springImage from '@/assets/spring.png'
import Image from 'next/image';

export const CallToAction = () => {
  return (
    <section>
      <div>
        <div>
          <h2>Sign up for free today</h2>
          <p>Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
          <Image src={starImage} alt='Star Image' width={360} />
          <Image src={springImage} alt='Spring Image' width={360} />
        </div>
        <div>
          <button>Get for free</button>
          <button>
            <span>Learn more</span>
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};
