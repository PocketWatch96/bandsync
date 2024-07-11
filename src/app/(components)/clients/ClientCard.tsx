import ClientDelete from "./ClientDelete";
import ClientInfo from "./ClientInfo";

const Page = () => {
    return (
        <div className="card flex flex-col bg-base-300 shadow-lg p-4 m-2">
            <div className="flex mb-3">
                <div className="text-lg">Client Name</div>
                <div className="ml-auto">
                    <ClientDelete />
                </div>
            </div>
            <hr className="h-px border-0 bg-primary mb-2" />
            <div className="flex-grow"></div>
            <div className="flex mt-2">
                <ClientInfo />
            </div>
        </div>
    );
};

export default Page;
