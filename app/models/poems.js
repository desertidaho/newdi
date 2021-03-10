export default class Poems {
  constructor(data) {
    this.poemsArray = data;
  }

  poemsTemplate() {
    console.log(this.poemsArray)
    let featured = `
        <!-- Featured Project Row-->
        <div class="d-flex justify-content-center mb-3">
          <h4 style="color: orangered;">Featured poem, listen now!</h4>
        </div>
        <div class="d-flex justify-content-center mb-4">
          <audio controls preload="auto" style="box-shadow: 0px 0px 0px 2px orangered;"><source src="/assets/audio/${this.poemsArray[0].audio}" type="audio/wav"></audio>
        </div>
        <div class="row align-items-center gutters mb-4 mb-lg-5">
            <div class="col-xl-6 col-lg-5"><img class="img-fluid mb-sm-0" src="assets/images/${this.poemsArray[0].img}" alt="" /></div>
            <div class="col-xl-6 col-lg-7 py-5">
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
      <a data-toggle="modal" data-target="#${this.poemsArray[i].id}">
      <div class="row justify-content-center no-gutters mb-5 mb-lg-0" style="height: 40vh;">
          <div class="col-lg-6"><img class="img-fluid" src="/assets/images/${this.poemsArray[i].img}" alt="" style="width: 100% !important; height: 100% !important;" /></div>
          <div class="col-lg-6 order-lg-first">
              <div class="bg-black text-center h-100 project">
                  <div class="d-flex h-100">
                      <div class="project-text w-100 mt-5 text-center text-md-right">
                          <h4 class="text-white">${this.poemsArray[i].title}</h4>
                          <hr class="d-none d-lg-block mb-0 mr-0" />
                      </div>
                  </div>
              </div>
          </div>
      </div>
      </a>
      <!-- Modal -->
        <div class="modal fade fullscreen" id="${this.poemsArray[i].id}" tabindex="-1" role="dialog"
            aria-labelledby="${this.poemsArray[i].title}" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${this.poemsArray[i].title}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p class="text-left">
                        ${this.poemsArray[i].poem}
                        </p>
                    </div>
                    <div class="modal-footer">
                      
                          <audio controls preload="auto" style="box-shadow: 0px 0px 0px 2px orangered;"><source src="/assets/audio/${this.poemsArray[i].audio}" type="audio/wav"></audio>
                     
                        <a href="https://www.amazon.com/gp/product/1792611633"
                            target="_blank">
                            <button type="button" class="btn btn-warning shadow amazon-btn px-3">
                                Buy on<i class="ml-2 fab fa-1x fa-amazon"></i>
                            </button>
                        </a>
                        <a class="btn btn-warning shadow"
                            href="https://commerce.coinbase.com/checkout/14e93c6a-bdd0-4eff-befb-8a869b2d26bf"
                            target="_blank" role="button">
                            Donate
                            <i class="ml-1 fab fa-bitcoin"></i>
                        </a>
                    </div>
                </div>
            </div>
          </div>
          <!-- End Modal -->
      `
        for (let x = i + 1; x < this.poemsArray.length; x++) {
        template += `
        <!-- Picture Right Row-->
        <a data-toggle="modal" data-target="#${this.poemsArray[x].id}">
        <div class="row justify-content-center no-gutters mb-5 mb-lg-0" style="height: 40vh;">
            <div class="col-lg-6"><img class="img-fluid" src="/assets/images/${this.poemsArray[x].img}" alt="" style="width: 100% !important; height: 100% !important;" /></div>
            <div class="col-lg-6">
                <div class="bg-black text-center h-100 project">
                    <div class="d-flex h-100">
                        <div class="project-text w-100 mt-5 text-center text-md-left">
                            <h4 class="text-white">${this.poemsArray[x].title}</h4>
                            <hr class="d-none d-lg-block mb-0 ml-0" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </a>
        <!-- Modal -->
        <div class="modal fade fullscreen" id="${this.poemsArray[x].id}" tabindex="-1" role="dialog"
            aria-labelledby="${this.poemsArray[x].title}" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${this.poemsArray[x].title}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p class="text-left">
                        ${this.poemsArray[x].poem}
                        </p>
                    </div>
                    <div class="modal-footer">
                        <a href="https://www.amazon.com/gp/product/1792611633"
                            target="_blank">
                            <button type="button" class="btn btn-warning shadow amazon-btn px-3">
                                Buy on<i class="ml-2 fab fa-1x fa-amazon"></i>
                            </button>
                        </a>
                        <a class="btn btn-warning shadow"
                            href="https://commerce.coinbase.com/checkout/14e93c6a-bdd0-4eff-befb-8a869b2d26bf"
                            target="_blank" role="button">
                            Donate
                            <i class="ml-1 fab fa-bitcoin"></i>
                        </a>
                    </div>
                </div>
            </div>
          </div>
          <!-- End Modal -->
        `
        break
      }
      i += 1
    }
    return featured + template
  }

}