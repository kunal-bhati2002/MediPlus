import Button from "../common/Button";

function EmergencyNumber() {
    return (<>
        <section className="container mx-auto px-4 sm:px-6 md:px-20 py-28 text-center">
            <div>
                <h3>DO you need Emergency Medical Care?</h3>
                <p>Call @ 1234 56789</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam obcaecati delectus magni?</p>
                <div className="flex">
                    <Button className="text-primary bg-white">
                        Contact Now
                    </Button>
                    <Button className="text-primary bg-white">
                        Learn More
                    </Button>
                </div>
            </div>
        </section>
    </>);
}
export default EmergencyNumber