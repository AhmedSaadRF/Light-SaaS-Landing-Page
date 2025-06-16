import productImage from '@/assets/product-image.png'
import pyramidImage from '@/assets/pyramid.png'
import tubeImage from '@/assets/tube.png'
import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <section>
      <div>
        <div>
          <div>
            <div>Boost your productivity</div>
          </div>
          <h2>A more effective way to track progress</h2>
          <p>Effortlessly turn your ideas into a fully functional, responsive, Saas website in just minutes with this template.</p>
        </div>
        <div>
          <Image src={productImage} alt='Product Image' />
          <Image src={pyramidImage} alt='pyramid Image' height={262} width={262} />
          <Image src={tubeImage} alt='Tube Image' height={248} />
        </div>
      </div>
    </section>
  );
};
