import {Component, OnInit} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {QuoteService} from "../../services/quote.service";
import {Quote} from "../../data/quote.interface";
import {QuotePage} from "../quote/quote";

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage implements OnInit{

  quotes: Quote[] = []

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private qouteService: QuoteService, private modalCtrl: ModalController) {
  }

  ngOnInit(){




  }


  ionViewWillEnter(){
    this.quotes = this.qouteService.getFavQuotes()
    console.log(this.quotes)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }


  onViewQuote(quote: Quote){

    const modal = this.modalCtrl.create(QuotePage, quote)

    modal.present()

    modal.onDidDismiss((unfav: boolean) => {

      if (unfav){

          console.log(unfav)

        this.onDeleteFav(quote)
      }



    })


  }


  onDeleteFav(quote: Quote){



    this.qouteService.removeQuoteFromFav(quote)


    const position = this.quotes.findIndex((quoteOj: Quote) => {

      return quoteOj.id == quote.id

    })

    this.quotes.splice(position, 1)

    console.log("This quote has been deleted: " + quote.text)
  }


}
