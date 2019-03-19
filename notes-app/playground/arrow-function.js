// const square = function(x) {
//     return x * x
// }

// const square = x => x * x

// console.log(square(3));

const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() {
            console.log('Guess list for ' + this.name)
            this.guestList.map(g => console.log(g + ' is attending ' + this.name))
    }
}

event.printGuestList()