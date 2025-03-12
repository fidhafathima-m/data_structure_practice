function towerOfHanoi(n, fromRod, toRod, auxRod) {
    if(n === 1) {
        console.log(`Move disk 1 from ${fromRod} to rod ${toRod}`);
        return
    }
    towerOfHanoi(n-1, fromRod, auxRod, toRod);
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
    towerOfHanoi(n-1, auxRod, toRod, fromRod);
}

towerOfHanoi(3, 'A', 'C', 'B'); 