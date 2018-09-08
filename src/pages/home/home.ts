import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    tot;
	totformat;
    hut;
	hutformat;
    was;
	wasformat;
    bpj;
	bpjformat;
    sisawarisan = 0;
    ashobah;
    totbagian = 0;

	DECIMAL_SEPARATOR=".";
	GROUP_SEPARATOR=".";
	
    satu;
    dua;

    baganaklk = 0; baganakpr = 0;
    bagcucupr = 0; bagcuculk = 0;
    bagsuami = 0;
    bagistri = 0;
    bagbapak = 0;
    bagkakekbapak = 0;
    bagibu = 0;
    bagsdrlk = 0; bagsdrpr = 0;
    bagsdrlkbpk = 0; bagsdrprbpk = 0;
    bagsdrlkibu = 0; bagsdrpribu = 0;
    bagnenekbapak = 0; bagnenekibu = 0;
    bagkeponakan = 0; bagkeponakanbpk = 0;
    bagpaman = 0; bagpamanbpk = 0;
    bagsepupu = 0; bagsepupubapak = 0;

    totbagibu = 0;
    totbagbapak = 0;
    totbaganaklk = 0;
    totbaganakpr = 0;
    totbagcuculk = 0;
    totbagcucupr = 0;
    totbagsdrlk = 0;
    totbagsdrpr = 0;
    totbagpaman = 0;
    totbagkeponakan = 0;
    totbagpamanbpk = 0;
    totbagsepupu = 0;
    totbagsepupubapak = 0;
    totbagkeponakanbapak = 0;
    totbagkakekbapak = 0;
    totbagsdrlkbapak = 0;
    totbagsdrprbapak = 0;
    totbagistri = 0;
    totbagsuami = 0;
    totbagnenekbapak = 0;
    totbagsdrlkibu = 0;
    totbagnenekibu = 0;
    totbagsdrpribu = 0;

    ashobahview = "ashobah";

    jlk = 0;
    jpr = 0;
    jalk = 0;
    japr = 0;
    jlkc = 0;
    jprc = 0;
    jlkprc = 0;
    jalkpr = 0;
    jmlanak = 0;
    jmlanaklk = 0;
    jmlanaklkview;
    jmlanakpr = 0;
    jmlanakprview;
    jmlcuculk = 0;
    jmlcuculkview;
    jmlcucupr = 0;
    jmlcucuprview;
    jmlsuami = 0;
    jmlsuamiview;
    jmlistri = 0;
    jmlistriview;
    jmlbapak = 0;
    jmlbapakview;
    jmlibu = 0;
    jmlibuview;
    jmlnenekbpk = 0;
    jmlnenekbpkview;
    jmlnenekibu = 0;
    jmlnenekibuview;
    jmlsdrlk = 0;
    jmlsdrlkview;
    jmlsdrpr = 0;
    jmlsdrprview;
    jmlsdrlkbpk = 0;
    jmlsdrlkbpkview;
    jmlsdrprbpk = 0;
    jmlsdrprbpkview;
    jmlsdrlkibu = 0;
    jmlsdrlkibuview;
    jmlsdrpribu = 0;
    jmlsdrpribuview;
    jmlkeponakan = 0;
    jmlkeponakanview;
    jmlkeponakanbpk = 0;
    jmlkeponakanbpkview;
    jmlpaman = 0;
    jmlpamanview;
    jmlpamanbpk = 0;
    jmlpamanbpkview;
    jmlsepupu = 0;
    jmlsepupuview;
    jmlsepupubpk = 0;
    jmlsepupubpkview;
    jsdrlkbpk = 0;
    jsdrlkbpkview;
    jmlkakekbpk = 0;
    jmlkakekbpkview;
    jsdrprbpk = 0;
    jsdrprbpkview;
    jsdrpr = 0;
    jsdrprview;
    jsdrlkprbpk = 0;
    jsdrlkprbpkview;
    jsdrlkpr = 0;
    jsdrlkprview;
    jsdrlk = 0;
    jsdrlkview;

    constructor(public navCtrl: NavController) {

    }

	format(valString) {
    if (!valString) {
      return '';
    }
    let val = valString.toString();
    const parts = this.unFormat(val).split(this.DECIMAL_SEPARATOR);
    return parts[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, this.GROUP_SEPARATOR)

	};

	unFormat(val) {
    if (!val) {
      return '';
    }
    val = val.replace(/^0+/, '').replace(/\D/g, '');
    if (this.GROUP_SEPARATOR === ',') {
      return val.replace(/,/g, '');
    } else {
      return val.replace(/\./g, '');
    }
	};
	
    hitung() {
		this.tot = this.unFormat(this.totformat);
		this.hut = this.unFormat(this.hutformat);
		this.was = this.unFormat(this.wasformat);
		this.bpj = this.unFormat(this.bpjformat);
        this.sisawarisan = this.tot - this.hut - this.was - this.bpj;

        // anak laki
        if (this.jmlanaklkview == null) {
            this.jmlanaklk = 0
        } else if (this.jmlanaklkview != null) {
            this.jmlanaklk = this.jmlanaklkview
        }

        // bapak
        if (this.jmlbapakview == null) {
            this.jmlbapak = 0
        } else if (this.jmlbapakview != null) {
            this.jmlbapak = this.jmlbapakview
        }

        // suami
        if (this.jmlsuamiview == null) {
            this.jmlsuami = 0
        } else if (this.jmlsuamiview != null) {
            this.jmlsuami = this.jmlsuamiview
        }

        // cucu laki laki
        if (this.jmlcuculkview == null) {
            this.jmlcuculk = 0
        } else if (this.jmlcuculkview != null) {
            this.jmlcuculk = this.jmlcuculkview
        }

        // kakek
        if (this.jmlkakekbpkview == null) {
            this.jmlkakekbpk = 0
        } else if (this.jmlkakekbpk != null) {
            this.jmlkakekbpk = this.jmlkakekbpkview
        }

        // saudara laki laki
        if (this.jmlsdrlkview == null) {
            this.jmlsdrlk = 0
        } else if (this.jmlsdrlk != null) {
            this.jmlsdrlk = this.jmlsdrlkview
        }

        // saudara laki laki sebapak
        if (this.jmlsdrlkbpkview == null) {
            this.jmlsdrlkbpk = 0
        } else if (this.jmlsdrlkbpk != null) {
            this.jmlsdrlkbpk = this.jmlsdrlkbpkview
        }

        // saudara laki laki seibu
        if (this.jmlsdrlkibuview == null) {
            this.jmlsdrlkibu = 0
        } else if (this.jmlsdrlkibu != null) {
            this.jmlsdrlkibu = this.jmlsdrlkibuview
        }

        // keponakan
        if (this.jmlkeponakanview == null) {
            this.jmlkeponakan = 0
        } else if (this.jmlkeponakanview != null) {
            this.jmlkeponakan = this.jmlkeponakanview
        }

        // keponakan sebapak
        if (this.jmlkeponakanbpkview == null) {
            this.jmlkeponakanbpk = 0
        } else if (this.jmlkeponakanbpkview != null) {
            this.jmlkeponakanbpk = this.jmlkeponakanbpkview
        }

        // paman
        if (this.jmlpamanview == null) {
            this.jmlpaman = 0
        } else if (this.jmlpamanview != null) {
            this.jmlpaman = this.jmlpamanview
        }

        // paman sebapak
        if (this.jmlpamanbpkview == null) {
            this.jmlpamanbpk = 0
        } else if (this.jmlpamanbpkview != null) {
            this.jmlpamanbpk = this.jmlpamanbpkview
        }

        // sepupu
        if (this.jmlsepupuview == null) {
            this.jmlsepupu = 0
        } else if (this.jmlsepupuview != null) {
            this.jmlsepupu = this.jmlsepupuview
        }

        // sepupu sebapak
        if (this.jmlsepupubpkview == null) {
            this.jmlsepupubpk = 0
        } else if (this.jmlsepupubpkview != null) {
            this.jmlsepupubpk = this.jmlsepupubpkview
        }

        // anak perempuan
        if (this.jmlanakprview == null) {
            this.jmlanakpr = 0
        } else if (this.jmlanakprview != null) {
            this.jmlanakpr = this.jmlanakprview
        }

        // cucu perempuan
        if (this.jmlcucuprview == null) {
            this.jmlcucupr = 0
        } else if (this.jmlcucuprview != null) {
            this.jmlcucupr = this.jmlcucuprview
        }

        // ibu
        if (this.jmlibuview == null) {
            this.jmlibu = 0
        } else if (this.jmlibu != null) {
            this.jmlibu = this.jmlibuview
        }

        // istri
        if (this.jmlistriview == null) {
            this.jmlistri = 0
        } else if (this.jmlistriview != null) {
            this.jmlistri = this.jmlistriview
        }

        // saudara perempuan
        if (this.jmlsdrprview == null) {
            this.jmlsdrpr = 0
        } else if (this.jmlsdrpr != null) {
            this.jmlsdrpr = this.jmlsdrprview
        }

        // nenek ibu
        if (this.jmlnenekibuview == null) {
            this.jmlnenekibu = 0
        } else if (this.jmlnenekibu != null) {
            this.jmlnenekibu = this.jmlnenekibuview
        }

        // nenek bapak
        if (this.jmlnenekbpkview == null) {
            this.jmlnenekbpk = 0
        } else if (this.jmlnenekbpk != null) {
            this.jmlnenekbpk = this.jmlnenekbpkview
        }

        // saudara perempuan bapak
        if (this.jmlsdrprbpkview == null) {
            this.jmlsdrprbpk = 0
        } else if (this.jmlsdrprbpk != null) {
            this.jmlsdrprbpk = this.jmlsdrprbpkview
        }

        // saudara perempuan seibu
        if (this.jmlsdrpribuview == null) {
            this.jmlsdrpribu = 0
        } else if (this.jmlsdrpribu != null) {
            this.jmlsdrpribu = this.jmlsdrpribuview
        }


        // //ahli waris wajib
        // //bagian anak perempuan kandung
        // if (this.jmlanakpr==1 && this.jmlanaklk==0){
        // 	this.baganakpr=1/2;
        // }
        // else if (this.jmlanakpr>1 && this.jmlcucupr==0 && this.jmlanaklk==0){
        // 	this.baganakpr=2/3;
        // }
        // //bagian cucu perempuan dari anak laki
        // if (this.jmlcucupr==1 && this.jmlanakpr==0 && this.jmlcuculk==0){
        // 	this.bagcucupr=1/2;
        // }
        // else if (this.jmlcucupr>1 && this.jmlanakpr==0 && this.jmlcuculk==0){
        // 	this.bagcucupr=2/3;
        // }
        // else if (this.jmlcucupr==1 && this.jmlcuculk==0 && this.jmlanakpr==1){
        // 	this.bagcucupr=1/6;
        // }

        // //bagian suami
        // if (this.jmlsuami==1 && this.jmlanaklk==0 && this.jmlanakpr==0 && this.jmlcuculk==0 && this.jmlcucupr==0){
        // 	this.bagsuami=1/2;
        // }
        // else if (this.jmlsuami==1 && (this.jmlanaklk>=1 || this.jmlanakpr>=1 || this.jmlcucupr>=1 || this.jmlcuculk>=1)) {
        // 	this.bagsuami=1/4;
        // }

        // //bagian istri
        // if (this.jmlistri>=1 && this.jmlanaklk==0 && this.jmlanakpr==0 && this.jmlcuculk==0 && this.jmlcucupr==0){
        // 	this.bagistri=1/4;
        // }
        // else if (this.jmlistri>=1 && (this.jmlanaklk>=1 || this.jmlanakpr>=1 || this.jmlcuculk>=1 || this.jmlcucupr>=1)){
        // 	this.bagistri=1/8;
        // }

        // //bagian bapak
        // if (this.jmlbapak==1 && this.jmlibu==1 && this.jmlanaklk>=1 && this.jmlanakpr>=1 && this.jmlcuculk>=1 && this.jmlcucupr>=1){
        // 	this.bagbapak=0;
        // }
        // else if (this.jmlbapak==1 && (this.jmlanaklk>=1 || this.jmlcuculk>=1)){
        // 	this.bagbapak=1/6;
        // }
        // else if (this.jmlbapak==1 && this.jmlanaklk==0 && this.jmlcuculk==0 && (this.jmlanakpr>=1 || this.jmlcucupr==1)){
        // 	this.bagbapak=1/6;
        // }

        // //bagian kakek
        // if (this.jmlkakekbpk==1 && (this.jmlanaklk>=1 || this.jmlcuculk>=1)){
        // 	this.bagkakekbapak=1/6;
        // }
        // else if (this.jmlkakekbpk==1 && this.jmlanaklk==0 && this.jmlcuculk==0 && (this.jmlanakpr>=1 || this.jmlcucupr>=1)){
        // 	this.bagkakekbapak=1/6;
        // }

        // //bagian ibu
        // if (this.jmlbapak==1 && this.jmlibu==1 && this.jmlanaklk>=1 && this.jmlanakpr>=1 && this.jmlcuculk>=1 && this.jmlcucupr>=1){
        // 	this.bagibu=0;
        // }
        // else if (this.jmlibu==1 && (this.jmlanaklk>=1 || this.jmlanakpr>=1 || this.jmlcuculk>=1 || this.jmlcucupr>=1)){
        // 	this.bagibu=1/6;
        // }
        // else if (this.jmlibu==1 && (this.jmlsdrlk>1 || this.jmlsdrpr>1 || this.jmlsdrlkbpk>1 || this.jmlsdrlkibu>1 || this.jmlsdrprbpk>1 || this.jmlsdrpribu>1)){
        // 	this.bagibu=1/6;
        // }

        // //bagian saudara perempuan kandung
        // if (this.jmlsuami==1 && this.jmlibu==1 && (this.jmlsdrlk>1 || this.jmlsdrpr>1) && (this.jmlsdrlkibu>1 || this.jmlsdrpribu>1)){
        // 	this.bagsdrpr=0;
        // }
        // else if (this.jmlsdrpr==1 && this.jmlsdrlk==0 && this.jmlkakekbpk==0){
        // 	this.bagsdrpr=1/2;
        // }
        // else if (this.jmlsdrpr>1 && this.jmlsdrlk==0){
        // 	this.bagsdrpr=2/3;
        // }

        // //bagian saudara perempuan sebapak
        // if (this.jmlsdrprbpk==1 && this.jmlsdrlkbpk==0 && this.jmlkakekbpk==0 && this.jmlsdrpr==0){
        // 	this.bagsdrprbpk=1/2;
        // }
        // else if (this.jmlsdrprbpk>1 && this.jmlsdrlkbpk==0 && this.jmlkakekbpk==0){
        //    this.bagsdrprbpk=2/3;
        // }
        // else if (this.jmlsdrprbpk==1 && this.jmlsdrlkbpk==0 && this.jmlkakekbpk==0 && this.jmlsdrpr==1){
        // 	this.bagsdrprbpk=1/6;
        // }

        // //bagian saudara seibu
        // if (this.jmlsuami==1 && this.jmlibu==1 && (this.jmlsdrlk==1 || this.jmlsdrpr==1) && (this.jmlsdrlkibu>1 || this.jmlsdrpribu>1)){
        // 	this.bagsdrlkibu=0;
        // 	this.bagsdrpribu=0;
        // }
        // else if (this.jmlsdrlkibu==1 || this.jmlsdrpribu==1){
        // 	this.bagsdrlkibu=1/6;
        // 	this.bagsdrpribu=1/6;
        // }
        // else if (this.jmlsdrlkibu>1 || this.jmlsdrpribu>1){
        // 	this.bagsdrlkibu=1/3;
        // 	this.bagsdrpribu=1/3;
        // }


        // //bagian nenek
        // if (this.jmlnenekibu==1 && this.jmlnenekbpk==0){
        // 	this.bagnenekibu=1/6;
        // }
        // else if (this.jmlnenekibu==0 && this.jmlnenekbpk==1){
        // 	this.bagnenekbapak=1/6;
        // }
        // else if (this.jmlnenekibu==1 && this.jmlnenekbpk==1){
        // 	this.bagnenekibu=1/12;
        // 	this.bagnenekbapak=1/12;
        // }

        /*//PEWARIS ASHOBAH
    
        //ASHOBAH ANAK
        else if (this.jmlanaklk==1 && this.jmlanakpr==0){
            this.totbaganaklk=this.ashobah;
        }
        else if (this.jmlanakpr>=1){
            this.jalk=(this.jmlanaklk)*2;
            this.japr=(this.jmlanakpr)*1
            this.jalkpr=(this.jlk+this.jpr);
            this.totbaganaklk=(this.jalk/this.jalkpr)*this.ashobah;
            this.totbaganakpr=(this.japr/this.jalkpr)*this.ashobah;
        }
        //ASHOBAH CUCU
        if (this.jmlcuculk==1 && this.jmlcucupr==0){
            this.totbagcuculk=this.ashobah;
        }
        else if (this.jmlcucupr>=1){
            this.jlkc=(this.jmlcuculk)*2;
            this.jprc=(this.jmlcucupr)*1;
            this.jlkprc=(this.jlkc+this.jprc);
            this.totbagcuculk=(this.jlkc/this.jlkprc);
            this.totbagcucupr=(this.jpr/this.jlkprc);
        }
        //ASHOBAH IBU BAPAK
        if (this.jmlbapak==1 && this.jmlibu==1 && (this.jmlanakpr==0 || this.jmlcucupr==0 || this.jmlanaklk==0 || this.jmlcuculk==0)){
            this.totbagibu=1/3*this.ashobah;
            this.totbagbapak=this.ashobah-this.totbagibu;
        }
        //ASHOBAH BAPAK
        else if (this.jmlbapak==1 && (this.jmlanakpr>=1 || this.jmlcucupr>=1) && this.jmlanaklk==0){
            this.totbagbapak=this.totbagbapak+this.ashobah;
        }
        else if (this.jmlanaklk==0 && this.jmlanakpr==0 && this.jmlcuculk==0 && this.jmlcucupr==0){
            this.totbagbapak=this.ashobah;
        }
        //ASHOBAH KAKEK BAPAK
        else if (this.jmlkakekbpk==1){
            if ((this.jmlanakpr==1 || this.jmlcucupr==1) && this.jmlanaklk==0 && this.jmlcuculk==0 && this.jmlsdrlk==0 && this.jmlsdrpr==0 && this.jmlsdrprbpk==0 && this.jmlsdrlkbpk==0){
                this.bagkakekbapak=this.totbagkakekbapak+this.ashobah;
            }
            else if (this.jmlkakekbpk==1){
                if (this.jmlanaklk==0 && this.jmlanakpr==0 && this.jmlcuculk==0 && this.jmlcucupr==0 && this.jmlsdrlk==0 && this.jmlsdrpr==0 && this.jmlsdrprbpk==0 && this.jmlsdrlkbpk==0){
                    this.bagkakekbapak=this.ashobah;
                    }  
                }
        }
        //MUQOSAMMAH 1
        else if (this.jmlanakpr==0 && this.jmlcucupr==0 && this.jmlibu==0 && this.jmlnenekbpk==0 && this.jmlnenekibu==0){
            if (this.jmlsdrlk==1){
                this.satu=1/3*this.sisawarisan;
                this.dua = 0;
                if (this.jmlsdrpr==1){
                    this.jsdrlk=(this.jmlsdrlk)*2;
                    this.jsdrpr=(this.jmlsdrpr)*1;
                    this.jsdrlkpr=this.jsdrlk+this.jsdrpr+2;
                    this.totbagsdrlk=(this.jsdrlk/this.jsdrlkpr)*this.sisawarisan;
                    this.totbagsdrpr=(this.jsdrpr/this.jsdrlkpr)*this.sisawarisan;
                    this.dua=(2/this.jsdrlkpr)*this.sisawarisan;
                }
                else if (this.jmlsdrpr==0){
                    this.dua=(1/this.jmlsdrlk+1)*this.sisawarisan;
                    this.totbagsdrlk=(this.jmlsdrlk/this.jmlsdrlk+1)*this.sisawarisan;
                }
                else if (this.satu>this.dua || this.satu==this.dua){
                this.totbagkakekbapak=this.satu;
                this.totbagsdrlk=this.sisawarisan-this.satu;
                }
                else {
                    this.totbagkakekbapak=this.dua;
                }
                
            }
            else if (this.jmlsdrlkbpk==1){
                this.satu=1/3*this.sisawarisan;
                this.dua=0;
                if (this.jmlsdrpr==1 && this.jmlsdrprbpk==0){
                    this.jsdrlkbpk=(this.jmlsdrlkbpk)*2;
                    this.jsdrpr=(this.jmlsdrpr)*1;
                    this.jsdrlkpr=this.jsdrlkbpk+this.jsdrpr+2;
                    this.totbagsdrlkbapak=(this.jsdrlkbpk/this.jsdrlkpr)*this.sisawarisan;
                    this.totbagsdrpr=(this.jsdrpr/this.jsdrlkpr)*this.sisawarisan;
                    this.dua=(2/this.jsdrlkpr)*this.sisawarisan;
                }
                else if (this.jmlsdrpr==0 && this.jmlsdrprbpk==1){
                    this.jsdrlkbpk=(this.jmlsdrlkbpk)*2;
                    this.jsdrprbpk=(this.jmlsdrprbpk)*1;
                    this.jsdrlkpr=this.jsdrlkbpk+this.jsdrprbpk+2;
                    this.totbagsdrlkbapak=(this.jsdrlkbpk/this.jsdrlkpr)*this.sisawarisan;
                    this.totbagsdrprbapak=(this.jsdrprbpk/this.jsdrlkpr)*this.sisawarisan;
                    this.dua=(2/this.jsdrlkpr)*this.sisawarisan;
                }
                else if (this.jmlsdrpr==1 && this.jmlsdrprbpk==1){
                    this.jsdrlkbpk=(this.jmlsdrlkbpk)*2;
                    this.jsdrprbpk=(this.jmlsdrprbpk)*1;
                    this.jsdrpr=(this.jmlsdrpr)*1;
                    this.jsdrlkpr=this.jsdrlkbpk+this.jsdrpr+this.jsdrpr+2;
                    this.totbagsdrlkbapak=(this.jsdrlkbpk/this.jsdrlkpr)*this.sisawarisan;
                    this.totbagsdrprbapak=(this.jsdrprbpk/this.jsdrlkpr)*this.sisawarisan;
                    this.totbagsdrpr=(this.jsdrpr/this.jsdrlkpr)*this.sisawarisan;
                    this.dua=(2/this.jsdrlkpr)*this.sisawarisan;
                }
                else if (this.jmlsdrpr==0 && this.jmlsdrlkbpk==0){
                    this.dua=(1/(this.jmlsdrlkbpk+1))*this.sisawarisan;
                    this.totbagsdrlkbapak=(this.jmlsdrlkbpk/(this.jmlsdrlkbpk+1))*this.sisawarisan;
                }
                else if (this.satu>this.dua && this.satu==this.dua){
                    this.totbagkakekbapak=satu;
                    this.jsdrlkbpk=(this.jmlsdrlkbpk)*2;
                    this.jsdrprbpk=(this.jmlsdrprbpk)*1;
                    this.jsdrpr=(this.jmlsdrpr)*1;
                    this.jsdrlkpr=(this.jsdrlkbpk+this.jsdrprbpk+this.jsdrpr);
                    this.totbagsdrlkbapak=(this.jsdrlkbpk/this.jsdrlkpr)*(this.sisawarisan-this.satu);
                    this.totbagsdrpr=(this.jsdrpr/this.jsdrlkpr)*(this.sisawarisan-this.satu);
                }
                else {
                    this.totbagkakekbapak=dua;
                }
            }
            else if (this.jmlsdrpr==1){
                this.satu=1/3*this.sisawarisan;
                this.dua=0;
                if (this.jmlsdrprbpk==1){
                    this.jsdrprbpk=(this.jmlsdrprbpk)*1;
                    this.jsdrpr=(this.jmlsdrpr)*1;
                    this.jsdrlkpr=this.jsdrprbpk=this.jsdrpr+2;
                    this.totbagsdrprbapak=(this.jsdrprbpk/this.jsdrlkpr)*this.sisawarisan;
                    this.dua=(2/this.jsdrlkpr)*this.sisawarisan;
                }
                else if (this.jmlsdrpr==0){
                    this.dua=(2/(jmlsdrpr+2))*sisawarisan;
                    this.totbagsdrpr=(jmlsdrpr/(jmlsdrpr+2))*sisawarisan;       
                }
                else if (this.satu>this.dua || this.satu==this.dua){
                    this.totbagkakekbapak=this.satu;
                    this.jsdrprbpk=(this.jmlsdrprbpk)*1;
                    this.jsdrpr=(this.jmlsdrpr)*1;
                    this.jsdrlkpr=this.jsdrprbpk+this.jsdrpr;
                    this.totbagsdrprbapak=(this.jsdrprbpk/this.jsdrlkpr)*(this.sisawarisan-this.satu);
                    this.totbagsdrpr=(this.jsdrpr/this.jsdrlkpr)*(this.sisawarisan-this.satu);
                }
                else {
                    this.totbagkakekbapak=this.dua;
                }
            }
            else if (this.jmlsdrprbpk==1){
                this.satu=1/3*this.sisawarisan;
                this.dua=(2/(this.jmlsdrprbpk+2))*this.sisawarisan;
                if (this.satu>2 || this.satu==2){
                    this.totbagkakekbapak=this.dua;
                    this.totbagsdrprbapak=this.sisawarisan-this.satu;
                }
                else {
                    this.totbagkakekbapak=this.dua;
                    this.totbagsdrprbapak=this.sisawarisan-this.dua;
                }
            }
        
        //MUQOSAMMAH 2
        //MUQOSAMMAH 3
        //ASHOBAH SAUDARA SEKANDUNG
        else if (this.jmlsdrlk==1){
            if (this.jmlsdrpr==0 && this.jmlkakekbpk==0){
                this.totbagsdrlk=this.ashobah;
            }
        }
        else if (this.jmlsdrpr==1){
            this.jsdrlk=(this.jmlsdrlk)*2;
            this.jsdrpr=(this.jmlsdrpr)*1;
            this.jsdrlkpr=this.jsdrlk+this.jsdrpr;
            this.totbagsdrlk=(this.jsdrlk/this.jsdrlkpr)*this.ashobah;
            this.totbagsdrpr=(this.jsdrpr/this.jsdrlkpr)*this.ashobah;
        }
        
        //ASHOBAH SAUDARA SEBAPAK
        else if (this.jmlsdrlkbpk==1){
            if (this.jmlsdrprbpk==1){
                this.jsdrlkbpk=(this.jmlsdrlkbpk)*2;
                this.jsdrprbpk=(this.jmlsdrprbpk)*1;
                this.jsdrlkprbpk=this.jsdrlkbpk+this.jsdrprbpk;
                this.totbagsdrlkbapak=(this.jsdrlkbpk/this.jsdrlkprbpk)*this.ashobah;
                this.totbagsdrprbapak=(this.jsdrprbpk/this.jsdrlkprbpk)*this.ashobah;
            }
            else if (this.jmlsdrpr==0 && this.jmlkakekbpk==0){
                this.totbagsdrlkbapak=this.ashobah;
            }
        }
        
        //ASHOBAH SAUDARA PEREMPUAN SEKANDUNG ATAU SEAYAH
        else if (this.jmlsdrpr==1 && (this.jmlanakpr==1 || this.jmlcucupr==1)){
            this.totbagsdrpr=this.ashobah;
        }
        else if (this.jmlsdrprbpk==1 && (this.jmlanakpr==1 || this.jmlcucupr==1)){
            this.totbagsdrprbapak=this.ashobah;
        }
        
        //ASHOBAH KEPONAKAN
        else if (this.jmlkeponakan==1){
            this.totbagkeponakan=this.ashobah;
        }
        else if (this.jmlkeponakanbpk==1){
            this.totbagkeponakanbapak=this.ashobah;
        }
        
        //ASHOBAH PAMAN SEKANDUNG DAN SEBAPAK
        else if (this.jmlpaman==1){
            this.totbagpaman=this.ashobah;
        }
        else if (this.jmlpamanbpk){
            this.totbagpamanbpk=this.ashobah;
        }
        
        //ASHOBAH SEPUPU SEKANDUNG DAN SEBAPAK
        else if (this.jmlsepupu==1){
            this.totbagsepupu=this.ashobah;
        }
        else if (this.jmlsepupubpk){
            this.totbagsepupubapak=this.ashobah;
        }*/

        //ubah jadi 0 input nya laki
        this.jmlanaklkview = "";
        this.jmlbapakview = "";
        this.jmlsuamiview = "";
        this.jmlcuculkview = "";
        this.jmlkakekbpkview = "";
        this.jmlsdrlkview = "";
        this.jmlsdrlkbpkview = "";
        this.jmlsdrlkibuview = "";
        this.jmlkeponakanview = "";
        this.jmlkeponakanbpkview = "";
        this.jmlpamanview = "";
        this.jmlpamanbpkview = "";
        this.jmlsepupuview = "";
        this.jmlsepupubpkview = "";

        //ubah jadi 0 input nya perempuan
        this.jmlanakprview = "";
        this.jmlcucuprview = "";
        this.jmlibuview = "";
        this.jmlistriview = "";
        this.jmlsdrprview = "";
        this.jmlnenekibuview = "";
        this.jmlnenekbpkview = "";
        this.jmlsdrprbpkview = "";
        this.jmlsdrpribuview = "";

        // 	//HITUNG BAGIAN PEWARIS UTAMA
        // 	this.totbagistri=(this.bagistri*this.sisawarisan);
        // 	this.totbagsuami=(this.bagsuami*this.sisawarisan);
        // 	this.totbaganaklk=(this.baganaklk*this.sisawarisan);
        // 	this.totbaganakpr=(this.baganakpr*this.sisawarisan);
        // 	this.totbagcuculk=(this.bagcuculk*this.sisawarisan);
        // 	this.totbagcucupr=(this.bagcucupr*this.sisawarisan);
        // 	this.totbagbapak=(this.bagbapak*this.sisawarisan);
        // 	this.totbagibu=(this.bagibu*this.sisawarisan);
        // 	this.totbagkakekbapak=(this.bagkakekbapak*this.sisawarisan);
        // 	this.totbagnenekbapak=(this.bagnenekbapak*this.sisawarisan);
        // 	this.totbagnenekibu=(this.bagnenekibu*this.sisawarisan);
        // 	this.totbagsdrlk=(this.bagsdrlk*this.sisawarisan);
        // 	this.totbagsdrpr=(this.bagsdrpr*this.sisawarisan);
        // 	this.totbagsdrlkbapak=(this.bagsdrlkbpk*this.sisawarisan);
        // 	this.totbagsdrprbapak=(this.bagsdrprbpk*this.sisawarisan);
        // 	this.totbagsdrlkibu=(this.bagsdrlkibu*this.sisawarisan);
        // 	this.totbagsdrpribu=(this.bagsdrpribu*this.sisawarisan);
        // 	this.totbagkeponakan=(this.bagkeponakan*this.sisawarisan);
        // 	this.totbagkeponakanbapak=(this.bagkeponakanbpk*this.sisawarisan);
        // 	this.totbagpaman=(this.bagpaman*this.sisawarisan);
        // 	this.totbagpamanbpk=(this.bagpamanbpk*this.sisawarisan);
        // 	this.totbagsepupu=(this.bagsepupu*this.sisawarisan);
        // 	this.totbagsepupubapak=(this.bagsepupubapak*this.sisawarisan);

        // //HITUNG SEMUA
        // this.totbagian=(this.totbagistri+this.totbagsuami+this.totbaganaklk+this.totbaganakpr+this.totbagcuculk+this.totbagcucupr+this.totbagbapak+this.totbagibu+this.totbagsdrlk+this.totbagsdrpr+this.totbagkakekbapak+this.totbagnenekbapak+this.totbagnenekibu+this.totbagsepupu+this.totbagsepupubapak+this.totbagkeponakan+this.totbagkeponakanbapak+this.totbagsdrlkbapak+this.totbagsdrprbapak+this.totbagsdrlkibu+this.totbagsdrpribu+this.totbagpaman+this.totbagpamanbpk);
        // this.ashobah=this.sisawarisan-this.totbagian;
        // 		}

        //bagian bapak
        if (this.jmlbapak == 1) {
            if (this.jmlanaklk >= 1 || this.jmlcuculk >= 1) {
                this.bagbapak = 1 / 6*this.sisawarisan;
            } else if (this.jmlanaklk == 0 && this.jmlcuculk == 0 && (this.jmlanakpr >= 1 || this.jmlcucupr == 1)) {
                this.bagbapak = 1 / 6 + this.ashobah;
            }
            else if ((this.jmlanaklk == 0 && this.jmlanakpr == 0) || (this.jmlcuculk && this.jmlcucupr)) {
                this.bagbapak = this.ashobah;
            }
        }

        //bagian ibu
        if (this.jmlibu == 1) {
            if ((this.jmlanaklk >= 1 && this.jmlanakpr >= 1) || (this.jmlcuculk >= 1 && this.jmlcucupr >= 1)) {
                this.bagibu = 1 / 6*this.sisawarisan;
            }
            else if (((this.jmlsdrlk * 1) + (this.jmlsdrpr * 1) + (this.jmlsdrlkbpk * 1) + (this.jmlsdrlkibu * 1) + (this.jmlsdrprbpk * 1) + (this.jmlsdrpribu * 1)) > 1) {
                this.bagibu = 1 / 6*this.sisawarisan;
            }
            else if (this.jmlanakpr == 0 && this.jmlcucupr == 0 && this.jmlbapak == 0 && this.jmlkakekbpk == 0 && this.jmlsdrlkibu
                && (this.jmlsuami == 0 || this.jmlistri == 0) && this.jmlsdrpr == 0 && this.jmlsdrprbpk == 0) {
                this.bagibu = 1 / 3*this.sisawarisan;
            }

        }

        //bagian kakek dari bapak
        if (this.jmlkakekbpk == 1) {

        }

        //bagian suami
        if (this.jmlsuami == 1) {
            if (this.jmlanaklk == 0 && this.jmlanakpr == 0 && this.jmlcucupr == 0 && this.jmlcuculk == 0) {
                this.bagsuami = 1 / 2*this.sisawarisan;
            }
            else if (this.jmlanaklk > 0 || this.jmlanakpr > 0 || this.jmlcucupr > 0 || this.jmlcuculk > 0) {
                this.bagsuami = 1 / 4*this.sisawarisan;
            }
        }

        //bagian istri
        if (this.jmlistri == 1) {
            if (this.jmlanaklk == 0 && this.jmlanakpr == 0 && this.jmlcucupr == 0 && this.jmlcuculk == 0) {
                this.bagsuami = 1 / 4*this.sisawarisan;
            }
            else if (this.jmlanaklk > 0 || this.jmlanakpr > 0 || this.jmlcucupr > 0 || this.jmlcuculk > 0) {
                this.bagsuami = 1 / 8*this.sisawarisan;
            }
        }

        //bagian anak perempuan
        if (this.jmlanakpr==1){
            if (this.jmlanaklk==0 && this.jmlanakpr==1){
                this.baganakpr=1/2*this.sisawarisan;
            }
            else if (this.jmlanaklk==0 && this.jmlanakpr>1){
                this.baganakpr=2/3*this.sisawarisan;
            }
            else if (this.jmlanaklk==1 && this.jmlanakpr>=1){
                this.baganakpr=0;
            }
        }

        // bagian cucu perempuan   (asobah)                         
        if (this.jmlcucupr == 1 && this.jmlanaklk == 0 && this.jmlanakpr == 0) {
            this.bagcucupr = 1 / 2*this.sisawarisan;
        } else if (this.jmlcucupr >= 1 && this.jmlanaklk == 0 && this.jmlanakpr == 0) {
            this.bagcucupr = 2/3*this.sisawarisan;
        } else if(this.jmlcucupr >= 1 && this.jmlanakpr>0){
            this.bagcucupr=1/6*this.sisawarisan;
        } else if(this.jmlanaklk >= 1 || this.jmlanakpr >=2 ){
            this.bagcucupr =0;
        }

        // bagian saudara perempuan(asobah)
        if(this.jmlsdrpr == 1 && this.jmlanakpr ==0 && this.jmlanaklk == 0 && this.jmlcuculk ==0 && this.jmlcucupr ==0 && this.jmlbapak == 0){
            this.bagsdrpr = 1/2*this.sisawarisan;            
        } else if(this.jmlsdrpr >= 2 && this.jmlanakpr ==0 && this.jmlanaklk == 0 && this.jmlcuculk ==0 && this.jmlcucupr ==0 && this.jmlbapak == 0){
            this.bagsdrpr = 2/3*this.sisawarisan;
        } else if(this.jmlbapak ==1 || this.jmlanaklk >= 1 || this.jmlcuculk >= 1){
            this.bagsdrpr == 0;
        }

        // bagian saudara perempuan seayah(asobah)
        if(this.jmlsdrlkbpk == 1 && this.jmlanaklk ==0 && this.jmlanakpr ==0 && this.jmlcuculk == 0 && this.jmlcucupr ==0 && this.jmlsdrlk ==0 && this.jmlsdrpr == 0 && this.jmlbapak ==0){
            this.bagsdrprbpk = 1/2*this.sisawarisan;
        } else if(this.jmlsdrlkbpk >= 2 && this.jmlanaklk ==0 && this.jmlanakpr ==0 && this.jmlcuculk == 0 && this.jmlcucupr ==0 && this.jmlsdrlk ==0 && this.jmlsdrpr == 0 && this.jmlbapak ==0){
            this.bagsdrprbpk = 2/3*this.sisawarisan;
        } else if(this.jmlbapak == 1 || this.jmlanaklk >= 1 || this.jmlcuculk >= 1 || this.jmlsdrlk >=1 ){
            this.bagsdrlkbpk = 0;
        }

        // bagian saudara seibu 
        if(this.jmlsdrlkibu == 1 || this.jmlsdrpribu == 1 && this.jmlbapak == 0 && this.jmlnenekbpk == 0 && this.jmlcuculk == 0){
            this.bagsdrpribu = 1/6*this.sisawarisan;
            this.bagsdrlkibu = 1/6*this.sisawarisan;
        } else if(this.jmlsdrlkibu >= 2 || this.jmlsdrpribu >= 2 && this.jmlbapak == 0 && this.jmlnenekbpk == 0 && this.jmlcuculk == 0){
            this.bagsdrpribu = 1/3*this.sisawarisan;
            this.bagsdrlkibu = 1/3*this.sisawarisan;
        } else if(this.jmlbapak == 1 || this.jmlkakekbpk >= 1 || this.jmlanaklk >= 1 || this.jmlanakpr >=1 || this.jmlcuculk >=1){
            this.bagsdrpribu = 0;
            this.bagsdrlkibu = 0;
        }


    }






}