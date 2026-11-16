import { ParallaxComponent } from '@/components/ui/parallax-scrolling';
import { SlideTabs } from '@/components/ui/slide-tabs';

export default function ParallaxDemo() {
  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6">
        <SlideTabs />
      </nav>
      <ParallaxComponent />
      <div className="osmo-credits">
        <p className="osmo-credits__p">Resource by <a target="_blank" href="https://www.osmo.supply/" className="osmo-credits__p-a">Osmo</a>
        </p>
      </div>
    </>
  );
}
