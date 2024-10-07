import { Baseline } from "./components/Baseline";
import { Countdown } from "./components/Countdown";
import { CTA } from "./components/CTA";
import { Logo } from "./components/Logo";

export function Base(){
    return (
        <div
        className="base">
            <Logo />
            <Baseline/>
            <Countdown/>
            <CTA/>
      </div>
    )
}