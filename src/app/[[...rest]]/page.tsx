import Image from "next/image";
import MainLayout from "../(components)/MainLayout";
import { SignedIn } from "@clerk/nextjs";
import { BandPage } from "../(components)/bands/BandPage";

export default function Home() {
    return (
        <div>
            <SignedIn>
                <BandPage />
            </SignedIn>
        </div>
    );
}
