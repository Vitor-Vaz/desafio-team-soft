function verifyComplement(address) {

    if (address.complement == undefined || address.complement == "") {
        const { complement, ...newAddress } = address;
        return newAddress;
    }else{
        return address;
    }
}

module.exports = verifyComplement;