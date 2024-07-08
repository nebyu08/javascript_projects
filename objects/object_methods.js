let resturant={
    rName:"sapian",
    TotalSeat:90,
    UsedSeat:0,
    CheckAvailable:function(wantedSeat){
       let seatAvailable=this.TotalSeat-this.UsedSeat
       return wantedSeat<=seatAvailable
    },
    AddSeats:function(AddSeats){
        this.UsedSeat=this.UsedSeat+AddSeats
    },
    removeSeats:function(removeValue){
        this.UsedSeat=this.UsedSeat-removeValue
    }

}

//lets add seats to the already used seats
resturant.AddSeats(10)
resturant.AddSeats(5)
console.log(resturant.CheckAvailable(78))
resturant.removeSeats(6)
console.log(resturant.UsedSeat)


// let stats=resturant.CheckAvailable(10)

// console.log(stats)

