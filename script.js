function order(){
 let phone="916302334507";
 let msg="New Order from website";
 window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`);
}
