function Banner() {
    return (<>
        <section className=" md:grid grid-cols-2 bg-[url(/public/images/home_banner_image_1.jpg)] bg-cover">
            <div className="w-[80%] mx-auto py-8">
                <h1 className="text-2xl font-semibold sm:font-bold">We Provide <span className="text-primary">Medical</span> Services That You Can <span className="text-primary">Trust!</span></h1>
                <p className="py-3 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi ipsam quidem aperiam libero, incidunt numquam.</p>
                <div className="flex flex-col gap-2 text-white font-medium sm:flex-row">
                    <button className="bg-primary hover:bg-primary-dark px-4 py-2 rounded-sm w-full">Get appointment</button>
                    <button className="bg-primary-dark hover:bg-primary px-4 py-2 rounded-sm w-full">Learn More</button>
                </div>
            </div>
            <div className="hidden">
                <p>hello</p>
            </div>
        </section>
    </>);
}

export default Banner