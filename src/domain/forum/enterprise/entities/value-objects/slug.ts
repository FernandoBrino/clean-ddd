export class Slug {
  public value: string

  constructor(value: string) {
    this.value = value
  }

  /**
   * Receives a string and normalize it as a slug.
   *
   * Example: "An example title" => "an-example-title"
   *
   * @param text {string}
   */
  static createFromText(text: string) {
    const slugText = text
      .normalize('NFKD')
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-') // s - espaços em branco
      .replace(/[^\w-]+/g, '') // w - palavras, ^ - o inverso
      .replace(/_/g, '-')
      .replace(/--+/g, '-')
      .replace(/-$/g, '') // $ - fim da string

    return new Slug(slugText)
  }
}
