import { ParallaxComponent } from '@/components/ui/parallax-scrolling';
import { SiteNav } from '@/components/site-nav';
import { DerekSections } from '@/components/derek-sections';

export default function ParallaxDemo() {
  return (
    <>
      <SiteNav />
      <ParallaxComponent />
      <DerekSections />
    </>
  );
}
