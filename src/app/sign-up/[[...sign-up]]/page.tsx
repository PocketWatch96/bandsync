import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center gap-12 px-10 py-44">
            <div className="p-4">
                <SignUp
                    appearance={{
                        elements: {
                            formButtonPrimary:
                                "btn btn-accent max-h-4 hover:bg-accent hover:shadow-0",
                        },
                    }}
                />
            </div>
        </div>
    );
}
