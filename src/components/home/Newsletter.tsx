import Button from "../common/Button";

function Newsletter() {
    return (<>
        <section className="container mx-auto py-20 px-4 sm:px-8 lg:px-12 flex bg-[#edf2ff] ">
            <div className=" w-full px-28">
                <h3 className="text-xl font-semibold mb-4">Sign up for newsletter</h3>
                <p className="text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
            <div className="w-full">
                <form className="flex gap-3">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-3 py-2 rounded-md text-gray-900 focus:outline-none border border-gray-300"
                    />
                    <Button
                        variant="primary"
                        size="md"
                    >
                        Subscribe
                    </Button>
                </form>
            </div>
        </section>
    </>);
}

export default Newsletter