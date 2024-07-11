const getGigById = async ({ id }: { id: string }) => {};

const Gig = async ({ params }: { params: { gigId: string } }) => {
    const EDITMODE = params.gigId === "new" ? false : true;

    if (EDITMODE) {
    }

    return <div className="p-4">Gig ID: {params.gigId}</div>;
};

export default Gig;
