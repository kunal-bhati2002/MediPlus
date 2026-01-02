import { Link } from "react-router-dom";
import { doctors, type Doctor } from "../../data/doctors";

function DocDetails() {
    return (
        <>
            <div className="container mx-auto px-4 sm:px-6 md:px-20 py-28 text-center">
                <div className="grid grid-cols-3 gap-5">
                    {doctors.map((doc) => (
                        <DoctorCard key={doc.id}
                            name={doc.name}
                            slug={doc.slug}
                            specialty={doc.specialty}
                            profileImage={doc.profileImage}
                            rating={doc.rating}
                            experienceYears={doc.experienceYears}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default DocDetails

type BasicInfo = Pick<
    Doctor,
    "name" | "slug" | "specialty" | "profileImage" | "rating" | "experienceYears"
>;

const DoctorCard = ({ name, specialty, profileImage, experienceYears, rating, slug }: BasicInfo) => {

    return (<>
        <Link to={`/doctors/${slug}`} >
            <div className="rounded-md shadow-lg">
                <img src={profileImage} alt={name} className="h-[500px] w-full rounded-t-md" />
                <p className="text-sm">{specialty}</p>
                <p className="text-lg">{name}</p>
                <div className="flex gap-5 justify-center py-2">
                    <p>Experience: {experienceYears}</p>
                    <p>Rating: {rating}/5</p>
                </div>
            </div>
        </Link>
    </>)
}