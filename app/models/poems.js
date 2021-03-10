export default class Poems {
  constructor(data) {
    this.poemsArray = data;
  }

  poemsTemplate() {
    console.log(this.poemsArray)
    let featured = `
        <!-- Featured Project Row-->
        <div class="row align-items-center no-gutters mb-4 mb-lg-5">
            <div class="col-xl-8 col-lg-7"><img class="img-fluid mb-3 mb-lg-0" src="assets/images/${this.poemsArray[0].img}" alt="" /></div>
            <div class="col-xl-4 col-lg-5">
                <div class="featured-text text-lg-left">
                    <h3 class="mb-2">Featured Poem!</h3>
                    <h4>${this.poemsArray[0].title}</h4>
                    <p class="text-black-50 mb-0">${this.poemsArray[0].poem}</p>
                </div>
            </div>
        </div>
    `

    let template = ""
    for (let i = 1; i < this.poemsArray.length; i++) {
      template += `
      <!-- Picture Left Row-->
      <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div class="col-lg-6"><img class="img-fluid" src="/assets/images/${this.poemsArray[i].img}" alt="" /></div>
          <div class="col-lg-6">
              <div class="bg-black text-center h-100 project">
                  <div class="d-flex h-100">
                      <div class="project-text w-100 my-auto text-center text-lg-left">
                          <h4 class="text-white">${this.poemsArray[i].title}</h4>
                          <p class="mb-0 text-white-50">An example of where you can put an image of a project, or anything else, along with a description.</p>
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
        <div class="row justify-content-center no-gutters">
            <div class="col-lg-6"><img class="img-fluid" src="/assets/images/${this.poemsArray[x].img}" alt="" /></div>
            <div class="col-lg-6 order-lg-first">
                <div class="bg-black text-center h-100 project">
                    <div class="d-flex h-100">
                        <div class="project-text w-100 my-auto text-center text-lg-right">
                            <h4 class="text-white">${this.poemsArray[x].title}</h4>
                            <p class="mb-0 text-white-50">Another example of a project with its respective description. These sections work well responsively as well, try this theme on a small screen!</p>
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