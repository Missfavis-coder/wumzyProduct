


const HeroSection =() => {

    return (
        <div className="flex relative flex-col items-center py-2 px-6 mt-24 lg:mt-20">
            <h1 className="pt-12 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center tracking-wide max-w-4xl text-neutral-700 md:mt-10 mt-8 font-bold ">
                Smart <span className="bg-gradient-to-r from-yellow-500 to-yellow-800 text-transparent bg-clip-text"> AI-Powered  </span> <br className="sm:hidden flex"/> Lecture Room Allocation
                {""} & Scheduling
                
            </h1>
            <p className="mt-10 text-lg text-center text-neutral-700 max-w-xl">
                Automatically assign lecture halls, avoid clashes, optimize your timetable with AI algoritms to save time, and provides transparency for students and staff.
            </p>
            <div className="grid lg:grid-cols-2 max-w-4xl items-center justify-center mt-10 text-sm font-bold ">
                <button className="bg-gradient-to-r rounded-3xl from-neutral-500 cursor-pointer to-yellow-800 py-3 px-8 mx-3 transition-all hover:scale-105 text-white"> Get Started
                </button>
                <button  className="py-3 px-12 cursor-pointer mx-3 rounded-3xl border border-neutral-800 lg:mt-0 mt-4 transition-all hover:scale-105" >Demo</button>
            </div>

            <div className="md:text-sm text-xs mt-18">Optimal use of lecture rooms with <span className="text-yellow-700"> AI-powered </span> scheduling.</div>
            
        </div>
    )
}

export default HeroSection
