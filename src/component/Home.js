const Home = () => {
  return (
    <div className="home">
      {/* section1 */}
      <section style={{height:'87vh'}} className="mt-2">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 px-9">
            <div className="content1 my-auto">
              <div className="herotext flex flex-col gap-4">
                <p className="text-yellow-600 text-md font-semibold">100% SATISFACTION GUARANTEE</p>
                <h1 className="text-6xl">
                  Find Your <br /> Perfect
                  <span className="border-b-4  border-yellow-600 font-bold"> Tutor</span>
                </h1>
                <p className="text-xl">
                  We help you find perfect tutor 1-on-1 lessons. <br />It is Completely free
                  and private
                </p>
              </div>
              <div className="hero-buttons flex gap-3 mt-3">
                <button className="bg-yellow-400 rounded-lg hover:bg-yellow-500 px-3 py-3">Get Started</button>
                <button className="py-2 px-3 border-2 border-yellow-400 hover:border-yello rounded-lg">See how it works</button>
              </div>
            </div>
            <div className="content2  p-4">
                <div className="grid grid-cols-2 grid-rows-2 gap-8">
                    <div className="image1 rounded-s-full">
                        <img className=" rounded-s-full" src="https://media.istockphoto.com/id/1824731429/photo/young-asian-woman-using-tablet-over-white-background-technology-concept.jpg?s=612x612&w=0&k=20&c=X8rj24j0hkdUmoV9RDIvF68Kan665yHq4TPFgmw6f2o=" width={'100%'} alt="" />
                    </div>
                    <div className="image2">
                        <img className="rounded-lg" src="https://img.freepik.com/free-photo/waist-up-shot-pretty-girl-smiles-pleasantly_273609-28224.jpg?t=st=1712065714~exp=1712069314~hmac=372f446b0719e8953a9d82959538122793637148774fa8e4e1bcc66bc5070afd&w=740" width={'100%'} alt="" />
                    </div>
                    <div className="image3">
                        <img className="rounded-lg" src="https://img.freepik.com/premium-photo/girl-with-glasses-holds-set-notebooks_274222-24335.jpg?w=740" width={'100%'} alt="" />
                    </div>
                    <div className="image4">
                        <img className="rounded-e-full" src="https://img.freepik.com/free-photo/portrait-smiling-young-african-male-student_171337-8884.jpg?t=st=1712066008~exp=1712069608~hmac=eb4842d6b25333d7c95ac2a9e9be5e2b92be61acbe423267cc7f26799224112f&w=740" width={'100%'} alt="" />
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 2 */}
      <section>
        <div className="bg-sky-700 py-3">

        </div>
      </section>
    </div>
  );
};

export default Home;
