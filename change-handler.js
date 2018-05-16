/**
 * This class handles change for a vending machine.
 * 
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.
 */
class ChangeHandler {
    
    constructor(data) {
        this.amountDue = data.amountDue;
        this.cashTendered = data.cashTendered;
    }

    /*
     * The customer inserts a coin, increasing the cashTendered.
     * @param {string} type either quarter, dime, nickel, or penny
     */
    insertCoin(type) {
        if(type === "quarters") {
            this.cashTendered += 25
        } else if (type === "dimes") {
            this.cashTendered += 10
        } else if (type === "nickels") {
            this.cashTendered += 5
        } else if (type === "pennies") {
            this.cashTendered += 1
        }
    }

    /**
     * Returns true if enough coins have been inserted to at least meet the amountDue
     */
    isPaymentSufficient() {
        if(this.cashTendered >= this.amountDue) {
            return true
        } else {
            return false
        }
    }

    giveChange() {
        while(cashTendered > 0) {
            if(this.cashTendered >= 25) {
                this.cashTendered - 25;
                quarters++;
            } else if (this.cashTendered >= 10) {
                this.cashTendered - 25;
                dimes++;
            } else if (this.cashTendered >= 5) {
                this.cashTendered - 5;
                nickels++;
            } else if (this.cashTendered >= 1) {
                this.cashTendered - 1;
                pennies++;
            }
        }
        // TODO return the correct change in the following format...
        return {
            quarters: 0,
            dimes: 0,
            nickels: 0,
            pennies: 0
        }
    }
}