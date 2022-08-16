
const salaryOperations = {
    basicSalary : 0,
    getHra() {
        return this.basicSalary * 0.20.toFixed(2);
    },
    getDa() {
        return this.basicSalary * 0.10.toFixed(2);
    },
    getTa() {
        return this.basicSalary * 0.20.toFixed(2);
    },
    getPf() {
        return this.basicSalary * 0.30.toFixed(2);
    },
    getMa() {
        return this.basicSalary * 0.40.toFixed(2);
    },
    getTax() {
        if (this.basicSalary < 500000) {
            return this.basicSalary * 0.05.toFixed(2);
        }
        else if (this.basicSalary >= 500000 && this.basicSalary < 700000) {
            return this.basicSalary * 0.10.toFixed(2);
        }
        else {
            return this.basicSalary * 0.20.toFixed(2);
        }
    },
    getGrossSalary() {
        return parseInt(this.basicSalary) + this.getHra() + this.getDa() + this.getTa() + this.getMa();
    },
    getNetsalary() {
        return this.getGrossSalary() - this.getPf() - this.getTax();
    }
};
