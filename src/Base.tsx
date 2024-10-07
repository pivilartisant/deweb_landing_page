import { Countdown } from './components/Countdown';
import { CTA } from './components/CTA';
import { Logo } from './components/Logo';

export function Base() {
  return (
    <div
    className='flex flex-col items-center justify-center'
    >
      <Logo />
      <CTA />
      <Countdown />
    </div>
  );
}
