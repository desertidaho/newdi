export default class Poems {
  constructor(data) {
    this.poemsArray = data;
  }

  poemsTemplate() {
    console.log(this.poemsArray)
    let featured = `
        <!-- Featured Project Row-->
        <div class="d-flex justify-content-center mb-3">
          <h4 class="">Featured poem, listen now.</h4>
        </div>
        <div class="d-flex justify-content-center mb-4">
          <audio controls preload="auto" style="box-shadow: 0px 0px 0px 2px orangered;"><source src="/assets/audio/${this.poemsArray[0].audio}" type="audio/wav"></audio>
        </div>
        <div class="row align-items-center gutters mb-4 mb-lg-5">
            <div class="col-xl-5 col-lg-4"><img class="img-fluid mb-sm-0" src="assets/images/${this.poemsArray[0].img}" alt="" /></div>
            <div class="col-xl-7 col-lg-8 py-5">
                <div class="featured-text px-auto" style="white-space: wrap;">
                    <h4>${this.poemsArray[0].title}</h4>
                    <p class="mb-0 small">${this.poemsArray[0].poem}</p>
                </div>
            </div>
        </div>
    `
    let template = ""
    for (let i = 1; i < this.poemsArray.length; i++) {
      template += `
      <!-- Picture Left Row-->
      <div class="row justify-content-center no-gutters mb-5 mb-lg-0" style="height: auto;">
          <div class="col-lg-6"><img class="img-fluid" src="/assets/images/${this.poemsArray[i].img}" alt="" style="width: 100% !important;" /></div>
          <div class="col-lg-6">
              <div class="bg-black text-center h-100 project">
                  <div class="d-flex h-100">
                      <div class="project-text w-100 my-auto text-center text-lg-left">
                          <h4 class="text-white">${this.poemsArray[i].title}</h4>
                          <hr class="d-none d-lg-block mb-0 ml-0" />
                      </div>
                  </div>
              </div>
          </div>
      </div>
      `
        for (let x = i + 1; x < this.poemsArray.length; x++) {
        template += `
        <!-- Picture Right Row-->
        <div class="row justify-content-center no-gutters mb-5" style="height: auto;">
            <div class="col-lg-6"><img class="img-fluid" src="/assets/images/${this.poemsArray[x].img}" alt="" style="width: 100% !important;" /></div>
            <div class="col-lg-6 order-lg-first">
                <div class="bg-black text-center h-100 project">
                    <div class="d-flex h-100">
                        <div class="project-text w-100 my-auto text-center text-lg-right">
                            <h4 class="text-white">${this.poemsArray[x].title}</h4>
                            <hr class="d-none d-lg-block mb-0 mr-0" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
        break
      }
      i += 1
    }
    return featured + template
  }

}