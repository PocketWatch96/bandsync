import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center gap-12 px-10 py-44">
            <SignIn />
        </div>
    );
}
