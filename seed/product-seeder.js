var Product=require('../models/product');
var mongoose=require('mongoose');
const { exists } = require('../models/product');
mongoose.connect('mongodb://localhost:27017/shopping',{useNewUrlParser:true,useUnifiedTopology:true});
var products=[
    new Product({
        imagePath:'https://dkelectricalsolutions.com/wp-content/uploads/DK-electrical-solutions-certified-master-electrician-badge.png',
        title:'Electrician',
        description:'All kind of electrician services we provide.'
    }),
    new Product({
        imagePath:'https://i.pinimg.com/originals/40/85/1d/40851dbef1342beffd7dc757e5ee1df2.png',
        title:'Carpenter',
        description:'All kind of carpentry services we provide.',
        price:10 
    }),
    new Product({
        imagePath:'https://www.allpurposeplumbing.com/wp-content/uploads/2019/03/allpurpose.png',
        title:'Plumber',
        description:'All kind of plumbing services we provide.',
        price:10 
    }),
    new Product({
        imagePath:'https://images.creativemarket.com/0.1.0/ps/3639209/910/607/m1/fpnw/wm0/painting-services-logo-.png?1511695486&s=da3fc25d31d5de7436ebb21b9795aebc',
        title:'Painter',
        description:'All kind of painting services we provide.',
        price:10 
    }),
    new Product({
        imagePath:'https://image.freepik.com/free-vector/architecture-logo-with-cool-modern-concept_231513-386.jpg',
        title:'Architect',
        description:'All kind of architecture service we provide. ',
        price:10 
    }),
    new Product({
        imagePath:'https://bcassetcdn.com/public/blog/wp-content/uploads/2019/09/18094346/the-home-interior.png',
        title:'Interial Designing',
        description:'All kinf of Interial Designing services we provide.',
        price:10 
    }),
    new Product({
        imagePath:'https://bcassetcdn.com/public/blog/wp-content/uploads/2019/09/18094346/the-home-interior.png',
        title:'Interial Designing',
        description:'All kinf of Interial Designing services we provide.',
        price:10 
    }),
    
];
var done=0;
for(var i=0;i<products.length;i++){
    products[i].save(function(err,result){
        done++;
        if(done==products.length){
            exit();
        }
    });
}  
function exit(){
    mongoose.disconnect();
}