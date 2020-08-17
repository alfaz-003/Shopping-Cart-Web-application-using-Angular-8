export class Products {
    id: number;
    name: String;
    price: number;
    description: String;
    imageurl: String;

    constructor(id,name, price,description,imageurl='assets/1.png'){
        this.id =id;
        this.name = name;
        this.description = description;
        this.imageurl = imageurl;
        this.price = price;
    }
}
 