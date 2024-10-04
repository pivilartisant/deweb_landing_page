import { Countdown } from "./components/Countdown";
import { CTA } from "./components/CTA";
import { Logo } from "./components/Logo";

export function Base(){
    return (
        <>
        <Logo/>
        <CTA/>
        <Countdown/>
        </>
    )
}