function teste1(num) {
    if (num > 7)
        console.log(num)
        console.log('Final')
}
teste1(6) // Final
teste1(8) // 8 Final 
/* só a primeira linha vai estar associada ao if nesse caso (console.log(num)), 
o console.log('Final') vai ser executado de qualquer jeito. Por isso é sempre bom usar {} depois do if */
