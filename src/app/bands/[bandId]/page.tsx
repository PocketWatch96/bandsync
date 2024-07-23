import BandForm from "../../(components)/bands/BandForm";

const getBandById = async (bandId: string) => {
    try {
        const res = await fetch(`http://localhost:3000/api/Bands/${bandId}`);

        if (!res.ok) {
            throw new Error("Failed to fetch band");
        }

        const band = await res.json();
        return band;
    } catch (error) {
        console.error("Error fetching band:", error);
        return null;
    }
};

const BandAandE = async ({ params }: { params: { bandId: string } }) => {
    const EDITMODE = params.bandId === "new" ? false : true;
    let updateBandData = {};

    if (EDITMODE) {
        updateBandData = await getBandById(params.bandId);
    } else {
        updateBandData = {
            _id: "new",
        };
    }

    return (
        <div className="p-4">
            <BandForm band={updateBandData} />
        </div>
    );
};

export default BandAandE;
