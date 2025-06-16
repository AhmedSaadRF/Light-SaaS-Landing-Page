import ArrowRight from '@/assets/arrow-right.svg'
import Logo from '@/assets/logosaas.png'
import Image from 'next/image';
import MenuIcon from '@/assets/menu.svg'

export const Header = () => {
  return (
    <header>
      <div>
        <p>Streamline your workflowand boost your productivity</p>
        <div>
          <p>Get started for free</p>
          <ArrowRight />
        </div>
      </div>
      <div>
        <div>
          <div>
            <Image src={Logo} alt="Saas Logo" height={40} width={40} />
            <MenuIcon />
            <nav>
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <button>Get for free</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
