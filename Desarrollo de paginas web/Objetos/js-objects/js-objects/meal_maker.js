let menu={ //generamos nuestro objeto
    _meal: '',
    _price:0,  //atributos iniciales

    set meal(mealToCheck){  //setter de meal, checa que sea un string
        if(typeof mealToCheck==='string'){
            this._meal=mealToCheck;
        }
    },
    set price(priceToCheck){ //setter de price, checa que sea un int
        if(typeof priceToCheck==='number'){
            this._price=priceToCheck;
        }
    },
    get todaysSpecial(){ //funcion que nos consigue nuesto todays special
        //se ejecuta si tiene un meal y price valido
        if(this._meal && this._price){
            return `Today's special is ${this._meal} for $${this._price}`;
        }else{
            return `Meal or price was not set correctly!`;
        }
    }

    
};

menu._meal='Tacos al vapor'; //añadimos nuestros tacos y precio
menu._price=21;
console.log(menu);

//añadimos mas comidas con su preccoi
const meals = ['Spagetti', 'Pollo con Mole', 'Chilaquiles', 'Pizza'];
const prices = [30, 25, 20, 30];

//iteramos todo el foreach del arreglo meals, logrando acceder
//a prices por el num price
meals.forEach(function(meal, price) {
    menu.meal = meal;
    menu.price = prices[price];
    
    console.log(menu.todaysSpecial);
});
