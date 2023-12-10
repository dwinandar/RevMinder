import SearchBar from "../components/SearchBar";
import Tips from "../components/Tips"



const Topic = () => {
  return (
    <>

      <div className="flex flex-col lg:flex-1">
        <div className="lg:mt-4 mt-8 lg:ml-5 lg:overflow-y-auto oveflow-hidden lg:rounded-lg lg:h-[84vh] xl:w-[80rem]">
          <div className="forum-container w-auto">

            <div className="discussion-container">
              <div className="title md:p-12 lg:border lg:rounded-[10px] bg-[#FFFFFF] xl:w-full">
                <div className="flex text-left flex-col px-4 ">
                  <p className="text-[24px] font-bold">Artikel dan Video</p>
                  <p>Artikel edukatif dan konten video yang menyenangkan</p>
                </div>

                <SearchBar placeholder={"Cari artikel, video..."} />

                <Tips />


              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Topic;

