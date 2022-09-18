export class Quote {
  /**
   *
   * @param {{author:string, content:string}} data
   */
  constructor(data) {
    this.author = data.author;
    this.quote = data.content;
  }

  get QuoteTemplate() {
    return /*html*/ `
    <div>
      <h3>${this.quote}</h3>
      <h6 class="on-hover">- ${this.author}</h6>
    </div>
    `;
  }
}
