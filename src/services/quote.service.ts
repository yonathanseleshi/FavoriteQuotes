import {Quote} from "../data/quote.interface";


export class QuoteService {

  private favoriteQuotes: Quote[] = []

  addQuoteToFav(quote: Quote){

    this.favoriteQuotes.push(quote)
    console.log("added quote: "+ quote.text)
    console.log(this.favoriteQuotes);



  }

  removeQuoteFromFav(quoteFav: Quote){

    const position = this.favoriteQuotes.findIndex((quoteToRemove) => {

      return quoteToRemove.id == quoteFav.id

    })

    this.favoriteQuotes.splice(position, 1)


  }


  getFavQuotes(){

    return this.favoriteQuotes.slice()

  }
}
