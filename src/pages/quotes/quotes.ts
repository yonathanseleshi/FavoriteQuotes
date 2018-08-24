import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {Quote} from "../../data/quote.interface";
import {QuoteService} from "../../services/quote.service";

/**
 * Generated class for the QuotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{

  quoteGrp : {category: string, quotes: Quote[], icon: string }

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private alertCtrl: AlertController, private quoteService: QuoteService) {
  }

  ngOnInit(){
    this.quoteGrp = this.navParams.data

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotesPage');

  }



  onAddToFav(selectedQuote: Quote){

    const alert = this.alertCtrl.create({

      title: 'Add Quote',
      subTitle: 'Are you sure',
      message: 'Are you sure you want to add to favorites?',
      buttons: [{

          text: "Yes, go ahead",
          handler: () => {

            this.quoteService.addQuoteToFav(selectedQuote)
          }
      },
        {

          text: "No, I changed my mind",
          role: 'cancel',
          handler: () => {


          }
        }

      ]
    })

    alert.present()
  }

}
